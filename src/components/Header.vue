<script setup>
import Button from './Button.vue'
</script>

<template>
    <header class="h-[930px] bg-cover bg-center lg:bg-contain lg:bg-top">
        <nav
            class="flex flex-row items-center justify-between px-4 py-4 lg:px-28 lg:py-14 xl:px-60"
        >
            <div class="navigation hidden lg:flex">
                <ul class="flex flex-row text-white lg:gap-x-8 lg:text-sm">
                    <li>Home</li>
                    <li>Product</li>
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Test</li>
                </ul>
            </div>

            <div
                class="companyLogo lg:absolute lg:left-1/2 lg:-translate-x-1/2"
            >
                <img src="@/assets/img/nav_logo.png" alt="" />
            </div>

            <div class="lg:hidden">
                <img src="@/assets/icons/menu.svg" alt="" />
            </div>

            <div class="socials hidden lg:flex lg:gap-x-7">
                <div class="flex h-10 w-10 items-center justify-center">
                    <img src="@/assets/icons/twitter_white.svg" alt="" />
                </div>
                <div class="flex h-10 w-10 items-center justify-center">
                    <img src="@/assets/icons/facebook_white.svg" alt="" />
                </div>
                <div class="flex h-10 w-10 items-center justify-center">
                    <img src="@/assets/icons/linkedin_white.svg" alt="" />
                </div>
            </div>
        </nav>
        <div class="hero mt-20 flex flex-col items-center text-white lg:mt-28">
            <h1
                class="max-w-72 text-center text-5xl lg:max-w-2xl lg:text-7xl lg:font-bold"
            >
                The best products start with Figma
            </h1>
            <p
                class="mt-7 max-w-52 text-center text-2xl lg:mb-24 lg:mt-8 lg:max-w-2xl"
            >
                Most calendars are designed for teams.
                <span class="hidden lg:inline">
                    Slate is designed for freelancers
                </span>
            </p>
            <Button>Try For Free</Button>
        </div>
    </header>
</template>

<style>
header {
    background-image: url('@/assets/img/header_image.png');
    background-size: contain;
    background-repeat: no-repeat;
}
</style>
