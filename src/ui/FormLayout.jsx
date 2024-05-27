// src/components/FormLayout.jsx
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f7f7f7;
`;

const FormWrapper = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;

  @media (max-width: 600px) {
    padding: 15px;
  }
`;

const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 1.5em;
`;

const FormLayout = ({ title, children }) => {
  return (
    <Container>
      <FormWrapper>
        <Title>{title}</Title>
        {children}
      </FormWrapper>
    </Container>
  );
};

export default FormLayout;
