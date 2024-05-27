import styled from "styled-components";
import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa";
import Heading from "../../ui/Heading";
import Row from "../../ui/Row";

const StyledToday = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  padding: 3.2rem;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  grid-column: 1 / span 2;
  padding-top: 2.4rem;
`;

const TodayList = styled.ul`
  overflow: scroll;
  overflow-x: hidden;

  /* Removing scrollbars for webkit, firefox, and ms, respectively */
  &::-webkit-scrollbar {
    width: 0 !important;
  }
  scrollbar-width: none;
  -ms-overflow-style: none;
`;

const NoActivity = styled.p`
  text-align: center;
  font-size: 1.8rem;
  font-weight: 500;
  margin-top: 0.8rem;
`;

const TodayItem = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  background-color: var(--color-grey-50);
  border-radius: var(--border-radius-sm);
  margin-top: 1rem;

  & .icon {
    margin-right: 1rem;
    font-size: 1.5rem;
  }

  & .text {
    font-size: 1rem;
    color: var(--color-grey-700);
  }
`;

function TodayActivity() {
  return (
    <StyledToday>
      <Row type="horizontal">
        <Heading as="h2">Today</Heading>
      </Row>
      <TodayList>
        <TodayItem>
          <FaCheckCircle className="icon" style={{ color: "green" }} />
          <div className="text">You posted an assignment 2 days ago.</div>
        </TodayItem>
        <TodayItem>
          <FaExclamationCircle className="icon" style={{ color: "orange" }} />
          <div className="text">There are no assignments to correct today.</div>
        </TodayItem>
      </TodayList>
      <NoActivity>No further activities for today.</NoActivity>
    </StyledToday>
  );
}

export default TodayActivity;
