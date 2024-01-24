<script>
import axios from "axios";
import {ServerURl} from "$lib/backendUrl"
import "../../../styles/global-styles/index.css"
import { goto } from "$app/navigation";
import { error_msg, login_id } from "$lib/store/error"
import { profileStore } from "$lib/store/profile";
import { handleAuthToken } from '$lib/store/routes';
const URL = ServerURl()
let pin = ""

$:{
    if(!$login_id){
        goto("/login")
    }
}

    
let is_loading = false
const handleSubmit = (async()=>{
    is_loading = true
    if(!pin){
        error_msg.set("field can't be empty")
            setTimeout(()=>{
                error_msg.set("")
        },4000)
        is_loading = false
    }else{
    await  axios.post(`${URL}/admin/auth/pin`, {
        pin:pin.toString(),
        userId: $login_id
    })
    .then((res)=>{
        is_loading = false
        localStorage.setItem("user", JSON.stringify(res.data));
        profileStore.set(res.data.user)
        handleAuthToken.set(res.data.accessToken)
        goto("/")
    })
    .catch((err)=>{
        is_loading = false
        error_msg.set(err.response.data.message)
        setTimeout(()=>{
                error_msg.set("")
        },4000)
    })
    }
})
    
</script>
    <div class="sc-bkkeKt kBjSXI" style="opacity: 1;">
        {#if $error_msg}
        <div class="error-message">
            <div class="hTTvsjh"> 
                <div>{$error_msg}</div>
                </div>
            </div>
        {/if}   
    
    <div class="sc-dlVxhl gvBCkE" style="transform: scale(1); opacity: 1;">
        <div class="pop sc-hKumaY hJhIys" id="">
            <div class="pop-title">One more step to access your dashbord!</div>
            <p>Enter your 6 digit PIn to access the dashbord.</p>
            <div class="sc-ezbkAF kDuLvp input sc-eTwdGJ eEagjO">
                <div class="input-label">Your ID</div>
                <div class="input-after">
                    <div class="sc-ezbkAF kDuLvp input ">
                        <div class="input-control">
                            <input type="text" disabled placeholder="Admin ID" bind:value={$login_id}>
                        </div>
                    </div>
                </div>
            </div>
            <div class="sc-ezbkAF kDuLvp input sc-eTwdGJ eEagjO birth-input">
                <div class="input-label">Enter Pin</div>
                <div class="input-after">
                    <div class="sc-ezbkAF kDuLvp input ">
                        <div class="input-control">
                            <input type="number" placeholder="Enter Pin" maxlength="6" max="6" bind:value={pin}></div>
                        </div>
                    </div>
                </div>
                <button disabled={is_loading} on:click={handleSubmit} class="sc-iqseJM sc-egiyK cBmlor fnKcEH button button-normal submit-btn">
                    <div class="button-inner">{!is_loading ? "Confirm" : "Loading...."}</div>
                </button>
            </div>
        </div>
    </div>
    
    
    <style>
       .gvBCkE {
        position: absolute;
        left: 50%;
        top: 50%;
        width: 0px;
        height: 0px;
    }
    .gvBCkE .pop {
        transform: translate(-50%, -50%);
        min-width: 420px;
        min-height: 370px;
        max-width: 100vw;
        max-height: 100vh;
        border-radius: 1.25rem;
        position: relative;
        overflow: hidden;
        background-color: rgb(23, 24, 27);
        font-size: 0.8125rem;
        padding: 1.25rem;
        transition: all 0.5s ease;
    }
    .gvBCkE .pop-title {
        color: rgb(255, 255, 255);
        font-size: 1rem;
        line-height: 1rem;
        font-weight: bold;
    }
    .kDuLvp {
        margin-top: 1rem;
    }
    .kDuLvp .input-label {
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        line-height: 1em;
        height: 1.25rem;
        margin: 0px 0.75rem 0.375rem;
        color: rgba(153, 164, 176, 0.6);
    }
    .eEagjO .input-after {
        display: flex;
        margin: 0px;
    }
    .eEagjO .input-after > .input:first-child {
        margin-left: 0px;
    }
    .kDuLvp .input-control {
        position: relative;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        border-radius: 1.25rem;
        border: 1px solid rgb(45, 48, 53);
        background-color: rgba(45, 48, 53, 0.5);
        height: 3.5rem;
        padding: 0px 1.25rem;
        opacity: 1;
    }
    .eEagjO .input-after > .input {
        margin-top: 0px;
        flex: 1 1 0%;
        margin-left: 0.625rem;
    }
    .kDuLvp .input-control input {
        flex: 1 1 0%;
        width: 100%;
        height: 100%;
        min-width: 1rem;
        padding: 0px;
        border: none;
        background-color: transparent;
        color: rgb(245, 246, 247);
        outline: none;
    }
    .eEagjO .input-after > .input {
        margin-top: 0px;
        flex: 1 1 0%;
        margin-left: 0.625rem;
    }
    .kDuLvp {
        margin-top: 1rem;
    }
    .hJhIys .submit-btn {
        margin: 1.875rem auto 0.625rem;
        width: 13.75rem;
        color: #ffff;
        background-color: var(--primary-color);
    }
    </style>