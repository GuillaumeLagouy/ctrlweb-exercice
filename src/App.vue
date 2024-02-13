<script setup>
import Header from '@/components/Header.vue'
import HeadingSection from './components/HeadingSection.vue'
import Button from './components/Button.vue'
import GridCompany from './components/GridCompany.vue'
import Footer from './components/Footer.vue'
</script>

<template>
    <Header />
    <main>
        <section
            class="mt-20 flex flex-col text-center lg:mt-0 lg:px-64 lg:pb-20"
        >
            <div class="order-1 mx-20 mb-16 lg:mx-0 lg:mb-0">
                <HeadingSection>
                    <template v-slot:title>Features</template>
                    <template v-slot:content>
                        Most calendars are designed for teams.<br />
                        Slate is designed for freelancers
                    </template>
                </HeadingSection>
            </div>

            <div
                class="order-3 mt-20 flex flex-col lg:order-2 lg:my-16 lg:flex-row lg:gap-x-10 lg:px-16"
            >
                <div
                    class="mx-20 mb-16 flex flex-col items-center lg:mx-0 lg:mb-0"
                >
                    <img src="@/assets/icons/shape.svg" alt="" />
                    <h3 class="my-5 text-xl font-bold">
                        OpenType features Variable fonts
                    </h3>
                    <p class="text-custom-gray">
                        Slate helps you see how many more days you need to work
                        to reach your financial goal.
                    </p>
                </div>

                <div
                    class="mx-20 mb-16 flex flex-col items-center lg:mx-0 lg:mb-0"
                >
                    <img src="@/assets/icons/pen.svg" alt="" />
                    <h3 class="my-5 text-xl font-bold">
                        Design with real data
                    </h3>
                    <p class="text-custom-gray">
                        Slate helps you see how many more days you need to work
                        to reach your financial goal.
                    </p>
                </div>

                <div
                    class="mx-20 mb-20 flex flex-col items-center lg:mx-0 lg:mb-0"
                >
                    <img src="@/assets/icons/brush.svg" alt="" />
                    <h3 class="my-5 text-xl font-bold">
                        Fastest way to take action
                    </h3>
                    <p class="text-custom-gray">
                        Slate helps you see how many more days you need to work
                        to reach your financial goal.
                    </p>
                </div>
            </div>

            <img
                class="order-2 lg:order-3"
                src="@/assets/img/video_thumbnail.png"
                alt=""
            />
        </section>

        <section class="flex flex-col lg:flex-row lg:gap-x-7 lg:px-64 lg:py-20">
            <div class="flex flex-col items-center lg:items-start">
                <div
                    class="mx-12 mb-20 text-center lg:mx-0 lg:mb-0 lg:text-left"
                >
                    <HeadingSection>
                        <template v-slot:title>
                            Fastest way to organize
                        </template>
                        <template v-slot:content>
                            Most calendars are designed for teams. <br />
                            Slate is designed for freelancers
                        </template>
                    </HeadingSection>
                </div>

                <Button class="mb-20 lg:mb-0 lg:mt-14">Try For Free</Button>
            </div>

            <div class="mx-5">
                <img src="@/assets/img/macbook.png" alt="" />
            </div>
        </section>

        <section
            class="row-auto mx-10 mt-20 grid grid-cols-1 lg:mx-0 lg:mt-0 lg:grid-cols-2 lg:grid-rows-2 lg:gap-x-10 lg:px-64 lg:py-20"
        >
            <div class="order-2 my-10 lg:-order-none lg:row-span-2 lg:my-0">
                <img src="@/assets/img/newsletter_illustration.svg" alt="" />
            </div>

            <div
                class="order-1 text-center lg:-order-none lg:place-self-end lg:text-left"
            >
                <h3 class="text-lg font-bold">At your fingertips</h3>
                <HeadingSection>
                    <template v-slot:title>
                        Lightning fast prototyping
                    </template>
                </HeadingSection>
            </div>

            <div class="order-3 text-center lg:-order-none lg:text-left">
                <h3 class="text-lg">Subscribe to our Newsletter</h3>
                <p class="text-custom-gray mb-4">
                    Available exclusivery on Figmaland
                </p>
                <form class="flex flex-col lg:flex-row lg:gap-x-3" action="">
                    <input
                        class="bg-cream border-darker-cream mb-2 rounded-full border py-3 pl-5 lg:mb-0 lg:grow"
                        type="text"
                        placeholder="Your Email"
                    />
                    <Button>Subscribe</Button>
                </form>
            </div>
        </section>

        <section
            class="mx-10 flex flex-col py-20 lg:mx-0 lg:items-center lg:px-64"
        >
            <div class="text-center">
                <HeadingSection>
                    <template v-slot:title>Partners</template>
                    <template v-slot:content>
                        Most calendars are designed for teams. <br />Slate is
                        designed for freelancers
                    </template>
                </HeadingSection>
            </div>
            <div class="my-10 lg:my-20">
                <GridCompany />
            </div>
            <Button class="self-center">Try For Free</Button>
        </section>

        <section class="lg:px-64 lg:py-20">
            <HeadingSection />
            <div>
                <!-- Avatar -->
            </div>
            <Button>More Testimonials</Button>
        </section>

        <section class="lg:px-64 lg:py-20">
            <HeadingSection />
            <div>
                <!-- Pricing Cards -->
            </div>
        </section>

        <section class="lg:px-64 lg:py-20">
            <HeadingSection />
            <div>
                <!-- 2 columns -->
                <div>
                    <form action=""></form>
                </div>
                <div>
                    <div>
                        <!-- 3 columns-->
                    </div>
                    <img src="@/assets/img/map.png" alt="" />
                    <div>
                        <!-- Socials-->
                    </div>
                </div>
            </div>
        </section>
    </main>
    <Footer />
</template>

<style scoped></style>
