<template>
  <div>
    <head-nav :select="componentName"></head-nav>
    <sub-stance></sub-stance>
  </div>
</template>

<script>
  import headNav from 'common/headNav'
  import subStance from './components/subStance'
  export default {
    name: "Recruit",
    components: {
      headNav,
      subStance
    },
    data: () => ({
      componentName: 'recruit'
    })
  }
</script>

<style lang="stylus" scoped>
</style>
