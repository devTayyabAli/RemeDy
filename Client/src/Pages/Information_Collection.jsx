import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import ShareTable from "../Components/Table/Table";
import { RiEdit2Line } from "react-icons/ri";
import { MdOutlineRemoveRedEye } from "react-icons/md";

const columns = [
  {
    dataField: "Number",
    text: "Sr#.",
    sort: false,
  },
  {
    dataField: "Business_name",
    text: "Business name",
    sort: false,
  },
  {
    dataField: "Date",
    text: "Date",
    sort: false,
  },

  {
    dataField: "Form_Type",
    text: "Form Type",
    sort: false,
  },
  {
    dataField: "Status",
    text: "Status ",
    sort: false,
  },
  {
    dataField: "Comments",
    text: "Comments",
    sort: false,
  },
  {
    dataField: "Action",
    text: "Action",
    sort: false,
  },
];
const row = [
  {
    Number: "1",
    Date: "12-06-12",
    Business_name: "@1234",
    Income: "$500",
    Form_Type: "Form ID",
    Action: (
      <div>
      <button className="bg-[#0B2558] text-[#fff] py-1 px-2 text-[18px] rounded-xl ">
        <RiEdit2Line />
      </button>
      <button className="bg-[#00ADEF] text-[#fff] py-1 px-2 text-[18px] rounded-xl ml-2">
        <MdOutlineRemoveRedEye />
      </button>
    </div>
    ),
    Comments: "12",
    On_Amount: "50k",
    Status: (
      <>
        <button className=" bg-[#6bd5ff] bg-opacity-25 px-3 py-2 rounded-full text-[#0095CE]  ">
          Data Entry
        </button>
      </>
    ),
    Activation_Date: "12-07-2024",
  },
  {
    Number: "1",
    Date: "12-06-12",
    Business_name: "@1234",
    Income: "$500",
    Form_Type: "Form ID",
    Action: (
      <div>
        <button className="bg-[#0B2558] text-[#fff] py-1 px-2 text-[18px] rounded-xl ">
          <RiEdit2Line />
        </button>
        <button className="bg-[#00ADEF] text-[#fff] py-1 px-2 text-[18px] rounded-xl ml-2">
          <MdOutlineRemoveRedEye />
        </button>
      </div>
    ),
    Comments: "12",
    On_Amount: "50k",
    Status: (
      <button className=" bg-[#F4B81B] bg-opacity-25 px-3 py-2 rounded-full text-[#D09600]  ">
        Data Entry
      </button>
    ),
    Activation_Date: "12-07-2024",
  },
];

export default function Information_Collection() {
  const [dataArray, setdataArray] = useState([]);

  return (
    <div className="pt-10">
      <Card className="p-3">
        <div className="flex justify-between">
          <div className="flex items-center">
            <div className="w-[16px] h-[32px] bg-[#00ADEF] rounded"></div>
            <h2 className="ml-2 text-[#1B1B1B] text-[14px] md:text-[20px] font-[600] ">
              Information Collection
            </h2>
          </div>
          <button className="bg-[#00ADEF] md:text-[14px] w-auto md:w-auto  text-[12px] px-1 py-1  md:px-4 md:py-4 text-white  rounded">
            Add New Business
          </button>
        </div>
        <div>
          <ShareTable columns={columns} Data={row} />
        </div>
      </Card>
    </div>
  );
}
