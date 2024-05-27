// src/pages/RoleSelection.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import FormLayout from "../ui/FormLayout";
import Button from "../ui/Button";

const RoleSelection = () => {
  const navigate = useNavigate();

  return (
    <FormLayout title="Welcome To Inspectify! Please Select Your Role">
      <div className="group">
        <Button onClick={() => navigate("/instructorinfo")}>
          I am an Instructor
        </Button>
        <Button onClick={() => navigate("/studentinfo")}>I am a Student</Button>
      </div>
    </FormLayout>
  );
};

export default RoleSelection;
