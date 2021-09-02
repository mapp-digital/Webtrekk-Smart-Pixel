<template lang="html">
    <div class="header">
        <div class="header-right">
            <nuxt-link exact to="/">Home</nuxt-link>
            <nuxt-link to="/about">About</nuxt-link>
        </div>
    </div>
</template>

<style lang="css" scoped>
    .header {
        overflow: hidden;
        background-color: #f1f1f1;
        padding: 5px 20px;
    }

    .header a {
        float: left;
        color: black;
        text-align: center;
        padding: 5px;
        text-decoration: none;
        font-size: 18px;
        line-height: 25px;
        border-radius: 4px;
    }

    .header a:active,
    .header a.nuxt-link-active {
        background-color: #97bf1e;
        color: white;
    }

    .header a:hover {
        background-color: #6f8d2b;
        color: white;
    }

    .header-right {
        float: right;
        margin-top: 5px;
    }

    @media screen and (max-width: 500px) {
        .header a {
            float: none;
            display: block;
            text-align: left;
        }

        .header-right {
            float: none;
        }
    }

    img {
        width: 40px;
        height: 40px;
    }
</style>
