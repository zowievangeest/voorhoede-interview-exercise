<template>
  <footer
    class="w-full text-center p-4 pin-b bg-voorhoede-yellow border-t-2 border-voorhoede-blue"
  >
    <span class="text-sm"
      ><a href="https://zowievangeest.nl" class="font-bold">Zowie van Geest</a>
      - {{ new Date().getFullYear() }} © Copyright</span
    >
  </footer>
</template>
<script>
export default {
  name: "Footer"
};
</script>
