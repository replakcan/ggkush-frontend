import { useForm } from "react-hook-form";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import axios from "axios";

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    axios({
      method: "post",
      url: "http://localhost:9000/ggkush/auth/register",
      data: data,
    })
      .then((res) => console.log(res))
      .catch((e) => console.error(e));
  };

  return (
    <div className="login-wrapper">
      <form
        className="flex flex-column gap-4 p-4 border-1 border-round	border-primary"
        onSubmit={handleSubmit(onSubmit)}
      >
        <span className={`p-float-label form-input-span`}>
          <InputText
            className={`min-w-min ${errors.email ? "p-invalid block" : ""}`}
            type="email"
            {...register("email", {
              required: true,
              pattern: {
                value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                message: "not a valid email",
              },
            })}
          />
          {errors.email && (
            <small className="p-error block">{errors.email.message}</small>
          )}
          <label htmlFor="email">email</label>
        </span>

        <span className={`p-float-label form-input-span`}>
          <InputText
            className={errors.firstName && `p-invalid block`}
            type="text"
            {...register("firstName", {
              required: true,
              minLength: { value: 2, message: "min length 2" },
              maxLength: { value: 20, message: "max length 20" },
            })}
          />
          {errors.firstName && (
            <small className="p-error block">{errors.firstName.message}</small>
          )}
          <label htmlFor="firstName">first name</label>
        </span>

        <span className={`p-float-label form-input-span`}>
          <InputText
            className={errors.lastName && `p-invalid block`}
            type="text"
            {...register("lastName", {
              required: true,
              minLength: { value: 2, message: "min length 2" },
              maxLength: { value: 20, message: "max length 20" },
            })}
          />
          {errors.lastName && (
            <small className="p-error block">{errors.lastName.message}</small>
          )}
          <label htmlFor="lastName">last name</label>
        </span>

        <span className={`p-float-label form-input-span min-w-min`}>
          <InputText
            className={errors.age && `p-invalid block`}
            type="number"
            {...register("age", {
              required: true,
              min: { value: 18, message: "age under 18 not allowed" },
              max: { value: 99, message: "okay grandma let's get you bed" },
            })}
          />
          {errors.age && (
            <small className="p-error block">{errors.age.message}</small>
          )}
          <label htmlFor="age">age</label>
        </span>

        <span className={`p-float-label form-input-span`}>
          <InputText
            className={errors.nickName && `p-invalid block`}
            type="text"
            {...register("nickName", {
              required: true,
              minLength: { value: 3, message: "min length 3" },
              maxLength: { value: 15, message: "max length 15" },
            })}
          />
          {errors.nickName && (
            <small className="p-error block">{errors.nickName.message}</small>
          )}
          <label htmlFor="nickName">nickname</label>
        </span>

        <span className={`p-float-label form-input-span`}>
          <InputText
            className={errors.password && `p-invalid block`}
            type="password"
            {...register("password", {
              required: true,
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
                message: "not a valid password",
              },
            })}
          />
          {errors.password && (
            <small className="p-error block">{errors.password.message}</small>
          )}
          <label htmlFor="password">password</label>
        </span>

        <span>
          <Button
            label="Submit"
            icon="pi pi-check"
            loading={false}
            loadingIcon="pi pi-spin pi-sun"
          ></Button>
        </span>
      </form>
    </div>
  );
}
