import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'Overview',
    path: '/overview',
    // icon: <AiIcons.AiFillHome />,
    // iconClosed: <RiIcons.RiArrowDownSFill />,
    // iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Users',
        path: '/overview/users',
        // icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Revenue',
        path: '/overview/revenue',
        // icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Reports',
    path: '/reports',
    // icon: <IoIcons.IoIosPaper />,
    // iconClosed: <RiIcons.RiArrowDownSFill />,
    // iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Reports',
        path: '/reports/reports1',
        // icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Reports 2',
        path: '/reports/reports2',
        // icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Reports 3',
        path: '/reports/reports3',
        // icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Products',
    path: '/products',
    // icon: <FaIcons.FaCartPlus />
  },
  {
    title: 'Team',
    path: '/team',
    // icon: <IoIcons.IoMdPeople />
  },
  {
    title: 'Messages',
    path: '/messages',
    // icon: <FaIcons.FaEnvelopeOpenText />,

    // iconClosed: <RiIcons.RiArrowDownSFill />,
    // iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Message 1',
        path: '/messages/message1',
        // icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Message 2',
        path: '/messages/message2',
        // icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Support',
    path: '/support',
    // icon: <IoIcons.IoMdHelpCircle />
  }
];


export const InputDate = [
  {
    title: "First Name",
    subtitle: "fname",
    size: 4,
    type: "text",
    placeholder: "Enter First Name"

  },
  {
    title: "Middle Name",
    subtitle: "Mname",
    size: 4,
    type: "text",
    placeholder: "Enter Middle Name"
  },
  {
    title: "Last Name",
    subtitle: "Lname",
    size: 4,
    type: "text",
    placeholder: "Enter Last Name"


  },
  {
    title: "SSN",
    subtitle: "ssn",
    size: 4,
    type: "text",
    placeholder: "Enter SSN"


  }, {
    title: "Date of Birth",
    subtitle: "DOB",
    size: 4,
    type: "date"
  },
  {
    title: "Address",
    subtitle: "Address",
    size: 4,
    type: "text",
    placeholder: "Enter Address"

  },
  {
    title: "City",
    subtitle: "City",
    size: 4,
    type: "text",
    placeholder: "Enter City"

  },
  {
    title: "State",
    subtitle: "State",
    size: 4,
    type: "text",
    placeholder: "Enter State"

  },
  {
    title: "Zip",
    subtitle: "Zip",
    size: 4,
    type: "text",
    placeholder: "Enter Zip"

  },
  {
    title: "Mobile Phone",
    subtitle: "Mobile_Phone",
    size: 4,
    type: "text",
    placeholder: "Enter Mobile Number"

  }
]

export const SecondFive = [

  {
    title: "Email Address",
    subtitle: "Email",
    size: 4,
    type: "text",
    placeholder: "Enter Email Address"

  },
  {
    title: "Driver’s License",
    subtitle: "Driver_License",
    size: 4,
    type: "text",
    placeholder: "Enter Driver’s License"

  },
  // {
  //   title: "Occupation",
  //   subtitle: "Occupation",
  //   size: 4,
  //   type: "text",
  //   placeholder: "Enter Occupation"

  // },
]

export const checkBoxDataList = [
  "Work", "Home", "Spouse", "Other"
]

export const Filling_Status = ["Single", "Married Filling Jointly", "Married Filing Separately", "Head of Household"]

export const FreeLookRequested_list = [
  "Yas", "No"
]

export const ItemizedAccordion_List = [
  "Medical/Dental","Taxes & Interest","Gifts to Charity","Military Expenses","Miscellaneous Deduction",
  "Daycare","Note",
];

export const Medical_Dental_Input_List = [

  {
    title: "Dental Exp",
    subtitle: "Dental_Exp",
    size: 4,
    type: "text",
    placeholder: "Enter Dental Exp"

  },
  {
    title: "Health Ins (Post Tax)",
    subtitle: "Health_Ins",
    size: 4,
    type: "text",
    placeholder: "Enter Health Ins"

  },
  {
    title: "Prescription Cost",
    subtitle: "Prescription_Cost",
    size: 4,
    type: "text",
    placeholder: "Enter Prescription Cost"

  },
  {
    title: "Medical Exp",
    subtitle: "Medical_Exp",
    size: 4,
    type: "text",
    placeholder: "Enter Medical Exp"

  }, {
    title: "Dental Ins (Post Tax)",
    subtitle: "Dental_Ins",
    size: 4,
    type: "text",
    placeholder: "Enter Dental Ins"

  }
]

