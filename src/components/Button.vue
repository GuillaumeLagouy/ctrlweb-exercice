<script setup>
const props = defineProps({
    variant: {
        validator(value, props) {
            return ['primary', 'secondary'].includes(value);
        },
        default() {
            return 'primary';
        },
    },
});
</script>

<template>
    <button
        class="rounded-full px-10 py-3 text-xl"
        :class="
            variant === 'secondary'
                ? 'bg-white text-primary'
                : 'bg-primary text-white'
        "
    >
        <slot></slot>
    </button>
</template>

<style></style>
