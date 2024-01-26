<script>
export let data;
import { browser } from '$app/environment';
import { onMount } from "svelte";
import { routes } from "$lib/store/routes"
import { goto } from '$app/navigation';
import { profileStore, handleisLoggin } from '$lib/store/profile';
import { handleAuthToken } from '$lib/store/routes';
import { handleAdminProfile} from "$lib/index"
$: routes.set(data.route)

onMount(async()=>{
        let {responcse, $handleisLoggin} = await handleAdminProfile(data.token)
        handleisLoggin.set($handleisLoggin)
        if(responcse === "No user"){
            goto("/login")
        }
        else if(data.route === "/(auth)/login" || data.route === "/(auth)/pin" && data.token){
            goto("/")
        }
        else{
            profileStore.set(responcse)
        }
})

import Icon from 'svelte-icons-pack/Icon.svelte';
import HiSolidMenu from "svelte-icons-pack/hi/HiSolidMenu";
import { screen, is_open__Appp, is_open__chat } from "$lib/store/screen"
import Navbar from "$lib/navbar.svelte";
import "../styles/global-styles/index.css"
import Footer from '$lib/footer.svelte';
import SideBar from '$lib/sideBar.svelte';
    import Closesidebar from '$lib/closesidebar.svelte';
let isOpenSide = true
let isChatRoom = 0
let isMenu = false
let sideDetection = 0
let is_mobile = true

const handleMainMenu = (() => {
    if (isOpenSide) {
        isOpenSide = false
        is_open__Appp.set(false)
        sideDetection = 76
    } 
    else {
        if (browser && window.innerWidth > 650 && window.innerWidth < 1000) {
        isOpenSide = true
        is_open__Appp.set(true)
        sideDetection = 76
    }else{
        isOpenSide = true
        is_open__Appp.set(true)
        sideDetection = 240
    }
    }
})

let ens = browser && window.innerWidth

$:{
browser && addEventListener("resize", () => {
    ens = (window.innerWidth)
    screen.set(ens)
    if (browser && window.innerWidth < 650) {
        is_mobile = true
    }
    else if (browser && window.innerWidth > 650 && window.innerWidth < 1000) {
        isOpenSide = false
        is_mobile = false
        is_open__Appp.set(false)
        sideDetection = 76
    }
    else {
        is_mobile = false
        isOpenSide = true
        is_open__Appp.set(true)
        sideDetection = 240
    }
})
}


onMount(()=>{
    ens = browser && window.innerWidth
    screen.set(ens)
})

let isnotification = false
const handleChatroom = ((e) => {
    if (isChatRoom) {
        isnotification = false
        isChatRoom = 0
        is_open__chat.set(false)
    } else {
        isChatRoom = 360
        is_open__chat.set(true)
        if (e === "notification") {
            isnotification = true
        } else {
            isnotification = false
        }
    }
})

onMount(() => {
    if (browser && window.innerWidth < 650) {
        is_mobile = true
        isOpenSide = true
        sideDetection = 0
        is_open__Appp.set(false)
    } else if (browser && window.innerWidth > 1220) {
        isOpenSide = true
        is_mobile = false
        sideDetection = 240
        is_open__Appp.set(true)
    } else {
        is_mobile = false
        isOpenSide = false
        sideDetection = 76
    }
})

const handleMenu = () => {
    if (isMenu) {
        isMenu = false
    } else {
        isMenu = true
    }
}

</script>

{#if $screen > 1100}
<div class="app">
    {#if (isOpenSide) }
    {#if data.route !== "/(auth)/login" && data.route !== "/(auth)/pin" && data.route !== "/members" && data.route !== "/reports"}
        <div id="main" style={`width:${isOpenSide ? 240 : 76}px`}>
            <SideBar routes={data} />
        </div>
    {/if}
    {:else}
        {#if data.route !== "/(auth)/login" && data.route !== "/(auth)/pin" && data.route !== "/members" && data.route !== "/reports"}
            <div id="main" style={`width:${isOpenSide ? 240 : 76}px`}>
                <Closesidebar routes={data} />
            </div>
        {/if}
    {/if}
    {#if data.route !== "/(auth)/login" && data.route !== "/(auth)/pin" && data.route !== "/members" && data.route !== "/reports"}
        <div id="main">
            <div id="menu">
                <button style={`left:${isOpenSide ? 224 : 60}px`} on:click={handleMainMenu}  class="menu">
                    <Icon src={HiSolidMenu}  size="18"   color="#fff"  />
                </button>
            </div>
        </div>
    {/if}
    {#if $handleisLoggin}
        <div class="preloading">
            <div class="gyuys">
                <img class="coin-icon" alt="" src="https://res.cloudinary.com/dxwhz3r81/image/upload/v1706191229/photo_2024-01-25_07-59-49_tyeeu0.jpg">
            </div>
        </div>
    {/if}

    <!-- ======================  mobile menu bar ================= -->
    <!-- {#if (isMenu)}
        <div class="menubar">
            <Menubar  on:menu={handleMenu}   />
        </div>
    {/if} -->

    
   <div id="right-bar" style={ data.route === "/members" || data.route === "/reports" ? 0 : is_mobile ? "" : `width: ${isChatRoom ? ((ens - sideDetection) - 360) : ens - sideDetection}px;`} >
    {#if data.route !== "/(auth)/login" && data.route !== "/(auth)/pin" && data.route !== "/members" && data.route !== "/reports"}
        <header>
            <Navbar on:handleMenuMobile={handleMenu} on:handleChatRoom={handleChatroom} styles={isOpenSide} chatroom={isChatRoom} />
        </header>
    {/if}

    <main class="sc-lhMiDA ePAxUv">
        <slot></slot>
    </main>
    {#if data.route !== "/(auth)/login" && data.route !== "/(auth)/pin" && data.route !== "/members" && data.route !== "/reports"}
        <footer>
            <!-- <Footer /> -->
        </footer>
    {/if}
    </div>
    <!-- {#if (isChatRoom)}
        <ChatSide on:closeChat={handleChatroom} />
    {/if}  -->

</div> 
{:else}
<div class="sc-lhMiDA ePAxUv">
    <div class="sc-eCImPb cuPxwd empty full-abs">
        <img alt="" src="https://static.nanogames.io/assets/empty.acd1f5fe.png">
        <div class="msg">Open with larger screen! </div>
    </div>
 </div>
{/if}


<style>
.preloading{
    background-color: var(--background-color);
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 367898978920;
}
.preloading .gyuys{
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: center;
}
.gyuys img{
    position: absolute;
    display: flex;
    align-items: center;
    top: 30%;
    align-content: center;
    width: 180px;
    border-radius: 50%;
    animation: move 10s infinite;
}

@keyframes move{
    10%{
        top: 10%;
        transition: all 4.5s ease;
    }
 
    100%{
        top: 55%;
        transition: all 4.5s ease;
    }
}

</style>