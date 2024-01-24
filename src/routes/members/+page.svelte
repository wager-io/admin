<script>
import Navbar from "./navbar.svelte";
import axios from "axios"
import AddMember from "./addMember.svelte";
import { handleAuthToken } from "$lib/store/routes";
import { ServerURl } from "$lib/backendUrl";
import Loader from "$lib/component/loader.svelte";
import { membership } from "$lib/store/profile";

const URL = ServerURl()

let loading = true
const handleMembers = (async()=>{
   await axios.get(`${URL}/admin/members`,{
      headers:{
         "Authorization": `Bearer ${$handleAuthToken}`
      }
   })
   .then((response)=>{
    membership.set(response.data.data)
    console.log(response.data)
      loading = false
   })
   .catch((error)=>{
      console.log(error.response)
      loading = false
   })
})

$:{
   $handleAuthToken && handleMembers()
}

function formatTime(timestamp) {
    const date = new Date(timestamp);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
    const formattedMinutes = minutes.toString().padStart(2, '0');
    return `${formattedHours}:${formattedMinutes} ${ampm}`;
}

const formatDate = ((timestamp)=>{
   const day = new Date(timestamp)
   const date = day.getDate()
   const month = day.getMonth() + 1
   const year = day.getFullYear()
   return `${date}-${month}-${year}`
})

let is_addMember = false
const handleCancel = (()=>{
    is_addMember =! is_addMember
})
  


</script>

<div>
{#if is_addMember}
  <AddMember on:close={handleCancel}/>
{/if}
   <Navbar on:close={handleCancel} />
   <div class="tabs-view" style="transform: none;">
      <div class="sc-hmvnCu emIWso">
          <table class="sc-gWXbKe iUeetX table is-hover">
              <thead>
                  <tr>
                      <th>User Id</th>
                      <th>Username</th>
                      <th>Full Name</th>
                      <th>Phone Number</th>
                      <th>Email</th>
                      <th>Total Wagered</th>
                      <th>Total GGR</th>
                      <th>Chat Messages</th>
                      <th>USDT + PPD + PPL</th>
                      <th>REG. Date & Time</th>
                      <th>1st Deposit Date & Time</th>
                      <th>Last Deposit Date & Time</th>
                      <th>Last Login Date & Time</th>
                      <th>Last Login IP </th>
                      <th class="m-width">Chat</th>
                  </tr>
              </thead>
              {#if loading}
                  <Loader />       
               {:else}
                  <tbody>
                     {#each $membership as member}
                         <tr>
                           <td>
                              <a class="sc-jUosCB iTDswZ user-info " href={`/user/profile/${member.user_id}`}>
                                  <div class="name">{member.user_id}</div>
                              </a>
                          </td>
                             <td class="game-name">
                                 <div class="name">{member.profile.username}</div>
                             </td>
                             <td>{member.profile.firstname} {member.profile.firstname}</td>
                             <td>{member.profile.phone}</td>
                             <td>{member.email}</td>
                             <td>${(parseFloat(member.profile.total_wagered)).toFixed(4)}</td>
                             <td>${(parseFloat(member.ggr)).toFixed(4)}</td>
                             <td>{member.profile.total_chat_messages}</td>
                             <td>{(parseFloat(member.totalBalance)).toFixed(4)}</td>
                             <td>{formatDate(member.created_at)} {formatTime(member.created_at)}</td>
                             <td>{member.userFirstAndLastDeposit.first_deposit}</td>
                             <td>{member.userFirstAndLastDeposit.last_deposit ? member.last_deposit : "-"}</td>
                             <td>{formatDate(member.lastLoginAt)} {formatTime(member.lastLoginAt)}</td>
                             <td>{member.last_login_ip}</td>
                             <td class="win">
                                 <div class="sc-Galmp erPQzq coin notranslate has-sign">
                                     <div class={`amount win`}>
                                         <span class="amount-str">open</span>
                                     </div>
                                 </div>
                             </td>
                         </tr>
                     {/each}
                 </tbody>
              {/if}
            
          </table>
      </div>
  </div>
</div>
  
  <style>
   .tabs-view {
      border-radius: 1.25rem;
      overflow: scroll;
  }
   .tabs-view {
      position: relative;
  }
  .emIWso {
      min-height: 38.25rem;
      padding: 0.625rem;
      background-color: rgb(30, 32, 36);
      border-radius: 1.25rem;
  }
  table {
      border-collapse: collapse;
      border-spacing: 0;
      font-size: 12.345px;
  } 
  .iUeetX {
      table-layout: fixed;
      border-collapse: separate;
      border-spacing: 0px;
  }
  .emIWso {
      width: 160%;
      min-height: 38.25rem;
      padding: 0.625rem;
      background-color: rgb(30, 32, 36);
      border-radius: 1.25rem;
  }
  tbody tr:nth-child(2n-1) {
    background: var(--scroll-color);
}
  
  .iUeetX {
      table-layout: fixed;
      border-collapse: separate;
      border-spacing: 0px;
  }
  table {
      border-collapse: collapse;
      border-spacing: 0;
  }
  .iUeetX th {
      font-weight: bold;
      font-size: 14px;
      color: rgba(153, 164, 176, 0.6);
  }
  .iUeetX th, .iUeetX td {
      overflow: hidden;
      text-align: center;
      padding: 0.875rem 0.75rem;
  }
  .iUeetX th:first-child, .iUeetX td:first-child {
      text-align: left;
  }
  .iUeetX td:first-child {
      border-radius: 0.625rem 0px 0px 0.625rem;
  }
  .iUeetX td {
      border: 1px solid transparent;
      color: rgb(123, 164, 207);
  }
  .emIWso .game-name .game-icon {
      width: 1.5rem;
      height: 1.5rem;
      margin-right: 0.1875rem;
  }
  .emIWso .game-name .name {
      width: 100%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
  }
  .iTDswZ.user-info {
      color: rgb(245, 246, 247);
      font-weight: bold;
  }
  .iTDswZ .name {
      flex: 1 1 0%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
  }
  .iTDswZ {
      display: inline-flex;
      -webkit-box-align: center;
      align-items: center;
  }
  .emIWso .coin {
      font-weight: bold;
      color: rgb(245, 246, 247);
      cursor: pointer;
  }
  .table .sc-Galmp {
      font-family: Monmono;
  }
  .emIWso .win .amount.win {
      color: rgb(67, 179, 9);
  }
  .emIWso .win .amount.lose {
      color: rgb(237, 99, 0);
  }
  
  .erPQzq.has-sign .amount-str {
      width: 7.2em;
  }
  .erPQzq .amount-str {
      width: 7em;
      display: inline-block;
  }
  .table .sc-Galmp {
      font-family: Monmono;
  }
  .erPQzq {
      display: inline-flex;
      vertical-align: middle;
      -webkit-box-align: center;
      align-items: center;
      white-space: nowrap;
  }
  .erPQzq .coin-icon {
      width: 1.4em;
      height: 1.4em;
      margin-right: 0.25em;
  }
  .emIWso .game-name {
      font-weight: 800;
      display: flex;
      -webkit-box-align: center;
      align-items: center;
  }
  </style>
