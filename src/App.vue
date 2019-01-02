<template>
  <div id="app">
    <keep-alive>
      <v-app>
        <v-content>
          <router-view/>
        </v-content>
      </v-app>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
