<template>
    <nav class="main-nav">
      <ul>       
          <li v-for="route in routes">
            <router-link :to="route.path ? route.path : '/'">
                <i class="icon-book-open"></i>
                {{ route.title }}
            </router-link>
          </li>
      </ul>
    </nav>
</template>

<script>

export default {
    props: {
        routes: {
            type: Array,
            required: true
        }
    }
}

</script>

<style>

.main-nav{
    width: 260px;
    position: fixed;
    top: 0px;
    left: 0px;
    bottom: 0px;
    z-index: 99;
    overflow-y: auto;
    overflow-x: hidden;
    background-color: #383e4b;
    color: black;
}
.main-nav ul {
    list-style: none;
    margin: 0;
    padding: 0;

}
.main-nav ul li a i{
    margin-right: 10px;
    color: white;
    font-size: 17px;
    position: relative;
    top: 3px;
}

.main-nav ul li a{
    padding: 15px 10px;
    display: block;
    color: white;
    text-decoration: none;
    font-size: 15px;
    cursor: pointer;
}

.main-nav ul li a.completed:after {
    font-family: "simple-line-icons";
    content: "\e080";
    font-weight: bold;
    color: #34d434;
    margin-left: 10px;
}

.main-nav ul li a:hover{
    background-color: #22262e;
}

</style>
