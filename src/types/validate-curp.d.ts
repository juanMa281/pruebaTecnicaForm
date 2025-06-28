declare module 'validate-curp' {
  interface CurpValidationResult {
    isValid: boolean;
    curp: string | null;
    errors?: string[];
  }

  export default function validateCurp(curp: string): CurpValidationResult;
}

