<script setup>
import { ref } from 'vue'

defineProps({
    pathDatas: Array,
})
</script>

<template>
    <nav class="router-link-nav">
        <router-link class="nav-link" v-for="pathData in pathDatas" :key="pathData.path" :to="pathData.path">{{
            pathData.name }}</router-link>
    </nav>
</template>

<style scoped lang="scss">
.router-link-nav {
    display: flex;
    padding: 15px 0 5px;
    overflow-x: scroll;
    white-space: nowrap;

    &::-webkit-scrollbar {
        display: none;
    }

    .nav-link {
        padding: 10px 20px;
        border-radius: 4px;
        margin-left: 1em;
        box-shadow: inset 0 0 10px 1px $primary-color;

        &:hover {
            background: fade-out($primary-color, 0.7);
        }


    }
}
</style>