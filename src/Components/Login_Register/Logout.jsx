import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext/UserContext";

const Logout = () => {
    const navigate = useNavigate();
    const {logout} = useContext(UserContext)

    useEffect(()=>{

        localStorage.removeItem('token')
        logout()
        navigate("/")

    }, [navigate])


    return null;
}

export default Logout