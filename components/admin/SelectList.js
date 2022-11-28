import React from "react";
import { Controller } from "react-hook-form";
import { useGetData } from "../../hooks/DataApi";
import ErrorMessage from "./ErrorMessage";

export const SelectFromDb = ({
  control,
  label,
  path,
  name,
  errorMessage,
  isDisabled = false,
}) => {
  const { data: lists } = useGetData(label, path);
  return (
    <div className="form-row w-full">
      <label>{label}</label>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <select
            className={
              "form-control " +
              (isDisabled === true ? "bg-gray-100" : "bg-white")
            }
            {...field}
            disabled={isDisabled}
          >
            <option value="">-- Select --</option>
            {lists?.data.map((item) => (
              <option key={item.listId} value={item.listId}>
                {item.listName}
              </option>
            ))}
          </select>
        )}
      />
      <ErrorMessage message={errorMessage} />
    </div>
  );
};

export const SelectFromOptions = ({
  register,
  options,
  label,
  name,
  errorMessage,
  ...rest
}) => {
  return (
    <div className="form-row w-full">
      <label>{label}</label>
      <select className="form-control bg-white" {...register(name)} {...rest}>
        <option value="">-- Select --</option>
        {options.map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
      <ErrorMessage message={errorMessage} />
    </div>
  );
};

export const DataListFromDb = ({
  register,
  label,
  path,
  name,
  errorMessage,
  isDisabled = false,
  autoFocus = false,
}) => {
  const { data: lists } = useGetData(label, path);
  return (
    <div className="form-row w-full">
      <label>{label}</label>

      <input
        list="browsers"
        {...register(name)}
        className={
          "form-control " + (isDisabled === true ? "bg-gray-100" : "bg-white")
        }
        autoFocus={autoFocus}
      />
      <datalist id="browsers">
        {lists?.data.map((item) => (
          <option key={item.listId} value={item.listName} />
        ))}
      </datalist>

      <ErrorMessage message={errorMessage} />
    </div>
  );
};

export const SelectAllFromDb = ({
  control,
  label,
  path,
  name,
  errorMessage,
  isDisabled = false,
}) => {
  const { data: lists } = useGetData(label, path);
  return (
    <div className="form-row w-full">
      <label>{label}</label>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <select
            className={
              "form-control " +
              (isDisabled === true ? "bg-gray-100" : "bg-white")
            }
            {...field}
            disabled={isDisabled}
          >
            <option value="All">-- All --</option>
            {lists?.data.map((item) => (
              <option key={item.listId} value={item.listId}>
                {item.listName}
              </option>
            ))}
          </select>
        )}
      />
      <ErrorMessage message={errorMessage} />
    </div>
  );
};
