interface InputControlProps extends React.ComponentPropsWithoutRef<"input"> {
  label: string;
}

export default function InputControl(props: InputControlProps) {
  const { label, ...inputProps } = props;
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <label htmlFor={inputProps.id}>{label}</label>
      <input {...inputProps} />
    </div>
  );
}
