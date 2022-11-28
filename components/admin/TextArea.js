import React from "react";
import ErrorMessage from "./ErrorMessage";
import { Controller } from "react-hook-form";

const TextArea = ({
  control,
  name,
  label,
  areaHeight = "h-36",
  errorMessage = "",
  isAutoFocus = false,
  isReadOnly = false,
}) => {
  return (
    <div className="form-row w-full">
      <label>{label}</label>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <textarea
            className={areaHeight + " form-new-input"}
            {...field}
            autoFocus={isAutoFocus}
            readOnly={isReadOnly}
          />
        )}
      />
      <ErrorMessage message={errorMessage} />
    </div>
  );
};

export default TextArea;
