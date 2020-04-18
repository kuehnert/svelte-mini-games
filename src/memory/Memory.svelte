<script>
  import Card from "./Card.svelte";
  import { cards, disabled, message, score } from "./store";
  let firstCard = null;

  function handleClick(event) {
    const currentCard = $cards.find(c => c.id === event.target.id);
    if ($disabled || currentCard.state === 2) {
      return;
    }

    cards.changeState(currentCard.id, 1);

    if (firstCard == null) {
      firstCard = currentCard;
    } else {
      // second card chosen
      disabled.set(true);
      if (firstCard.name === currentCard.name) {
        message.set("You have a pair!");
        score.update(s => s + 1);
        setTimeout(() => {
          cards.changeState(currentCard.id, 2);
          cards.changeState(firstCard.id, 2);
          firstCard = null;
          if ($score === 6) {
            message.set("Congratulations! You have won the game. :)");
          } else {
            message.set("");
            disabled.set(false);
          }
        }, 2000);
      } else {
        message.set("No cigar!");
        disabled.set(true);
        setTimeout(() => {
          cards.changeState(currentCard.id, 0);
          cards.changeState(firstCard.id, 0);
          firstCard = null;
          message.set("");
          disabled.set(false);
        }, 2000);
      }
    }
  }
</script>

<style>
  .Grid {
    display: flex;
    flex-wrap: wrap;
    width: 400px;
    height: 300px;
  }
</style>

<h1>Memory Game</h1>
<div class="ui grid">
  <div class="eight wide column">
    <div class="Grid">
      {#each $cards as card (card.id)}
        <Card id={card.id} name={card.name} state={card.state} {handleClick} />
      {/each}
    </div>
  </div>

  <div class="eight wide column">
    <h3>Score: {$score}</h3>
    <h3>{$message}</h3>
    <p>
      Original here:
      <a href="https://www.youtube.com/watch?v=lhNdUVh3qCc&t=115s" target="new">
        Ania Kubow's YouTube tutorial
      </a>
    </p>
  </div>
</div>
