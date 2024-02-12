<script setup>
import Button from './Button.vue';
</script>

<template>
    <header class="h-[930px] bg-cover bg-center lg:bg-contain lg:bg-top">
        <nav
            class="flex flex-row justify-between items-center py-4 px-4 lg:py-14 lg:px-28 xl:px-60"
        >
            <div class="navigation hidden lg:flex">
                <ul class="text-white flex flex-row lg:gap-x-8 lg:text-sm">
                    <li>Home</li>
                    <li>Product</li>
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
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
                <div class="w-10 h-10 flex items-center justify-center">
                    <img src="@/assets/icons/twitter_white.svg" alt="" />
                </div>
                <div class="w-10 h-10 flex items-center justify-center">
                    <img src="@/assets/icons/facebook_white.svg" alt="" />
                </div>
                <div class="w-10 h-10 flex items-center justify-center">
                    <img src="@/assets/icons/linkedin_white.svg" alt="" />
                </div>
            </div>
        </nav>
        <div class="hero flex flex-col items-center text-white mt-20 lg:mt-28">
            <h1
                class="text-5xl max-w-72 lg:text-7xl lg:max-w-2xl text-center lg:font-bold"
            >
                The best products start with Figma
            </h1>
            <p
                class="text-2xl max-w-52 lg:max-w-2xl mt-7 lg:mt-8 lg:mb-24 text-center"
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
