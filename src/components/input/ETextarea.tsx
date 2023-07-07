import "./style.scss";

// export const EInput: React.FC<IEInputForm> = ({
export const ETextarea = ({
  label,
  id,
  placeholder,
  hasLabel,
  onChange,
  error,
  value,
}: {
  label?: string;
  id: string;
  placeholder: string;
  hasLabel?: boolean;
  onChange: (e?: any) => void;
  error?: string;
  value?: string;
}) => {
  return (
    <div>
      {hasLabel && <label htmlFor={id}>{label}</label>}
      <textarea
        id={id}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      ></textarea>
      <p className="error-message">{error}</p>
    </div>
  );
};
