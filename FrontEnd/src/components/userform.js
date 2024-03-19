import {useState} from "react";
import axios from 'axios';
const UserForm = () => {
    const[formdata,setFormdata]=useState({
        "username" : '',
        "password" : ''
    })
    const handlesubmit=(e)=>{
        e.preventDefault();
        console.log(formdata)
        axios.post('http://localhost:4222/addstud', formdata)
        .then((result)=>console.log(result))
    }   
    return(
        <div>
            <h1>forms</h1>
            <form onSubmit={handlesubmit}>
                <label>User Name : </label>
                <input type="text" name="username" onChange={(e)=>setFormdata({...formdata,username:e.target.value})}/>
                <br/>
                <label>Password : </label>
                <input type="text" name="password" onChange={(e)=>setFormdata({...formdata,password:e.target.value})}/>
                <br/>
                
                <input type="submit" value="submit"/>
            </form>
        </div>
    )
}
export default UserForm;