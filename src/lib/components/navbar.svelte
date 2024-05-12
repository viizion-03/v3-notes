<script>
  import logo from "$lib/logos/v3-logo-red.svg";
</script>

<div class="navbar flex justify-between content-center bg-bgBlack p-4">
  <div class="navbar-start">
    <a href="/">
    <img src={logo} alt="v3 logo" class="object-contain h-10" />
    </a>
  </div>
  <div class="navbar-center ">
    <h1 class="text-white font-bold">V3 Collections</h1>
    <div class="dropdown dropdown-hover hover:bg-slate-700 rounded-lg m-1">
      <div tabindex="0" role="button" class="m-1 text-white ">
        <!-- down arrow icon -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
      <ul
        class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-32 bg-slate-700 text-white"
      >
        <li class="hover:bg-slate-600 rounded-md"><a href="/ikigais">Ikigai</a></li>
        <li class="hover:bg-slate-600 rounded-md"><a>Item 2</a></li>
      </ul>
    </div>
  </div>
  <div class="navbar-end">
    <div class="flex items-center">
      <input
        type="search"
        placeholder="Search"
        class="pe-7 ps-3 py-1 rounded-md hidden md:block focus-visible:outline-none
        focus-visible:border-2 focus-visible:border-red"
      />
      <button
        aria-label="search page for content"
        class="-translate-x-8 flex justify-center items-center h-8 w-8 hover:bg-primary
        hover:bg-opacity-50 rounded-full border border-white md:border-none md:hover:bg-inherit"
      >
        <!-- search icon -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="ionicon h-4 text-white md:text-black"
          viewBox="0 0 512 512"
          ><path
            d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
            fill="none"
            stroke="currentColor"
            stroke-miterlimit="10"
            stroke-width="32"
          /><path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="32"
            d="M338.29 338.29L448 448"
          /></svg
        >
        <!-- <ion-icon name="search-outline" class="text-white md:p-1 md:text-black"
        ></ion-icon> -->
      </button>
    </div>
  </div>
</div>
