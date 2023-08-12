import { FormProvider, useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from 'react-toastify';
import { useMutation, useQuery } from '@tanstack/react-query';
import { loginUserFn } from "api/authApi";
import "assets/styles/scss/pages/login.scss";

const loginSchema = yup.object({
  email: yup.string().required("Email harus diisi").email("Email tidak valid"),
  password: yup
    .string()
    .required("Password harus diisi")
    .min(6, "Password minimal 6 karakter"),
});

export type LoginInput = yup.InferType<typeof loginSchema>;

const Login = () => {
  const methods = useForm<LoginInput>({
    resolver: yupResolver(loginSchema),
  });

  const {
    reset,
    handleSubmit,
    register,
    formState: { errors },
  } = methods;

  const loginUser = async (values: LoginInput) => {
    loginUserFn(values).then((res) => {
      console.log('response login', res)
    }).catch((err) => {
      if (err) {
        console.log('response login error', err)
        toast.error(err.data.message, {
          position: 'top-right',
        });
      }
    })
  }

  const onSubmitHandler: SubmitHandler<LoginInput> = (values) => {
    // 👇 Executing the loginUser Mutation
    console.log("values submit", values);
    loginUser(values);
  };

  return (
    <div className='container-login'>
      <div className='wrap-form'>
        <p className=' text-5xl text-center font-bold mb-5'>Login</p>
        <div className='card-form p-5 md:p-14'>
          <FormProvider {...methods}>
            <div className='mb-5 flex flex-col'>
              <label className='mb-1'>Email</label>
              <input
                id='id_email'
                className='input-primary'
                type='email'
                {...register("email")}
              />
              <div className='invalid-feedback'>{errors?.email?.message}</div>
            </div>
            <div className='mb-5 flex flex-col'>
              <label className='mb-1'>Password</label>
              <input
                id='id_password'
                className='input-primary'
                type='password'
                {...register("password")}
              />
            </div>
            <div className='flex mt-10'>
              <button
                className='btn-primary d-flex justify-center w-full !rounded-full mx-10'
                onClick={handleSubmit(onSubmitHandler)}
              >
                Login
              </button>
            </div>
          </FormProvider>
        </div>
      </div>
    </div>
  );
};

export default Login;
