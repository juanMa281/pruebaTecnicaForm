import React, { useState } from "react";
import FieldRender from "./FieldRender";
import type { FormValues } from "../pages/Form";
import { getLastDayOfMonth } from "./FieldRender";
import validateCurp from "validate-curp";
import { ArrowRight, ArrowLeft } from 'lucide-react';


const curpErrorMessages: Record<string, string> = {
  INVALID_FORMAT: "El formato del CURP es inválido.",
  INVALID_DATE: "La fecha en el CURP no es válida.",
  INVALID_STATE: "El estado especificado en el CURP no existe.",
  INVALID_CHECK_DIGIT: "El dígito verificador del CURP es incorrecto.",
  FORBIDDEN_WORD: "El CURP contiene una palabra no permitida.",
};

type Question = {
  title: string;
  type: string;
  required?: boolean;
  name: string;
  min?: number;
  max?: number;
  step?: number;
  options?: string[];
};

type Section = {
  section: string;
  questions: Question[];
};

type Props = {
  section: Section;
  defaultValues: FormValues;
  onNext: (sectionName: string, values: FormValues) => void;
  onBack: () => void;
  isFirst: boolean;
  isLast: boolean;
};

const SectionForm: React.FC<Props> = ({
  section,
  defaultValues,
  onNext,
  onBack,
  isFirst,
  isLast,
}) => {
  const [values, setValues] = useState<FormValues>(defaultValues);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};

    for (const q of section.questions) {
      const val = values[q.name];
      if (
        q.required &&
        (val === undefined || val === "" || (q.type === "checkbox" && !val))
      ) {
        newErrors[q.name] = "Este campo es requerido.";
      }

      const dynamicMax =
        q.name === "day"
          ? getLastDayOfMonth(values?.year || 2000, values?.month || 1)
          : q.max;

      if (q.type === "number") {
        if (q.min !== undefined && val < q.min)
          newErrors[q.name] = `Debe ser al menos ${q.min}`;
        if (dynamicMax !== undefined && val > dynamicMax)
          newErrors[q.name] = `Debe ser como máximo ${dynamicMax}`;
      }

if (q.name === "curp") {
  const inputStr = String(val).trim();
  
  if (inputStr !== inputStr.toUpperCase()) {
    newErrors[q.name] = "El CURP debe estar en mayúsculas.";
  } else {
    const result = validateCurp(inputStr);
    if (!result.isValid) {
      const errores = result.errors?.map(
        (e) => curpErrorMessages[e] || "CURP no válida"
      ) || ["CURP no válida"];
      newErrors[q.name] = errores.join(" ");
    } else {
      values[q.name] = result.curp; 
    }
  }
}


      if (q.type === "email") {
        const emailRegex = /\S+@\S+\.\S+/;
        if (val && !emailRegex.test(val)) {
          newErrors[q.name] = "Correo no válido.";
        }
      }

      if (q.type === "password" && q.name === "password") {
        const valStr = String(val);
        const errorsList: string[] = [];

        if (valStr.length < 8) errorsList.push("al menos 8 caracteres");
        if (!/[A-Z]/.test(valStr)) errorsList.push("una letra mayúscula");
        if (!/[a-z]/.test(valStr)) errorsList.push("una letra minúscula");
        if (!/\d/.test(valStr)) errorsList.push("un número");
        if (!/[^A-Za-z\d]/.test(valStr)) errorsList.push("un símbolo");

        if (errorsList.length > 0) {
          newErrors[q.name] = `La contraseña debe contener ${errorsList.join(", ")}.`;
        }
      }

      if (q.name === "valid_password") {
        if (values[q.name] !== values["password"]) {
          newErrors[q.name] = "Las contraseñas no coinciden.";
        }
      }

      if (q.name === "authorize" && !values[q.name]) {
        newErrors[q.name] = "Debes autorizar";
      }

      if (q.name === "campusvalid" && section.section === "Datos generales confirmacion") {
        const campusOriginal = values["campus"];
        if (val !== campusOriginal) {
          newErrors[q.name] = "El campus de confirmación no coincide con el original.";
        }
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (name: string, value: any) => {
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (validate()) {
      onNext(section.section, values);
    }
  };

  return (
    <div
  key={section.section}
  className="w-full max-w-4xl mx-auto p-6 bg-white border border-gray-200 shadow-md rounded-lg transition-all duration-500 ease-out opacity-0 animate-fadeInSlide">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-2">{section.section}</h2>
      <form className="space-y-5">
        {section.questions.map((q, idx) => (
          <div key={idx}>
            <FieldRender
              question={q}
              value={values[q.name] || ""}
              onChange={handleChange}
              values={values}
            />
            {errors[q.name] && (
              <p className="text-sm text-red-500 mt-1">{errors[q.name]}</p>
            )}
          </div>
        ))}
      </form>

      <div className="flex justify-between items-center mt-8">
        {!isFirst && (
          <button
            type="button"
            onClick={onBack}
            className="flex items-center px-5 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded hover:bg-gray-300 transition cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            Anterior
          </button>
        )}
        <button
          type="button"
          onClick={handleSubmit}
          className="flex items-center ml-auto px-6 py-2 text-sm font-semibold text-white bg-blue-600 rounded hover:bg-blue-700 transition cursor-pointer"
        >
          {isLast ? (
            <>
              Finalizar
            </>
          ) : (
            <>
              Siguiente
              <ArrowRight className="w-4 h-4 ml-1" />
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default SectionForm;
