<script>
import Icon from 'svelte-icons-pack/Icon.svelte';
import IoCloseSharp from "svelte-icons-pack/io/IoCloseSharp";
import { createEventDispatcher } from "svelte";
import { browser } from "$app/environment";
import { onMount } from "svelte";
import { handleSignIn } from '$lib/firebaseAuth/index';
import { error_msg } from "$lib/store/error"
import { is_loading } from "$lib/store/error";
const dispatch = createEventDispatcher();

const handleClose = (()=>{
  dispatch("close", 9)
})
    
let isLightMode = false
let username = "";
let email = "";
let vip_level = "";
let phone = "";
let password = "";
let usdt_balance = "";
let Affiliate_model = "";

$:{
  if(vip_level > 20){
    vip_level = 20
  }
  if(usdt_balance > 10000){
    usdt_balance = 10000
  }
}
     
const handleSubmit = () => {
  if (!username) {
    error_msg.set("Username field can't be empty");
    setTimeout(() => {
      error_msg.set("");
    }, 4000);
  } else if (!password) {
    error_msg.set("Password is required");
    setTimeout(() => {
      error_msg.set("");
    }, 4000);
  } 
  else {
  let data = {username, email, vip_level, phone, usdt_balance, Affiliate_model, password}
  handleSignIn(data);
  }
};

let is_mobile = false;
onMount(() => {
  if (browser && window.innerWidth < 650) {
    is_mobile = true;
  } else {
    is_mobile = false;
  }
});
     
    // $:{
    //     const currentPath = browser && window.location.pathname;
    //     if(currentPath === "/forget"){
    //         is_forget_password = true
    //     }else if( currentPath === "/login"){
    //         is_forget_password = false
    //     }
    // }
