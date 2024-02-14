<script setup>
const props = defineProps({ imagePath: String })
</script>

<template>
    <h2 class="mb-4 text-5xl">
        <slot name="title"></slot>
    </h2>
    <img v-if="imagePath" :src="imagePath" class="my-10" alt="" />
    <p class="text-custom-gray text-xl">
        <slot name="content"></slot>
    </p>
</template>

<style></style>
