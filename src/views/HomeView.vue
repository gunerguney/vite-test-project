<script setup>

import { onBeforeMount, onMounted } from 'vue'
import { useUserStore } from '@/stores/user'
import { storeToRefs } from 'pinia'
import { getSystemInit } from '@/services/api.js'

const { count, doubleCount } = storeToRefs(useUserStore())

onMounted(() => {
})

onBeforeMount( async () => {
    await getSystemInit()
})

</script>

<template>
    <h1 class="bg-red-500"> Home </h1>
    <router-link to="/login">Login</router-link>
    <router-link to="/signup">Signup</router-link>

    <span> Count {{ count  }}</span>
    <span> Double count {{ doubleCount  }}</span>
</template>