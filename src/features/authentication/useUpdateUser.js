import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import axios from "axios";

const updateUserDetails = async (updatedData) => {
  const response = await axios.put("/api/users/update", updatedData);
  return response.data;
};

const updatePassword = async (passwordData) => {
  const response = await axios.put("/api/users/updatePassword", passwordData);
  return response.data;
};

export function useUpdateUser() {
  const queryClient = useQueryClient();

  const { mutate: updateUser, isLoading: isUpdating } = useMutation({
    mutationFn: async (updatedData) => {
      if (updatedData.password) {
        await updatePassword({ password: updatedData.password });
      }

      const updatedUser = await updateUserDetails({
        firstName: updatedData.firstName,
        lastName: updatedData.lastName,
        avatar: updatedData.avatar,
      });

      return updatedUser;
    },
    onSuccess: (updatedUser) => {
      toast.success("User account successfully updated");
      queryClient.setQueryData(["user"], updatedUser);
    },
    onError: (err) => toast.error(err.message),
  });

  return { updateUser, isUpdating };
}
