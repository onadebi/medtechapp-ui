import Header from "../../components/Header";
import ProtectedRoute from "../../routes/ProtectedRoute";
import { Outlet } from "react-router-dom";
import SideNavigation from "./components/SideNavigation";
import "./protectedLayout.scss";
import { useEffect, useState } from "react";
import { storeService } from "../../services/storeService";
import GenResponse from "../../models/GenResponse";
import TMenuModel from "../../models/TMenuModel";
// import { useDispatch, useSelector } from "react-redux";
// import { RootState } from "../../store/RootReduces";

const ProtectedLayout = () => {
  const [menu, setMenu] = useState<GenResponse<TMenuModel[]>|null>(null);
  // const allMenu = useSelector((state: RootState)=> state.menu);
  // const dispatch = useDispatch();

  useEffect(() => {
    storeService.menuService.getAllMenu()
    .then((data)=>{
      setMenu(data)
    }).catch((err: Error) => console.log(`MenuError: ${err.message}`))
  }, []);
  return (
    <ProtectedRoute>
      <>
        <Header />
        <div className="wrapper">          
          <SideNavigation menu={menu?.result} />
          <section className="outlet">
            <Outlet />
          </section>
        </div>
      </>
    </ProtectedRoute>
  );
};

export default ProtectedLayout;
