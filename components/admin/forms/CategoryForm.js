import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-hot-toast";
import { useRouter } from "next/router";
import Input from "../Input";
import SaveButton from "../../common/button/SaveButton";

const schema = yup.object({
  categoryId: yup.string().max(50),
  category: yup.string().required("Required.").max(50),
});

const CategoryForm = ({ defaultValues, path, mutateAsync }) => {
  const [submitting, setSubmitting] = useState(false);

  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: defaultValues,
    resolver: yupResolver(schema),
  });
  const { category } = errors;

  const onSubmit = async (formData) => {
    setSubmitting(true);
    let data = {
      categoryId: formData.categoryId,
      category: formData.category,
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
        router.push("/dashboard/categories");
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
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="hidden" {...register("categoryId")} />

      <div className="form-col">
        <Input
          name="category"
          label="Category"
          type="text"
          register={register}
          errorMessage={category?.message}
        />

        <SaveButton btnText="Save" disabled={submitting} />
      </div>
    </form>
  );
};

export default CategoryForm;
