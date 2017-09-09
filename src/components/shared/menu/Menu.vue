<template>
    <nav class="main-nav">
        <div class="main-nav-mobile" v-on:click="openMenu($event)">
            <span>Menu</span>
        </div>
        <ul>       
            <li v-for="route in routes" v-on:click="closeMenu($event)">
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
    },
    methods: {
        openMenu: function (event) {
            let element = event.target;
            let mainNav = event.target.parentNode;
            let ul = event.target.nextSibling.nextSibling;
            element.setAttribute("class","main-nav-mobile hide");
            mainNav.setAttribute("class","main-nav main-nav-100");
            ul.setAttribute("class","show");
        },
        closeMenu: function (event) {
            let element = event.target;
            let ul = element.parentNode.parentNode;
            let mainNavMobile = ul.previousSibling.previousSibling;
            let mainNav = element.parentNode.parentNode.parentNode;
            mainNavMobile.setAttribute("class","main-nav-mobile");
            mainNav.setAttribute("class","main-nav");
            ul.setAttribute("class","");
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
    transition: width 0.5s;
}
.main-nav.main-nav-100{
    width: 100%;
}
.main-nav-mobile{
    display: none;
    padding: 5px;
    cursor: pointer;
    color: white;
    height: 100%;
    box-sizing: border-box;
}
nav.main-nav .main-nav-mobile.hide{
    display: none;
}
.main-nav ul {
    list-style: none;
    margin: 0;
    padding: 0;

}
nav.main-nav ul.show{
    display: block;
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

@media screen and (max-width: 800px) {
    nav.main-nav {
        width: 54px;
    }
    nav.main-nav ul{
        display: none;
    }
    nav.main-nav .main-nav-mobile{
        display: block;
        
    }
}

</style>
