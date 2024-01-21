<script setup>
import AppHead from "../AppHead.vue";
import Navigation from "../Components/Navigation.vue";
</script>

<template>
    <AppHead></AppHead>

    <Navigation />

    <main id="main">
        <slot />
    </main>
</template>
