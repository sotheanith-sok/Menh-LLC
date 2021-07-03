<template>
    <div class="contact-us-section-background">
        <div class="contact-us-section-container">
            <div class="contact-us-section-text-container">
                <div class="contact-us-section-title-container">
                    <h2>Contact Us</h2>
                    <p>
                        <font-awesome-icon icon="calendar-alt" />
                        {{ operatingDays }} &nbsp;
                        <font-awesome-icon icon="clock" />
                        {{ operatingHours }}
                    </p>
                </div>
                <div class="contact-us-section-info-container">
                    <div class="contact-us-section-address-container">
                        <font-awesome-icon
                            icon="map-marked-alt"
                            size="4x"
                            v-on:click="direction"
                        />
                        <p>
                            {{ companyAddress }}
                        </p>
                    </div>
                    <div class="contact-us-section-phone-numbers-container">
                        <font-awesome-icon
                            icon="phone-square-alt"
                            size="4x"
                            v-on:click="call"
                        />
                        <p>
                            {{ companyPhoneNumber }}
                        </p>
                    </div>
                    <div class="contact-us-section-email-container">
                        <font-awesome-icon
                            icon="envelope-square"
                            size="4x"
                            v-on:click="email"
                        />
                        <p>
                            {{ companyEmail }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'ContactUsSection',
    computed: {
        scrollTarget() {
            return this.$store.state.scrollTarget;
        },
        operatingDays() {
            return this.$store.state.operatingDays;
        },
        operatingHours() {
            return this.$store.state.operatingHours;
        },
        companyAddress() {
            return this.$store.state.companyAddress;
        },
        companyEmail() {
            return this.$store.state.companyEmail;
        },
        companyPhoneNumber() {
            return this.$store.state.companyPhoneNumber;
        },
    },
    watch: {
        scrollTarget() {
            this.scrollToSelf();
        },
    },
    mounted() {
        const root = this.$root;
        if (root) {
            root.$nextTick(() => {
                setTimeout(this.scrollToSelf, 0);
            });
        }
    },
    methods: {
        scrollToSelf() {
            if (this.$store.state.scrollTarget === 'contact-us-section') {
                this.$el.scrollIntoView({ behavior: 'smooth' });
                this.$store.commit('updateScrollTarget', undefined);
            }
        },
        direction() {
            window.open(`http://maps.google.com/?q=${this.companyAddress}`);
        },
        call() {
            window.open(`tel:${this.companyPhoneNumber}`);
        },
        email() {
            window.open(`mailto:${this.companyEmail}`);
        },
    },
});
</script>

<style lang="scss" scoped>
    /*Layout*/
    .contact-us-section-background {
        background: linear-gradient(
                135deg,
                rgba(var(--color-background-0), 0.5),
                rgba(var(--color-background-0), 0.5),
                rgba(var(--color-background-0), 0.5)
            ),
            url('../../assets/contact-us-background.png');
        background-size: cover;
        background-position: 50% 53%;
    }
    .contact-us-section-container {
        max-width: 960px;
        min-height: 100vh;
        display: flex;
        justify-content: center;
        margin: 0 auto;
        padding: 0 1rem;
    }
    .contact-us-section-text-container {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .contact-us-section-title-container {
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        text-align: center;
        margin-bottom: 2rem;
    }
    .contact-us-section-info-container {
        display: flex;
        justify-content: space-around;
    }
    .contact-us-section-address-container,
    .contact-us-section-phone-numbers-container,
    .contact-us-section-email-container {
        width: 33.3%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0rem 2rem 0 2rem;
        padding: 1rem 0 7rem 0;
    }
    .contact-us-section-title-container h2 {
        margin: 0;
    }
    .contact-us-section-title-container p {
        margin: 0;
    }
    .contact-us-section-info-container p {
        margin: 2rem 0rem 0 0rem;
        padding: 0rem 1rem;
    }

    /*Typography*/
    .contact-us-section-background {
        color: rgb(var(--color-text));
    }
    .contact-us-section-address-container,
    .contact-us-section-phone-numbers-container,
    .contact-us-section-email-container {
        background-color: rgba(var(--color-background-1), 0.9);
        border-radius: 20px;
        text-align: center;
    }
    .contact-us-section-title-container h2 {
        font-size: var(--font-size-desktop-h2);
        font-weight: 700;
    }
    .contact-us-section-title-container p {
        font-size: calc(var(--font-size-desktop-p) * 0.7);
        font-weight: 400;
    }
    .contact-us-section-info-container p {
        font-size: calc(var(--font-size-desktop-p) * 0.9);
        font-weight: 400;
    }

    /*Mobile css*/
    @media screen and (max-width: 600px) {
        /*Layout*/
        .contact-us-section-title-container {
            margin-bottom: 0rem;
        }
        .contact-us-section-info-container {
            flex-direction: column;
        }
        .contact-us-section-address-container,
        .contact-us-section-phone-numbers-container,
        .contact-us-section-email-container {
            width: auto;
            margin: 1rem 0;
            padding: 0.5rem;
        }

        /*Typography*/
        .contact-us-section-title-container h2 {
            font-size: calc(var(--font-size-mobile-h2) * 1.2);
            font-weight: 700;
        }
        .contact-us-section-title-container p {
            font-size: calc(var(--font-size-mobile-p) * 0.8);
            font-weight: 400;
        }
        .contact-us-section-info-container p {
            font-size: calc(var(--font-size-mobile-p) * 0.8);
            font-weight: 400;
        }
    }
</style>
