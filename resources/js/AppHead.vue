<script setup>
import { Head } from "@inertiajs/vue3"

defineProps({
    title: String,
});

let pageTitle = "Avatopia";
</script>

<template>
    <Head :title="title ? `${title} | ${pageTitle}` : pageTitle">
        <slot />
    </Head>
</template>
