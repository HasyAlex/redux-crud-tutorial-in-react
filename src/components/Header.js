import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { addUser, deleteUser, updateUser } from "../features/Users";
function Header() {
    const userList = useSelector((state) => state.users.value);
    
    const dispatch =  useDispatch();
    const [name, setName] = useState(""); 
    const [username, setUsername] = useState(""); 

    const [newUserName, setNewUserName] = useState("");

    return (
          <div className='addUser'>
            <span>-----------------------------------------------------------------------</span>  
            <br/>
            <input type='text' placeholder='Name' onChange={(event)=>{setName(event.target.value)}} />
            <input type='text' placeholder='User Name' onChange={(event)=>{setUsername(event.target.value)}} />
            <button onClick={() => { 
              dispatch(
                addUser({ 
                  id: userList[userList.length-1].id +1 , 
                  name, 
                  username 
                })
              ); 
            }}> Add User</button>
            <br/>
            <span>-----------------------------------------------------------------------</span>  
            <br/>

            <div>
              {userList.map((user)=>{
                return (
                <>
                  <span>{ user.id} {" - "} {user.username}</span> {" / "} {user.name} {"  "}
                  <input type="text" placeholder="Enter New Name" onChange={(event)=>{setNewUserName(event.target.value)}}/>
                  <button onClick={ () =>{ dispatch(updateUser({id: user.id, username: newUserName})) }} >Update</button>
                  <button onClick={ () =>{ dispatch(deleteUser({id: user.id}))}} >X Delete</button>
                  <br/>
                </>
                )
              })}
            </div>
          </div>
    );
}

export default Header