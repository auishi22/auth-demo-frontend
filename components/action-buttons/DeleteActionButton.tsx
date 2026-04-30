import * as React from "react";
import { Trash2 } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

type DeleteActionButtonProps = React.ComponentProps<typeof Button> & {
  iconClassName?: string;
};

export default function DeleteActionButton({
  className,
  iconClassName,
  type = "button",
  ...props
}: DeleteActionButtonProps) {
  return (
    <Button
      type={type}
      variant="outline"
      size="sm"
      className={cn(
        "flex items-center gap-1 border hover:text-red-600",
        className,
      )}
      {...props}
    >
      <Trash2 className={cn("h-4 w-4", iconClassName)} />
    </Button>
  );
}
