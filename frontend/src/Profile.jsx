import React from "react";
import {useState,useEffect} from "react"
import axios from "axios"

function Profile(){

const [profile,setProfile]=useState({
name:"",
bio:"",
skills:"",
social:""
})

const [edit,setEdit]=useState(false)

useEffect(()=>{
axios.get("http://localhost:5000/profile")
.then(res=>{
if(res.data){
setProfile(res.data)
}
})
},[])

const saveProfile=()=>{
axios.post("http://localhost:5000/profile",profile)
.then(()=>{
alert("Profile saved")
setEdit(false)
})
}

return(

<div style={{width:"400px",margin:"auto",marginTop:"80px"}}>

<button onClick={()=>document.body.classList.toggle("dark")}>
Dark Mode
</button>

{edit?(
<div>

<input
value={profile.name}
onChange={e=>setProfile({...profile,name:e.target.value})}
/>

<textarea
value={profile.bio}
onChange={e=>setProfile({...profile,bio:e.target.value})}
/>

<input
value={profile.skills}
onChange={e=>setProfile({...profile,skills:e.target.value})}
/>

<input
value={profile.social}
onChange={e=>setProfile({...profile,social:e.target.value})}
/>

<button onClick={saveProfile}>Save</button>

</div>

):( 

<div>

<h2>{profile.name}</h2>
<p>{profile.bio}</p>

<p><b>Skills:</b> {profile.skills}</p>

<p>{profile.social}</p>

<button onClick={()=>setEdit(true)}>Edit</button>

</div>

)}

</div>
)

}

export default Profile
