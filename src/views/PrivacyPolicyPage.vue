<template>
    <div class="privacy-policy-page-container">
        <HeaderSection />
        <PrivacyPolicySection />
        <FooterSection />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HeaderSection from '@/components/header/HeaderSection.vue';
import PrivacyPolicySection from '@/components/privacy-policy/PrivacyPolicySection.vue';
import FooterSection from '@/components/footer/FooterSection.vue';

export default defineComponent({
    name: 'PrivacyPolicyPage',
    components: {
        HeaderSection,
        PrivacyPolicySection,
        FooterSection,
    },
});
</script>

<style lang="scss" scoped>
    /*Layout*/
    .privacy-policy-page-container {
        display: flex;
        flex-direction: column;
    }
</style>
