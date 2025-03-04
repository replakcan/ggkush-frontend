/* eslint-disable no-useless-escape */
import { useForm } from "react-hook-form";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { useDispatch } from "react-redux";
import { userLogin } from "../store/actions/userActions";

export default function Login() {
  const dispatch = useDispatch();
    const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(userLogin(data))
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
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
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
