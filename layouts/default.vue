<template>
  <v-app>
    <v-main>
      <v-container>
        <Menu />
        <Alert />
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Menu from '@/components/common/menu'
import SideBar from '@/components/common/side-bar'
import Alert from '@/components/common/alert'


export default {
components: {Menu, SideBar, Alert}
}
</script>

<style>
</style>