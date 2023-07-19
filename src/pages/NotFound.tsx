
import { Link } from 'react-router-dom'
import appRoutes from '../routes/AppRoutes'


const NotFound = () => {
  return (
    <>
        <h2>Not Found</h2>
        <span>Oops - seems we are unable to locate what you are looking for at this time.</span>

        <span><Link to={appRoutes().home.home}>Return to home</Link></span>

        <span>You can report this by <a href="mailto:contact-us@onadebi.com" rel='noreferrer' target={'_blank'}>sending me an email</a> or <Link to={appRoutes().home.home}>contact us</Link></span>
    </>
  )
}

export default NotFound