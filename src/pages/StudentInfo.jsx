import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import FormLayout from "../ui/FormLayout";
import Button from "../ui/Button2";
import { useSaveStudent } from "../features/students/useSaveStudent";
import cohortService from "../services/cohortService";
import toast from "react-hot-toast";

const StudentInfo = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const { saveStudent, isLoading } = useSaveStudent();
  const [cohorts, setCohorts] = useState([]);

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

  const onSubmit = async (data) => {
    const selectedCohort = cohorts.find((c) => c.cohortId === data.cohort);
    data.cohort = selectedCohort;
    console.log("Submitted Data:", data);
    try {
      const cohortExists = await cohortService.cohortExistsByName(
        data.cohort.cohortName
      );
      console.log("Cohort Exists Check:", cohortExists);
      if (!cohortExists) {
        toast.error("Cohort does not exist. Please select a valid cohort.");
        return;
      }

      await saveStudent(data);
      toast.success("Student information saved successfully!");
      reset();
    } catch (error) {
      toast.error("Failed to save student information. Please try again.");
    }
  };

  return (
    <FormLayout title="Student Information">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="group">
          <label>ID</label>
          <input
            type="number"
            name="id"
            {...register("id", { required: "ID is required" })}
            disabled={isLoading}
          />
          {errors.id && <span>{errors.id.message}</span>}
        </div>
        <div className="group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            {...register("email", { required: "Email is required" })}
            disabled={isLoading}
          />
          {errors.email && <span>{errors.email.message}</span>}
        </div>
        <div className="group">
          <label>Cohort</label>
          <select
            name="cohort"
            {...register("cohort", { required: "Cohort is required" })}
            disabled={isLoading}
          >
            <option value="">Select a cohort</option>
            {cohorts.map((cohort) => (
              <option key={cohort.cohortId} value={cohort.cohortId}>
                {cohort.cohortName}
              </option>
            ))}
          </select>
          {errors.cohort && <span>{errors.cohort.message}</span>}
        </div>
        <div className="group">
          <label>Group</label>
          <input
            type="text"
            name="group"
            {...register("group", { required: "Group is required" })}
            disabled={isLoading}
          />
          {errors.group && <span>{errors.group.message}</span>}
        </div>
        <div className="group">
          <label>Course</label>
          <input
            type="text"
            name="course"
            {...register("course", { required: "Course is required" })}
            disabled={isLoading}
          />
          {errors.course && <span>{errors.course.message}</span>}
        </div>
        <div className="group">
          <Button type="submit" disabled={isLoading}>
            Submit
          </Button>
        </div>
      </form>
    </FormLayout>
  );
};

export default StudentInfo;
