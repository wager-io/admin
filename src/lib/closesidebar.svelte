<script>
import Icon from 'svelte-icons-pack/Icon.svelte';
import RiSystemArrowRightSLine from "svelte-icons-pack/ri/RiSystemArrowRightSLine";
import AiFillGift from "svelte-icons-pack/ai/AiFillGift";
import BiLogInCircle from "svelte-icons-pack/bi/BiLogInCircle";
import { handleLogout } from "$lib/firebaseAuth/index"
import { goto } from "$app/navigation";
// export let styls;
export let routes;


</script>

<div class="sc-jHkVzv eTxQfM fold">
    <div class="small-sidebar hidden-scroll-y">
        <div class="sc-bilyIR ioXbGd">
            <div class="tab-more">
                <div class="tab-item select small-icon">
                    <img alt="icon" src="https://static.nanogames.io/assets/casino.8f220c2c.png">
                </div>
            </div>
        </div>
        <button on:click={()=> goto("/")} class={`sc-iNGGcK knLCVT menu-item ${routes.route === "/" ? "select" : ""}`}>
            <div class="menu-mobile">
                <img alt="menu-icon" src="https://static.nanogames.io/assets/home.e1cf89b4.png">
            </div>
        </button>
        <button on:click={()=> goto("/members")} class={`sc-iNGGcK knLCVT menu-item ${routes.route === "/members" ? "select" : ""}`}>
            <div class="menu-mobile">
                <img alt="menu-icon" src="https://static.nanogames.io/assets/affiliate.6f434c33.png">
            </div>
        </button>
        <button on:click={()=> goto("/reports")} class={`sc-iNGGcK knLCVT menu-item ${routes.route === "/reports" ? "select" : ""}`}>
            <div class="menu-mobile">
                <img alt="menu-icon" src="https://static.nanogames.io/assets/promotion.316446ec.png">
            </div>
        </button>
        <button on:click={()=> goto("/admin")} class={`sc-iNGGcK knLCVT menu-item ${routes.route ==="/admin" ? "select" : ""}`}>
            <div class="menu-mobile">
                <img alt="menu-icon" src="https://static.nanogames.io/assets/affiliate.6f434c33.png">
            </div>
        </button>
        <button on:click={()=> goto("/chat")} class={`sc-iNGGcK knLCVT menu-item special-nav vip ${ routes.route === "/chat" ? "select" : ""}`}>
            <div class="menu-mobile">
                <img alt="menu-icon" src="https://static.nanogames.io/assets/vipclub.3b37e72c.png">
            </div>
        </button>
        <div class="sc-eGPXGI kCbnNh"></div>
        <div class="logs lnsine">
            <button on:click={()=> handleLogout()} class="euizhsias jwidow">
                <Icon src={BiLogInCircle}  size="24"  color="#ffff" />
            </button>
        </div>
    </div>
</div>

<style>
.eTxQfM.fold {
    width: 76px;
}

.eTxQfM button {
    color: rgba(153, 164, 176, 0.8);
}

.eTxQfM {
    position: fixed;
    z-index: 102;
    left: 0px;
    top: 0px;
    bottom: 0px;
    width: 240px;
    color: rgba(153, 164, 176, 0.8);
    background-color: rgb(30, 32, 36);
    transition: all 0.2s linear 0s;
}

.eTxQfM .small-sidebar {
    width: 76px;
    height: 100%;
    overflow: hidden;
}

.ioXbGd {
    margin-top: 0.4375rem;
    margin-bottom: 0.4375rem;
    border-bottom: 1px solid rgba(49, 52, 60, 0.6);
    width: 100%;
    height: 3.25rem;
    box-sizing: content-box;
    padding-bottom: 1rem;
    padding-left: 0.625rem;
}

.ioXbGd .tab-more {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    border: 1px solid transparent;
    width: 3.25rem;
    height: 3.25rem;
    position: absolute;
    z-index: 10;
    padding: 0.1875rem;
}
.lnsine{
    margin: 15px;
}

.ioXbGd .tab-more .tab-item.select {
    background-color: rgb(43, 47, 55);
}

.ioXbGd .tab-more .tab-item {
    display: flex;
    flex: 0 0 auto;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    width: 2.875rem;
    height: 2.875rem;
    border-radius: 17px;
    overflow: hidden;
}

.ioXbGd .tab-more .tab-item img {
    width: 2.125rem;
    height: 2.125rem;
    display: inline-block;
    vertical-align: top;
}

.knLCVT {
    width: 100%;
    cursor: pointer;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    font-size: 0.875rem;
}

.knLCVT.select .menu-mobile {
    background-image: linear-gradient(to right, rgba(105, 179, 1, 0.4), rgba(85, 89, 102, 0.4) 33%, rgba(85, 89, 102, 0.4));
}

.jwidow{
    width: 2.5rem;
    height: 2.5rem;
    min-width: 2.5rem;
    border-radius: 50%;
    background: rgb(67, 179, 9);
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    margin-right: 0.5rem;
}

.knLCVT .menu-mobile {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    margin: 0px auto 0.5rem;
}

.knLCVT .menu-mobile img {
    width: 2.5rem;
    height: 2.5rem;
}
.kCbnNh {
    border-bottom: 1px solid rgba(49, 52, 60, 0.6);
    margin: 1rem 0.625rem 1.25rem;
}

.gOHquD {
    position: relative;
    height: 2.5rem;
    opacity: 1;
}

.eTxQfM::after {
    content: "";
    position: absolute;
    left: 100%;
    top: 0px;
    width: 0.75rem;
    height: 100%;
    pointer-events: none;
    background-image: linear-gradient(to right, rgb(4, 4, 4), rgba(36, 38, 43, 0));
    opacity: 0.1;
    z-index: -1;
}
</style>
