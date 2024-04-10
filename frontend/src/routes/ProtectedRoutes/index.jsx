import { useEffect } from "react"
import { useSelector } from "react-redux"
import { Outlet, useNavigate } from "react-router-dom"

export const ProtectedRoutes = () => {
    const accessToken = useSelector((store) => store.loggedInUser.accessToken)
    const navigate = useNavigate()

    useEffect(() => {
        if (accessToken === null || accessToken === undefined) {
        navigate('/');
        }
    }, [accessToken, navigate])


return (
  <>
    <h1>ProtectedRoutes</h1>
    {/* Need to create a navigation directory/folder */}
    {/* <Navigation /> */}
    <Outlet />
  </>
)
};


export default ProtectedRoutes