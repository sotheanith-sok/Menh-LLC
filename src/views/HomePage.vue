<template>
    <div class="home-page-container">
        <HeaderSection />
        <WelcomeSection />
        <DesignSection />
        <PlanSection />
        <BuildSection />
        <MaintainSection />
        <ContactUsSection />
        <FooterSection />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HeaderSection from '@/components/header/HeaderSection.vue';
import WelcomeSection from '@/components/welcome/WelcomeSection.vue';
import DesignSection from '@/components/design/DesignSection.vue';
import PlanSection from '@/components/plan/PlanSection.vue';
import BuildSection from '@/components/build/BuildSection.vue';
import MaintainSection from '@/components/maintain/MaintainSection.vue';
import ContactUsSection from '@/components/contact-us/ContactUsSection.vue';
import FooterSection from '@/components/footer/FooterSection.vue';

export default defineComponent({
    name: 'HomePage',
    components: {
        HeaderSection,
        WelcomeSection,
        DesignSection,
        PlanSection,
        BuildSection,
        MaintainSection,
        ContactUsSection,
        FooterSection,
    },
});
</script>
