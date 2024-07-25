import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";

export const FormButton = () => {
    const { pending } = useFormStatus();
    return (
        <Button type="submit" disabled={pending} className="border-none bg-green-800 hover:bg-green-600">
            Submit
        </Button>
  );
};
