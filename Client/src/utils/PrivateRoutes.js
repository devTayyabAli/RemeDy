import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom'

const PrivateRoutes = () => {
    const isuser = useSelector((state) => state.Auth.isAuth);
    console.log('PrivateRoutes', isuser)

    return (
        <div className='bg_Dashboar'>
            {

                !isuser ? <Navigate to="/" /> : <Outlet />
            }
        </div>
    )
}

export default PrivateRoutes