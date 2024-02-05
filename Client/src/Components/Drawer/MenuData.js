
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

import { HiReceiptTax } from "react-icons/hi";
import { LuUpload } from "react-icons/lu";
import { PiBookOpenTextBold } from "react-icons/pi";
import { FiDownload } from "react-icons/fi";
import { FaUserGroup } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { RiLogoutCircleRLine } from "react-icons/ri";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import { GoDotFill } from "react-icons/go";
import { LuClipboardList } from "react-icons/lu";



export let MenuShow = [
  {
    "title": "Dashboard",
    "className": "nav-link",
    "path": "/dashBoard",
    "icon": <><GridViewRoundedIcon /></>

  },
  {
    "title": "Information collection",
    "className": "nav-link",
    "path": "/dashBoard",
    "icon": <><LuClipboardList style={{fontSize:"20px"}} /></>,
    subNav: [
      {
        title: 'Personal Collection',
        path: '/dashBoard/Personal_Collection',
        "icon": <><GoDotFill style={{fontSize:"18px"}} /></>,
      },
      {
        title: 'Business Collection',
        path: '/',
        "icon": <><GoDotFill style={{fontSize:"18px"}} /></>,
      }
    ]
  },
  {
    "title": "Upload tax docs",
    "className": "nav-link",
    "path": "/",
    "icon": <><LuUpload style={{fontSize:"20px"}} /></>
  },
  {
    "title": "Review & Submission",
    "className": "nav-link",
    "path": "/",
    "icon": <><PiBookOpenTextBold style={{fontSize:"20px"}} /></>
  },
  {
    "title": "Submit & download tax docs",
    "className": "nav-link",
    "path": "/",
    "icon": <><FiDownload style={{fontSize:"20px"}} /></>
  },
  {
    "title": "Tax return",
    "className": "nav-link",
    "path": "/",
    "icon": <><HiReceiptTax style={{fontSize:"20px"}} /></>
  },
  {
    "title": "Formation Services",
    "className": "nav-link",
    "path": "/",
    "icon": <><FaUserGroup style={{fontSize:"20px"}} /></>
  }, {
    "title": "Settings",
    "className": "nav-link",
    "path": "/",
    "icon": <><IoSettingsOutline style={{fontSize:"20px"}} /></>
  }, {
    "title": "Logout",
    "className": "nav-link",
    "path": "/",
    "icon": <><RiLogoutCircleRLine style={{fontSize:"20px"}} /></>
  }
]


