import { writable } from "svelte/store";

let error = ''
export const error_msg = writable(error)

let  login_idEL = ''
export const login_id = writable(login_idEL)

let  loading = false
export const is_loading = writable(loading)