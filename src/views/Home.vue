<template>
  <div>
    <Navbar />
    <transition>
      <keep-alive>
        <router-view :key="$route.fullPath"></router-view>
      </keep-alive>
    </transition>
    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
export default {
  name: "home",
  components: { Footer, Navbar }
};
</script>

<style lang="scss"></style>
