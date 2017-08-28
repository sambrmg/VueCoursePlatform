<template>
    <nav>
      <ul>       
          <li v-for="rota in rotas">
            <router-link :to="rota.path ? rota.path : '/'">
                <i class="icon-book-open"></i>
                {{ rota.title }}
            </router-link>
          </li>
      </ul>
    </nav>
</template>

<script>

export default {
    props: {
        rotas: {
            type: Array,
            required: true
        }
    }
}

</script>

<style>
</style>
