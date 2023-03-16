<script lang="ts">
  import { initializeApp } from "firebase/app";
  import {
    getAuth,
    signInWithEmailAndPassword,
    signOut,
    type User,
    onAuthStateChanged,
    signInWithPopup,
  } from "firebase/auth";
  import { onMount } from "svelte";
  let email = "";
  let password = "";
  let user: User | null;
  const firebaseConfig = {
    apiKey: "AIzaSyCaC7Ve9AzjcqYOt-Q8h3g_D2fek7wdy7k",
    authDomain: "bachelorprosjekt2023-9f51f.firebaseapp.com",
    projectId: "bachelorprosjekt2023-9f51f",
    storageBucket: "bachelorprosjekt2023-9f51f.appspot.com",
    messagingSenderId: "831956904877",
    appId: "1:831956904877:web:cecd5309b6fae011f00f24",
    measurementId: "G-CCXLELXGJ5",
  };

  const app = initializeApp(firebaseConfig);
  const login = () => {
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, email, password).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
  };
  const logout = async () => {
    const auth = getAuth(app);
    signOut(auth);
  };
  onMount(async () => {
    const auth = getAuth(app);
    onAuthStateChanged(auth, (newUser) => {
      console.log(user);
      user = newUser;
    });
  });
</script>

{#if user}
  <p>Signed in with {user.providerData[0].providerId}!</p>
  <button on:click={logout}>Logout</button>
{:else}
  <input type="email" id="email" placeholder="email" bind:value={email} />
  <input
    type="password"
    id="password"
    placeholder="password"
    bind:value={password}
  />
  <button on:click={login}>Login</button>
{/if}
