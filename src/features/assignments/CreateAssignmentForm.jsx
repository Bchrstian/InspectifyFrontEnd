import styled from "styled-components";
import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import Textarea from "../../ui/Textarea";
import { useForm } from "react-hook-form";
import FormRow from "../../ui/FormRow";
import FileInput from "../../ui/FileInput";
import axios from "axios";
import { supabase } from "../../api/supabaseClient";

const FormRow2 = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 24rem 1fr 1.2fr;
  gap: 2.4rem;
  padding: 1.2rem 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

const Label = styled.label`
  font-weight: 500;
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;

function CreateAssignmentForm({ onCloseModal }) {
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;

  async function onSubmit(data) {
    try {
      // Step 1: Upload file to Supabase
      const file = data.file[0];
      const fileName = `${Date.now()}-${file.name}`; // Unique file name to avoid conflicts
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from("inspectify_file_docs")
        .upload(fileName, file);

      if (uploadError) {
        console.error("Error uploading file:", uploadError);
        return;
      }

      // Step 2: Get the file URL
      const documentUrl = `https://your-supabase-url.supabase.co/storage/v1/object/public/your-bucket-name/${fileName}`;

      // Step 3: Prepare data to send to Spring Boot backend
      const assignmentData = {
        name: data.title,
        dueDate: data.submissionDate,
        group: data.group,
        description: data.description,
        documentUrl, // Sending file URL instead of the file itself
      };

      // Step 4: Send data to Spring Boot backend
      const response = await axios.post(
        "http://localhost:8081/api/assignments/save",
        assignmentData
      );

      console.log(response.data);
      onCloseModal?.();
    } catch (error) {
      console.error("Error submitting the form", error);
    }
  }

  function onError(errors) {
    console.log(errors);
  }

  return (
    <Form
      onSubmit={handleSubmit(onSubmit, onError)}
      type={onCloseModal ? "modal" : "regular"}
    >
      <FormRow label="Assignment Title" error={errors?.name?.message}>
        <Input
          type="text"
          id="name"
          {...register("name", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="dueDate" error={errors?.dueDate?.message}>
        <Input
          type="datetime-local"
          id="dueDate"
          {...register("dueDate", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="Assigned group" error={errors?.group?.message}>
        <Input
          type="text"
          id="group"
          {...register("group", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow
        label="Description for the assignment"
        error={errors?.description?.message}
      >
        <Textarea
          id="description"
          defaultValue=""
          {...register("description", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="Upload File" error={errors?.file?.message}>
        <FileInput
          id="fileupload"
          accept="file/*"
          {...register("file", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow>
        <Button
          variation="secondary"
          type="reset"
          onClick={() => onCloseModal?.()}
        >
          Cancel
        </Button>
        <Button type="submit">Add Assignment</Button>
      </FormRow>
    </Form>
  );
}

export default CreateAssignmentForm;
