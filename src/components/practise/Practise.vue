<template>
  <div>
    <head-nav :select="componentName"></head-nav>
    <sub-stance></sub-stance>
    <trainingCourse></trainingCourse>
    <company-teacher></company-teacher>
    <class-special></class-special>
    <foot></foot>
  </div>
</template>

<script>
  import headNav from 'common/headNav'
  import subStance from './components/subStance'
  import companyTeacher from '../home/components/companyTeacher'
  import classSpecial from '../home/components/classSpecial'
  import foot from 'common/foot'
  import trainingCourse from './components/trainingCourse'
  export default {
    name: "Home",
    components: {
      headNav,
      subStance,
      trainingCourse,
      companyTeacher,
      classSpecial,
      foot
    },
    data: () => ({
      componentName: 'practise'
    })
  }
</script>

<style lang="stylus" scoped>
  .ourTeachers
    background: rgba(221, 221, 221, 0)
  .special
    background: rgba(221, 221, 221, 0.1)
</style>
