import styled from "styled-components";
import { useUser } from "./useUser";
import { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext";

const StyledUserAvatar = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;
  font-weight: 500;
  font-size: 1.4rem;
  color: var(--color-grey-600);
`;

const Avatar = styled.img`
  display: block;
  width: 4rem;
  width: 3.6rem;
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
  outline: 2px solid var(--color-grey-100);
`;

function UserAvatar() {
  const { user } = useContext(UserContext);
  useEffect(() => {
    console.log(user);
  }, []);
  return (
    <StyledUserAvatar>
      <Avatar
        src={user?.profileImageUrl || "default-user.jpg"}
        alt={`Avatar of ${user?.fullName}`}
      />
      <span>{user?.fullName}</span>
    </StyledUserAvatar>
  );
}

export default UserAvatar;
