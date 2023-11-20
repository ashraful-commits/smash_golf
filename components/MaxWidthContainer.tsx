import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

const MaxWidthContainer = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div className={cn("mx-auto w-full max-w-screen-[1440px]", className)}>
      {children}
    </div>
  );
};

export default MaxWidthContainer;
