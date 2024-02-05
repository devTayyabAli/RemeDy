import React, { useState } from "react";
import { ItemizedAccordion_List } from "../../db/Data";
import ShowAccordion from "../../Components/accordion/Accordion";
import Button from "../../Components/Button/Button";

export default function Itemized_Deductions() {
  const [getInputData, setGetInputData] = useState([]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setGetInputData({ ...getInputData, [name]: value });
  };
  return (
    <div>
      <h4 className="text-[#0B2558] text-[18px] font-[500] pt-2 ">
        Itemized Deduction
      </h4>

      <div className="flex flex-col justify-start gap-1 mt-3">
        {ItemizedAccordion_List.map((item, index) => (
          <ShowAccordion
            item={item}
            key={index}
            index={index}
            handleChange={handleChange}
          />
        ))}
      </div>
      <div className="flex justify-end mt-5">
        <Button
          text="Save"
          Size="18px"
          backgroundColor="#0B2558"
          padding="15px 25px"
          boderR="10px"
          color="#fff"
          onClick={()=>alert("All data is Save Successfully")}
        />
      </div>
    </div>
  );
}
