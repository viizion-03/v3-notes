<script>
  export let data;
  export let form;

  import Baller from "$lib/assets/bball.png";
  import Dustbin from "$lib/assets/dustbin.png";

  const { ikigais, emptyIkigai } = data;
  const formIki = emptyIkigai.documents[0];
</script>

<div class="bg-slate-600">
  <div
    class="container bg-v3 bg-no-repeat bg-center bg-30% lg:bg-15% mx-auto py-10 px-5"
  >
    <h1 class="text-4xl font-semibold text-slate-200 mb-5 text-center">
      IKIGAIS
    </h1>
    <div class="flex flex-col lg:flex-row gap-5">
      <div class="mb-5 flex-grow">
        <!-- Ikigai Form -->
        <h2 class="text-2xl font-semibold mb-3 text-slate-200">
          Traverse The Elements
        </h2>
        <div class="bg-white p-7 rounded-md">
          {#if form?.success}
            <div class="alert alert-success roundem-sm self-center">
              <span>{form?.message}</span>
            </div>
          {/if}

          <p class="text-lg font-bold text-cyan-800 mb-4">ID: {formIki.$id}</p>
          <div class="mb-4">
            <h3 class="mb-2 font-semibold">Elements</h3>
            <ul class="grid sm:grid-cols-4 grid-cols-2">
              <li class="mb-3 flex flex-col w-fit">
                <div>{formIki.skill}</div>
                <div
                  class="p-2 mb-1 mt-1 rounded-xl bg-slate-200 text-sm italic w-auto"
                >
                  Skill
                </div>
              </li>
              <li class="mb-3 flex flex-col w-fit">
                <div>{formIki.hobby}</div>
                <div
                  class="p-2 mb-1 mt-1 rounded-xl bg-slate-200 text-sm italic w-auto"
                >
                  hobby
                </div>
              </li>
              <li class="mb-3 flex flex-col w-fit">
                <div>{formIki.need}</div>
                <div
                  class="p-2 mb-1 mt-1 rounded-xl bg-slate-200 text-sm italic w-auto"
                >
                  world need
                </div>
              </li>
              <li class="mb-3 flex flex-col w-fit">
                <div>{formIki.revenue}</div>
                <div
                  class="p-2 mb-1 mt-1 rounded-xl bg-slate-200 text-sm italic w-auto"
                >
                  revenue
                </div>
              </li>
            </ul>

            <form method="post" class="">
              <h4 class="mb-3 font-semibold text-cyan-800">Business Idea</h4>
              <textarea
                name="idea"
                cols="30"
                rows="10"
                class="w-full p-4 rounded-md shadow-lg mb-4 border border-slate-500 border-opacity-40 focus-visible:outline-1 focus-visible:outline-cyan-500"
              ></textarea>

              <div class="flex gap-4">
                <input
                  type="hidden"
                  name="ideaId"
                  id="ideaId"
                  value={formIki.$id}
                />
                <button
                  formaction="?/trash"
                  class="btn grow bg-rose-700 text-white hover:bg-rose-600"
                >
                  TRASH IT
                  <img
                    src={Dustbin}
                    alt=""
                    class="h-3/5"
                    aria-label="Delete Ikigai"
                  />
                </button>
                <button
                  formaction="?/save"
                  class="btn grow bg-teal-600 text-white hover:bg-teal-500"
                >
                  STASH IT
                  <img
                    src={Baller}
                    alt=""
                    class="h-3/5"
                    aria-label="Save Business Idea & Ikigai"
                  />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="flex flex-col">
        <!-- Current Ikigais -->

        <h2 class="text-2xl mb-3 font-semibold text-slate-200">
          Current Ikigais
        </h2>
        <div
          class="overflow-x-auto max-h-[60%] bg-slate-50 bg-opacity-90 rounded-md"
        >
          <table class="table table-pin-cols table-pin-rows">
            <thead>
              <tr class="font-mono text-cyan-700">
                <th class="hidden sm:block">ID</th>
                <td>Skill</td>
                <td>Hobby</td>
                <td>World Need</td>
                <td>Revenue Src</td>
              </tr>
            </thead>
            <tbody>
              {#each ikigais.documents as ikigai}
                <tr class="hover">
                  <td class="hidden sm:block">{ikigai.$id}</td>
                  <td>{ikigai.skill}</td>
                  <td>{ikigai.hobby}</td>
                  <td>{ikigai.need}</td>
                  <td>{ikigai.revenue}</td>
                </tr>
              {/each}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>
