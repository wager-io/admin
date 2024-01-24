<script>
   import { handleAuthToken } from "$lib/store/routes";
   import { goto } from "$app/navigation";
   import { profileStore } from "./store/profile";
   import "../styles/navbar/mobileNavbar.css";
   import "../styles/navbar/navbar.css";
   import Icon from "svelte-icons-pack/Icon.svelte";
   export let styles;
   export let chatroom;
   import { browser } from "$app/environment";
   import { createEventDispatcher, onMount } from "svelte";
   import BsDroplet from "svelte-icons-pack/bs/BsDroplet";
   import { isLightMode } from "../lib/store/theme";
   $: browser && localStorage.setItem("preload", JSON.stringify("is_active"));
   const dispatch = createEventDispatcher();
   const handleChat = (e) => {
     dispatch("handleChatRoom", e);
   };

</script>
 
 <!-- 
 {#if !uyi}
     <div class="reconnecting">
         <div class="riuwx">
             <p>Connection lost, Reconnecting...</p>
         </div>
     </div>
 {/if} -->
 
 <div
   id="main"
   class={$isLightMode
     ? "light-bg light-text sc-gVkuDy gAvMHL"
     : "sc-gVkuDy gAvMHL"}
   style={` margin-right: ${chatroom}px; `}
 >
   <div class="header-wrap">
     <div class="header">
       <div class="sc-hGnimi ftyLxH left">
         <div class="sc-iukxot jivBdD logo-pc">
           {#if styles}
             <img
               alt="logo"
               class="logo-com"
               src="https://res.cloudinary.com/dxwhz3r81/image/upload/v1698030795/typpe_3_cf83xp.png"
             />
           {:else}
             <img
               style="border-radius: 12px;"
               class="coin-icon"
               alt=""
               src="https://res.cloudinary.com/dxwhz3r81/image/upload/v1698030795/typpe_3_cf83xp.png"
             />
           {/if}
         </div>
       </div>
           <div class="login-in" >
             <button style="font-size: 17px;">
               <p>@{$profileStore.username}</p>
             </button>
             <button  class="sc-iqseJM sc-egiyK jisjoid">
                  <img src="https://img2.nanogames.io/avatar/head2.png" alt="">
             </button>
             <!-- <button on:click={handleChat} id="chat" class="sc-eicpiI PGOpB">
               <div class="chat-btn">
                 <Icon src={BsDroplet} size="18"
                   color={$isLightMode ? "#000" : "#fff"}
                   className="custom-icon" title="arror"  />
                 <div class="sc-fotOHu gGSOuF badge">26</div>
               </div>
             </button> -->
           </div>
     </div>
   </div>
 </div>
 
 <!-- ============================================ Mobile view =========================================== -->
 <!-- <div class="mobile">
   <div
     class={$isLightMode
       ? "light-bg light-text sc-hJhJFJ jVgBRe"
       : "sc-hJhJFJ jVgBRe"}
     style="transform: translate3d(0px, 0%, 0px);"
   >
     {#if !$handleisLoading}
       <div class="login-top">
         <a href="/">
           <div class="logowrap">
             <img
               alt="logo"
               style="border-radius: 12px; width: 25px; margin-right:10px"
               src="https://res.cloudinary.com/dxwhz3r81/image/upload/v1697848286/dpp-favicon-logo_j53rwc.jpg"
             />
           </div>
         </a>
         <button on:click={handleMenu} class="sc-bQtKYq cUTdQJ">
           <span class="open-wrap">
             <Icon
               src={HiSolidMenu}
               size="15"
               color="rgb(67, 179, 9)"
               className="custom-icon"
               title="arror"
             />
           </span>
         </button>
         {#if $handleisLoggin}
           <MainNavbar on:handleChatRoom={handleChat} />
         {:else}
           <div class="header-login">
             <button on:click={() => goto("/login")}>
               <p>Sign in</p>
             </button>
             <button
               on:click={() => goto("/register")}
               class="sc-iqseJM sc-egiyK cBmlor fnKcEH button button-normal"
             >
               <div class="button-inner">Sign up</div>
             </button>
           </div>
         {/if}
       </div>
 
       <div class="bottom">
         <div class="left"></div>
         <div class="right">
           <button
             on:click={handleChat}
             id="chat"
             class="sc-eicpiI PGOpB chat-btn"
           >
             <Icon
               src={BsDroplet}
               size="28"
               color="#fff"
               className="custom-icon"
               title="arror"
             />
             <div class="sc-fotOHu gGSOuF badge">99</div>
           </button>
         </div>
       </div>
     {/if}
   </div>
 </div>
  -->
 <style>
   .light-bg {
     background-color: rgb(255, 255, 255) !important;
   }
   .light-text {
     color: rgb(49, 55, 61) !important;
   }
   .gAvMHL {
     height: 4rem;
     position: fixed;
     z-index: 201;
     left: 0px;
     top: 0px;
     right: 0px;
     background-color: rgb(36, 38, 43);
     transition: all 0.2s linear 0s;
   }
   .gAvMHL .header-wrap {
     width: 100%;
     height: 100%;
     position: relative;
   }
   .gAvMHL .header {
     transition: all 0.5s ease 0s;
     padding:0.5rem 0.75rem;
     margin: 0px auto;
     display: flex;
     -webkit-box-pack: justify;
     justify-content: space-between;
     height: 100%;
   }

   .jisjoid img{
      width: 30px;
      border-radius: 50%;
   }
 </style>
 