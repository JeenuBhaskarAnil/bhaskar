import { useState } from "react";
import axios from "axios";
function Addproduct(){
    const[formdata,setFormdata]=useState({
        'name':'',
        'price':'',
        'category':'',
        'productpic':'',
        'description' : ''
    })
    // console.log(formdata);
    let backend_api="http://localhost:4222/addproduct"
    const handlesubmit=(e)=>{
        const Inputfields=new FormData()
        Inputfields.append('myfile',formdata.productpic)
        Inputfields.append('name',formdata.name)
        Inputfields.append('price',formdata.price)
        Inputfields.append('category',formdata.category)
        Inputfields.append('description',formdata.description)
        
        e.preventDefault();
        axios.post(backend_api,Inputfields).then((res)=>{
            console.log(res)
            if(res.status===200){
                alert("success")
            }
        })
        
    }
    return(
        <div>
            <h1>User Form</h1>
            <form onSubmit={handlesubmit} action="post">
            <label>Item Name: </label>
                <input type="text"  name="name" value={formdata.name} onChange={(e)=>setFormdata({...formdata,name:e.target.value})}/>
                <br/>
                <label>Price: </label>
                <input type="text"  name="price" value={formdata.price} onChange={(e)=>setFormdata({...formdata,price:e.target.value})}/>
                <br/>
                <label>Category: </label>
                <input type="text"  name="category"  value={formdata.category} onChange={(e)=>setFormdata({...formdata,category:e.target.value})}/>
                <br/>
                <label>Description: </label>
                <input type="textarea"  name="description"  value={formdata.description} onChange={(e)=>setFormdata({...formdata,description:e.target.value})}/>
                <br/>
                <label>Upload: </label>
                <input type="file"  name="myfile"   onChange={(e)=>setFormdata({...formdata,productpic:e.target.files[0]})}/>
                <br/>
                <input type="submit" value="submit"/>
            </form>
        </div>
    )
}
export default Addproduct;
