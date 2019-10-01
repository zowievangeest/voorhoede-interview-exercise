<template>
  <div>
    <Navbar />
    <transition>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
import Navbar from "../components/navbar/Navbar";
export default {
  name: "home",
  components: { Navbar }
};
</script>

<style lang="scss"></style>
