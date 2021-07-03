<template>
    <div class="terms-and-conditions-page-container">
        <HeaderSection />
        <TermsAndConditionsSection />
        <FooterSection />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HeaderSection from '@/components/header/HeaderSection.vue';
import TermsAndConditionsSection from '@/components/terms-and-conditions/TermsAndConditionsSection.vue';
import FooterSection from '@/components/footer/FooterSection.vue';

export default defineComponent({
    name: 'TermsAndConditionsPage',
    components: {
        HeaderSection,
        TermsAndConditionsSection,
        FooterSection,
    },
});
</script>

<style lang="scss" scoped>
    /*Layout*/
    .terms-and-conditions-page-container {
        display: flex;
        flex-direction: column;
    }
</style>
