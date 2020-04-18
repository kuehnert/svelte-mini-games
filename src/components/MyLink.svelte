<script>
  import { link, location } from "svelte-spa-router";
  export let href;
</script>

<a {href} class="item" class:active={href == $location} use:link>
  <slot />
</a>
