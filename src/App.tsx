import {RouterProvider} from 'react-router-dom';
import AppRouter from './routes/AppRouter';
import { ToastContainer } from "react-toastify";
import 'react-toastify/ReactToastify.min.css';

const App = () => {
  return (
    <>
      <ToastContainer/>
      <RouterProvider router={AppRouter}/>
    </>
  );
};

export default App;
