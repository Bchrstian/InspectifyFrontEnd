import React from "react";
import styled from "styled-components";
import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import { useForm } from "react-hook-form";
import FormRow from "../../ui/FormRow";
import axios from "axios";
import toast from "react-hot-toast"; // Import toast from react-hot-toast

const FormRow2 = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 24rem 1fr 1.2fr;
  gap: 2.4rem;
  padding: 1.2rem 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

const Label = styled.label`
  font-weight: 500;
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;

function CreateCohortForm({ onCloseModal }) {
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;

  async function onSubmit(data) {
    try {
      // Prepare data to send to Spring Boot backend
      const cohortData = {
        cohortName: data.cohortName,
        startDate: data.startDate,
        endDate: data.endDate,
      };

      // Send data to Spring Boot backend
      const response = await axios.post(
        "http://localhost:8081/api/cohorts/save",
        cohortData
      );

      console.log(response.data);
      onCloseModal?.();

      // Show success toast
      toast.success("Cohort created successfully!");
    } catch (error) {
      console.error("Error submitting the form", error);
    }
  }

  function onError(errors) {
    console.log(errors);
  }

  return (
    <Form
      onSubmit={handleSubmit(onSubmit, onError)}
      type={onCloseModal ? "modal" : "regular"}
    >
      <FormRow label="Cohort Name" error={errors?.cohortName?.message}>
        <Input
          type="text"
          id="cohortName"
          {...register("cohortName", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="Start Date" error={errors?.startDate?.message}>
        <Input
          type="date"
          id="startDate"
          {...register("startDate", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="End Date" error={errors?.endDate?.message}>
        <Input
          type="date"
          id="endDate"
          {...register("endDate", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow>
        <Button
          variation="secondary"
          type="reset"
          onClick={() => onCloseModal?.()}
        >
          Cancel
        </Button>
        <Button type="submit">Create Cohort</Button>
      </FormRow>
    </Form>
  );
}

export default CreateCohortForm;
