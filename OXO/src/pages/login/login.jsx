import React from "react";
import { saveState, loadState } from "../../lib/local";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { request } from "../../config/request";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { z } from "zod";
import Button from "../../components/button/button";
// <FaEyeSlash className="absolute top-11 right-3 hover:cursor-pointer text-xl" />
// <FaEye className="absolute top-1 right-3 hover:cursor-pointer text-xl" />

const Login = () => {
  const navigate = useNavigate();
  const validationSchema = z.object({
    email: z
      .string()
      .min(4, { message: "Emailni no'tog'ri kiritdingiz" })
      .email({ message: "Must be a valid email" }),
    password: z
      .string()
      .min(4, { message: "Parol 4 tadan ko'p bo'lishi shart" })
      .max(14, { message: "Parol 14 tadan oshmasligi kerak" }),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(validationSchema) });

  const onSubmit = (data) => {
    request
      .post("/users", data)
      .then((res) => {
        saveState("user", res.data);
        toast.success("You're logined succesfully!!!");
        navigate("/profile", { replace: true });
      })
      .catch((errors) => {
        console.log(errors);
        toast.error(errors.message);
      });

    reset();
  };

  return (
    <section className='login-bg bg-[url(".../../assets/images/login-bg.png")] bg-no-repeat bg-left-bottom pb-10'>
      <div className="container pt-[64px]">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="login-card w-[407px] h-[410px] p-8 shadow-lg mx-auto mt-[132px] mb-[80px] rounded-md "
        >
          <div className="flex flex-col mb-5">
            <h1 className="text-center font-bold text-base mb-2">Kirish</h1>
            <div className="h-[5px] w-[100%] rounded-md bg-[#19191C]"></div>
          </div>
          <div className="flex items-start flex-col gap-3 w-[100%] mb-4">
            <label className="text-sm">Email kiriting</label>
            <input
              name="email"
              className="px-4 w-[343px]  py-2 rounded-md border-solid border-[#19191C] border-[1px] outline-none"
              type="text"
              {...register("email", { required: true })}
              placeholder="For examle: user007@gmail.com"
            />
            {errors.email && (
              <p className="text-red-400">{errors.email.message}</p>
            )}
          </div>
          <div className="flex items-start flex-col gap-3 w-[343px] mb-12 relative">
            <label className="text-sm">Parolingiz</label>
            <div className="flex flex-col">
              <input
                name="password"
                {...register("password", { required: true })}
                className="px-4 w-[343px] py-2 rounded-md border-solid border-[#19191C] border-[1px] outline-none"
                type="text"
                placeholder="Password"
              />
              {errors.password && (
                <p className="text-red-400">{errors.password.message}</p>
              )}
            </div>
          </div>
          <Button type="submit" variant="login" className="mx-auto">
            Kirish
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Login;
