// place files you want to import through the `$lib` alias in this folder.
import axios from "axios";
import { ServerURl } from "./backendUrl";
import { profileStore } from '$lib/store/profile';
import { handleAuthToken } from '$lib/store/routes';
let URL = ServerURl()
import { browser } from "$app/environment";

export function formatTime(timestamp) {
    const date = new Date(timestamp);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
    const formattedMinutes = minutes.toString().padStart(2, '0');
    return `${formattedHours}:${formattedMinutes} ${ampm}`;
}

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

export const handleAdminProfile = (async(auth)=>{
    let responcse = ""
    let is_loading = true
    if(auth){
        handleAuthToken.set(auth.accessToken)
        await axios.get(`${URL}/admin/user/current`,{
            headers:{
                "Authorization": `Bearer ${auth.accessToken}`
            }
        })
        .then((response)=>{
            responcse = response.data.user
            is_loading = false
        })
        .catch((error)=>{
            profileStore.set({})
            handleAuthToken.set(null)
            localStorage.removeItem("user");
            window.location.href = ("/")
            is_loading = false
        })
    }else{
        responcse = "No user"
    }
    return {responcse, is_loading}
})

export const handleAdminTransaction = (async(user, route)=>{
    let responcse = ""
    let is_loading = true
    if(user){
        await axios.post(`${URL}/admin/transaction/${route}`,{
            user
        })
        .then((response)=>{
            responcse = response.data
            is_loading = false
        })
        .catch((error)=>{
            console.log(error)
        })
    }else{
        responcse = "No user"
    }
    return {responcse, is_loading}
})