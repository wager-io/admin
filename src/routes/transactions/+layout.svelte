<script>
import { routes } from "$lib/store/routes"
import { goto } from "$app/navigation"
import { page } from "$app/stores";
import Currency from "./currency.svelte";
let urlString =  ($page.url.href);
let paramString = urlString.split('?')[1];
let queryString = new URLSearchParams(paramString);
$: correnncies = false
let coins = [
    {coin_name: "All", coin_img: "All currencies", active: true},
    {coin_name: "btc", coin_img: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1696501400", active: false},
    {coin_name: "eth", coin_img: "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1696501628", active: false},
    {coin_name: "wgf", coin_img: "https://res.cloudinary.com/dxwhz3r81/image/upload/v1698010748/wft_z3ouah.png", active: false},
    {coin_name: "wgd", coin_img: "https://res.cloudinary.com/dxwhz3r81/image/upload/v1698011384/type_1_w_hqvuex.png", active: false}
]
let seaser = []
for (let pair of queryString.entries()) {
    seaser.push(pair[1])
}
let active_coin = ""
let active_coinName = seaser[1]
let active_user_id = seaser[0]

coins.forEach(element => {
    if(element.active){
        active_coin = element
    }
});

const handleOption = ((event)=>{
    active_coin = event.detail
})

</script>

<div class="sc-bkkeKt kBjSXI" style="opacity: 1;">
    <div class="dialog " style="opacity: 1; width: 782px; height: 631px; margin-top: -315.5px; margin-left: -391px; transform: scale(1) translateZ(0px);">
        <div class="dialog-head has-back has-close">
            <div class="dialog-title">Transactions</div>
        </div>

        <button on:click={()=> goto("/members")} class="sc-ieecCq fLASqZ close-icon dialog-close">
            <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                <use xlink:href="#icon_Close"></use>
            </svg>
        </button>

        <div class="dialog-body no-style " style="z-index: 2; transform: none;">
            <div class="sc-cxpSdN kQfmQV tabs sc-eQxpLG cpezgQ" id="transactions">
                <div class="tabs-navs">
                    <button on:click={(()=> goto(`/transactions/deposit?id=${seaser[0]}&coin=${seaser[1]}`))} class={`tabs-nav ${$routes === "/transactions/deposit" ? "is-active" : ""} `}>Deposit</button>
                    <button on:click={(()=> goto(`/transactions/withdraw?id=${seaser[0]}&coin=${seaser[1]}`))} class={`tabs-nav ${$routes === "/transactions/withdraw" ? "is-active" : ""} `}>Withdraw</button>
                    <button on:click={(()=> goto(`/transactions/bill?id=${seaser[0]}&coin=${seaser[1]}`))} class={`tabs-nav ${$routes === "/transactions/bill" ? "is-active" : ""} `}>Bill</button>
                    {#if  $routes === "/transactions/deposit"}
                    <div class="bg" style={"left: 0%; right: 65%;"}></div>
                    {:else if  $routes === "/transactions/withdraw"}
                    <div class="bg" style={"left: 33%; right: 32%;"}></div>
                    {:else if  $routes === "/transactions/bill"}
                    <div class="bg" style={"left: 65%; right: 0%;"}></div>
                    {/if}
                </div>
                <div class="tabs-view">
                    <slot></slot>
                    <div class="sc-feYDSs XkKRx table-bot-page">
                        <button on:mouseenter={()=> correnncies = true } on:mouseleave={()=> correnncies = false} class="sc-jJoQJp gOHquD select  sc-eMHfQD hDizvn clvyMv">
                            <div class="select-trigger">
                                {#if active_coin.coin_name === "All"}
                                    <div class="currency-label">
                                        <div class="coin-icon coin-div">
                                            <span>{active_coin.coin_name}</span>
                                        </div>
                                    {active_coin.coin_img}
                                    </div>
                                    {:else}
                                    <div class="currency-label" style="text-transform: uppercase;">
                                        <img class="coin-icon" alt="" src={active_coin.coin_img}>
                                        {active_coin.coin_name}
                                     </div>
                                {/if}
                               

                                <div class="arrow top">
                                    <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                                        <use xlink:href="#icon_Arrow"></use>
                                    </svg>
                                </div>
                              </div>

                            {#if correnncies}
                              <Currency  on:close={handleOption}/>
                            {/if}

                        </button>

                        <div class="sc-cCcXHH dXTFyi pagination ">
                            <div class="sc-jJoQJp gOHquD select  ">
                                <div class="select-trigger">
                                    20
                                    <div class="arrow top">
                                        <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                                            <use xlink:href="#icon_Arrow"></use>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div class="sc-cidDSM dmcoXZ">Total 0</div>
                            <div class="sc-jcFjpl sc-iUKqMP dORpLZ jrpAIs pages-wrap">
                                <button class="active" disabled="">1</button>
                            </div>
                            <div class="sc-jcFjpl sc-iUKqMP dORpLZ jrpAIs page-pn">
                                <button disabled="" class="disabled previous-btn">
                                    <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon prev">
                                        <use xlink:href="#icon_Arrow"></use>
                                    </svg>
                                </button>
                                <button disabled="" class="disabled next-page">
                                    <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon next">
                                        <use xlink:href="#icon_Arrow"></use>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    </div>
</div>

<style>
.kBjSXI {
    position: fixed;
    z-index: 1000;
    inset: 0px;
    background-color: rgba(0, 0, 0, 0.7);
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

.dialog-back {
    position: absolute;
    left: 0px;
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

.dialog-head.has-close {
    margin-right: 3.75rem;
}

.dialog-head.has-back {
    margin-left: 3.125rem;
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

.dialog-head .dialog-title {
    font-size: 1rem;
    margin: 0px;
    font-weight: bold;
    flex: 1 1 0%;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    color: rgb(245, 246, 247);
}

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
.fLASqZ:hover svg {
    transform: rotate(-90deg);
    fill: rgb(245, 246, 247);
}
.no-style {
    padding-top: 3.75rem;
    background-color: rgb(23, 24, 27);
}

.dialog-body {
    position: absolute;
    inset: 0px;
    display: flex;
    overflow: hidden;
}

.cpezgQ {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
}

.cpezgQ {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
}

.dialog-body>div {
    flex: 1 1 0%;
}

.cpezgQ .tabs-navs {
    display: flex;
    margin: 0.875rem auto;
    flex: 0 0 auto;
    width: 544px;
    max-width: 100%;
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

.cpezgQ .tabs-nav {
    flex: 1 1 0%;
    -webkit-box-pack: center;
    justify-content: center;
    padding: 0px;
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

.XkKRx {
    background-color: rgb(30, 32, 36);
    padding: 0.75rem 0.75rem 0.75rem 1.25rem;
    flex: 0 0 auto;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    position: relative;
    z-index: 20;
}

.hDizvn {
    width: 190px;
}

.gOHquD {
    position: relative;
    height: 2.5rem;
    opacity: 1;
}

.hDizvn .select-trigger {
    padding: 0px 0.9375rem;
    width: 100%;
}

.gOHquD .select-trigger {
    position: relative;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    overflow: hidden;
    height: 100%;
    cursor: pointer;
    padding: 0px 1.25rem;
    user-select: none;
    border-radius: 1.25rem;
    background-color: rgb(23, 24, 27);
}

.hDizvn .currency-label {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
}
 .coin-div {
    background-color: rgb(67, 179, 9);
    border-radius: 0.625rem;
    color: rgb(255, 255, 255);
    font-size: 0.75rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
}

.gOHquD .select-trigger .arrow {
    width: 2.5rem;
    height: 100%;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    position: absolute;
    right: 0px;
    top: 0px;
}
.currency-label img{
    border-radius: 50%;
    margin-right: 5px;
}
.hDizvn .coin-icon {
    width: 1.25rem;
    height: 1.25rem;
    margin-right: 0.3125rem;
}

.dXTFyi {
    display: flex;
    -webkit-box-pack: end;
    justify-content: flex-end;
    -webkit-box-align: center;
    align-items: center;
}

.dXTFyi .select {
    width: 6em;
    height: 2rem;
}

.dXTFyi .select-trigger {
    font-weight: 800;
    color: rgb(245, 246, 247);
    background-color: rgba(24, 25, 29, 0.6);
}

.gOHquD .select-trigger .arrow {
    width: 2.5rem;
    height: 100%;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    position: absolute;
    right: 0px;
    top: 0px;
}

.dmcoXZ {
    height: 2rem;
    line-height: 2rem;
    margin: 0px 0.5rem 0px 24px;
    font-size: 0.75rem;
    color: rgba(153, 164, 176, 0.6);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.dORpLZ.pages-wrap {
    background-color: rgba(24, 25, 29, 0.6);
    padding: 0px 1.125rem;
}

.dORpLZ {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    height: 2rem;
    border-radius: 2rem;
    overflow: hidden;
    -webkit-box-align: center;
    align-items: center;
    padding: 0px;
}

.dORpLZ.pages-wrap .active {
    color: rgb(245, 246, 247);
    font-weight: 600;
}

.dORpLZ.page-pn {
    margin-left: 0.75rem;
}

.dORpLZ {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    height: 2rem;
    border-radius: 2rem;
    overflow: hidden;
    -webkit-box-align: center;
    align-items: center;
    padding: 0px;
}

.jrpAIs.page-pn button.disabled {
    background-color: rgba(45, 48, 53, 0.4);
}

.dORpLZ.page-pn .previous-btn {
    margin: 0px 1px 0px 0px;
}

.dORpLZ.page-pn .disabled {
    cursor: not-allowed;
}

.dORpLZ.page-pn button {
    width: 2.125rem;
    height: 2rem;
    margin: 0px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
}

.cpezgQ .tabs-view {
    flex: 1 1 0%;
    display: flex;
    flex-direction: column;
}

.kQfmQV .tabs-view {
    position: relative;
}


.clvyMv .currency-label {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
}


.clvyMv .coin-icon {
    width: 1.25rem;
    height: 1.25rem;
    margin-right: 0.3125rem;
}


.clvyMv .currency-label {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
}



.clvyMv .coin-icon {
    width: 1.25rem;
    height: 1.25rem;
    margin-right: 0.3125rem;
}



.clvyMv .currency-label {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
}

.clvyMv .coin-icon {
    width: 1.25rem;
    height: 1.25rem;
    margin-right: 0.3125rem;
}

.clvyMv .currency-label {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
}

.clvyMv .coin-icon {
    width: 1.25rem;
    height: 1.25rem;
    margin-right: 0.3125rem;
}
</style>
