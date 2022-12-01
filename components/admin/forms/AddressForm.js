import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-hot-toast";
import { useRouter } from "next/router";
import Input from "../Input";
import SaveButton from "../../common/button/SaveButton";

const schema = yup.object({
  addressId: yup.string().max(50),
  address: yup.string().required("Required.").max(50),
  address_vn: yup.string().required("Required.").max(50),
  address2: yup.string().required("Required.").max(50),
  address2_vn: yup.string().required("Required.").max(50),
});

const AddressForm = ({ defaultValues, path, mutateAsync }) => {
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
  const { address, address_vn, address2, address2_vn } = errors;

  const onSubmit = async (formData) => {
    setSubmitting(true);
    let data = {
      addressId: formData.addressId,
      address: formData.address,
      address_vn: formData.address_vn,
      address2: formData.address2,
      address2_vn: formData.address2_vn,
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
        router.push("/dashboard/address");
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
      <input type="hidden" {...register("addressId")} />

      <div className="form-col">
        <Input
          name="address"
          label="Address"
          type="text"
          register={register}
          errorMessage={address?.message}
        />
        <Input
          name="address_vn"
          label="Address Vn"
          type="text"
          register={register}
          errorMessage={address_vn?.message}
        />
        <Input
          name="address2"
          label="Another Address"
          type="text"
          register={register}
          errorMessage={address2?.message}
        />
        <Input
          name="address2_vn"
          label="Another Address Vn"
          type="text"
          register={register}
          errorMessage={address2_vn?.message}
        />

        <SaveButton btnText="Save" disabled={submitting} />
      </div>
    </form>
  );
};

export default AddressForm;
