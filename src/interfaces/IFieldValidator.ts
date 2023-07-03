export interface IFieldValidator {
    [key: string]: {
      validation: {
        required: { value: boolean; message: string };
        minLength: { value: number; message: string };
        maxLength: { value: number; message: string };
        pattern?: { value: RegExp; message: string } | undefined;
      };
    };
  }