// src/ui/RoleSelect.jsx
import React from "react";
import styled from "styled-components";

const Select = styled.select`
  width: 100%;
  padding: 0.5em;
  margin: 0.5em 0;
  font-size: 1.2rem;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5em;
  font-weight: 600;
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;

function RoleSelect({ register, error }) {
  return (
    <>
      {/* <Label htmlFor="role">Select Role</Label> */}
      <Select id="role" {...register("role", { required: "Role is required" })}>
        <option value="">Select...</option>
        <option value="INSTRUCTOR">Instructor</option>
        <option value="STUDENT">Student</option>
      </Select>
      {error && <Error>{error.message}</Error>}
    </>
  );
}

export default RoleSelect;
