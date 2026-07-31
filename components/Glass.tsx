import { type ElementType, type ComponentPropsWithoutRef, type ReactNode } from "react";

type GlassProps<T extends ElementType> = {
  as?: T;
  className?: string;
  children: ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "className" | "children">;

export function Glass<T extends ElementType = "div">({
  as,
  className = "",
  children,
  ...rest
}: GlassProps<T>) {
  const Component = as ?? "div";
  return (
    <Component className={`glass ${className}`} {...rest}>
      {children}
    </Component>
  );
}
