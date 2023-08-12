import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ReactSVG } from "react-svg";
import { FormProvider, useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";
import { confirmAlert } from "react-confirm-alert";

import {
  createShippingCompsFn,
  deleteShippingCompsFn,
  updateShippingCompsFn,
} from "api/shippingCompsApi";
import useQuery from "lib/queryUrl";

const formSchema = yup.object({
  name: yup.string().required("Nama harus diisi"),
});

export type ShippingCompsInput = yup.InferType<typeof formSchema>;

const ShippingForm = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [title, setTitle] = useState("Tambah Shipping Comps");
  const nameValue: string = useQuery().get("name") ?? "";
  const methods = useForm<ShippingCompsInput>({
    resolver: yupResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

  const {
    reset,
    handleSubmit,
    register,
    formState: { errors },
  } = methods;

  const { mutate, isLoading } = useMutation(
    (shippingData: ShippingCompsInput) =>
      params.id
        ? updateShippingCompsFn(params.id, shippingData)
        : createShippingCompsFn(shippingData),
    {
      onSuccess(data) {
        toast.success(data?.message);
        navigate("/admin/shipping");
      },
      onError(err: any) {
        if (err) {
          toast.error(err.data.message, {
            position: "top-right",
          });
        }
      },
    }
  );

  useEffect(() => {
    if (params.id) {
      reset({
        name: nameValue,
      });
      setTitle("Edit Shipping Comps");
    }
  }, []);

  const onSubmitHandler: SubmitHandler<ShippingCompsInput> = (values) => {
    mutate(values);
  };

  const doDelete = async () => {
    try {
      const response = await deleteShippingCompsFn(params.id as string);
      if (!response.error) {
        toast.success(response.message, {
          position: "top-right",
        });
        navigate("/admin/shipping");
      }
    } catch (error) {
      console.log("error whyy", error);
    }
  };
  const onDelete = () => {
    confirmAlert({
      title: "Hapus ?",
      message: "Apakah anda yakin",
      buttons: [
        {
          label: "Hapus",
          onClick: () => doDelete(),
        },
        {
          label: "Batal",
        },
      ],
    });
  };

  return (
    <div className='card'>
      <div className='flex items-center'>
        <div className='flex gap-2'>
          <div className='title'>{title}</div>
          {params.id && (
            <button
              className='btn-danger !rounded-full !p-0 w-8 h-8 flex justify-center items-center'
              onClick={() => onDelete()}
            >
              <ReactSVG src='/assets/icons/trash.svg' />
            </button>
          )}
        </div>
      </div>
      <FormProvider {...methods}>
        <div className='mb-5 mt-10 flex flex-col'>
          <label className='mb-1'>Nama</label>
          <input
            id='id_name'
            className='input-primary w-1/4'
            {...register("name")}
          />
          <div className='invalid-feedback'>{errors?.name?.message}</div>
        </div>
        <div className='flex mt-10'>
          <button
            className='btn-primary d-flex justify-center'
            onClick={handleSubmit(onSubmitHandler)}
          >
            Simpan
          </button>
        </div>
      </FormProvider>
    </div>
  );
};

export default ShippingForm;
