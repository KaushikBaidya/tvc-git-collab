import React from "react";
import ErrorMessage from "./ErrorMessage";
import { Controller } from "react-hook-form";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";

const QuillNoSSRWrapper = dynamic(import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

const modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
    ["clean"],
    [{ color: [] }, { background: [] }],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};

const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
  "color",
  "background",
];

const RichText = ({ control, name, label, errorMessage = "" }) => {
  return (
    <div className="form-row w-full">
      <label>{label}</label>
      <Controller
        control={control}
        name={name}
        rules={{ required: "Description is required" }}
        render={({ field }) => {
          return (
            <QuillNoSSRWrapper
              modules={modules}
              formats={formats}
              {...field}
              theme="snow"
            />
          );
        }}
      />
      <div className="mt-11">
        <ErrorMessage message={errorMessage} />
      </div>
    </div>
  );
};

export default RichText;
