import { useState, useEffect } from "react";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useUpdateUser } from "./useUpdateUser";
import { useUser } from "../../context/UserContext"; // Import UserContext
import axios from "axios";
import toast from "react-hot-toast";

function UpdateUserDataForm() {
  const { user, setUser } = useUser(); // Use UserContext
  const { updateUser, isUpdating } = useUpdateUser();

  const [fullName, setFullName] = useState(user?.fullName || "");
  const [avatar, setAvatar] = useState(null);

  useEffect(() => {
    setFullName(user?.fullName || "");
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("fullName", fullName);
    if (avatar) {
      formData.append("avatar", avatar);
    }

    try {
      const response = await axios.put("/api/users/update", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setUser(response.data); // Update user context
      toast.success("User account successfully updated");
    } catch (error) {
      console.error("Update error:", error);
      toast.error("Failed to update user data. Please try again.");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormRow label="Email address">
        <Input value={user?.email} disabled />
      </FormRow>
      <FormRow label="Full name">
        <Input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          id="fullName"
        />
      </FormRow>
      <FormRow label="Avatar image">
        <FileInput
          id="avatar"
          accept="image/*"
          onChange={(e) => setAvatar(e.target.files[0])}
        />
      </FormRow>
      <FormRow>
        <Button type="reset" variation="secondary">
          Cancel
        </Button>
        <Button disabled={isUpdating}>Update account</Button>
      </FormRow>
    </Form>
  );
}

export default UpdateUserDataForm;
