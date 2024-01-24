<script>
import Latest from "$lib/dashboard/latest.svelte";
import Loses from "$lib/dashboard/loses.svelte";
import Wager from "$lib/dashboard/wager.svelte";
import WonRanking from "$lib/dashboard/wonRanking.svelte";
import axios from "axios";
import { onMount } from "svelte";
import { handleAuthToken } from '$lib/store/routes';
import { ServerURl } from "$lib/backendUrl";
import Loader from "$lib/component/loader.svelte";
import { handleCountdown } from "$lib/socket";
handleCountdown()
let URL = ServerURl()
// import { handleDashboard } from "$lib/index";
// handleDashboard()
let dashboardResponds = ''
const handleDashboard = (async()=>{
    await axios.get(`${URL}/admin/dashboard`,{
        headers:{
            Authorization: `Bearer ${$handleAuthToken}`
        }
    })
    .then((response)=>{
        dashboardResponds = response.data.data
    })
    .catch((error)=>{
        console.log(error)
    })
})

$:{
    $handleAuthToken && handleDashboard()
}


let navs = "bets"
</script>

<div class="jhicf pknhcfgx yuiyr">
    <div class="first_card">
        {#if !dashboardResponds}
            <Loader />
            {:else}
            <div class="first_card-detail">
                <div class="title"> Total Deposited Players</div>
                <div class="price"> {dashboardResponds && dashboardResponds.totalDepositedPlayers} </div>
            </div>
            <div class="yuvdQet"></div>
            <div class="first_card-detail">
                <div class="title"> Total GGR</div>
                <div class="price"> ${dashboardResponds && (parseFloat(dashboardResponds.grossGamingRevenue)).toFixed(4)}  </div>
            </div>
            <div class="yuvdQet"></div>
            <div class="first_card-detail">
                <div class="title"> Total Player Balance</div>
                <div class="price"> ${dashboardResponds && (parseFloat(dashboardResponds.totalPlayerBalance)).toFixed(4)} </div>
            </div>
            <div class="yuvdQet"></div>
            <div class="first_card-detail">
                <div class="title"> Total Wagered</div>
                <div class="price"> ${dashboardResponds && (parseFloat(dashboardResponds.totalWagered)).toFixed(4)} </div>
            </div>
            <div class="yuvdQet"></div>
            <div class="first_card-detail">
                <div class="title"> Total Win</div>
                <div class="price"> ${dashboardResponds && (parseFloat(dashboardResponds.totalWon)).toFixed(4)} </div>
            </div>
            <div class="yuvdQet"></div>
            <div class="first_card-detail">
                <div class="title"> Total Lose</div>
                <div class="price"> ${dashboardResponds && (parseFloat(dashboardResponds.totalLoss)).toFixed(4)} </div>
            </div>
        {/if}
    </div>

    <div class="second_card">
        <div class="sc-gsFzgR ecYYiT">
            <div class="sc-cxpSdN kQfmQV tabs sc-cAhXWc fufAIq">
                <div class="tabs-navs">
                    <button on:click={()=>navs = "bets"} class={`tabs-nav ${navs === "bets" ? "is-active" : ""}`}>Latest bets</button>
                    <button on:click={()=>navs = "wager"} class={`tabs-nav ${navs === "wager" ? "is-active" : ""}`}>Total Wagered Ranking</button>
                    <button on:click={()=>navs = "won"} class={`tabs-nav ${navs === "won" ? "is-active" : ""}`}>Total Won Ranking</button>
                    <button on:click={()=>navs = "lose"} class={`tabs-nav ${navs === "lose" ? "is-active" : ""}`}>Total Lost Ranking</button>
                    {#if navs === "bets"}
                        <div class="bg" style="left: 0%; right: 75%;"></div>
                    {:else if navs === "wager"}
                        <div class="bg" style="left: 25%; right: 50%;"></div>
                    {:else if navs === "won"}
                        <div class="bg" style="left: 50%; right: 25%;"></div>
                        {:else if navs === "lose"}
                        <div class="bg" style="left: 75%; right: 0%;"></div>
                    {/if}
                </div>
                {#if navs === "bets"}
                    <Latest />
                {:else if navs === "lose" }
                    <Loses />
                {:else if navs === "wager" }
                    <Wager />
                {:else if navs === "won" }
                    <WonRanking />
                {/if}
            </div>
        </div>
    </div>
</div>

<style>
.pknhcfgx{
    margin: 35px ;
}
.yuvdQet{
    width: 2px;
    height: 130px;
    background: #ffffff17;
}
.first_card{
    box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.336);
    margin: 100px 0 0 0;
    width: 100%;
    height: 140px;
    background: #1e2024;
    display: flex;
    border-radius: 12px;
}
.first_card-detail{
    color: #fff;
    padding: 10px;
    width: 100%;
    text-align: center;
}
.first_card-detail .price{
    font-size: 20px;
    margin-top: 20px;
    font-weight: bold;
}
.first_card-detail .title{
    font-size: 13px;
    color: var(--placeholder-color);
    margin-top: 10px;
}
.ecYYiT {
    margin-top: 40px;
}
.fufAIq .tabs-navs {
    color: rgb(245, 246, 247);
    font-size: 0.875rem;
    margin-left: 0.625rem;
    margin-bottom: 0.75rem;
    max-width: 59.5rem;
}
.kQfmQV .tabs-navs {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    height: 2.25rem;
    position: relative;
    border-radius: 1.125rem;
    background-color: rgba(49, 52, 60, 0.7);
}
.kQfmQV .tabs-nav.is-active {
    color: rgb(245, 246, 247);
    font-weight: bold;
}
.kQfmQV .tabs-nav {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    flex: 1 1 0%;
    height: 100%;
    cursor: pointer;
    white-space: nowrap;
    width: 100%;
    z-index: 1;
}
.kQfmQV .tabs-navs .bg {
    border-radius: 1.125rem;
    background-image: linear-gradient(to left, rgb(85, 89, 102), rgb(85, 89, 102), rgb(88, 174, 20));
    opacity: 0.4;
    height: 100%;
    position: absolute;
    left: 0px;
    top: 0px;
    transition: right 0.2s ease-out 0s, left 0.3s ease-out 0s;
    transform: translateZ(0px);
    box-shadow: rgba(0, 0, 0, 0.14) 0px 0px 0.3125rem;
}

</style>
