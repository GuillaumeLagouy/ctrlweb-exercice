<script setup>
import Button from './Button.vue';
</script>

<template>
    <header>
        <nav>
            <div class="navigation">
                <ul>
                    <li>Home</li>
                    <li>Product</li>
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div class="companyLogo">
                <!-- Position absolute -->
            </div>
            <div class="socials"></div>
        </nav>
        <div class="hero">
            <h1>The best products start with Figma</h1>
            <p>
                Most calendars are designed for teams. Slate is designed for
                freelancers
            </p>
            <Button />
        </div>
    </header>
</template>

<style></style>
