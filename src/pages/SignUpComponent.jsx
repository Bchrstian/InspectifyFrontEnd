import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Input from "../ui/FileInput";
import Form from "../ui/Form";
import Button from "../ui/Button";
import { useForm } from "react-hook-form";
import FormRow from "../ui/FormRow";
import toast from "react-hot-toast";
import axios from "axios";
import RoleSelect from "../ui/RoleSelect";

const Label = styled.label`
  font-weight: 500;
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;

function SignUpComponent() {
  const navigate = useNavigate();
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;

  const onSubmit = async ({ username, email, password, role }) => {
    try {
      const response = await axios.post("/api/users/signup", {
        username,
        email,
        password,
        role,
      });
      toast.success("Signup successful! Redirecting to role selection...");
      navigate("/roleselection"); // Redirect to the role selection page
    } catch (error) {
      toast.error("Failed to register, please try again!");
      console.error("Signup error:", error);
    } finally {
      reset();
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Username" error={errors?.username?.message}>
        <Input
          type="text"
          id="username"
          {...register("username", { required: "This field is required" })}
        />
      </FormRow>

      <FormRow label="Email address" error={errors?.email?.message}>
        <Input
          type="email"
          id="email"
          {...register("email", {
            required: "This field is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Please provide a valid email address",
            },
          })}
        />
      </FormRow>

      <FormRow
        label="Password (min 8 characters)"
        error={errors?.password?.message}
      >
        <Input
          type="password"
          id="password"
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 8,
              message: "Password needs a minimum of 8 characters",
            },
          })}
        />
      </FormRow>

      <FormRow label="Repeat password" error={errors?.passwordConfirm?.message}>
        <Input
          type="password"
          id="passwordConfirm"
          {...register("passwordConfirm", {
            required: "This field is required",
            validate: (value) =>
              value === getValues().password || "Passwords need to match",
          })}
        />
      </FormRow>

      <FormRow label="Role" error={errors?.role?.message}>
        <RoleSelect register={register} error={errors?.role} />
      </FormRow>

      <FormRow>
        <Button variation="secondary" type="reset" onClick={reset}>
          Cancel
        </Button>
        <Button>Sign Up</Button>
      </FormRow>
    </Form>
  );
}

export default SignUpComponent;
