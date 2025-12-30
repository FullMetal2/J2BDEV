type ButtonProps = {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  variant = "primary",
  children,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center px-5 py-3 rounded-lg font-medium tracking-tight transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-background cursor-pointer";

  const styles = {
    primary:
      "bg-primary text-white hover:bg-primary-700 hover:shadow-lg hover:shadow-primary/20",
    secondary:
      "border border-white/15 text-text-primary hover:border-primary/40 hover:text-primary transition-colors duration-200 mt-12",
  };

  return (
    <button className={`${base} ${styles[variant]}`} {...props}>
      {children}
    </button>
  );
}
