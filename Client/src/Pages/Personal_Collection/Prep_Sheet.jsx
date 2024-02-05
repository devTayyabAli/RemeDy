import React, { useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import TextFieled, {
  MultiCheckBox,
  TextFieledButton,
  TextFieledCheckBox,
} from "../../Components/Input/TextFieled";
import {
  Filling_Status,
  FreeLookRequested_list,
  InputDate,
  SecondFive,
  checkBoxDataList,
} from "../../db/Data";
import { IoAddOutline } from "react-icons/io5";
import Button, { IconButton } from "../../Components/Button/Button";

export default function Prep_Sheet({setValue}) {
  const [getValue, setgetValue] = useState([]);
  const [checkedBox, setCheckedBox] = React.useState("");
  const handleChange = (event) => {
    const { name, value } = event.target;
    setgetValue({ ...getValue, [name]: value });
  };
  const handleChecked = (items) => {
    console.log("name", items);
    setCheckedBox(items);
  };
  return (
    <div>
      <h4 className="text-[#0B2558] text-[18px] font-[500] pt-2 ">
        Basic Information
      </h4>
      <div className="pt-3">
        <Grid container spacing={2}>
          {InputDate.map((items, index) => {
            return (
              <>
                <Grid item xs={12} lg={items.size} key={items}>
                  <TextFieled
                    title={items.title}
                    names={items?.subtitle}
                    handleChange={handleChange}
                    placeholder={items.placeholder}
                    type={items.type}
                  />
                </Grid>
              </>
            );
          })}
           <Grid item xs={12} lg={8}>
            <TextFieledCheckBox
              title="Alternate #"
              size={"8"}
              names="Alternate"
              checkboxSize="340px"
              placeholder="Enter Alternate"
              handleChecked={handleChecked}
              checkboxList={checkBoxDataList}
              checkedBox={checkedBox}
            />
          </Grid>
          {SecondFive.map((items, index) => {
            return (
              <>
                <Grid item xs={12} lg={items.size} key={items}>
                  <TextFieled
                    title={items.title}
                    names={items?.subtitle}
                    handleChange={handleChange}
                    placeholder={items.placeholder}
                    type={items.type}
                  />
                </Grid>
              </>
            );
          })}
          <Grid item xs={12} lg={4}>
            <TextFieledButton
              title="DL Issue by State"
              names="DL_Issue_State"
              placeholder="Enter"
              handleChecked={handleChecked}
            />
          </Grid>
          <Grid item xs={12} lg={4}>
            <TextFieled
              title="Occupation"
              names="occupation"
              handleChange={handleChange}
              placeholder="Enter your Occupation"
              type="text"
            />
          </Grid>
          <Grid item xs={12} lg={8}>
            <div className="flex gap-2 items-center">
              <span className="text-[#1B1B1B] text-[14px] font-[600] w-25 ">
                Filing Status
              </span>
              <MultiCheckBox
                title="Occupation"
                names="occupation"
                handleChecked={handleChecked}
                placeholder="Enter your Occupation"
                type="text"
                checkboxList={Filling_Status}
                checkedBox={checkedBox}
              />
            </div>
          </Grid>
          <Grid item xs={12} lg={5}>
            <div className="flex gap-0 items-center">
              <span className="text-[#1B1B1B] text-[14px] font-[600]  ">
                Free Look Requested (Years)
              </span>
              <MultiCheckBox
                title="Occupation"
                names="occupation"
                handleChecked={handleChecked}
                placeholder="Enter your Occupation"
                type="text"
                checkboxList={FreeLookRequested_list}
                checkedBox={checkedBox}
              />
            </div>
          </Grid>


        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} lg={4} className="mt-2">
            <TextFieledCheckBox
              title="IRS IP PIN"
              size={"8"}
              names="IRS_IP_PIN"
              checkboxSize="150px"
              placeholder="Enter IRS IP PIN"
              handleChecked={handleChecked}
              checkboxList={FreeLookRequested_list}
              checkedBox={checkedBox}
            />
          </Grid>
        </Grid>
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <div className="flex justify-center items-center mt-3 gap-2">
            <IconButton
              text="Add spouse"
              Size="14px"
              backgroundColor="#00adef"
              padding="14px 14px"
              boderR="10px"
              color="#fff"
              icon={
                <>
                  <IoAddOutline className="text-base text-white" />
                </>
              }
              gap="8px"
            />
            <IconButton
              text="Add dependent"
              Size="14px"
              backgroundColor="#00adef"
              padding="14px 14px"
              boderR="10px"
              color="#fff"
              icon={
                <>
                  <IoAddOutline className="text-base text-white" />
                </>
              }
              gap="8px"
            />
          </div>
          <div className="mt-3">
            <Button
              text="Next"
              Size="18px"
              backgroundColor="#0B2558"
              padding="15px 25px"
              boderR="10px"
              color="#fff"
              onClick={setValue}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
