import React from "react";
import Card from "@mui/material/Card";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Prep_Sheet from "./Prep_Sheet";
import Itemized_Deductions from "./Itemized_Deductions";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Personal_Collection() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="pt-3">
      <Card className="pt-2 pl-4 pr-4 pb-2">
        <h2 className="text-[#0B2558] text-[24px] font-[600] ">
          Personal Collection
        </h2>

        <div className="pt-2">
          <Box sx={{ width: "100%" }}>
            <Box>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab label="Prep Sheet" {...a11yProps(0)} />
                <Tab label="Itemized Deductions" {...a11yProps(1)} />
              </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
              <Prep_Sheet setValue={setValue} />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              <Itemized_Deductions />
            </CustomTabPanel>
          </Box>
        </div>
      </Card>
    </div>
  );
}
