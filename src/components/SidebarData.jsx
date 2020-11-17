import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";
import * as AiIcons from "react-icons/ai";

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome/>,
    cName:'nav-text'
  },
  {
    title: 'Reports',
    path: '/report',
    icon: <IoIcons.IoIosPaper/>,
    cName:'nav-text'
  },
  {
    title: 'Products',
    path: '/product',
    icon: <FaIcons.FaCartPlus/>,
    cName:'nav-text'
  },
  {
    title: 'Team',
    path: '/team',
    icon: <IoIcons.IoMdPeople/>,
    cName:'nav-text'
  },
  {
    title: 'Messages',
    path: '/message',
    icon: <FaIcons.FaEnvelopeOpenText/>,
    cName:'nav-text'
  },
  {
    title: 'Support',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle/>,
    cName:'nav-text'
  },
]