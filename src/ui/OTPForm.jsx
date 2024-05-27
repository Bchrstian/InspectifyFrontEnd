// OTPForm.jsx

import React, { useState } from "react";
import Button from "./Button"; // Assuming you have a Button component

const OTPForm = ({ onSubmit }) => {
  const [otp, setOTP] = useState("");

  const handleChange = (e) => {
    setOTP(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(otp);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="otp">Enter OTP:</label>
      <input
        type="text"
        id="otp"
        value={otp}
        onChange={handleChange}
        placeholder="Enter OTP here"
      />
      <Button type="submit">Submit OTP</Button>
    </form>
  );
};

export default OTPForm;
