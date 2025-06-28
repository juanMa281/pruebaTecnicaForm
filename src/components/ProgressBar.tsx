import React from 'react';
import type { FormValues } from '../pages/Form';

type Section = {
  section: string;
};

type Props = {
  sections: Section[];
  currentIndex: number;
  formData: Record<string, FormValues>;
};

const ProgressBar: React.FC<Props> = ({ sections, currentIndex, formData }) => {
  return (
    <div className="flex items-center justify-between w-full max-w-6xl mx-auto px-4 text-center">
      {sections.map((section, index) => {
        const isCompleted = Object.keys(formData[section.section] || {}).length > 0;
        const isActive = index === currentIndex;

        return (
          <React.Fragment key={section.section}>
            {index > 0 && (
              <div className="flex-1 h-0.5 mx-1 bg-gray-300 relative overflow-hidden">
                <div
                  className={`h-full bg-blue-500 origin-left transition-transform duration-500 ease-in-out transform ${isCompleted || isActive ? 'scale-x-100' : 'scale-x-0'
                    }`}
                />
              </div>
            )}

            <div className="flex flex-col items-center flex-shrink-0 w-20 sm:w-24 transition-all duration-300 ease-in-out">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center font-normal text-xs mb-1 
                  transition-all duration-500 ease-in-out transform
                  ${isActive
                    ? 'bg-blue-600 text-white border-2 border-blue-300 scale-110 animate-pulse'
                    : isCompleted
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-300 text-gray-600'
                  }`}
                title={section.section}
              >
                {isCompleted && !isActive ? (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                ) : (
                  index + 1
                )}
              </div>

              <div
                className={`text-xs leading-tight min-h-[2rem] flex items-start justify-center
                  transition-all duration-500 ease-in-out transform ${isActive
                    ? 'text-blue-700 font-semibold translate-y-[-2px] opacity-100'
                    : 'text-gray-600 opacity-80'
                  }`}
              >
                {section.section}
              </div>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default ProgressBar;
