<script setup>
import { ref } from 'vue'

const companies = ref([
    'Google',
    'Amazon',
    'Microsoft',
    'Uber',
    'Dropbox',
    'Google',
    'Uber',
    'Amazon',
])
</script>

<template>
    <div class="flex flex-col gap-y-4 lg:flex-row lg:flex-wrap lg:gap-0">
        <template v-for="company in companies">
            <div
                class="flex grow flex-col items-center justify-between border border-gray-200 py-5"
            >
                <span class="mb-5 text-custom-gray">Client Name</span>
                <img :src="`/company/${company}.png`" alt="" />
            </div>
        </template>
    </div>
</template>

<style></style>
