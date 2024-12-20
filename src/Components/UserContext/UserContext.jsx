import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [user, setUser] = useState(null);

    useEffect(()=>{
        const token = localStorage.getItem('token')
        if(token){
            fetchUser(token)
        }
    }, [])

    const fetchUser = async (token) => {
        try{
            const response = await fetch('http://localhost:5050/Users/me', {
                method: 'GET',
                headers:{
                  'Content-Type': 'application/json',
                   Authorization: `Bearer ${token}`
                }
            })

            if(!response.ok){
                const errorData = response.json();
                console.log(errorData);
                alert("Error in response.")
            }

            const userData = await response.json()
            console.log(userData)
            setUser(userData)
        }catch(error){
            console.log(error)
            alert("Error in catch.")
        }
    }

    const login = async (token) => {
        localStorage.setItem("token", token)
        fetchUser(token)
    }

    const logout = () => {
        setUser(null);
        localStorage.removeItem('token');
    }

    return(
        <UserContext.Provider value={{user, login, logout}}>
            {children}
        </UserContext.Provider>
    );
}