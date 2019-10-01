<template>
  <nav
    class="flex items-center justify-between flex-wrap bg-voorhoede-yellowlight p-6"
  >
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <div class="logo">
        <router-link :to="{ name: 'home' }">
          <Logo />
        </router-link>
      </div>
    </div>
    <div class="block lg:hidden">
      <button
        @click="toggle"
        class="flex items-center px-3 py-2 border rounded text-voorhoede-blue border-voorhoede-blue hover:text-white hover:border-white"
      >
        <svg
          class="fill-current h-3 w-3"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </div>
    <div
      :class="open ? 'block' : 'hidden'"
      class="w-full block flex-grow lg:flex lg:items-center lg:w-auto"
    >
      <div class="text-lg lg:flex-grow text-voorhoede-blue">
        <router-link
          to="/blog"
          class="block mt-4 lg:inline-block lg:mt-0 text-voorhoede-blue hover:text-white mr-4"
          >Blog posts</router-link
        >
      </div>
    </div>
  </nav>
</template>

<script>
import Logo from "../logo/Logo";

export default {
  name: "Navbar",
  components: { Logo },
  data() {
    return {
      open: false
    };
  },
  methods: {
    toggle() {
      this.open = !this.open;
    }
  }
};
</script>
