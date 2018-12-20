<template>
  <div>
    <head-nav :select="componentName"></head-nav>
    <head-show></head-show>
    <sub-stance></sub-stance>
    <person-date></person-date>
    <class-special></class-special>
    <company-teacher></company-teacher>
    <achieve-ment></achieve-ment>
    <company-map></company-map>
    <foot></foot>
  </div>
</template>

<script>
  import headNav from 'common/headNav'
  import headShow from './components/headShow'
  import subStance from './components/subStance'
  import companyMap from './components/companyMap'
  import achieveMent from './components/achieveMent'
  import companyTeacher from './components/companyTeacher'
  import personDate from './components/personDate'
  import classSpecial from './components/classSpecial'
  import foot from 'common/foot'
  export default {
    name: "Home",
    components: {
      headNav,
      headShow,
      subStance,
      personDate,
      classSpecial,
      achieveMent,
      companyTeacher,
      companyMap,
      foot
    },
    data: () => ({
      componentName: 'home'
    })
  }
</script>

<style lang="stylus">
</style>
