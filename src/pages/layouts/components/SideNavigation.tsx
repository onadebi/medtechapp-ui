import { useEffect, useState } from "react";
import "./sideBar.scss";
import { storeService } from "../../../services/storeService";
import TMenuModel from "../../../models/TMenuModel";
import SideMenuNav from "./sideMenu/SideMenuNav";

interface IProps {
  menu: TMenuModel[] | null | undefined;
}

const SideNavigation: React.FC<IProps> = ({ menu }) => {
  const [userMenu, setUserMenu] = useState<TMenuModel[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (menu) {
      setUserMenu(menu);
      console.log(menu)
      setIsLoading(false);
    }
  }, [menu]);
  return (
    <aside>
      <h4>::Menu::</h4>
      {/* <ul className="menuList"> */}
        {isLoading && <span>Loading...</span>}
        {userMenu && userMenu.map((m) => <SideMenuNav key={m.id} menu={m}/>)}
      {/* </ul> */}
    </aside>
  );
};

export default SideNavigation;
