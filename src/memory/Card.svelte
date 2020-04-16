<script>
  export let id;
  export let name;
  export let state;
  export let handleClick;
  let imgSrc;

  $: {
    if (state === 0) {
      imgSrc = "/images/memory/blank.png";
    } else if (state === 1) {
      imgSrc = `/images/memory/${name}.png`;
    } else {
      imgSrc = "/images/memory/white.png";
    }
  }
</script>

<style>
  .Card {
    display: flex;
    width: 100px;
    height: 100px;
  }
</style>

<img class="Card" src={imgSrc} name={name} alt={name} id={id} on:click={handleClick} />
