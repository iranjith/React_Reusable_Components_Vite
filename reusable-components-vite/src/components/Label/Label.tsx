export interface Props {
  htmlFor: string;
  label: string;
  required?: boolean;
}

const Label = ({ htmlFor, label, required = false }: Props) => {
  return (
    <>
      <label style={{ display: "block" }} htmlFor={htmlFor}>
        {label} {required && <span style={{ color: "red" }}> *</span>}
      </label>
    </>
  );
};

export default Label;
