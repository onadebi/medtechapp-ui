import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import { Container } from "react-bootstrap";


const PublicLayout = () => {
  return (
    <>
      <Header />
      <Container className='my-2'>
        <Outlet />
      </Container>
    </>
  );
};

export default PublicLayout;
