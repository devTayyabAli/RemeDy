import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TextFieled from "../Input/TextFieled";
import Grid from "@mui/material/Grid";
import { Medical_Dental_Input_List } from "../../db/Data";

export default function ShowAccordion({ item, index, handleChange }) {
  return (
    <div>
      <Accordion
        sx={{ backgroundColor: "#EBEFF9" }}
        defaultExpanded={index === 0 ? true : false}
      >
        <AccordionSummary
          key={index}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          {item}
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={2}>
            {Medical_Dental_Input_List?.map((items, index) => {
              return (
                <>
                  <Grid item xs={12} lg={4} key={index}>
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
          </Grid>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
