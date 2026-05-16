import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function Container({ children, className = "" }: Props) {
  return (
    <div className={`mx-auto max-w-6xl px-6 py-16 sm:py-24 ${className}`}>
      {children}
    </div>
  );
}
