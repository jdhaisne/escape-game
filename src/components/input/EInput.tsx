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
  className,
}: {
  label?: string;
  id: string;
  type: string;
  placeholder: string;
  hasLabel?: boolean;
  onChange: (e?: any) => void;
  error?: string;
  value?: string | number;
  className?: string;
}) => {
  return (
    <div>
      {hasLabel && <label htmlFor={id}>{label}</label>}
      <input
        className={className}
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
