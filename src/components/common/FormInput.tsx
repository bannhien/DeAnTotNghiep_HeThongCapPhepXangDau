import React, { type InputHTMLAttributes } from 'react';

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const FormInput: React.FC<FormInputProps> = ({ label, error, className = '', id, ...props }) => {
  const inputId = id || `input-${label.replace(/\s+/g, '-').toLowerCase()}`;

  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      <label htmlFor={inputId} className="text-sm font-medium text-gray-700">
        {label}
        {props.required && <span className="text-red-500 ml-1">*</span>}
      </label>
      
      <input
        id={inputId}
        className={`px-3 py-2 bg-white border rounded shadow-sm focus:outline-none focus:ring-2 transition-shadow
          ${error 
            ? 'border-red-300 focus:border-red-500 focus:ring-red-200' 
            : 'border-gray-300 focus:border-blue-500 focus:ring-blue-200'
          }
          disabled:bg-gray-50 disabled:text-gray-500
        `}
        {...props}
      />
      
      {/* Hiển thị lỗi nếu có */}
      {error && <span className="text-xs text-red-500 mt-0.5">{error}</span>}
    </div>
  );
};

export default FormInput;