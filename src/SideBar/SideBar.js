import React from "react";
import "./SideBar.css";
import {
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsFillGearFill,
} from "react-icons/bs";

function Sidebar({ openSidebarToggle,OpenSidebar}) {
  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : "sidebar-hide"}
    >
      <div className='sidebar-title'>
        <div></div>
        <span className='icon close_icon' onClick={OpenSidebar}>X</span>
      </div>
      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <BsGrid1X2Fill className="icon" /> Dashboard
        </li>
        <li className="sidebar-list-item">
          <BsFillArchiveFill className="icon" /> Transactions
        </li>
        <li className="sidebar-list-item">
          <BsFillGrid3X3GapFill className="icon" /> Accounts
        </li>
        <li className="sidebar-list-item">
          <BsPeopleFill className="icon" /> Debts
        </li>
        <li className="sidebar-list-item">
          <BsFillGearFill className="icon" /> Setting
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
