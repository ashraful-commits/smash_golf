import { maxWidthType } from "@/Type";
import { cn } from "@/lib/utils";
import React from "react";

const MaxWidthContainer = ({ className, children }: maxWidthType) => {
  return (
    <div className={cn("mx-auto w-full max-w-[1600px]", className)}>
      {children}
    </div>
  );
};

export default MaxWidthContainer;
