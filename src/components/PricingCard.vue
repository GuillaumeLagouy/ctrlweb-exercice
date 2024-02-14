<script setup>
import Button from './Button.vue'

const props = defineProps({
    tier: String,
    description: String,
    price: String,
    variant: {
        validator(value, props) {
            return ['normal', 'large'].includes(value)
        },
        default() {
            return 'normal'
        },
    },
})
</script>

<template>
    <div
        :class="
            variant === 'large'
                ? 'border-cream border bg-primary py-10 text-white lg:py-20'
                : 'bg-white py-10'
        "
        class="flex w-full flex-col items-center gap-y-7 rounded-lg px-10"
    >
        <div>
            <h4 class="text-center font-bold uppercase">{{ tier }}</h4>
            <p class="text-center text-sm lg:max-w-36">{{ description }}</p>
        </div>

        <!-- Price-->
        <div class="flex items-center gap-x-3">
            <span class="text-6xl font-bold leading-none">{{ price }}</span>
            <div class="flex flex-col">
                <span class="text-lg font-bold leading-none">$</span>
                <span class="leading-none">Per Month</span>
            </div>
        </div>

        <ul class="">
            <li class="py-2">Pricing Feature</li>
            <li class="py-2">Pricing Feature</li>
            <li class="py-2">Pricing Feature</li>
            <li class="py-2">Pricing Feature</li>
            <li class="py-2">Pricing Feature</li>
        </ul>

        <Button :variant="variant === 'large' ? 'secondary' : 'primary'"
            >Order Now</Button
        >
    </div>
</template>

<style></style>
