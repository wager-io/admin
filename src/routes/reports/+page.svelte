<script>
   import Navbar from "./navbar.svelte";
   import axios from "axios"
   import { handleAuthToken } from "$lib/store/routes";
   import { ServerURl } from "$lib/backendUrl";
   import Loader from "$lib/component/loader.svelte";
   import { daily_report } from "$lib/store/profile";
   const URL = ServerURl()
   
   let loading = true
   const handleMembers = (async()=>{
      await axios.get(`${URL}/admin/report`,{
         headers:{
            "Authorization": `Bearer ${$handleAuthToken}`
         }
      })
      .then((response)=>{
       daily_report.set(response.data.data)
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
      <Navbar on:close={handleCancel} />
      <div class="tabs-view" style="transform: none;">
         <div class="sc-hmvnCu emIWso">
             <table class="sc-gWXbKe iUeetX table is-hover">
                 <thead>
                     <tr>
                         <th>Date</th>
                         <th>DAU (count)</th>
                         <th>New Register (count)</th>
                         <th>Total New Deposit (count)</th>
                         <th>New Deposit</th>
                         <th>Total Re-deposit</th>
                         <th>Total Deposit</th>
                         <th>Total Withdrawal</th>
                         <th>Total Wager</th>
                         <th>Total Winning payout</th>
                         <th>Total GGR</th>
                         <th>Total Deposit bonus</th>
                         <th>Total Deposit bonus unlock</th>
                         <th>VIP level ups </th>
                         <th>Lucky spin </th>
                         <th>Roll competition </th>
                         <th>Medals </th>
                         <th>Rain </th>
                         <th>Coin Drop </th>
                         <th>Total Bunus unlock </th>
                         <th>Commission rakeback </th>
                         <th>Direct referral </th>
                         <th>Total affiliate unlock </th>
                         <th>Recharge </th>
                         <th>Weekly cashback </th>
                         <th>Monthly cashback </th>
                         <th>Lottery ticket $ </th>
                         <th class="m-width">Lottery Price $</th>
                     </tr>
                 </thead>
                 {#if loading}
                     <Loader />       
                  {:else} 
                     <tbody>
                        {#each $daily_report as member}
                            <tr>
                              <td>
                                 <div class="name">{member.date}</div>
                             </td>
                                 <td class="game-name">
                                    <div class="name">{member.dauCount}</div>
                                </td>
                               <td>{member.userCount}</td>
                              <td>{member.depositCount}</td>
                                  <td>{member.totalDeposit}</td>
                                  <td>{member.reDepositAmount}</td>
                                  <td>{member.depositAmount}</td>
                               <td>${(parseFloat(member.totalWithdrawalAmounts)).toFixed(4)}</td>
                                <td>${(parseFloat(member.totalWagered)).toFixed(4)}</td>
                                <td>${(parseFloat(member.totalPayout)).toFixed(4)}</td>
                                <td>${(parseFloat(member.totalGGR)).toFixed(4)}</td>
                                <td>{member.deposit.totalDepositBonus}</td>
                                <td>{member.deposit.totalUnlock}</td>
                            <td>{(parseFloat(member.vipLevelUp)).toFixed(4)}</td>
                         <td>{member.free.luckySpin}</td>
                         <td>{member.free.rollCompetitions}</td>
                         <td>{member.free.medal}</td>
                         <td>{member.free.rain}</td>
                         <td>{member.free.coinDrop}</td>
                         <td>{member.free.totalUnlocked}</td>
                       <td>{member.affiliate.totalDirectRefferal}</td>
                       <td>{member.affiliate.totalCommisionRekaBack}</td>
                       <td>{member.affiliate.totalCommisionRekaBack}</td>
                      <td>{member.otherBonuses.recharge_balance}</td>
                      <td>{member.otherBonuses.week_cashback}</td>
                      <td>{member.otherBonuses.monthly_cashback}</td>
                        <td>{member.dailyLotterys.totalTicket}</td>
                                <td class="win">
                                    <div class="sc-Galmp erPQzq coin notranslate has-sign">
                                        <div class={`amount win`}>
                                            <span class="amount-str">{member.dailyLotterys.totalPrize}</span>
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
         width: 170%;
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
   