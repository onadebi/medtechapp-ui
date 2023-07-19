import { Form, Button, Row, Col } from "react-bootstrap";
import { FormEvent, useState } from "react";
import FormContainer from "../../components/FormContainer";
import appRoutes from "../../routes/AppRoutes";
import { Link, useNavigate } from "react-router-dom";
import "./register.scss";
import TUserRegister from "../../models/TUserRegister";
import swal from "sweetalert";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { setCredentials } from "../../store/slices/authSlice";
import { useRegisterMutation } from "../../store/slices/apis/usersApiSlice";
import { StatusCode } from "../../models/GenResponse";
import Loader from "../../components/loader/Loader";

const Register = () => {
  const [userReg, setUserReg] = useState<TUserRegister>({
    firstName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [register, { isLoading }] = useRegisterMutation();

  const handleChange = (evt: FormEvent<HTMLInputElement>) => {
    evt.preventDefault();
    const name = evt.currentTarget.name;
    const value = evt.currentTarget.value;
    setUserReg((prev) => ({...prev, [name]: value}))
  };
  const submitHandler = async (e: FormEvent) => {
    e.preventDefault();
    if (
      userReg.firstName &&
      userReg.email &&
      userReg.password &&
      userReg.confirmPassword
    ) {
      if (userReg.password !== userReg.confirmPassword) {
        swal({
          text: "Passowrds don't match!",
          icon: "error",
        });
        return;
      } else {
        try {
          const resp = await register(userReg).unwrap();
          if (
            resp.isSuccess &&
            resp.statCode === Number(StatusCode.Created)
          ) {
            dispatch(setCredentials(resp.result));
          }
          toast.info(`Registration successful.`);
          navigate(appRoutes().home.home);
        } catch (error: any) {
          toast.error(error?.data?.Error || error?.data?.Message);
        }
      }
    } else {
      swal({
        text: "All fields are required.",
        icon: "error",
      });
    }
  };

  return (
    <FormContainer>
      <>
        <h1>Sign Up</h1>
        <Form onSubmit={submitHandler}>
          <Form.Group className="my-2" controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              required
              type="text"
              name="name"
              placeholder="Enter name"
              value={userReg.firstName}
              onChange={handleChange}
            ></Form.Control>
          </Form.Group>

          <Form.Group className="my-2" controlId="email">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              required
              type="email"
              name="email"
              placeholder="Enter Email"
              value={userReg.email}
              onChange={handleChange}
            ></Form.Control>
          </Form.Group>

          <Form.Group className="my-2" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              type="password"
              name="password"
              placeholder="Enter Password"
              value={userReg.password}
              onChange={handleChange}
            ></Form.Control>
          </Form.Group>

          <Form.Group className="my-2" controlId="confirmPassword">
            <Form.Label>Confirm password</Form.Label>
            <Form.Control
              required
              type="password"
              name="confirmpassword"
              placeholder="Confirm Password"
              value={userReg.confirmPassword}
              onChange={handleChange}
            ></Form.Control>
          </Form.Group>

          {isLoading && <Loader />}
          <Button
            type="submit"
            variant="primary"
            style={{ width: "100%" }}
            className="mt-3"
          >
            Register
          </Button>

          <Row className="py-3 login">
            <Col>
              Already have an account?{" "}
              <Link to={appRoutes().home.login}>Login</Link>
            </Col>
          </Row>
        </Form>
      </>
    </FormContainer>
  );
};

export default Register;
