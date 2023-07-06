import "./style.scss";

// export const EInput: React.FC<IEInputForm> = ({
export const EInput = ({
  label,
  id,
  type,
  placeholder,
  hasLabel,
  onChange,
  error,
  value,
}: {
  label?: string;
  id: string;
  type: string;
  placeholder: string;
  hasLabel?: boolean;
  onChange: (e?: any) => void;
  error?: string;
  value?: string | number;
}) => {
  return (
    <div>
      {hasLabel && <label htmlFor={id}>{label}</label>}
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
      <p className="error-message">{error}</p>
    </div>
  );
};
