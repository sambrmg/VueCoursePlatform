<template>
  <div>
    <main-menu :rotas="routes"/>
    <router-view class="content"></router-view>
  </div>
</template>

<script>
import { routes } from './routes';
import Menu from './components/shared/menu/Menu.vue';

export default {

  components: {
    'main-menu' : Menu
  },
  
  data() {
    return {
      routes
    }
  }
}
</script>

<style></style>
