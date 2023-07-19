import { Form, Button, Row, Col } from "react-bootstrap";
import { FormEvent, useState, useEffect, useRef } from "react";
import FormContainer from "../../components/FormContainer";
import appRoutes from "../../routes/AppRoutes";
import { useDispatch, useSelector } from "react-redux";
import { setCredentials } from "../../store/slices/authSlice";
// import { useLoginMutation } from "../../store/slices/apis/usersApiSlice";
import { Link, useNavigate } from "react-router-dom";
import { RootState } from "../../store/RootReduces";
import { toast } from "react-toastify";
import "./login.scss";
import Loader from "../../components/loader/Loader";
import IUserLoginReq from "../../models/IUserLoginReq";
import TUserLoginResp from "../../models/TUserLoginResp";
import { storeService } from "../../services/storeService";
import { StatusCode } from "../../models/GenResponse";

const Login = () => {
  const [userLogin, setUserLogin] = useState<IUserLoginReq>({
    email: "",
    password: "",
  });
  const [error, setError] = useState<string|null>(null);

  const usernameInputRef = useRef<HTMLInputElement>(null);
  const submitBtnRef = useRef<HTMLButtonElement>(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  // const [login, { isLoading }] = useLoginMutation();

  const { userInfo } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    if (usernameInputRef.current) {
      usernameInputRef.current.focus();
    }
    if (userInfo) {
      navigate(appRoutes().dashboard.dashboard, { preventScrollReset: false });
    }
  }, [navigate, userInfo]);

  const handleChange = (evt: FormEvent<HTMLInputElement | HTMLFormElement>) => {
    evt.preventDefault();
    const name = evt.currentTarget.name;
    const _value = evt.currentTarget.value;
    setUserLogin((prev: IUserLoginReq) => {
      return {
        ...prev,
        [name]: _value,
      };
    });
  };

  const submitHandler = async (e: FormEvent) => {
    setError(null);
    setIsLoading(true);
    e.preventDefault();
    if (submitBtnRef.current) {
      submitBtnRef.current.disabled = true;
    }
    try {
      // const res = await login(userLogin).unwrap();
      const resp = await storeService.userService.login(userLogin);
      if(resp && resp.isSuccess && resp.statCode === StatusCode.OK)
      {
          dispatch(
          setCredentials(resp?.result as object as TUserLoginResp)
        );
        toast.success('Sucessfully logged in.');
        navigate(appRoutes().dashboard.dashboard);
      }else{
        setError(resp.error);
      }
    } catch (error: unknown) {
      toast.error(error?.data || error?.data.IsSuccess, {
        autoClose: 1000 * 7,
      });
      setError(error?.data.Error);
    }finally{
      setIsLoading(false);
      if (submitBtnRef.current) {
        submitBtnRef.current.disabled = false;
      }
    }
  };

  return (
    <FormContainer>
      <>
        <h1>Sign In</h1>
        {error && (<section className="text-center alert alert-danger ">{error}</section>)}
        <Form onSubmit={submitHandler}>
          <Form.Group className="my-2" controlId="email">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              required
              type="email"
              placeholder="Enter Email"
              name="email"
              defaultValue={userLogin.email}
              onChange={handleChange}
              ref={usernameInputRef}
            ></Form.Control>
          </Form.Group>

          <Form.Group className="my-2" controlId="password">
            <Form.Label>Password Address</Form.Label>
            <Form.Control
              required
              type="password"
              placeholder="Enter Password"
              name="password"
              value={userLogin.password}
              onChange={handleChange}
            ></Form.Control>
          </Form.Group>
          {isLoading ? (
            <Loader />
          ) : (
            <Button
              type="submit"
              variant="primary"
              style={{ width: "100%" }}
              className="mt-3"
              ref={submitBtnRef}
            >
              Sign in
            </Button>
          )}

          <Row className="py-3 register">
            <Col>
              New Customer? <Link to={appRoutes().home.register}>Register</Link>
            </Col>
          </Row>
        </Form>
      </>
    </FormContainer>
  );
};

export default Login;
