import React from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
function DropDownProfile() {

    const handleLogout=()=>{
        axios.post("http://localhost:3000/logout",{},{withCredentials:true}).then((res)=>{
            toast.success(res.data.message);
            setTimeout(()=>{
                window.location.href = "http://localhost:5174/login";
            },500)
        })
    }

    return ( 
    <div className=' DropDownProfile '>
        <ul className='d-flex flex-column'> 
            <li className='mb-3 text-muted'>Settings</li>
            <li className='logout' onClick={handleLogout}>LogOut</li>
        </ul>
    </div>
     );
}

export default DropDownProfile;