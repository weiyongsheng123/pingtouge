<template>
  <div>
    <head-nav :select="componentName"></head-nav>
    <head-show></head-show>
    <sub-stance></sub-stance>
    <person-date></person-date>
    <class-special></class-special>
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
  import personDate from './components/personDate'
  import classSpecial from './components/classSpecial'
  export default {
    name: "Home",
    components: {
      headNav,
      headShow,
      subStance,
      personDate,
      companyTeacher,
      companyMap,
      classSpecial
    },
    data: () => ({
      componentName: 'home'
    })
  }
</script>

<style lang="stylus">
</style>
