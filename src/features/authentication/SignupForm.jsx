import React, { useContext } from "react";
import styled from "styled-components";
import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import { useForm } from "react-hook-form";
import FormRow from "../../ui/FormRow";
import toast from "react-hot-toast";
import { useSignup } from "./useSignup";
import LoginLink from "../../pages/LoginLink";
import RoleSelect from "../../ui/RoleSelect";
import { UserContext } from "../../context/UserContext"; // Import UserContext

const Label = styled.label`
  font-weight: 500;
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;

function SignupForm() {
  const { signup, isLoading } = useSignup();
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;

  const { setUser } = useContext(UserContext); // Use UserContext

  async function onSubmit({ username, email, password, role }) {
    try {
      const response = await signup({ username, email, password, role });
      setUser(response.user); // Set user in context
      toast.success("Signup successful! Redirecting to dashboard...");
      if (role === "INSTRUCTOR") {
        window.location.href = "/dashboard";
      } else {
        window.location.href = "/studentdashboard";
      }
    } catch (error) {
      toast.error("Failed to register, please try again!");
      console.error("Signup error:", error);
    } finally {
      reset();
    }
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Username" error={errors?.username?.message}>
        <Input
          type="text"
          id="username"
          disabled={isLoading}
          {...register("username", { required: "This field is required" })}
        />
      </FormRow>

      <FormRow label="Email address" error={errors?.email?.message}>
        <Input
          type="email"
          id="email"
          disabled={isLoading}
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
          disabled={isLoading}
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
          disabled={isLoading}
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
        <Button
          variation="secondary"
          type="reset"
          disabled={isLoading}
          onClick={reset}
        >
          Cancel
        </Button>
        <Button disabled={isLoading}>Sign Up</Button>
        <LoginLink />
      </FormRow>
    </Form>
  );
}

export default SignupForm;
