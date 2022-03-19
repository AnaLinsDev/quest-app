<template>
  <v-app>
    <v-main>
      <v-container>
        <Menu />
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Menu from '@/components/common/menu'
import SideBar from '@/components/common/side-bar'

export default {
components: {Menu, SideBar}
}
</script>

<style>

</style>