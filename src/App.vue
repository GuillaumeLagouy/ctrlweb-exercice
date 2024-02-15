<script setup>
import Header from '@/components/Header.vue'
import HeadingSection from './components/HeadingSection.vue'
import Button from './components/Button.vue'
import GridCompany from './components/GridCompany.vue'
import PricingCard from './components/PricingCard.vue'
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
                <p class="mb-4 text-custom-gray">
                    Available exclusivery on Figmaland
                </p>
                <form class="flex flex-col lg:flex-row lg:gap-x-3" action="">
                    <input
                        class="mb-2 rounded-full border border-darker-cream bg-cream py-3 pl-5 lg:mb-0 lg:grow"
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

        <section class="flex flex-col items-center py-20 text-center lg:px-64">
            <HeadingSection image-path="src/assets/img/company/IBM.png">
                <template v-slot:title>Testimonials</template>
                <template v-slot:content>
                    Most calendars are designed for teams. Slate is designed for
                    freelancers<br />
                    who want a simple way to plan their schedule.
                </template>
            </HeadingSection>
            <div class="my-10 flex text-left text-custom-gray">
                <img src="@/assets/img/avatar.png" alt="" />
                <p>Organize across <br />Ui designer</p>
            </div>
            <Button>More Testimonials</Button>
        </section>

        <section class="flex flex-col bg-custom-dark-blue px-10 py-20 xl:px-56">
            <HeadingSection>
                <template v-slot:title>
                    <div class="text-center text-white">Pricing</div>
                </template>
                <template v-slot:content>
                    <div class="text-center text-white">
                        Most calendars are designed for teams.<br />
                        Slate is designed for freelancers
                    </div>
                </template>
            </HeadingSection>

            <!-- Pricing Cards -->
            <div
                class="mt-20 flex flex-col justify-between gap-y-12 lg:flex-row lg:items-center lg:gap-x-12 lg:gap-y-0"
            >
                <PricingCard
                    tier="free"
                    description="Organize across all apps by hand"
                    price="0"
                />
                <PricingCard
                    tier="standard"
                    description="Organize across all apps by hand"
                    price="10"
                    variant="large"
                />
                <PricingCard
                    tier="business"
                    description="Organize across all apps by hand"
                    price="99"
                />
            </div>
        </section>

        <section class="flex flex-col py-20 xl:px-56">
            <HeadingSection>
                <template v-slot:title>
                    <div class="text-center">Contact Us</div>
                </template>
                <template v-slot:content>
                    <div class="text-center">
                        Most calendars are designed for teams.<br />
                        Slate is designed for freelancers
                    </div>
                </template>
            </HeadingSection>

            <div class="mt-20 flex flex-col lg:flex-row lg:justify-between">
                <!-- 2 columns -->
                <div class="order-2 mx-5 lg:order-1 lg:mx-0">
                    <form
                        class="flex flex-col gap-y-10 rounded-2xl border border-gray-300 bg-white p-8 drop-shadow-md"
                        action=""
                    >
                        <h4 class="text-center font-bold text-custom-dark-blue">
                            Contact Us
                        </h4>
                        <input
                            class="mb-2 rounded-full border border-darker-cream bg-cream py-3 pl-5 lg:mb-0 lg:grow"
                            type="text"
                            placeholder="Your Name"
                        />
                        <input
                            class="mb-2 rounded-full border border-darker-cream bg-cream py-3 pl-5 lg:mb-0 lg:grow"
                            type="text"
                            placeholder="Your Email"
                        />
                        <textarea
                            class="mb-2 border border-darker-cream bg-cream py-3 pl-5 lg:mb-0 lg:grow"
                            name=""
                            id=""
                            cols="30"
                            rows="10"
                            placeholder="Your Message"
                        ></textarea>

                        <Button class="self-start">Send</Button>
                    </form>
                </div>
                <div class="order-1 flex flex-col lg:order-2">
                    <div
                        class="order-2 mx-5 my-10 flex flex-col gap-y-4 lg:order-1 lg:mx-0 lg:my-0 lg:flex-row lg:gap-x-6"
                    >
                        <div class="flex items-center lg:flex-col lg:gap-y-2">
                            <div class="w-7 lg:h-9">
                                <img
                                    src="@/assets/icons/landmark_blue.svg"
                                    alt="Landmark icon"
                                />
                            </div>

                            <p
                                class="pl-5 text-left text-sm text-custom-gray lg:pl-0 lg:text-center"
                            >
                                6386 Spring St undefined Anchorage,<br />
                                Georgia 12473 United States
                            </p>
                        </div>
                        <div class="flex items-center lg:flex-col lg:gap-y-2">
                            <div class="w-7 lg:h-9">
                                <img
                                    src="@/assets/icons/phone_blue.svg"
                                    alt="Phone icon"
                                />
                            </div>

                            <p class="pl-5 text-sm text-custom-gray lg:pl-0">
                                (843) 555-0130
                            </p>
                        </div>
                        <div class="flex items-center lg:flex-col lg:gap-y-2">
                            <div class="w-7 lg:h-9">
                                <img
                                    src="@/assets/icons/letter_blue.svg"
                                    alt="Letter icon"
                                />
                            </div>
                            <p class="pl-5 text-sm text-custom-gray lg:pl-0">
                                willie.jennings@example.com
                            </p>
                        </div>
                    </div>
                    <img
                        class="hidden self-center lg:order-2 lg:my-20 lg:block"
                        src="@/assets/img/map.png"
                        alt=""
                    />
                    <div
                        class="order-1 flex justify-center gap-x-6 lg:order-3 lg:justify-start"
                    >
                        <img
                            src="@/assets/icons/twitter_blue.svg"
                            alt="Twitter icon"
                        />
                        <img
                            src="@/assets/icons/facebook_blue.svg"
                            alt="Facebook icon"
                        />
                        <img
                            src="@/assets/icons/linkedin_blue.svg"
                            alt="Linkedin icon"
                        />
                    </div>
                </div>
            </div>
        </section>
    </main>
    <Footer />
</template>

<style scoped></style>
