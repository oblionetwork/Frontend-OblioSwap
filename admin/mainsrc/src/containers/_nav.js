import React from "react";
import { BsCurrencyExchange } from "react-icons/bs";
import { SiAdblock } from "react-icons/si";
import { BsCurrencyDollar } from "react-icons/bs";
import { FaFlagCheckered } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import { VscTools } from "react-icons/vsc";
import { RiCurrencyLine } from "react-icons/ri";
import { CgMenuGridR } from "react-icons/cg";
import { IoFlower } from "react-icons/io5";
import { VscReferences } from "react-icons/vsc"
import { BsArrowLeftRight } from "react-icons/bs"
import { GiGroupedDrops } from "react-icons/gi"
import { BsBank2 } from "react-icons/bs"

const _nav = [
  {
    _tag: "CSidebarNavItem",
    name: "Currency Management",
    to: "/32Ygwi0SI34xf9e0CnspEA",
    icon: <BsCurrencyDollar style={{ marginRight: "1rem", Color: "white", width: "25px", height: "25px" }} />,
  },
  // {
  //   _tag: "CSidebarNavItem",
  //   name: "Liquidity",
  //   to: "/sgNkunyU4d8l8SR9TNaYcQ",
  //   icon: <BsCurrencyExchange style={{ marginRight: "1rem", width: "25px", height: "25px"}} />,
 // },
  {
    _tag: "CSidebarNavItem",
    name: "CMS",
    to: "/cms",
    icon: <VscTools style={{ marginRight: "1rem" , width: "25px", height: "25px"}} />,
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "History",
    icon: <FaHistory style={{ marginRight: "1rem" , width: "25px", height: "25px"}} />,
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Liquidity History",
        to: "/GeBjTFRSjTRvRsJPkkAI0FcTEw6YazYcBP9K6M",
        icon: (
          <GiGroupedDrops
            style={{ marginRight: "0.5rem", Color: "white", fontSize: "1.1rem", width: "25px", height: "25px" }}
          />
        ),
      },
      {
        _tag: "CSidebarNavItem",
        name: "Swap History",
        to: "/nYd2gLOTYBlkLQD32ra6g",
        icon: (
          <BsArrowLeftRight
            style={{ marginRight: "0.5rem", fontSize: "18px", Color: "white", width: "25px", height: "25px" }}
          />
        ),
      },
    ],
  },
  // {
  //   _tag: "CSidebarNavItem",
  //   name: "Blocklist",
  //   to: "/ahw8feGMqUwLvBZEDkDAQ",
  //   icon: <SiAdblock style={{ marginRight: "1rem" , width: "25px", height: "25px"}} />,
  // },
  {
    _tag: "CSidebarNavItem",
    name: "Whitelist",
    to: "/EGPa6kMKsf6rchOZy0kgVw",
    icon: (
      <FaFlagCheckered
        style={{ marginRight: "1rem", fontSize: "22px", marginLeft: "-5px", width: "25px", height: "25px" }}
      />
    ),
  },

];

export default _nav;
