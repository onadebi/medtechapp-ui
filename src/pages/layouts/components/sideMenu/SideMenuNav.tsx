import React from "react";
import TMenuModel from "../../../../models/TMenuModel";
import './sideMenuNav.scss';
import { NavLink } from "react-router-dom";

interface IProps {
  menu: TMenuModel;
}
const SideMenuNav: React.FC<IProps> = ({ menu }) => {
  return (
    <>
      <span className="menuModule">{menu && menu.displayName}</span>
      <ul className="sideSubMenu">
        {menu.menuActions.map((m) => (
          <li key={m.id}><NavLink to={m.uipath}>{m.displayName}</NavLink></li>
        ))}
      </ul>
    </>
  );
};

export default SideMenuNav;
