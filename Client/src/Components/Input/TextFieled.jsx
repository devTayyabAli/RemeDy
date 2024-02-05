import React from "react";
import { TextField, Checkbox } from "@mui/material";
import styled from "styled-components";
import { FaCloudUploadAlt } from "react-icons/fa";
import { IconButton } from "../Button/Button";

export default function TextFieled({
  title,
  handleChange,
  names,
  type,
  placeholder,
}) {
  return (
    <div>
      <TextField
        id="outlined-basic"
        label={title}
        variant="outlined"
        name={names}
        fullWidth
        size="medium"
        focused
        onChange={handleChange}
        placeholder={placeholder}
        type={type}
      />
    </div>
  );
}
export const TextFieledCheckBox = ({
  checkboxSize,
  checkboxList,
  title,
  handleChange,
  names,
  type,
  placeholder,
  handleChecked,
  checkedBox,
}) => {
  return (
    <div className="relative">
      <TextField
        label={title}
        placeholder={placeholder}
        size="medium"
        sx={{ width: "100%" }}
        focused
        fullWidth
        name={names}
        onChange={handleChange}
        type={type}
      />
      <div
        style={{ width: checkboxSize }}
        className={`absolute right-[6px] top-[6px] hidden md:flex justify-between items-center border-1 border-[#00000080] rounded-[7px]`}
      >
        <div className="flex items-center">
          {checkboxList.map((items, index) => (
            <div key={items} className="flex items-center">
              <Checkbox
                onChange={() => handleChecked(items)}
                checked={checkedBox == items ? true : false}
              />
              <span className="text-[#1B1B1B] text-[14px] font-[400] ">
                {items}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const TextFieledButton = ({
  title,
  handleChange,
  names,
  type,
  placeholder,
  button,
}) => {
  return (
    <div className="relative">
      <TextField
        label={title}
        placeholder={placeholder}
        size="medium"
        name={names}
        focused
        onChange={handleChange}
        type={type}
        fullWidth
      />
      <div className="absolute top-[10px] right-[10px] ">
        <IconButton
          text="Upload DL Document"
          Size="14px"
          backgroundColor="#00adef"
          padding="8px 14px"
          boderR="10px"
          color="#fff"
          icon={
            <>
              <FaCloudUploadAlt className="text-base text-white" />
            </>
          }
          gap="8px"
        />
      </div>
    </div>
  );
};

export const MultiCheckBox = ({
  title,
  handleChange,
  names,
  type,
  placeholder,
  checkboxList,
  checkedBox,
  handleChecked,
}) => {
  return (
    <div className="">
      <div
        // style={{ width: checkboxSize }}
        className={`md:flex justify-between items-center`}
      >
        <div className="flex md:items-center md:flex-row items-start flex-col">
          {checkboxList.map((items, index) => (
            <div key={items} className="flex items-center">
              <Checkbox
                onChange={() => handleChecked(items)}
                checked={checkedBox == items ? true : false}
              />
              <span className="text-[#1B1B1B] text-[14px] font-[400] ">
                {items}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const Input = ({
  label,
  placeHolder,
  defaultValue,
  id,
  size,
  width,
  value,
  valueSetter,
  ...otherProps
}) => {
  return (
    <TextField
      label={label}
      placeholder={placeHolder}
      id={id}
      size={size}
      value={value}
      defaultValue={defaultValue}
      sx={{ width: width }}
      onChange={(e) => valueSetter && valueSetter(e.target.value)}
      focused
      {...otherProps}
    />
  );
};
