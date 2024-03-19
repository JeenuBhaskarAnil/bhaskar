import { useEffect } from "react";

export default function Logout(){
    useEffect(() => {
        alert('Logged Out!')
        localStorage.removeItem('username')
        window.location.href='/'
    }, [])
}