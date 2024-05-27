import styled from "styled-components";
import SignupForm from "../features/authentication/SignupForm";
import Logo from "../ui/Logo";
import Heading from "../ui/Heading";

const SignLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 68rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
`;

function SignOut() {
  return (
    <SignLayout>
      <Logo />
      <Heading as="h4">Sign in to your account</Heading>

      <SignupForm />
    </SignLayout>
  );
}

export default SignOut;
