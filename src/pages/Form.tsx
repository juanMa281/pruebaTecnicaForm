// src/pages/Form.tsx
import React, { useState } from 'react';
import { TutorFormData } from '../data/JsonData';
import SectionForm from '../components/SectionForm';
import Summary from '../components/Summary';
import ProgressBar from '../components/ProgressBar';

export type FormValues = Record<string, any>;

const Form: React.FC = () => {
  const sections = TutorFormData();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [formData, setFormData] = useState<Record<string, FormValues>>({});
  const [isComplete, setIsComplete] = useState(false);

  const handleNext = (sectionName: string, sectionAnswers: FormValues) => {
    const currentSectionDef = sections.find(s => s.section === sectionName);
    const fieldsForThisSection = currentSectionDef
      ? currentSectionDef.questions.map(q => q.name)
      : [];

    const filteredSectionAnswers: FormValues = {};
    fieldsForThisSection.forEach(fieldName => {
      if (sectionAnswers[fieldName] !== undefined) {
        filteredSectionAnswers[fieldName] = sectionAnswers[fieldName];
      }
    });

    setFormData(prev => ({
      ...prev,
      [sectionName]: filteredSectionAnswers
    }));

    if (currentIndex + 1 < sections.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setIsComplete(true);
    }
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  if (isComplete) {
    return (
      <div className="min-h-screen bg-gray-50 text-gray-900 p-6">
        <Summary formData={formData} />
      </div>
    );
  }

  const currentSection = sections[currentIndex];
  const previousAnswers: FormValues = {};
  currentSection.questions.forEach(q => {
    if (formData[currentSection.section]?.[q.name] !== undefined) {
      previousAnswers[q.name] = formData[currentSection.section][q.name];
    } else if (formData[sections[0].section]?.[q.name] !== undefined) {
      previousAnswers[q.name] = formData[sections[0].section][q.name];
    }
  });

  return (

    <div className="bg-white text-gray-900 flex flex-col w-full">
      <div className="sticky top-0 z-50 bg-white shadow-md py-2">
        <ProgressBar
          sections={sections}
          currentIndex={currentIndex}
          formData={formData}
        />
      </div>
      <main className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-grow">
        <SectionForm
          section={currentSection}
          defaultValues={previousAnswers}
          onNext={handleNext}
          onBack={handleBack}
          isFirst={currentIndex === 0}
          isLast={currentIndex === sections.length - 1}
        />
      </main>
    </div>
  );
};

export default Form;