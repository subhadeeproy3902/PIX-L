import React from 'react';

const FormField = ({
  labelName,
  type,
  name,
  placeholder,
  value,
  handleChange,
  isSurpriseMe,
  handleSurpriseMe,
}) => (
  <div>
    <div className="flex items-center gap-2 mb-2">
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-900"
      >
        {labelName}
      </label>
      {isSurpriseMe && (
        <button
          type="button"
          onClick={handleSurpriseMe}
          className="font-semibold text-xs bg-pink-200 duration-200 ease-in-out hover:bg-pink-300 py-1 px-2 rounded-[5px] text-black"
        >
          Surprise me
        </button>
      )}
    </div>
    <input
      type={type}
      id={name}
      name={name}
      className="block w-full rounded-md bg-gradient-to-b from-purple-200/50 to-pink-300/50 py-2.5 pl-5 pr-12 text-base text-gray-950 tracking-wide shadow-md font-medium border-none focus:ring focus:ring-offset-2 placeholder:text-gray-500 focus:ring-purple-500 outline-none"
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      required
    />
  </div>
);

export default FormField;
