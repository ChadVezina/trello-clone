import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";

export const FormDelete = () => {
  const { pending } = useFormStatus();
  
  return (
    <Button type="submit" disabled={pending} variant="destructive" size="sm" className="border-none bg-red-800 hover:bg-red-600">
      Delete
    </Button>
  );
};
