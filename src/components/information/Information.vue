<template>
  <div>
    <head-nav :select="componentName"></head-nav>
    <sub-stance></sub-stance>
    <foot></foot>
  </div>
</template>

<script>
  import headNav from 'common/headNav'
  import subStance from './components/subStance'
  import foot from 'common/foot'
  export default {
    name: "Information",
    components: {
      headNav,
      subStance,
      foot
    },
    data: () => ({
      componentName: 'information'
    })
  }
</script>

<style lang="stylus">
</style>
