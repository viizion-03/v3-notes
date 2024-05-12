<script>
  import "../app.css";
  import Navbar from "$lib/components/navbar.svelte"
</script>

<div class="flex flex-col h-full">
  <Navbar/>
  <div class="flex-grow">
    <slot />
  </div>

  <footer class="text-center italic bg-black text-white">
    <!-- <hr /> -->
    <code>Product of VIIZION03 under the V3 brand ©️</code>
  </footer>
</div>
