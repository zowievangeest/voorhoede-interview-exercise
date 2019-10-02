<template>
  <button
    class="fixed bottom-0 right-0 m-2 bg-transparent hover:bg-voorhoede-blue text-voorhoede-blue font-semibold hover:text-voorhoede-white py-1 px-4 border border-voorhoede-blue hover:border-transparent rounded"
    @click="scrollToTop(500)"
  >
    &uarr;
  </button>
</template>
<script>
export default {
  name: "BackToTop",
  methods: {
    scrollToTop(scrollDuration) {
      let scrollStep = -window.scrollY / (scrollDuration / 15),
        scrollInterval = setInterval(function() {
          if (window.scrollY !== 0) {
            window.scrollBy(0, scrollStep);
          } else clearInterval(scrollInterval);
        }, 15);
    }
  }
};
</script>
