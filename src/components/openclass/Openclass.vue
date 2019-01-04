<template>
  <div>
    <head-nav :select="componentName"></head-nav>
    <sub-stance></sub-stance>
    <person-data></person-data>
    <foot></foot>
  </div>
</template>

<script>
  import headNav from 'common/headNav'
  import subStance from './components/subStance'
  import personData from './components/personData'
  import foot from 'common/foot'
  export default {
    name: "Openclass",
    components: {
      headNav,
      subStance,
      foot,
      personData
    },
    data: () => ({
      componentName: '公开课'
    })
  }
</script>

<style lang="stylus">
</style>