</script>
  
  <div class="sc-bkkeKt kBjSXI">
    {#if $error_msg}
      <div class="error-message">
        <div class="hTTvsjh">
          <div>{$error_msg}</div>
        </div>
      </div>
    {/if}
     
<div
  class="dialog"
  style={`${
    is_mobile
      ? "transform: scale(1) translateZ(5px);"
      : "opacity: 1; width: 464px; height: 631px; margin-top: -315.5px; margin-left: -232px;"
  }  `}
>
  <div class="dialog-head has-close">
    <img
      alt="logo"
      class="sc-bOtlzW QccSQ"
      src="https://res.cloudinary.com/dxwhz3r81/image/upload/v1698030795/typpe_3_cf83xp.png"
    />
  </div>
  <button on:click={handleClose} class="sc-ieecCq fLASqZ close-icon dialog-close">
    <Icon src={IoCloseSharp} size="23"  color="#fff" />
</button>
<div class="dialog-body no-style sc-zjkyB ipnwmW" style="z-index: 2; transform: none;" >
  <div class={isLightMode ? "light-bg sc-dkPtRN jScFby scroll-view hide-bar sc-bjztik ceTZhf" : "sc-dkPtRN jScFby scroll-view hide-bar sc-bjztik ceTZhf"} style="transform: none;" >
    <div id="login" class={isLightMode ? "light-bg sc-czvZiG lnrkkr" :"sc-czvZiG lnrkkr"}>
      <div class="box">
        <div class="sc-ezbkAF kDuLvp input">
          <div class="input-label">Username</div>
          <div class={isLightMode ? "light-input-control input-control": "input-control"}>
            <input bind:value={username} type="text" autocomplete="off" placeholder="Username" />
          </div>
        </div>
            <div class="sc-ezbkAF kDuLvp input">
            <div class="input-label">Email</div>
            <div class={isLightMode ? "light-input-control input-control": "input-control"}>
              <input  bind:value={email}  type="email" autocomplete="off" placeholder="Email" />
            </div>
          </div>
          <div class="sc-ezbkAF kDuLvp input">
            <div class="input-label">Phone number (Optional)</div>
            <div class={isLightMode ? "light-input-control input-control": "input-control"}>
              <input bind:value={phone} type="number" autocomplete="off" placeholder="Phone number" />
            </div>
          </div>
          <div class="sc-ezbkAF kDuLvp input">
            <div class="input-label">Vip Level (0 - 20)</div>
            <div class={isLightMode ? "light-input-control input-control": "input-control"}>
              <input bind:value={vip_level} type="number" autocomplete="off" placeholder="Vip Level" />
            </div>
          </div>
          <div class="sc-ezbkAF kDuLvp input">
            <div class="input-label">USDT Wallet (E.g 10,000 USDT)</div>
            <div class={isLightMode ? "light-input-control input-control": "input-control"}>
              <input bind:value={usdt_balance} type="number" autocomplete="off" placeholder="USDT Wallet" />
            </div>
          </div>
          <!-- <div class="sc-ezbkAF kDuLvp input">
            <div class="input-label">Affiliate Model</div>
            <div class={isLightMode ? "light-input-control input-control": "input-control"}>
              <input bind:value={Affiliate_model} type="number" autocomplete="off" placeholder="Affiliate Model" />
            </div>
          </div> -->
            <div class="sc-ezbkAF kDuLvp input sc-bYoBSM ixxYMF">
              <div class="input-label">
                <div style="flex: 1 1 0%;">Password</div>
              </div>
              <div class={isLightMode ? "light-input-control input-control": "input-control"}>
                <input bind:value={password} type="password" autocomplete="off" placeholder="Password" />
                <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon" >
                  <use xlink:href="#icon_View"></use>
                </svg>
              </div>
            </div>
          </div>
          <hr />
          <div class="buttons">
            <button type="submit" disabled={$is_loading} on:click={handleSubmit} class="sc-iqseJM sc-bqiRlB cBmlor eWZHfu button button-big" >
              <div class="button-inner">
                {$is_loading ? "Loading..." : ` Sign in`}
              </div>
          </button>
          </div>
        </div>
      </div>
    </div>
</div>
</div>
     
<style>

.fLASqZ {
    position: absolute;
    right: 0px;
    top: 0px;
    z-index: 11;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    width: 3.75rem;
    height: 3.75rem;
}
           .light-bg {
         background-color: rgb(255, 255, 255) !important;
       }
       .light-input-control{
         border: 1px solid rgb(233, 234, 242) !important;
         background-color: rgb(245, 246, 250) !important;
       }
       .kBjSXI {
         position: fixed;
         z-index: 1000;
         inset: 0px;
         background-color: rgb(0, 0, 0);
         filter: none !important;
       }
     
       .ipnwmW {
         background-color: var(--primary-color);
       }
     
       .dialog {
         position: absolute;
         display: flex;
         flex-direction: column;
         left: 50%;
         top: 50%;
         width: 464px;
         height: 720px;
         margin: -375px 0px 0px -280px;
         transition-property: width, height, margin-left, margin-top;
         transition-duration: 0.5s;
         border-radius: 1.25rem;
         overflow: hidden;
         /* background-color: rgb(23, 24, 27); */
       }
     
       .dialog-head.has-close {
         margin-right: 3.75rem;
       }
     
       .dialog-head {
         position: relative;
         z-index: 10;
         flex: 0 0 auto;
         display: flex;
         -webkit-box-align: center;
         align-items: center;
         height: 3.75rem;
         margin-left: 1.125rem;
         transition: all 0.5s ease 0s;
       }
     
       img {
         overflow-clip-margin: content-box;
         overflow: clip;
       }
    
       .ipnwmW.dialog-body {
         padding: 0px;
       }
     
       .dialog-body {
         position: absolute;
         inset: 0px;
         display: flex;
         overflow: hidden;
       }
     
       .dialog-body > div {
         flex: 1 1 0%;
       }
     
     
       .ipnwmW #login {
         padding-top: 0px;
       }
     
       .lnrkkr .box {
         padding: 1.5rem 1.25rem;
       }
     
       .lnrkkr .box > .input:first-of-type {
         margin-top: 0.25rem;
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
     
       .ipnwmW #login {
         padding-top: 0px;
       }
     
       .lnrkkr {
         background-color: rgb(30, 32, 36);
       }
     
       .lnrkkr .buttons {
         padding: 1.25rem 2.5rem;
         display: flex;
       }
       .dialog-body > div {
         flex: 1 1 0%;
       }
     
       .ceTZhf {
         position: absolute;
         inset: 3.25rem 0px 0px;
         height: auto;
         border-top-left-radius: 1.25rem;
         border-top-right-radius: 1.25rem;
         background-color: rgb(23, 24, 27);
       }
     
       .jScFby {
         box-sizing: border-box;
         height: 590px;
         overflow-y: auto;
         touch-action: pan-y;
         overscroll-behavior: contain;
       }
     
       .QccSQ {
         height: 1.875rem;
         margin: 1rem 0px;
       }
    
       .lnrkkr hr {
         height: 1px;
         margin: 0px;
         border: none;
         background-color: rgba(62, 72, 79, 0.3);
       }
     
       .lnrkkr .buttons {
         padding: 1.25rem 2.5rem;
         display: flex;
       }
     
       .lnrkkr .buttons .button:first-of-type {
         flex: 0 0 auto;
         margin-right: 0.625rem;
       }
     
       .cBmlor > .button-inner {
         display: flex;
         -webkit-box-align: center;
         align-items: center;
         -webkit-box-pack: center;
         justify-content: center;
         width: 100%;
         height: 100%;
       }
     
       .eWZHfu.button {
         color: rgb(245, 246, 247);
         box-shadow: rgba(29, 34, 37, 0.1) 0px 4px 8px 0px;
         background-color: rgb(88, 26, 196);
         background-image: conic-gradient(
           from 1turn,
           rgb(88, 26, 196),
           rgb(119, 60, 253)
         );
       }
     
       .cBmlor.button-big {
         height: 3.625rem;
       }
     
       .cBmlor.button-big {
         height: 3.625rem;
       }
     
     
       .lnrkkr .button {
         flex: 1 1 0%;
       }
     
     
     
       .kDuLvp .input-control input {
         flex: 1 1 0%;
         width: 100%;
         height: 100%;
         min-width: 1rem;
         padding: 0px;
         border: none;
         outline: none;
         background-color: transparent;
         color: rgb(245, 246, 247);
       }
     
       input:-webkit-autofill {
         -webkit-box-shadow: 200px 200px 100px #273642 inset;
         box-shadow: 200px 200px 100px #273642 inset;
         -webkit-text-fill-color: var(--autofill-color);
       }
     
       .icon {
         width: 1rem;
         height: 1rem;
         margin-left: 0.375rem;
         opacity: 0.6;
         fill: rgb(245, 246, 247);
       }
     
       /* ============================= mobile ===================================== */
     
       .kBjSXI {
         position: fixed;
         z-index: 1000;
         inset: 0px;
         background-color: rgba(0, 0, 0, 0.507);
         filter: none !important;
       }
     
       .dialog {
         position: absolute;
         display: flex;
         flex-direction: column;
         left: 50%;
         top: 50%;
         width: 464px;
         height: 720px;
         margin: -375px 0px 0px -280px;
         transition-property: width, height, margin-left, margin-top;
         transition-duration: 0.5s;
         border-radius: 1.25rem;
         overflow: hidden;
         background-color: rgb(23, 24, 27);
       }
     
       .dialog-head.has-close {
         margin-right: 3.75rem;
       }
       .dialog-head {
         position: relative;
         z-index: 10;
         flex: 0 0 auto;
         display: flex;
         -webkit-box-align: center;
         align-items: center;
         height: 3.75rem;
         margin-left: 1.125rem;
         transition: all 0.5s ease 0s;
       }
     
       .dialog-body > div {
         flex: 1 1 0%;
       }
       .dialog-body > div {
         flex: 1 1 0%;
       }
     
       .kDuLvp .input-label {
         display: flex;
         -webkit-box-align: center;
         align-items: center;
         line-height: 1em;
         height: 1.25rem;
         margin: 0px 0.75rem 0.375rem;
         color: rgba(153, 164, 176, 0.6);
         font-size: 12px;
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
     
       .cBmlor {
         display: block;
         width: 100%;
         border-radius: 6.25rem;
         height: 3rem;
         font-weight: bold;
         cursor: pointer;
         transition: transform 0.2s cubic-bezier(0.36, 0.66, 0.04, 1) 0s;
       }
       .cBmlor.button-big {
         height: 3.625rem;
       }
       .eWZHfu.button {
         color: rgb(245, 246, 247);
         box-shadow: rgba(29, 34, 37, 0.1) 0px 4px 8px 0px;
         background-color: rgb(88, 26, 196);
         background-image: conic-gradient(
           from 1turn,
           rgb(88, 26, 196),
           rgb(119, 60, 253)
         );
       }
       .jBwyNM .buttons .button:first-of-type {
         width: 100%;
         flex: 0 0 auto;
         margin-right: 0.625rem;
       }
     
       .cBmlor > .button-inner {
         display: flex;
         -webkit-box-align: center;
         align-items: center;
         -webkit-box-pack: center;
         justify-content: center;
         width: 100%;
         height: 100%;
       }
     
       @media screen and (min-width: 650px) {
         .lnrkkr .buttons .button-big {
           width: 100%;
         }
       }
     
       @media screen and (max-width: 650px) {
         .dialog {
           width: 100%;
           height: 100%;
           left: 0px;
           top: 0px;
           margin: 0px;
           border-radius: 0px;
         }
         .lnrkkr .buttons .button-big {
           width: 100%;
         }
     
         *,
         *:before,
         *:after {
           box-sizing: border-box;
         }
         img {
           overflow-clip-margin: content-box;
           overflow: clip;
         }
       }
     
     </style>
     