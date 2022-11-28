import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { usePostData } from "../hooks/DataApi";
import { useRouter } from "next/router";
import { useGlobalContext } from "../context/context";
import Input from "../components/admin/Input";
import SaveButton from "../components/common/button/SaveButton";
import Link from "next/link";

const schema = yup.object().shape({
  user: yup.string().max(100).required("Required"),
  fullName: yup.string().max(20).required("Required"),
  password: yup
    .string()
    .max(20)
    .required("Required")
    .min(8, "Password is too short, at least 8 characters"),
});

const Signup = () => {
  const router = useRouter();
  const value = useGlobalContext();
  const [submitting, setSubmitting] = useState(false);
  const { mutateAsync } = usePostData();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      user: "",
      fullName: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  const { user, fullName, password } = errors;

  const onSubmit = async (formData) => {
    setSubmitting(true);
    try {
      const { status, data } = await mutateAsync({
        path: "/user/createUser",
        formData: formData,
      });
      if (status === 200) {
        toast.success("Thanks for signing up.");
        router.push("/login");
      } else {
        toast.error(data.message);
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
      setSubmitting(false);
      reset();
    }
  };

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-purple-700 underline">
          Register
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-col">
            <Input
              name="user"
              label="User Name"
              type="text"
              register={register}
              errorMessage={user?.message}
            />
            <Input
              name="fullName"
              label="Full Name"
              type="text"
              register={register}
              errorMessage={fullName?.message}
            />
            <Input
              name="password"
              label="Password"
              type="password"
              register={register}
              errorMessage={password?.message}
            />
            <SaveButton btnText="Register" disabled={submitting} />
          </div>
        </form>
        <div className="mt-6">
          <p className="pt-2 text-center text-sm text-black">
            All ready Registered?{" "}
            <Link href="/login">
              <span className="underline">Login</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
