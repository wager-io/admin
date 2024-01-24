<script>
import { letestRanking } from "$lib/store/coins";
$: newItem = []
 $: {
    // $crash_historyEl.sort((a, b) => b._id - a._id);
    newItem =  [...$letestRanking].reverse()
}
</script>

<div class="tabs-view" style="transform: none;">
    <div class="sc-hmvnCu emIWso">
        <table class="sc-gWXbKe iUeetX table is-hover">
            <thead>
                <tr>
                    <th>Game</th>
                    <th>Player</th>
                    <th>Bet ID</th>
                    <th>Payout</th>
                    <th class="m-width">Profit</th>
                </tr>
            </thead>
            <tbody>
                {#each newItem as latest}
                    <tr>
                        <td class="game-name">
                            <img src='https://static.nanogames.io/assets/Plinko.408dd155.png' class="game-icon" alt="">
                            <div class="name">{latest.gane_type}</div>
                        </td>
                        <td>
                            <a class="sc-jUosCB iTDswZ user-info " href={`/user/profile/${latest.user_id}`}>
                                <div class="name">{latest.player}</div>
                            </a>
                        </td>
                        <td>{latest.bet_id}</td>
                        <td>{ latest.has_won ? (parseFloat(latest.payout)).toFixed(2) : `0.00`}x</td>
                        <td class="win">
                            <div class="sc-Galmp erPQzq coin notranslate has-sign">
                                <img class="coin-icon"  src={latest.token_img} alt="">
                                <div class={`amount ${latest.has_won ? "win" : "lose"} `}>
                                    <span class="amount-str">{latest.has_won ? "+" : ""}{(parseFloat(latest.profit_amount)).toFixed(4)}<span class="suffix">00</span></span>
                                </div>
                            </div>
                        </td>
                    </tr>
                {/each}
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
