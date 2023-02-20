import { ReactElement } from "react";

type CustomButtonProps = {
  children: string | JSX.Element;
  className: string;
  variant?: string;
} & React.ComponentProps<"a">;

const CustomButton = ({
  children,
  className,
  variant,
  ...rest
}: CustomButtonProps) => {
  return (
    <a className={`${className} ${variant}`} {...rest}>
      {children}
    </a>
  );
};

export default CustomButton;
