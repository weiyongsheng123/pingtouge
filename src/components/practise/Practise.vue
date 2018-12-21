<template>
  <div>
    <head-nav :select="componentName"></head-nav>
    <sub-stance></sub-stance>
    <trainingCourse></trainingCourse>
    <foot></foot>
  </div>
</template>

<script>
  import headNav from 'common/headNav'
  import subStance from './components/subStance'
  import foot from 'common/foot'
  import trainingCourse from './components/trainingCourse'
  export default {
    name: "Home",
    components: {
      headNav,
      subStance,
      trainingCourse,
      foot
    },
    data: () => ({
      componentName: 'practise'
    })
  }
</script>

<style lang="stylus" scoped>
</style>
