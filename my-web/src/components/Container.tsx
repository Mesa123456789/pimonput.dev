import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export default function Container({ children, className = "" }: ContainerProps) {
  return (
    <div
      className={`
        w-full mx-auto
        px-0 sm:px-4 md:px-6 lg:px-10 xl:px-16
        max-w-[2000px]
        ${className}
      `}
    >
      {children}
    </div>
  );
}
