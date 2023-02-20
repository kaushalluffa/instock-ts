type CustomButtonProps = {
  children: string;
  className: string;
  variant: string;
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
