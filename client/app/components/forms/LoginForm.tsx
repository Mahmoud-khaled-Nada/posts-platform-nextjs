"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import { LoginParams } from "@/utils/types";
import { Button } from "@/utils/styles/forms/button";
import { loginMutation } from "@/services/mutation";

export default function LoginForm() {
  const { register, handleSubmit } = useForm<LoginParams>();
  const login = loginMutation();
  const onSubmit: SubmitHandler<LoginParams> = async (data: LoginParams) => await login.mutateAsync(data);

  return (
    <form className="mx-auto mb-0 mt-8 max-w-md space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="Username" className="sr-only">
          Username
        </label>
        <div className="relative">
          <input
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm text-black"
            placeholder="Enter username"
            {...register("username", { required: "This field is required" })}
          />
          <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg>
          </span>
        </div>
      </div>

      <div>
        <label htmlFor="password" className="sr-only">
          Password
        </label>
        <div className="relative">
          <input
            type="password"
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm text-black"
            placeholder="Enter password"
            {...register("password", { required: "This field is required" })}
          />
          <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <Button type="submit">Log in</Button>
      </div>
    </form>
  );
}