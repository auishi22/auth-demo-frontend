import * as React from "react";
import { Pencil } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

type EditActionButtonProps = React.ComponentProps<typeof Button> & {
  iconClassName?: string;
};

export default function EditActionButton({
  className,
  iconClassName,
  type = "button",
  ...props
}: EditActionButtonProps) {
  return (
    <Button
      type={type}
      variant="outline"
      size="sm"
      className={cn("flex items-center gap-1 hover:text-blue-600", className)}
      {...props}
    >
      <Pencil className={cn("h-4 w-4", iconClassName)} />
    </Button>
  );
}
