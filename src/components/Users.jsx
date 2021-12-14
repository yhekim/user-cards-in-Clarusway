import React, { useEffect, useState } from 'react'
import axios from 'axios'



const Users = () => {
    const [users, setUsers]=useState([]);
    const [userId, setUserId]=useState();
    const [userName, setUserName]=useState();
    const [userEmail, setUserEmail]=useState();
    const [userPhone, setUserPhone]=useState();
    const [userWebsite, setUserWebsite]=useState();
    const [companyName, setCompanyName]=useState();
    
    
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response)=> setUsers(response.data)).catch((err)=>  console.log(err) ) 
    }, [users])
    return (
        <div>
            <h2>Developer Team</h2>
                       
            <div class="userContainer">
            <div class="venus"  >
                <div class="teen"> USER ID CARD </div>
                <div class="real"><img src={`https://avatars.dicebear.com/v2/avataaars/${userId}.svg`} alt="" /></div>
                <div class="young"></div>
                <div class="shower">
                    <div><pi>username:</pi> <br />{userName}</div>
                    <div><pi>email:</pi> <br /> {userEmail}</div>
                    <div><pi>phone:</pi> <br />{userPhone}</div>
                    <div><pi>website:</pi><br />{userWebsite}</div>
                </div>
                <div class="side"><br /><pi>Company Name:</pi>{companyName}
                </div>
            </div> 
        </div>
        <h3>Click to see more</h3>
            <div className="users-cards"> 
                {users.map((user) =>(
                    <div className="useritem" key={user.id} onClick={()=>{setUserId(user.id);setUserName(user.name);setUserEmail(user.email);setUserPhone(user.phone);setUserWebsite(user.website);setCompanyName(user.company.name)}}>
                        <img src={`https://avatars.dicebear.com/v2/avataaars/${user.id}.svg`} alt="" />  
                        {user.name}
                    </div>
                ))}
            </div>
        </div>  
        
    )
}
export default Users
