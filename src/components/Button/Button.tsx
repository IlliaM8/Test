import { type } from "os";
import { ElementType } from "react";
import { FC } from "react";
import "./Button.scss";
interface ButtonProps {
  onClick?(): void;
  children?: React.ReactNode;
  type: "button" | "submit" | "reset";
  form?: string;
  disabled?: boolean;
}

const Button: FC<ButtonProps> = ({
  onClick,
  children,
  type,
  form,
  disabled,
}) => {
  return (
    <button
      className="button"
      type={type}
      form={form}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
