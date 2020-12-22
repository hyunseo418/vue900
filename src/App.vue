<template>
  <header-menu></header-menu>
</template>

<script>
import HeaderMenu from './components/HeaderMenu'

export default {
  name: 'App',

  components: {
    HeaderMenu
  },

  data: () => ({
    //
  })
}
</script>

<style lang="scss">
  @import "scss/style"
</style>
