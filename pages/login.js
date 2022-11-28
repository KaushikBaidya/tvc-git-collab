import React from "react";
import * as yup from "yup";
import { useRouter } from "next/router";
import { useGlobalContext } from "../context/context";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-hot-toast";
import { usePostData } from "../hooks/DataApi";
import Input from "../components/admin/Input";
import Link from "next/link";
// import jwt_decode from "jwt-decode";

const schema = yup.object({
  username: yup.string().required("Required.").max(50),
  password: yup.string().required("Required."),
});

export default function Login() {
  const router = useRouter();
  const value = useGlobalContext();
  const { mutateAsync } = usePostData();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });
  const { username, password } = errors;

  const onSubmit = async (formData) => {
    try {
      await mutateAsync({
        path: "/login",
        formData: formData,
      }).then((response) => {
        console.log(response);
        if (response.data.message === "Login Success") {
          toast.success("Log In");
          value.setUser(response.data.fullname);
          value.setToken(response.data.token);
          router.push("/dashboard");
        } else {
          toast.error(response.data.message);
        }
      });
    } catch (error) {
      toast.error(error);
    } finally {
      reset();
    }
  };

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-purple-700 underline">
          Log in
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-col">
            <Input
              name="username"
              label="User Name"
              type="text"
              register={register}
              errorMessage={username?.message}
            />
            <Input
              name="password"
              label="Password"
              type="password"
              register={register}
              errorMessage={password?.message}
            />
          </div>
          <div className="mt-6">
            <button className="save-btn">Login</button>
          </div>
        </form>
        <div className="mt-6">
          <p className="pt-2 text-center text-sm text-black">
            No account?{" "}
            <Link href="/register">
              <span className="underline">Register</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
