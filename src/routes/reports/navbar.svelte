<script>
import { handleAuthToken } from "$lib/store/routes";
import Icon from 'svelte-icons-pack/Icon.svelte';
import AiOutlineUserAdd from "svelte-icons-pack/ai/AiOutlineUserAdd";
import { goto } from "$app/navigation";
import { profileStore } from "$lib/store/profile";
import "../../styles/navbar/mobileNavbar.css";
import "../../styles/navbar/navbar.css";
import { createEventDispatcher } from "svelte";
const dispatch = createEventDispatcher();

const handleClose = (()=>{
  dispatch("close", 9)
})
    

</script>


<div id="main" class={"sc-gVkuDy gAvMHL"}>
    <div class="header-wrap">
      <div class="header">
        <div class="sc-hGnimi ftyLxH left">
          <button on:click={()=> history.back()} class="sc-iukxot jivBdD logo-pc">
              <img style="border-radius: 12px;" class="coin-icon" alt=""
                src="https://res.cloudinary.com/dxwhz3r81/image/upload/v1698030795/typpe_3_cf83xp.png" />
          </button>
        </div>
        <button on:click={handleClose} class="sc-iqseJM sc-egiyK flids">
            <Icon src={AiOutlineUserAdd}  size="24"  color="#ffff" />
        </button>
            <div class="login-in" >
              <button style="font-size: 17px;">
                <p>@{$profileStore.username}</p>
              </button>
             
              <button  class="sc-iqseJM sc-egiyK jisjoid">
                   <img src="https://img2.nanogames.io/avatar/head2.png" alt="">
              </button>
        </div>
      </div>
    </div>
</div>
  

<style>
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
.flids{
  border-radius: 50%;
  padding: 10px 30px;
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
  