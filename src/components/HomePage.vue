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

    <!-- Scroll to top button -->
    <transition name="fade">
      <button
        v-show="showScrollButton"
        @click="scrollToTop"
        class="scroll-to-top"
        aria-label="Scroll to top"
      >
        <i class="bi bi-arrow-up"></i>
      </button>
    </transition>
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
  data() {
    return {
      showScrollButton: false,
    };
  },
  methods: {
    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
    handleScroll() {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const threshold = totalHeight * 0.09;
      this.showScrollButton = window.scrollY > threshold;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
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

/* Scroll to top button styles */
.scroll-to-top {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: var(--secondary-color);
  border: none;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 15px rgba(255, 187, 0, 0.2);
  transition: all 0.3s ease;
  z-index: 1000;
}

.scroll-to-top i {
  font-size: 1.2rem;
  transition: transform 0.3s ease;
}

.scroll-to-top:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(255, 187, 0, 0.3);
}

.scroll-to-top:hover i {
  transform: translateY(-2px);
}

/* Fade animation - updated for smoother transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease, transform 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

/* Responsive styles */
@media (max-width: 480px) {
  .scroll-to-top {
    bottom: 70px;
    right: 15px;
    width: 45px;
    height: 45px;
    padding: 8px;
  }
}
</style>
