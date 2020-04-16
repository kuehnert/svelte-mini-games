<script>
  import { onMount } from "svelte";
  import { Router, link, Link, Route } from "svelte-routing";
  import MyLink from "./MyLink.svelte";
  import MemoryGame from "./memory/MemoryGame.svelte";
  import WhackAMole from "./whackamole/WhackAMole.svelte";

  let activePage;

  function handleClick(event) {
    activePage = event.target.pathname;
  }

  onMount(() => {
    activePage = window.location.pathname;
  });
</script>

<Router>
  <div class="ui container">
    <div class="ui segment">
      <h1>Seven JavaScript Games with Svelte!</h1>
    </div>

    <nav class="ui two item menu">
      <MyLink href="/memory" {handleClick} {activePage}>Memory Game</MyLink>
      <MyLink href="/whackamole" {handleClick} {activePage}>Whack a Mole!</MyLink>
    </nav>

    <div class="ui segment">
      <Route path="/memory" component={MemoryGame} />
      <Route path="/whackamole" component={WhackAMole} />
    </div>
  </div>
</Router>
