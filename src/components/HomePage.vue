<template>
  <div>
    <!-- hero section  -->
    <section id="home" class="hero-section">
      <NavPageVue />
      <HeroContentVue />
    </section>

    <!-- about section -->
    <section id="about">
      <AboutPageVue />
    </section>

    <!-- projection section   -->
    <section id="projects">
      <ProjectSectionVue />
    </section>

    <!-- my experience section -->
    <section id="experience">
      <MyExperienceVue />
    </section>

    <!-- Review section -->
    <section id="reviews">
      <ReviewPageVue />
    </section>

    <!-- Contact section -->
    <section id="contact">
      <ContactUs />
    </section>

    <!-- Footer section -->
    <section id="footer">
      <FooterSectionVue />
    </section>
  </div>
</template>

<script>
import AboutPageVue from "./AboutPage.vue";
import FooterSectionVue from "./FooterSection.vue";
import HeroContentVue from "./HeroContent.vue";
import MyExperienceVue from "./MyExperience.vue";
import NavPageVue from "./NavPage.vue";
import ProjectSectionVue from "./ProjectSection.vue";
import ReviewPageVue from "./ReviewPage.vue";
import ContactUs from "./ContactUs.vue";

export default {
  name: "HomePage",
  components: {
    NavPageVue,
    HeroContentVue,
    AboutPageVue,
    ProjectSectionVue,
    MyExperienceVue,
    ReviewPageVue,
    ContactUs,
    FooterSectionVue,
  },
  methods: {
    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
};
</script>

<style scoped>
.hero-section {
  background-color: var(--primary-color);
  padding: 1.5rem 0 0;
}

section {
  scroll-margin-top: 80px;
}
</style>
