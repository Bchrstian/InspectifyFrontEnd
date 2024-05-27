import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import FormLayout from "../ui/FormLayout";
import Button from "../ui/Button2";
import cohortService from "../services/cohortService";
import instructorService from "../services/instructorService";
import toast from "react-hot-toast";

const InstructorInfo = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const navigate = useNavigate(); // Initialize the useNavigate hook
  const [cohorts, setCohorts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [instructorEmail, setInstructorEmail] = useState(""); // State for instructor's email

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
    const instructorData = {
      ...data,
      cohort: selectedCohort,
      email: instructorEmail, // Use instructor's email from state
    };

    try {
      setIsLoading(true);
      const cohortExists = await cohortService.cohortExistsByName(
        selectedCohort.cohortName
      );
      if (!cohortExists) {
        toast.error("Cohort does not exist. Please select a valid cohort.");
        setIsLoading(false);
        return;
      }

      await instructorService.saveInstructor(instructorData);
      toast.success("Instructor information saved successfully!");
      reset();
      navigate("/dashboard"); // Redirect to /dashboard
    } catch (error) {
      toast.error("Failed to save instructor information. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <FormLayout title="Instructor Information">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="group">
          <label>Expertise</label>
          <input
            type="text"
            name="expertise"
            {...register("expertise", { required: "Expertise is required" })}
            disabled={isLoading}
          />
          {errors.expertise && <span>{errors.expertise.message}</span>}
        </div>
        <div className="group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={instructorEmail}
            onChange={(e) => setInstructorEmail(e.target.value)}
            disabled={isLoading}
          />
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
          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Loading..." : "Submit"}
          </Button>
        </div>
      </form>
    </FormLayout>
  );
};

export default InstructorInfo;
