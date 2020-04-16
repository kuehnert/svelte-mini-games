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

    const cell = event.target;
    if (cell.classList.contains("mole")) {
      score += 1;
      message = "Hit!";
      newHole();
    } else {
      if (score > 0) {
        score -= 1;
      }
      message = "Miss!";
    }
  }
</script>

<style>
  .whackgrid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(8rem, 1fr));
    grid-auto-rows: 1fr;
  }

  .whackgrid::before {
    content: "";
    width: 0;
    padding-bottom: 100%;
    grid-row: 1 / 1;
    grid-column: 1 / 1;
  }

  .whackgrid > *:first-child {
    grid-row: 1 / 1;
    grid-column: 1 / 1;
  }

  .whackgrid > * {
    background: rgba(0, 0, 0, 0.1);
    border: 1px white solid;
  }

  .mole {
    background-image: url("/images/mole.png");
    background-size: cover;
  }
</style>

<h1>Whack a Mole!</h1>
<div class="ui grid">
  <div class="eight wide column">
    <div class="whackgrid">
      <div class:mole={hole === 0} id="0" on:click={handleClick} />
      <div class:mole={hole === 1} id="1" on:click={handleClick} />
      <div class:mole={hole === 2} id="2" on:click={handleClick} />
      <div class:mole={hole === 3} id="3" on:click={handleClick} />
      <div class:mole={hole === 4} id="4" on:click={handleClick} />
      <div class:mole={hole === 5} id="5" on:click={handleClick} />
      <div class:mole={hole === 6} id="6" on:click={handleClick} />
      <div class:mole={hole === 7} id="7" on:click={handleClick} />
      <div class:mole={hole === 8} id="8" on:click={handleClick} />
    </div>
  </div>
  <div class="eight wide column">
    <h3>Time left: {seconds}</h3>
    <h3>Score: {score}</h3>
    <h3>{message}</h3>
  </div>
</div>
