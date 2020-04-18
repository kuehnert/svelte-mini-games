<script>
  import { onMount } from "svelte";

  let score = 0;
  let seconds = 30;
  let hole = null;
  let message = "";
  let timer;

  function newHole() {
    hole = Math.floor(Math.random() * 9);
  }

  onMount(() => {
    timer = setInterval(() => {
      seconds -= 1;
      if (seconds === 0) {
        clearInterval(timer);
        message = "Game Over!";
      } else {
        message = "";
        newHole();
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  });

  function handleClick(event) {
    if (seconds < 1) return;

    const square = event.target;
    if (square.classList.contains("mole")) {
      score += 1;
      message = "Hit!";
      hole = null;
    } else {
      if (score > 0) {
        score -= 1;
      }
      message = "Miss!";
    }
  }
</script>

<style>
  .mole {
    background-image: url("images/mouse.svg");
    background-size: cover;
  }
</style>

<h1>Whack a Mole!</h1>
<div class="ui grid">
  <div class="eight wide column">
    <div class="squareGrid">
      {#each Array(9) as _, i}
        <div
          class="square"
          class:mole={hole === i}
          id="i"
          on:click={handleClick} />
      {/each}
    </div>
  </div>
  <div class="eight wide column">
    <h3>Time left: {seconds}</h3>
    <h3>Score: {score}</h3>
    <h3>{message}</h3>

    <p>
      Original here:
      <a href="https://www.youtube.com/watch?v=lhNdUVh3qCc&t=699s" target="new">
        Ania Kubow's YouTube tutorial
      </a>
    </p>
    <p>
      <a
        href="https://openmoji.org/library/#group=animals-nature&emoji=1F42D"
        target="new">
        Mouse face emoji by Sofie Ascherl
      </a>
    </p>
  </div>
</div>
