import firebase from "firebase/compat/app";
import "firebase/firestore";
import { browser } from '$app/environment';
import { initializeApp } from "firebase/app";
import { handleAuthToken } from '$lib/store/routes';
import { LoginAuth } from "$lib/auth/loginAuth";
import { profileStore } from "$lib/store/profile";
import { getFirestore } from "firebase/firestore";
import { error_msg } from "$lib/store/error"
import { getAuth, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { handleFirebaseConfiq } from "./firebaseConfig"; 
import { is_loading } from "$lib/store/error";
const firebaseConfig = handleFirebaseConfiq()
const { CreateMember } = LoginAuth()
const app = initializeApp(firebaseConfig);
 const db = getFirestore(app);

export const handleSignIn = (async (data)=>{
    is_loading.set(true)
    const auth = getAuth(app);
    let email = data.email
    let password = data.password
    await createUserWithEmailAndPassword(auth, email, password)
    .then((res)=>{
        CreateMember({...res, data})
    })
    .catch((err)=>{
        error_msg.set(err.code.slice(5))
        setInterval(()=>{
            error_msg.set('')
        },4000)
        is_loading.set(false)
    })
 })

 export const handleLogin = (async (email, password)=>{
//     const auth = getAuth(app);
//    await signInWithEmailAndPassword(auth, email, password)
//    .then((res)=>{
//     //  login(res)
    
//    })
//    .catch((err)=>{

//    })
 })

 export const handleLogout = (async()=>{
    const auth = getAuth(app);
    signOut(auth).then((res) => {
        profileStore.set({})
        handleAuthToken.set(null)
        localStorage.removeItem("user");
        window.location.href = ("/")
      }).catch((error) => {
       console.log(error)
      });
 })
 