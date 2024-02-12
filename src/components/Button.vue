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
        class="text-xl px-10 py-3 rounded-full"
        :class="
            variant === 'secondary'
                ? 'bg-white text-primary'
                : 'text-white bg-primary'
        "
    >
        <slot></slot>
    </button>
</template>

<style></style>
