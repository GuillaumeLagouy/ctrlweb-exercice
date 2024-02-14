<script setup>
import { reactive } from 'vue'

const sections = reactive([
    {
        name: 'Pages',
        subsections: ['Home', 'Product', 'Pricing', 'About', 'Contact'],
    },
    {
        name: 'Tomothy',
        subsections: [
            'Eleanor Edwards',
            'Ted Robertson',
            'Annette Russell',
            'Jennie Mckinney',
            'Gloria Richards',
        ],
    },
    {
        name: 'Jane Black',
        subsections: [
            'Philip Jones',
            'Product',
            'Colleen Russell',
            'Marvin Hawkins',
            'Bruce Simmmons',
        ],
    },
])
</script>

<template>
    <footer
        class="bg-custom-dark-blue flex flex-col px-10 py-20 text-white lg:flex-row lg:justify-between xl:px-56"
    >
        <!-- Site map -->
        <div
            class="mb-14 flex flex-col items-center gap-y-10 lg:mb-0 lg:flex-row lg:items-start lg:gap-x-28 lg:gap-y-0"
        >
            <div v-for="section in sections">
                <p class="mb-5 text-center text-lg font-bold lg:text-left">
                    {{ section.name }}
                </p>
                <ul>
                    <li
                        class="mb-4 text-center lg:text-left"
                        v-for="subsection in section.subsections"
                    >
                        {{ subsection }}
                    </li>
                </ul>
            </div>
        </div>

        <div class="flex flex-col gap-y-10">
            <!-- Contact -->
            <div class="flex flex-col gap-y-5">
                <div class="flex items-center">
                    <img
                        class="mr-3 h-7 w-7"
                        src="@/assets/icons/landmark_white.svg"
                        alt="Landmark icon"
                    />
                    <p>7480 Mockingbird Hill undefined</p>
                </div>
                <div class="flex items-center">
                    <img
                        class="mr-3 h-7 w-7"
                        src="@/assets/icons/phone_white.svg"
                        alt="Phone icon"
                    />
                    <p>(239) 555-0108</p>
                </div>
            </div>

            <!-- Socials -->
            <div class="flex justify-center gap-x-6 lg:justify-start">
                <img
                    src="@/assets/icons/twitter_white.svg"
                    alt="Twitter icon"
                />
                <img
                    src="@/assets/icons/facebook_white.svg"
                    alt="Facebook icon"
                />
                <img
                    src="@/assets/icons/linkedin_white.svg"
                    alt="Linkedin icon"
                />
            </div>
        </div>
    </footer>
</template>

<style></style>
