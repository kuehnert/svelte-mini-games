<script>
  import { link } from "svelte-routing";

  export let href;
  export let activePage;
  export let handleClick;
</script>

<a
  {href}
  class="item"
  class:active={activePage === href}
  use:link
  on:click={handleClick}>
  <slot />
</a>
