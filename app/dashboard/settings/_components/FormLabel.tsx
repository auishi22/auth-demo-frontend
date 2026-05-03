interface FormLabelProps {
  htmlFor: string;
  children: string;
  required?: boolean;
}

export default function FormLabel({
  htmlFor,
  children,
  required = false,
}: FormLabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      className="mb-2 block text-sm font-medium text-slate-700"
    >
      {children}
      {required && <span className="text-red-500 font-bold ml-1">*</span>}
    </label>
  );
}
