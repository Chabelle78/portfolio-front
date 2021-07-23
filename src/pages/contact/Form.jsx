import { ErrorMessage } from "@hookform/error-message";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import Select from "react-select";
import makeAnimated from "react-select/animated";

export default function Form() {
  const {
    register,
    reset,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    console.log("i submit");
    reset();
  };

  const animatedComponents = makeAnimated();

  return (
    <div className="w-3/4 mx-auto mb-6">
      <form
        onSubmit={handleSubmit(onSubmit)}
        action=""
        className="flex flex-col justify-around mx-10 my-10"
      >
        <label htmlFor="Name">
          <input
            className={`pb-2 mb-2 rounded
              ${errors.name ? "bg-red-400" : ""}
              `}
            type="text"
            placeholder="Name"
            id="Name"
            {...register("name", {
              required: "This must be completed",
              minLength: { value: 2, message: "Min. 2 letters" },
            })}
          />
          <ErrorMessage errors={errors} name="name" />
        </label>
        <label htmlFor="Email">
          <input
            className={`  pb-2 mb-2 rounded
              ${errors.name ? "bg-red-400" : ""}
              `}
            type="text"
            placeholder="Email"
            id="Email"
            {...register("Email", {
              required: "This must be completed or invalid email",
              required: true,
              minLength: { value: 2, message: "Min. 2 letters" },
            })}
          />
          <ErrorMessage errors={errors} name="name" />
        </label>
        <Controller
          name="RequestType"
          control={control}
          className="pb-2 mb-2 rounded"
          render={({ field }) => (
            <Select
              components={animatedComponents}
              placeholder="What is the type of your request?"
              {...field}
              options={[
                { value: "Dev", label: "Dev" },
                { value: "Business Strategy", label: "Business Strategy" },
                { value: "Sports", label: "Sports" },
                { value: "Other Request", label: "Other Request" },
              ]}
              className="pb-2 mb-2 rounded"
            />
          )}
        />
        <button
          className="focus:outline-none  w-1/3 bg-homeGray-dark border border-gray-500 hover:text-homeGray-dark hover:bg-green-500 rounded"
          type="submit"
        >
          Submit request
        </button>
      </form>
    </div>
  );
}
