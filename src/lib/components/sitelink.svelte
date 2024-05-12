<script>
  export let url;
  export let imgUrl;
  export let name;
  export let description;
</script>

<div class=" bg-gray-900 border border-slate-500 rounded-md min-h-[22rem] m-3 min-w-[10rem] shadow-lg w-96">
  <a href={url} target="_blank">
    <!-- svelte-ignore a11y-img-redundant-alt -->
    <img src={imgUrl} alt="site image" class="rounded-t-md object-cover" />
    <div class="p-3">
      <h4 class="font-bold mb-3 ">{name}</h4>
      <p class="text-gray-400">{description}</p>
    </div>
  </a>
</div>
