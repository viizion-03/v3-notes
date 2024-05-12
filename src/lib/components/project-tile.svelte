<script>
  import VoteTile from "./vote-tile.svelte";
  import mobileIco from "$lib/assets/mobile.png";
  import desktopIco from "$lib/assets/pc.png";
  import moduleIco from "$lib/assets/module.png";
  import webIco from "$lib/assets/browser.png";
  import defaultIco from "$lib/logos/v3-logo-grey-dark.svg";

  export let name;
  export let summary;
  export let description;
  export let votes;
  export let status;
  export let id;
  export let type;

  let iconUrl = "";

  switch (type.toLowerCase()) {
    case "web":
      iconUrl = webIco;
      break;
    case "desktop":
      iconUrl = desktopIco;
      break;
    case "mobile":
      iconUrl = mobileIco;
      break;
    case "module":
      iconUrl = moduleIco;
      break;
    default:
      iconUrl = defaultIco;
  }
</script>

<div class="text-white border border-slate-500 shadow-xl bg-gray-900 p-5 rounded-md m-3 flex flex-col md:flex-row">
  <div class="md:w-1/2">
    <img src={iconUrl} alt="icon" class="h-16 w-16 mb-4" />
    <div class="">
      <h3 class="font-bold mb-2">{name}</h3>
      <p class="text-slate-300">{type}</p>
      <p class="text-slate-300 mb-4">{summary}</p>
    </div>
  </div>

  <div class="md:w-1/2 flex flex-col justify-between">
    <div>
      <h4 class="text-lg font-semibold mb-2">Detailed Description</h4>
      <p class="text-slate-300 mb-5">{description}</p>
    </div>
    <div class="self-end">
      <VoteTile />
    </div>
  </div>
</div>
