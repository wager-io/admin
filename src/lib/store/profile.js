import { writable } from "svelte/store"
let profile = {}
let isLoggin = false
let isLoading = true
let first_loadEl = false
let app_loadingEl = false
let procress = 0
let users_profileEl = ''
let memberEl = []
let _daily_report = []

export let profileStore = writable(profile)
export let proressbar = writable(procress)
export let handleisLoggin = writable(isLoggin)
export let handleisLoading = writable(isLoading)
export let first_load = writable(first_loadEl)
export let app_Loading = writable(app_loadingEl)
export let users_profile = writable(users_profileEl)
export let membership = writable(memberEl)
export let daily_report = writable(_daily_report)
