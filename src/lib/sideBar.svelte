<script>
export let routes
import { goto } from "$app/navigation"
import Icon from 'svelte-icons-pack/Icon.svelte';
import RiSystemArrowRightSLine from "svelte-icons-pack/ri/RiSystemArrowRightSLine";
import BiLogInCircle from "svelte-icons-pack/bi/BiLogInCircle";
import { handleLogout } from "../lib/firebaseAuth/index"
import '../styles/sidebar/sidebar.css'
import '../styles/sidebar/sidebarmobile.css'
// export let styls;
let showOriginals = false

const openOriginal = ((e) => {
    if (e) {
        showOriginals = true
    } else {
        showOriginals = false
    }
})

</script>

<div id="main" class="sc-jHkVzv eTxQfM unfold">
    <div class="large-sidebar hidden-scroll-y">
        <div class="sc-uojGG hksQGj">
            <a aria-current="page" class="is-active active" href="/">Casino</a>
        </div>
        <button on:click={()=> goto("/")} class={`sc-iNGGcK knLCVT menu-item ${routes.route === "/" ? "select" : ""}`}>
            <div class="menu-pc">
                <img alt="menu-icon" src="https://static.nanogames.io/assets/home.e1cf89b4.png"><span>Dashboard</span>
            </div>
        </button>
        <button on:click={()=> goto("/members")}  class={`sc-iNGGcK knLCVT menu-item  ${routes.route === "/members" ? "select" : ""} `}>
            <div class="menu-pc">
                <img alt="menu-icon" src="https://static.nanogames.io/assets/affiliate.6f434c33.png">
                <span>Member Management</span>
            </div>
        </button>
        <button on:click={()=> goto("/reports")}  class={`sc-iNGGcK knLCVT menu-item special-nav  ${routes.route === "/reports" ? "select" : ""} `}>
            <div class="menu-pc">
                <img alt="menu-icon" src="https://static.nanogames.io/assets/promotion.316446ec.png"><span>Reports</span>
            </div>
        </button>
        <button on:click={()=> goto("/admin")} class={`sc-iNGGcK knLCVT menu-item ${ routes.route ==="/admin" ? "select" : ""}`}>
            <div class="menu-pc">
                <img alt="menu-icon" src="https://static.nanogames.io/assets/affiliate.6f434c33.png">
                <span>Admin Managemnet</span>
            </div>
        </button>
        <button  on:click={()=> goto("/chat")} class={`sc-iNGGcK knLCVT menu-item special-nav vip ${ routes.route === "/chat" ? "select" : ""}`} >
            <div class="menu-pc">
                <img alt="menu-icon" src="https://static.nanogames.io/assets/vipclub.3b37e72c.png">
                <span>Chat Management</span>
            </div>
        </button>
        <div class="sc-eGPXGI kCbnNh"></div>

        <!-- <button on:click={()=> goto("/favourite")}  class={`sc-iNGGcK knLCVT menu-item ${ routes.route === "/favourite" ? "select" : ""}`}>
            <div class="menu-pc">
                <img alt="menu-icon" src="https://static.nanogames.io/assets/myfavorite.466f0741.png">
                <span>Favorite Games</span>
            </div>
        </button>
        <button on:click={()=> goto("/recent-play")} class={`sc-iNGGcK knLCVT menu-item  ${routes.route === "/recent-play" ? "select" : ""}`}>
            <div class="menu-pc">
                <img alt="menu-icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAARVBMVEUAAACNI+aTK++NJOWNI+eMI+aNJOaNJOacLOqOJ+uOJeeNJOaNJOWNJOaOI+aNJeeOJOaPJOePJ+WNJOiSJO2NI+aMI+Uq+huBAAAAFnRSTlMA2Q/5aee/uQsmUfPFopB9XEA7OBzSytsOlAAAASJJREFUWMPtlsmuwjAMRZM6Ywc6APf/P/XBAtynQOV4AQtytpGOZMe5sWk0Go2Gjm6Zgh0GG6alM3r6QHhCoVdqthGg6NacUl5dJGDcNJ4T4F23q9J54FTfnAiak/lHmgmxq/RY+LMpOHvYOlPE9WJecLki1vXHs8feYJOv6dMG2tWFG7vqCPK7GzGbdyIzYxTPIXx6L0oe0skMcKYQMQ5BePVEXSEqzgUsiOZIZCIWkWiCOxY5TMIWrceiVdgki1yI8p1HZzKsSDQgFaI7z4oThk+KuLRSxKWpmm0f9Nxs1fUzfP2qgWR4IMVPRHlePtrjyoIiRhhFjHCwMZpg46hlVFHL4c8owl/xHWk/yE9/2folQr/W6Bet769+jUaj8dP8AetcFXVRAZgCAAAAAElFTkSuQmCC">
                <span>Recent Play</span>
            </div>
        </button>
        <div class="line"></div> -->
        <div class="border_bottom">
            <button on:click={()=> handleLogout()} class="live">
                <div class="support-icon">
                    <Icon src={BiLogInCircle}  size="24"  color="#ffff" />
                </div>
                <span>Log out</span>
            </button>
        </div>
    </div>
</div>
