<script>
import {goto} from "$app/navigation";
import { profileStore, proressbar} from "$lib/store/profile";
import { statisticsEl } from "$lib/store/statistic";
import { handleAuthToken } from "$lib/store/routes";
import axios from "axios"
import { onMount } from "svelte";
import { ServerURl } from "$lib/backendUrl"
const URL = ServerURl()

const handleProfile = (async()=>{
    try{
        await axios.get(`${URL}/api/profile`,{
        headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${$handleAuthToken}`
        }
    })
    .then((res)=>{
        let response = res.data.users[0]
        proressbar.set(response)
    })
    .catch((err)=>{
         console.log(err)
    })
    }
    catch(err){
        console.log(err)
    }
})

onMount(async()=>{
   await handleProfile()
})

const handleSignOut = (()=>{
    // handleLogout()
})

const handleStatistics = (()=>{
    statisticsEl.set(true)
})


</script>

<div class="setting-wrap" style="opacity: 1; transform: none;">
   <div class="sc-cjrPHo emGYim">
       <div class="link-info">
           <button on:click={()=> goto(`/user/profile/${$profileStore.user_id}`)} class="link-item">
               <div class="hover">
                   <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                       <use xlink:href="#icon_UserProfile"></use>
                   </svg>
                   Admin Information
               </div>
           </button>
               <button on:click={()=> goto("/wallet/balance")} class="link-item">
                   <div class="hover">
                       <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                           <use xlink:href="#icon_Wallet"></use>
                       </svg>
                       Wallet
                   </div>
               </button>
               <button on:click={()=> handleStatistics()} class="link-item">
                   <div class="hover">
                       <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                           <use xlink:href="#icon_Statistics"></use>
                       </svg>
                       Statistics
                   </div>
               </button>
               <button on:click={()=> goto("/wallet/swap")}  class="link-item">
                   <div class="hover">
                       <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                           <use xlink:href="#icon_Swap"></use>
                       </svg>
                       PDDSwap
                   </div>
               </button>
               <button on:click={()=> goto("/wallet/transaction")} class="link-item">
                   <div class="hover">
                       <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                           <use xlink:href="#icon_Transaction"></use>
                       </svg>
                       Transactions
                   </div>
               </button>
               <button  class="link-item">
                   <div class="hover">
                       <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                           <use xlink:href="#icon_Vault"></use>
                       </svg>
                       Vault Pro
                   </div>
               </button>
               <div class="link-item">
                   <div class="hover">
                       <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                           <use xlink:href="#icon_Support"></use>
                       </svg>
                       Live Support
                   </div>
               </div>
               <div class="link-item">
                   <div class="hover">
                       <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                           <use xlink:href="#icon_Reward"></use>
                       </svg>
                       Reward
                   </div>
               </div>
               <button on:click={()=> goto("/affiliate")} class="link-item">
                   <div class="hover">
                       <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                           <use xlink:href="#icon_Affiliate"></use>
                       </svg>
                       Affiliate
                   </div>
               </button>
               <button on:click={()=> goto("/vip-games")} class="link-item">
                   <div class="hover">
                       <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                           <use xlink:href="#icon_VipClub"></use>
                       </svg>
                       VIP Club
                   </div>
               </button>
           </div>
           <button on:click={handleSignOut} class="logout">
               <span>
                   <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                       <use xlink:href="#icon_Logout"></use>
                   </svg>
                   Logout
               </span>
           </button>
   </div>
</div>

<style>
.setting-wrap {
    position: absolute;
    right: 0px;
    top: 100%;
    padding-top: 0.75rem;
}
.emGYim {
    cursor: auto;
    height: 25.625rem;
    width: 26.5rem;
    background-color: rgb(23, 24, 27);
    border-radius: 1.25rem;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 5px 8px 0px;
    padding: 1rem 0px;
}
.emGYim .user-info {
    width: 100%;
    height: 2.625rem;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    padding: 0px 1.125rem;
}
.left {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    flex: 1 1 0%;
}
 .right {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: end;
    justify-content: flex-end;
}
.emGYim .user-info .left {
    display: flex;
}
.emGYim .user-info .right {
    cursor: pointer;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    padding-top: 0.25rem;
    height: 1.25rem;
}
.emGYim .user-info .left > img {
    width: 2.625rem;
    height: 2.625rem;
    border-radius: 50%;
}
.emGYim .user-info .left .name-level {
    height: 100%;
    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    margin-left: 0.625rem;
}
.emGYim .user-info .left .name-level p {
    margin: 0px;
    font-size: 1rem;
    color: rgb(245, 246, 247);
    line-height: 1.25rem;
    font-weight: bold;
}
.emGYim .user-info .left .name-level .level {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    margin-top: 0.125rem;
}
.fPtvsS {
    text-align: left;
    white-space: nowrap;
    font-size: 0px;
}
.fPtvsS .img-star {
    width: auto;
    height: 1.0625rem;
    margin-right: 2px;
    object-fit: cover;
}
.emGYim .user-info .left .name-level .level .user-level {
    margin-left: 0.375rem;
}
.jouJMO {
    font-size: 0.75rem;
    font-weight: bold;
    color: rgb(23, 24, 27);
    width: 2.25rem;
    height: 1rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    background-color: rgb(177, 182, 201);
    border-radius: 0.625rem;
}
.emGYim .user-info .left .name-level .level .user-level .level-wrap span {
    font-weight: bold;
    font-size: 0.75rem;
}
.jouJMO span {
    line-height: 1rem;
}
.emGYim .vip-info {
    margin: 1.25rem 1.125rem 0px;
    cursor: pointer;
}
.emGYim .vip-info .num {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    height: 1rem;
    margin: 0px 1.25rem;
}
.emGYim .vip-info .num > p {
    font-size: 0.75rem;
    margin: 0px;
    color: rgb(245, 246, 247);
}
.emGYim .vip-info .num > p span {
    color: rgba(153, 164, 176, 0.7);
    margin-right: 1rem;
}
.emGYim .vip-info .vip-bg {
    height: 2.25rem;
    margin-top: 0.3125rem;
    position: relative;
    background: rgb(30, 32, 36);
    border-radius: 1.125rem;
    font-size: 0px;
    padding: 0px 1.5rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
}
.emGYim .vip-info .vip-bg .bg {
    width: 92%;
    height: 0.5rem;
    background-color: rgb(67, 74, 85);
    border-radius: 0.25rem;
}
.emGYim .vip-info .vip-bg .bg_status {
    width: 4%;
    height: auto;
    font-size: 0.68rem;
    font-weight: 900;
    text-align: center;
    white-space: nowrap;
    margin-left: 1%;
    margin-top: -0.125rem;
}
.emGYim .vip-info .vip-bg .bg .status {
    z-index: 2;
    height: 0.5rem;
    border-radius: 0.25rem;
}
.emGYim .link-info {
    margin: 0.625rem 1.125rem;
    padding: 0.75rem 0.5rem;
    display: flex;
    flex-wrap: wrap;
    border-radius: 1.25rem;
    background-color: rgb(30, 32, 36);
}
.emGYim .link-info .link-item {
    height: 2.25rem;
    width: 50%;
}
.emGYim .link-info .link-item .hover {
    width: 11.25rem;
    height: 100%;
    border-radius: 1.125rem;
    padding-left: 1rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    cursor: pointer;
}
.emGYim .link-info .link-item .hover:hover {
    background: #fff;
    color: black;
}
.emGYim .link-info .link-item .hover .icon {
    margin-right: 0.875rem;
}
.emGYim .logout {
    height: 1.25rem;
    line-height: 1.25rem;
    margin-top: 1rem;
    margin-left: 1.125rem;
}
.emGYim .logout span {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    padding-left: 1.5rem;
    cursor: pointer;
    width: 7.5rem;
    white-space: nowrap;
}
.emGYim .logout span .icon {
    margin-right: 0.875rem;
}



/* =========================================== mobile ================================== */

@media screen and (max-width: 650px){
    .setting-wrap {
        position: absolute;
        right: 0px;
        top: 100%;
        width: 130%;
        padding-top: 0.75rem;
    }
    .setting-wrap {
        padding-top: 0px;
    }
    .emGYim {
        width: 100%;
        left: 0px;
        border-radius: 0px 0px 1.25rem 1.25rem;
        box-shadow: rgba(0, 0, 0, 0.3) 0px 6px 16px 0px;
    }
    .emGYim {
        cursor: auto;
        height: 25.625rem;
        width: 105%;
        background-color: rgb(23, 24, 27);
        border-radius: 1.25rem;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 5px 8px 0px;
        padding: 1rem 0px;
    }
    .emGYim .user-info {
        width: 100%;
        height: 2.625rem;
        display: flex;
        -webkit-box-pack: justify;
        justify-content: space-between;
        padding: 0px 1.125rem;
    }
    .emGYim .user-info .left {
        display: flex;
    }
}

</style>