import axios from "axios"
import { ServerURl} from "$lib/backendUrl"
import { is_loading } from "$lib/store/error";
import { error_msg, login_id } from "$lib/store/error"
import { goto } from "$app/navigation"
let URL = ServerURl()

export const LoginAuth = (()=>{
    const login = (async(data)=>{
        await axios.post(`${URL}/admin/auth/login`,{
            username:data.Username,
            password:data.password
        })
        .then((res)=>{
            login_id.set(res.data.userId)
            goto("/pin")
        })
        .catch((error)=>{
            error_msg.set(error.response.data.message)
            setTimeout(()=>{
                error_msg.set("")
            },4000)
        })
    })

    const CreateMember = (async(data)=>{
        await axios.post(`${URL}/admin/create`,{
            data
        })
        .then((res)=>{
            console.log(res.data)
            is_loading.set(false)
            window.location.href = ("/members")
        })
        .catch((error)=>{
            error_msg.set(error.response.data.message)
            setTimeout(()=>{
                error_msg.set("")
            },4000)
            is_loading.set(false)
        })
    })
    return {login, CreateMember}
})