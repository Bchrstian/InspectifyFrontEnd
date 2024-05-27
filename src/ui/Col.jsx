import styled from "styled-components";

const Col = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) =>
    props.gap || "2rem"}; /* You can adjust the default gap as needed */
`;

export default Col;
