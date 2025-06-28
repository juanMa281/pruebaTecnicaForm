import React from 'react';
import type { FormValues } from '../pages/Form';
export function getLastDayOfMonth(year: number, month: number): number {
  return new Date(year, month, 0).getDate();
}

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

type Props = {
  question: Question;
  value: any;
  onChange: (name: string, value: any) => void;
  values?: FormValues;
};

const FieldRenderer: React.FC<Props> = ({ question, value, onChange, values }) => {
  const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, type, value: rawValue } = e.currentTarget;
    const integerOnlyFields = ['age', 'year', 'month', 'day', 'semesters'];
    const twoDecimalFields = ['grade', 'accumulated_grade'];

    if (rawValue === '') {
      onChange(name, '');
      return;
    }

    if (type === 'number') {
      if (integerOnlyFields.includes(name)) {
        if (!/^\d+$/.test(rawValue)) return;
        onChange(name, parseInt(rawValue, 10));
      } else if (twoDecimalFields.includes(name)) {
        if (!/^\d+(\.\d{0,2})?$/.test(rawValue)) return;
        onChange(name, parseFloat(rawValue));
      } else {
        onChange(name, parseFloat(rawValue));
      }
    } else if (type === 'checkbox') {
      onChange(name, (e.currentTarget as HTMLInputElement).checked);
    } else {
      onChange(name, rawValue);
    }
  };

  const dynamicMax = question.name === 'day'
    ? getLastDayOfMonth(values?.year || 2000, values?.month || 1)
    : question.max;

  switch (question.type) {
    case 'input':
    case 'email':
    case 'password':
    case 'number':
      return (
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">{question.title}</label>
          <input
            type={question.type}
            name={question.name}
            value={value}
            onChange={handleInput}
            required={question.required}
            min={question.min}
            max={dynamicMax}
            step={question.step}
            className="w-full rounded-md border border-gray-300 bg-white text-gray-900 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      );

    case 'select':
      return (
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">{question.title}</label>
          <select
            name={question.name}
            value={value}
            onChange={handleInput}
            required={question.required}
            className="w-full rounded-md border border-gray-300 bg-white text-gray-900 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Selecciona una opción</option>
            {question.options?.map((opt, i) => (
              <option key={i} value={opt}>{opt}</option>
            ))}
          </select>
        </div>
      );

    case 'checkbox':
      return (
        <div className="mb-4">
          <label className="inline-flex items-center space-x-2 text-gray-700">
            <input
              type="checkbox"
              name={question.name}
              checked={value || false}
              onChange={handleInput}
              className="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <span className="text-sm">{question.title}</span>
          </label>
        </div>
      );

    default:
      return <p className="text-red-500 mb-4">Tipo de campo no soportado: {question.type}</p>;
  }
};

export default FieldRenderer;
