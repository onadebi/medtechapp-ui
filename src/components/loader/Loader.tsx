import { Spinner } from 'react-bootstrap';
import './loader.scss';

const Loader = () => {
  return (
    <Spinner animation='grow' 
    aria-roledescription='status' className='spinner'></Spinner>
  )
}

export default Loader;