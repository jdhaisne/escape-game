interface IEInputForm {
    label: string;
    id: string;
    type: string;
    placeholder: string;
    hasLabel?: boolean;
    name: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    error : string;
}