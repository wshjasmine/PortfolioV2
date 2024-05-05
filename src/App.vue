<template>
  <div class="banner-1">
    <!-- NavBar -->
    <nav class="container px-6 mx-auto md:flex md:justify-between md:items-center">
      <div class="flex items-center justify-between">
        <div class="relative w-16 h-16">
          <img class="rounded-full border border-gray-100 shadow-sm"
            src="https://i.pinimg.com/564x/5f/4a/fd/5f4afdb90829074314c079e9e9853765.jpg" alt="user image" />
        </div>
        <!-- Mobile menu button -->
        <div @click="showMenu = !showMenu" class="flex md:hidden">
          <button type="button" class="text-gray-800 hover:text-gray-400 focus:outline-none focus:text-gray-400">
            <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
              <path fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z">
              </path>
            </svg>
          </button>
        </div>
      </div>
      <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
      <ul :class="showMenu ? 'flex' : 'hidden'"
        class="flex-col items-end mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0">
        <li class="menu-button"><a href="#">Home</a></li>
        <li class="menu-button"><a href="#work" v-smooth-scroll>Works</a></li>
        <li class="menu-button"><a href="#about" v-smooth-scroll>About</a></li>
      </ul>
    </nav>
    <!-- End Navbar -->

    <div class="flex items-center">
      <div class="w-10/12 space-y-5 md:space-y-10">
        <h3
          class="hello-button text-gray-700 w-fit md:py-3 md:px-5 py-1 px-2 rounded-lg 3xl:text-3xl 2xl:text-xl lg:text-xl md:text-md text-sm font-semibold font-work_sans">
          👋 Hi!
        </h3>
        <h1
          class="3xl:text-8xl 2xl:text-7xl xl:text-6xl lg:text-4xl md:text-3xl sm:text-3xl text-xl font-Eczar font-bold leading-tight text-gray-700">
          I'm
          <a href="https://www.linkedin.com/in/jasmine-wang-a82a20264/" target="_blank"
            class="text-black hover:underline">
            Jasmine,</a><br />a Final Year Business Analytics Student.
        </h1>
      </div>

      <div class="w-8/12 flex justify-end">
        <img class="3xl:h-[800px] 2xl:h-[650px] xl:h-[550px] lg:h-[550px] md:h-[450px] sm:h-[350px]"
          src="./assets/cathi.png" alt="user image" />
      </div>
    </div>
  </div>

  <div class="banner-2 space-y-10 pb-20" id="work">
    <h3 class="heading3 my-5">My Recent Work</h3>
    <div class="card">
      <div class="space-y-7 py-8 px-8 md:py-16 md:px-20 md:w-1/2">
        <h4 class="project-title item">OneSpot</h4>
        <p class="font-work_sans pr-12">
          OneSpot is a comprehensive yet simple website to help users manage their budget, set goals and view their income
          and expenditure trends. It allows users to view their financial goals and records in a single dashboard-like
          display page so that they can track and manage their finances better.
        </p>
        <button class="text-sky-800 font-bold text-2xl tracking-wider"
          onclick="window.open('https://onespotproject.web.app/')">
          View OneSpot
        </button>
      </div>

      <div class="card-image bg-green-100">
        <Splide :options="{ rewind: true }" aria-label="OneSpot">
          <SplideSlide>
            <img src="./assets/onespot.png" alt="Sample 1">
          </SplideSlide>
          <SplideSlide>
            <img src="./assets/dash1.png" alt="Sample 2">
          </SplideSlide>
          <SplideSlide>
            <img src="./assets/budget1.png" alt="Sample 3">
          </SplideSlide>
          <SplideSlide>
            <img src="./assets/trans1.png" alt="Sample 4">
          </SplideSlide>
          <SplideSlide>
            <img src="./assets/trans2.png" alt="Sample 5">
          </SplideSlide>
          <SplideSlide>
            <img src="./assets/dash2.png" alt="Sample 6">
          </SplideSlide>
        </Splide>
      </div>

      <div class="test">
      </div>
    </div>
  </div>

  <div class="banner-1 md:flex items-center md:justify-evenly" id="about">
    <img class="md:h-[500px] h-[400px]" src="./assets/bg.png" alt="user image" />
    <div class="space-y-5 py-8 px-8 md:py-16 md:px-20 md:w-1/2">
      <h4 class="project-title item">My background</h4>
      <p class="font-work_sans">
        I am Jasmine from Singapore. I'm currently pursuing a degree in Business Analytics at the National University of
        Singapore.
        <br /><br>
        Ever since my early years, the world of technology has fascinated me and ignited a lifelong passion.
        My journey began at the tender age of 7, when I was privileged enough to receive my first personal computer. I
        quickly became tech-savvy, exploring various games and sparking a dream of one day becoming a game developer.

        <br><br>
        Although my dream career evolved over the years, my unwavering passion for technology remained constant. With a
        diverse skill set, ranging from programming languages to analytical problem-solving, I am now ready to embrace the
        next chapter of my journey. I am excited to contribute my abilities to a team that shares my enthusiasism for
        shaping the future through technology.
        <br><br>
        Besides progamming and problem-solving, I like to read, play computer games, and study the Korean culture (K-pop,
        the Korean language and Korean food).
      </p>
      <button class="text-sky-800 font-bold text-2xl tracking-wider"
        onclick="window.open('https://docs.google.com/document/d/1vW-I3uV0sPwBRWc5fxl1Y_yS6YBxgdvxKyM23thESCM/edit?usp=sharing')">
        View my resume
      </button>
    </div>
  </div>

  <div class="banner-2 flex h-full items-center">
    <div class="w-7/12 p-12">
      <h2 class="text-gray-700 md:text-6xl text-2xl font-Eczar mb-5 font-bold">
        Let’s work together and make an impact.
      </h2>
      <a class="underline text-2xl text-blue-600 font-work_sans">📧 e0773892@u.nus.edu</a>
    </div>
    <div class="w-5/12 pr-28">
      <div class="flex flex-wrap justify-end gap-2">


        <button class="bg-gray-700 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded" onclick="window.open('https://github.com/wshjasmine')">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="50px" width="50px"
            version="1.1" id="Layer_1" viewBox="0 0 291.32 291.32" xml:space="preserve">
            <g>
              <path style="fill:#ffffff;"
                d="M145.66,0C65.219,0,0,65.219,0,145.66c0,80.45,65.219,145.66,145.66,145.66   s145.66-65.21,145.66-145.66C291.319,65.219,226.1,0,145.66,0z M186.462,256.625c-0.838-11.398-1.775-25.518-1.83-31.235   c-0.364-4.388-0.838-15.549-11.434-22.677c42.068-3.523,62.087-26.774,63.526-57.499c1.202-17.497-5.754-32.883-18.107-45.3   c0.628-13.282-0.401-29.023-1.256-35.941c-9.486-2.731-31.608,8.949-37.79,13.947c-13.037-5.062-44.945-6.837-64.336,0   c-13.747-9.668-29.396-15.64-37.926-13.974c-7.875,17.452-2.813,33.948-1.275,35.914c-10.142,9.268-24.289,20.675-20.447,44.572   c6.163,35.04,30.816,53.94,70.508,58.564c-8.466,1.73-9.896,8.048-10.606,10.788c-26.656,10.997-34.275-6.791-37.644-11.425   c-11.188-13.847-21.23-9.832-21.849-9.614c-0.601,0.218-1.056,1.092-0.992,1.511c0.564,2.986,6.655,6.018,6.955,6.263   c8.257,6.154,11.316,17.27,13.2,20.438c11.844,19.473,39.374,11.398,39.638,11.562c0.018,1.702-0.191,16.032-0.355,27.184   C64.245,245.992,27.311,200.2,27.311,145.66c0-65.365,52.984-118.348,118.348-118.348S264.008,80.295,264.008,145.66   C264.008,196.668,231.69,239.992,186.462,256.625z" />
            </g>
          </svg>
        </button>

        <button class="bg-gray-700 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded " onclick="window.open('https://www.instagram.com/jas.wanggg/')">
          <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 24 24" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
              fill= white />
            <path
              d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z"
              fill= white />
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z"
              fill= white />
          </svg>
        </button>

        <button class="bg-gray-700 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded" onclick="window.open('https://www.linkedin.com/in/jasmine-wang-a82a20264/')">
          <svg class="w-4 h-4 md:w-10 md:h-10 lg:w-10 lg:h-10 xl:h-10 xl:w-10 fill-current" role="img"
            viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
            <g>
              <path
                d="M218.123122,218.127392 L180.191928,218.127392 L180.191928,158.724263 C180.191928,144.559023 179.939053,126.323993 160.463756,126.323993 C140.707926,126.323993 137.685284,141.757585 137.685284,157.692986 L137.685284,218.123441 L99.7540894,218.123441 L99.7540894,95.9665207 L136.168036,95.9665207 L136.168036,112.660562 L136.677736,112.660562 C144.102746,99.9650027 157.908637,92.3824528 172.605689,92.9280076 C211.050535,92.9280076 218.138927,118.216023 218.138927,151.114151 L218.123122,218.127392 Z M56.9550587,79.2685282 C44.7981969,79.2707099 34.9413443,69.4171797 34.9391618,57.260052 C34.93698,45.1029244 44.7902948,35.2458562 56.9471566,35.2436736 C69.1040185,35.2414916 78.9608713,45.0950217 78.963054,57.2521493 C78.9641017,63.090208 76.6459976,68.6895714 72.5186979,72.8184433 C68.3913982,76.9473153 62.7929898,79.26748 56.9550587,79.2685282 M75.9206558,218.127392 L37.94995,218.127392 L37.94995,95.9665207 L75.9206558,95.9665207 L75.9206558,218.127392 Z M237.033403,0.0182577091 L18.8895249,0.0182577091 C8.57959469,-0.0980923971 0.124827038,8.16056231 -0.001,18.4706066 L-0.001,237.524091 C0.120519052,247.839103 8.57460631,256.105934 18.8895249,255.9977 L237.033403,255.9977 C247.368728,256.125818 255.855922,247.859464 255.999,237.524091 L255.999,18.4548016 C255.851624,8.12438979 247.363742,-0.133792868 237.033403,0.000790807055">
              </path>
            </g>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/splide/css';

export default {
  components: {
    Splide,
    SplideSlide
  },

  data() {
    return {
      showMenu: false,
    }
  },
}
</script>
