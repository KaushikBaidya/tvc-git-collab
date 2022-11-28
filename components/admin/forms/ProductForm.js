import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-hot-toast";
import Input from "../Input";
import SaveButton from "../../common/button/SaveButton";
import { useRouter } from "next/router";
import Image from "next/image";
import InputFile from "../InputFile";
import { SelectFromDb } from "../../admin/SelectList";
import RichText from "../RichText";

const schema = yup
  .object({
    productId: yup.string().max(50),
    categoryId: yup.string().required("Required.").max(50),
    name: yup.string().required("Required.").max(50),
    description: yup.string().required("Required."),
  })
  .shape({
    filepath: yup.mixed(),
    // .test("required", "You need to provide a file", (value) => {
    //   return value && value.length;
    // }),
    // .test("fileSize", "The file is too large", (value, context) => {
    //   return value && value[0] && value[0].size <= 200000;
    // }),
    // .test("type", "We only support jpeg", function (value) {
    //   return value && value[0] && value[0].type === "image/jpeg";
    // }),
  });

const ProductForm = ({ defaultValues, path, mutateAsync }) => {
  const [imageUrl, setPhoto] = useState(defaultValues.img);
  const [submitting, setSubmitting] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: defaultValues,
    resolver: yupResolver(schema),
  });
  const { name, description, filepath, categoryId } = errors;

  const onSubmit = async (formData) => {
    if (imageUrl === "") {
      toast.error("Upload not complete! Please wait.");
      return;
    }

    setSubmitting(true);
    let data = {
      productId: formData.productId,
      name: formData.name,
      description: formData.description,
      category: formData.categoryId,
      image: imageUrl,
    };
    try {
      const { status } = await mutateAsync({
        path: path,
        formData: data,
      });
      if (status === 201) {
        toast.success("Saved successfully!");
      }
      if (status === 204) {
        toast.success("Update successful!");
        router.push("/dashboard/products");
      }
    } catch (error) {
      if (error.response) {
        toast.error("Response : " + error.response.data);
      } else if (error.request) {
        toast.error("Request : " + error.message);
      } else {
        toast.error("Error :", error.message);
      }
    } finally {
      reset();
      setPhoto("");
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="hidden" {...register("productId")} />
      <div className="form-col">
        {imageUrl?.length > 0 ? (
          <Image
            src={`https://drive.google.com/thumbnail?id=${imageUrl}`}
            alt="PHOTO"
            width={200}
            height={100}
          />
        ) : (
          <span></span>
        )}
        <InputFile
          name="filepath"
          label="Upload Product Image"
          accept="image/*"
          register={register}
          action={setPhoto}
          errorMessage={filepath?.message}
        />
        <Input
          name="name"
          label="Product Name"
          type="text"
          register={register}
          errorMessage={name?.message}
        />
        <SelectFromDb
          control={control}
          label="Category"
          path="/selectCategory"
          name="categoryId"
          errorMessage={categoryId?.message}
        />
        <RichText
          control={control}
          name="description"
          errorMessage={description?.message}
        />
        <SaveButton btnText="Save" disabled={submitting} />
      </div>
    </form>
  );
};

export default ProductForm;
