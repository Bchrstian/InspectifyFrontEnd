import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import { useForm } from "react-hook-form";
import FormRow from "../../ui/FormRow";
import axios from "axios";
import toast from "react-hot-toast";
import cohortService from "./../../services/cohortService";

const Label = styled.label`
  font-weight: 500;
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;

function CreateCourseForm({ onCloseModal }) {
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;
  const [cohorts, setCohorts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchCohorts = async () => {
      try {
        const data = await cohortService.findAllCohorts();
        setCohorts(data);
      } catch (error) {
        toast.error("Failed to load cohorts. Please try again.");
      }
    };
    fetchCohorts();
  }, []);

  async function onSubmit(data) {
    try {
      setIsLoading(true);
      const courseData = {
        courseName: data.courseName,
        instructor: data.instructor,
        cohortId: data.cohort, // Use cohort ID
        groups: data.groups.split(","),
      };

      const response = await axios.post(
        "http://localhost:8081/api/courses/saveCourse",
        courseData
      );

      console.log(response.data);
      onCloseModal?.();
      toast.success("Course created successfully!");
    } catch (error) {
      console.error("Error submitting the form", error);
      toast.error("Failed to create course. Please try again.");
    } finally {
      setIsLoading(false);
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
      <FormRow label="Course Name" error={errors?.courseName?.message}>
        <Input
          type="text"
          id="courseName"
          {...register("courseName", {
            required: "This field is required",
          })}
          disabled={isLoading}
        />
      </FormRow>

      <FormRow label="Instructor" error={errors?.instructor?.message}>
        <Input
          type="text"
          id="instructor"
          {...register("instructor", {
            required: "This field is required",
          })}
          disabled={isLoading}
        />
      </FormRow>

      <FormRow label="Cohort" error={errors?.cohort?.message}>
        <select
          id="cohort"
          {...register("cohort", { required: "This field is required" })}
          disabled={isLoading}
        >
          <option value="">Select a cohort</option>
          {cohorts.map((cohort) => (
            <option key={cohort.cohortId} value={cohort.cohortId}>
              {cohort.cohortName}
            </option>
          ))}
        </select>
      </FormRow>

      <FormRow label="Groups (comma-separated)" error={errors?.groups?.message}>
        <Input
          type="text"
          id="groups"
          {...register("groups", {
            required: "This field is required",
          })}
          disabled={isLoading}
        />
      </FormRow>

      <FormRow>
        <Button
          variation="secondary"
          type="reset"
          onClick={() => onCloseModal?.()}
          disabled={isLoading}
        >
          Cancel
        </Button>
        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Loading..." : "Create Course"}
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateCourseForm;
