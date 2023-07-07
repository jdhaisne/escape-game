interface IEInputForm {
    label: string;
    id: string;
    type: string;
    placeholder: string;
    hasLabel?: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    error : string;
}