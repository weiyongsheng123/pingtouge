<template>
  <div>
    <head-nav :select="componentName"></head-nav>
    <head-show></head-show>
    <sub-stance></sub-stance>
    <company-teacher></company-teacher>
    <company-map></company-map>
  </div>
</template>

<script>
  import headNav from 'common/headNav'
  import headShow from './components/headShow'
  import subStance from './components/subStance'
  import companyMap from './components/companyMap'
  import companyTeacher from './components/companyTeacher'
  export default {
    name: "Home",
    components: {
      headNav,
      headShow,
      subStance,
      companyTeacher,
      companyMap
    },
    data: () => ({
      componentName: 'home'
    })
  }
</script>

<style lang="stylus">
</style>
