<template>
  <div id="app">
    <v-app>
      <v-content>
        <keep-alive>
          <router-view/>
        </keep-alive>
      </v-content>
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
