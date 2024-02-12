<script setup>
import Header from '@/components/Header.vue';
import HeadingSection from './components/HeadingSection.vue';
import Button from './components/Button.vue';
import Footer from './components/Footer.vue';
</script>

<template>
    <Header />
    <main>
        <section class="lg:px-64 lg:pb-20">
            <HeadingSection />
            <div><!-- 3 columns section--></div>
            <img src="@/assets/img/video_thumbnail.png" alt="" />
        </section>

        <section class="lg:px-64 lg:py-20">
            <!-- 2 columns section -->
            <div>
                <HeadingSection />
                <Button>Try For Free</Button>
            </div>
            <div>
                <img src="@/assets/img/macbook.png" alt="" />
            </div>
        </section>

        <section class="lg:px-64 lg:py-20">
            <!-- 2 columns section -->
            <div>
                <img src="@/assets/img/newsletter_illustration.svg" alt="" />
            </div>
            <div>
                <span>At your fingertips</span>
                <h2>Lightning fast prototyping</h2>
                <p>Subscribe to our Newsletter</p>
                <p>Available exclusivery on Figmaland</p>
                <form action="">
                    <input type="text" />
                    <Button>Subscribe</Button>
                </form>
            </div>
        </section>

        <section class="lg:px-64 lg:py-20">
            <HeadingSection />
            <div>
                <!-- Compagny grid-->
            </div>
            <Button>Try For Free</Button>
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
