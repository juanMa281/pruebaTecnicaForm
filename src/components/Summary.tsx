import React from 'react';
import type { FormValues } from '../pages/Form';

const Summary: React.FC<{ formData: Record<string, FormValues> }> = ({ formData }) => {
  return (
    <div className="w-full max-w-5xl mx-auto p-8 bg-white border border-gray-200 shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold text-blue-600 mb-8 text-center">Resumen de tus respuestas</h2>

      {Object.entries(formData).map(([sectionName, answers], i) => (
        <div key={i} className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-3 border-b pb-1">{sectionName}</h3>
          <div className="bg-gray-50 border border-gray-200 p-4 rounded-md text-sm font-mono text-gray-700 overflow-x-auto">
            <pre className="whitespace-pre-wrap break-words">{JSON.stringify(answers, null, 2)}</pre>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Summary;
