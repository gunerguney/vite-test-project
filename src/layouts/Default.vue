<script setup>

import { RouterView, useRoute } from "vue-router";

const route = useRoute()

</script>

<template>
    <router-view :key="$route.path" />
</template>