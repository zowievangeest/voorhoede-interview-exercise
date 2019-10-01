<template>
  <div>
    <h1>This is a homepage</h1>
    <transition>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
export default {
  name: "home"
};
</script>

<style lang="scss"></style>
