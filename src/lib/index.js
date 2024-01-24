// place files you want to import through the `$lib` alias in this folder.
import axios from "axios";
import { ServerURl } from "./backendUrl";
let URL = ServerURl()
import { browser } from "$app/environment";

export const handleDashboard = (async()=>{
    const id = browser && JSON.parse(localStorage.getItem('user'))
    await axios.get(`${URL}/admin/dashboard`,{
        headers:{
            "Authorization": `Bearer ${id.accessToken}`
        }
    })
    .then((response)=>{
        console.log(response)
    })
    .catch((error)=>{
        console.log(error)
    })
})