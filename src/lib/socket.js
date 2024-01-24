import { io } from "socket.io-client";
import { ServerURl} from "$lib/backendUrl"
const URL = ServerURl()
const socket = io(`${URL}`);
import { letestRanking } from "./store/coins";

export const handleCountdown = (()=>{
    socket.on("latest-bet", data=>{
        letestRanking.set(data)
    })
})