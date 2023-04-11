import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { writable } from "svelte/store";
import { auth } from "../lib/firebase/firebase";


export const authStore = writable({
    user: null,
    loading: true,
    data: {}
})

export const currentUser = writable(null);

export const authHandlers = {
    login: async (email, pass) => {
        await signInWithEmailAndPassword(auth, email, pass)
    },
    logout: async () => {
        await signOut(auth)
    }
}
