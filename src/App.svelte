<script>
  import { onMount } from "svelte";
  import Router from "svelte-spa-router";
  import MyLink from "./components/MyLink.svelte";
  import Memory from "./memory/Memory.svelte";
  import WhackAMole from "./whackamole/WhackAMole.svelte";
  import HomePage from './components/HomePage.svelte'

  const routes = {
    "/": HomePage,
    "/memory": Memory,
    "/whackamole": WhackAMole
  };
</script>

<div class="ui container">
  <div class="ui segment">
    <h1>Seven JavaScript Games with Svelte!</h1>
  </div>

  <nav class="ui two item menu">
    <MyLink href="/memory" >Memory Game</MyLink>
    <MyLink href="/whackamole">Whack a Mole!</MyLink>
  </nav>

  <div class="ui segment">
    <Router {routes} />
  </div>
</div>
