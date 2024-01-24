<script>
    import axios from "axios";
    import { ServerURl } from "$lib/backendUrl";
    import { handleAuthToken } from "$lib/store/routes";
    import { onMount } from "svelte";
    import Loader from "$lib/component/loader.svelte";
    
    const URL = ServerURl()
    let lose_ranking = []
    $: is_loading = false
    const handleLoses = (async()=>{
        is_loading = true
        await axios.get(`${URL}/admin/wageredranking`,{
            headers:{
                "Authorization": `Bearer ${$handleAuthToken}`
            }
        })
        .then((response)=>{
            is_loading = false
            lose_ranking = response.data 
        })
        .catch((error)=>{
            is_loading = false
            console.log(error.response.data)
        })
    })
    
    onMount(async()=>{
       $handleAuthToken && await handleLoses()
    })

    $:  lose_ranking = lose_ranking.sort((a, b) => b - a);

    </script>
    
    <div class="tabs-view" style="transform: none;">
        <div class="sc-hmvnCu emIWso">
            <table class="sc-gWXbKe iUeetX table is-hover">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>User Id</th>
                        <th>VIP level</th>
                        <th class="m-width">Total Wagered</th>
                    </tr>
                </thead>
                <tbody>
                    {#if is_loading}
                    <Loader />
                {:else}
                {#each lose_ranking as iuy}
                <tr>
                    <td class="game-name">
                        <img src={iuy.profile_image} class="game-icon" alt="">
                        <div class="name">{iuy.username}</div>
                </td>
                <td>
                    <a class="sc-jUosCB iTDswZ user-info " href={`/user/profile/${iuy.user_id}`}>
                        <div class="name">{iuy.user_id}</div>
                    </a>
                </td>
                <td>VIP{iuy.vip_level}</td>
                <td class="win">
                    <div class="sc-Galmp erPQzq coin notranslate has-sign">
                        <div class="amount">
                            <span class="amount-str">{(parseFloat(iuy.total_wagered)).toFixed(4)}<span class="suffix">00</span></span>
                        </div>
                    </div>
                </td>
                </tr>
                {/each}
                {/if}
             
                </tbody>
            </table>
        </div>
    </div>
    
    <style>
     .tabs-view {
        border-radius: 1.25rem;
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
        width: 100%;
        border-collapse: collapse;
        border-spacing: 0;
        font-size: 13px;
        font-family: 'Times New Roman', Times, serif;
    }
    .iUeetX {
        width: 100%;
        table-layout: fixed;
        border-collapse: separate;
        border-spacing: 0px;
    }
    .emIWso {
        min-height: 38.25rem;
        padding: 0.625rem;
        background-color: rgb(30, 32, 36);
        border-radius: 1.25rem;
    }
    
    .iUeetX {
        width: 100%;
        table-layout: fixed;
        border-collapse: separate;
        border-spacing: 0px;
    }
    table {
        width: 100%;
        border-collapse: collapse;
        border-spacing: 0;
    }
    .iUeetX th {
        font-weight: normal;
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
        color: rgb(153, 164, 176);
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
    }
    .table .sc-Galmp {
        font-family: Monmono;
    }
    .emIWso .win .amount {
        color: rgb(67, 179, 9);
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
    
    .emIWso .game-name {
        font-weight: 800;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
    }
    
    .game-icon{
        border-radius: 50%;
    }
    </style>
    