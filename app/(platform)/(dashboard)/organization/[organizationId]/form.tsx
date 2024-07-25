"use client";

import { createBoard } from "@/actions/create-board/index";

import { FormButton } from "./form-button";
import { useAction } from "@/hooks/use-action";

export const Form = () => {
  const { execute, fieldErrors } = useAction(createBoard, {
    onSuccess: (data) => {
      console.log(data, "SUCCESS!");
    },
    onError: (error) => {
      console.error(error, "ERROR!");
    },
  });
  
  const onSubmit = (formData: FormData) => {
    const title = formData.get("title") as string;

    execute({ title });
  }

  return (
    <form action={onSubmit} className="flex gap-x-2">
      <div className="flex flex-col space-y-2">
        <FormInput errors={fieldErrors} />
      </div>
      <FormButton />
    </form>
  );
};
