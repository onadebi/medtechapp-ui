import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { FaSignOutAlt, FaSignInAlt } from "react-icons/fa";
import appRoutes from "../routes/AppRoutes";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/RootReduces";
import { logout } from "../store/slices/authSlice";
import { FormEvent } from "react";
import {toast} from 'react-toastify';
import { useLogoutMutation } from "../store/slices/apis/usersApiSlice";
import { storeService } from "../services/storeService";

const Header = () => {
  const { userInfo } = useSelector((state: RootState) => state.auth);
  const [logoutApiCall] = useLogoutMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = async (evt: FormEvent) => {
    evt.preventDefault();
    try {
      // await logoutApiCall(null).unwrap();
      await storeService.userService.logout();
      dispatch(logout());
      toast.success('Successfully logged out',{autoClose: 3000})
      navigate(appRoutes().home.home);
    } catch (error: any) {
      toast.error(error?.data.Error || error?.data.Message)
    }
  };

  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Link to={appRoutes().home.home} className="navbar-brand">
            HospiMan
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {!userInfo ? (
                <>
                <Link to={appRoutes().home.login} className="nav-link">
                  <FaSignInAlt style={{ color: "orange" }} /> Sign In
                </Link>
                <Link to={appRoutes().home.register} className="nav-link">
                  <FaSignOutAlt style={{ color: "orange" }} /> Sign Up
                </Link>
                </>
              ) : (
                <NavDropdown title={userInfo?.firstName} id="username" menuVariant="dark">
                  <NavDropdown.Item onClick={() => navigate(appRoutes().dashboard.dashboard)}>Dashboard</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => navigate(appRoutes().dashboard.profile)}>Profile</NavDropdown.Item>
                  <NavDropdown.Item onClick={(e) => handleLogout(e)}>
                      Logout <FaSignInAlt style={{ color: "orange" }} />
                  </NavDropdown.Item>
                </NavDropdown>
              )}

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
