import React, { useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import AuthContext from "../context/AuthContext";
import useApi from "../hooks/useApi";

type Inputs = {
  email: string,
  password: string,
};

function LoginPage() {
  const { formState: { errors }, handleSubmit, register } = useForm<Inputs>();
  const { setUser } = useContext(AuthContext);
  const api = useApi();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const response = await api.post("/sessions", data);
      setUser(response.data.data);  
    } catch (error) {
      // handle error
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        <p>Email</p>
        <input type="email" {...register("email", {
            required: true,
          })}
        />
        { errors.email && "Email Required" }
      </label>
      <label>
        <p>Password</p>
        <input type="password" {...register("password", {
            required: true,
          })}
        />
        { errors.password && "Password Required" }
      </label>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  )
}

export default LoginPage;
