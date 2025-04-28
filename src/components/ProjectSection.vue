<template>
  <div class="project-section">
    <div class="project-wrapper">
      <div class="project-header">
        <div class="project">
          <img src="../assets/asset12.png" alt="Projects Icon" loading="lazy" />
          <h3>Projects</h3>
        </div>
        <p>
          Here you will find some of the personal and clients projects that i
          created with each projects
        </p>
      </div>

      <div class="project-grid">
        <div
          v-for="(project, index) in displayedProjects"
          :key="index"
          class="project-items"
          :class="project.class"
        >
          <div class="project-content">
            <p class="project-type">{{ project.type }}</p>
            <h5>{{ project.title }}</h5>
            <p class="project-description">
              {{ project.description }}
            </p>

            <div class="visit-site">
              <p>Visit Site</p>
              <i class="bi bi-arrow-up-right"></i>
            </div>
          </div>

          <div class="project-image">
            <img
              :src="project.image"
              :alt="project.title"
              loading="lazy"
              width="100%"
              height="auto"
            />
          </div>
        </div>
      </div>

      <button class="project-viewmore" @click="toggleShowAll">
        {{ showAll ? "Show Less" : "View More" }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectSectionVue",
  data() {
    return {
      showAll: false,
      projects: [
        {
          type: "Landing Page",
          title: "Advertising Service",
          description:
            "The most powerful software & app landing page for any kind of app and software marketing business.",
          image: require("../assets/asset19.png"),
          class: "advertising-solution",
        },
        {
          type: "Landing Page",
          title: "Trading Service",
          description:
            "The most powerful software & app landing page for any kind of app and software marketing business.",
          image: require("../assets/asset21.png"),
          class: "trading-platform",
        },
        {
          type: "Landing Page",
          title: "Art & Design Service",
          description:
            "The most powerful software & app landing page for any kind of app and software marketing business.",
          image: require("../assets/asset20.png"),
          class: "art-design",
        },
        {
          type: "Web Application",
          title: "E-commerce Platform",
          description:
            "A comprehensive e-commerce solution with advanced features for online shopping and payment processing.",
          image: require("../assets/asset19.png"),
          class: "ecommerce-platform",
        },
        {
          type: "Mobile App",
          title: "Fitness Tracker",
          description:
            "A mobile application for tracking workouts, nutrition, and health metrics with real-time analytics.",
          image: require("../assets/asset21.png"),
          class: "fitness-tracker",
        },
      ],
    };
  },
  methods: {
    toggleShowAll() {
      this.showAll = !this.showAll;
    },
  },
  computed: {
    displayedProjects() {
      return this.showAll ? this.projects : this.projects.slice(0, 3);
    },
  },
};
</script>

<style scoped>
.project-section {
  background-color: var(--primary-color);
  padding: 5rem 0;
  font-family: "Poppins", "serif";
}

.project-wrapper {
  width: 85%;
  margin: auto;
}

.project-header {
  width: 50%;
  margin: 0 auto 3rem;
  text-align: center;
}

.project {
  width: 190px;
  margin: 0 auto;
  position: relative;
  padding: 0.5rem 0;
}

.project img {
  width: 30px;
  position: absolute;
  top: -10px;
  right: 5px;
}

.project h3 {
  font-size: 1.8rem;
  font-weight: 650;
  color: hsl(0 0% 20%);
}

.project-header p {
  font-size: 15px;
  color: hsl(0 0% 35%);
}

.project-grid {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, auto);
  justify-content: space-between;
  row-gap: 4rem;
  margin-bottom: 3rem;
}

.project-items {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
}

.project-content {
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  color: hsl(0 0% 25%);
}

.project-type {
  font-size: 16px;
}

.project-type + h5 {
  font-size: 2rem;
  font-weight: 550;
}

.project-description {
  font-size: 15px;
  margin-bottom: 1rem;
}

.visit-site {
  display: flex;
  gap: 0.8rem;
  cursor: pointer;
  transition: 0.5s ease-in-out;
}

.visit-site p {
  font-size: 16px;
  color: hsl(0 0% 10%);
  font-weight: 500;
}

.visit-site i {
  font-size: 16px;
  color: hsl(0 0% 10%);
}

.visit-site:hover i {
  transform: translateY(-1px);
}

.project-image {
  width: 45%;
  overflow: hidden;
  position: relative;
  aspect-ratio: 16/9;
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.project-image:hover img {
  transform: scale(1.05);
}

.project-viewmore {
  display: block;
  width: 140px;
  margin: 0 auto;
  padding: 11px 0;
  border-radius: 30px;
  border: 1.2px solid black;
  background-color: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
}

.project-viewmore:hover {
  background-color: hsl(0 0% 15%);
  color: #ffff;
}

/* Tablet (768px to 991px) */
@media (max-width: 991px) {
  .project-section {
    padding: 4rem 0;
  }

  .project-wrapper {
    width: 85%;
  }

  .project-header {
    width: 70%;
  }

  .project h3 {
    font-size: 1.7rem;
  }

  .project-header p {
    font-size: 16px;
  }

  .project-type {
    font-size: 17px;
  }

  .project-type + h5 {
    font-size: 2rem;
  }

  .project-description {
    font-size: 16px;
    margin-bottom: 0.8rem;
  }

  .project-image {
    width: 40%;
    aspect-ratio: 4/3;
  }

  .project-image img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }

  .visit-site p,
  .visit-site i {
    font-size: 17px;
  }
}

/* Small Tablet (576px to 767px) */
@media (max-width: 768px) {
  .project-section {
    padding: 3rem 0;
  }

  .project-wrapper {
    width: 90%;
  }

  .project-header {
    width: 100%;
    margin-bottom: 2rem;
  }

  .project h3 {
    font-size: 2.2rem;
  }

  .project-header p {
    font-size: 20px;
  }

  .project-items {
    flex-direction: column;
    gap: 4rem;
  }

  .project-content {
    width: 100%;
    order: 2;
  }

  .project-image {
    width: 80%;
    aspect-ratio: 16/9;
  }

  .project-type {
    font-size: 22px;
  }

  .project-type + h5 {
    font-size: 2.4rem;
  }

  .project-description {
    font-size: 22px;
    margin-bottom: 0.8rem;
  }

  .visit-site {
    margin-top: 0.5rem;
  }

  .project-viewmore {
    width: 140px;
    padding: 12px 0;
    font-size: 20px;
  }

  .visit-site p,
  .visit-site i {
    font-size: 22px;
  }
}

/* Mobile (430px to 575px) */
@media (max-width: 575px) {
  .project-section {
    padding: 2.5rem 0;
  }

  .project-wrapper {
    width: 90%;
  }

  .project {
    width: 160px;
  }

  .project img {
    width: 25px;
  }

  .project h3 {
    font-size: 1.4rem;
  }

  .project-header p {
    font-size: 15px;
  }

  .project-grid {
    row-gap: 2.5rem;
  }

  .project-items {
    gap: 1.2rem;
  }

  .project-type {
    font-size: 14px;
  }

  .project-type + h5 {
    font-size: 1.5rem;
  }

  .project-description {
    font-size: 14px;
    margin-bottom: 0.8rem;
  }

  .visit-site p,
  .visit-site i {
    font-size: 14px;
  }

  .project-image {
    width: 100%;
    aspect-ratio: 16/9;
  }

  .project-viewmore {
    display: block;
    width: 140px;
    margin: 0 auto;
    padding: 11px 0;
    border-radius: 30px;
    border: 1.2px solid black;
    background-color: transparent;
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 14px;
  }
}

/* Small Mobile (below 430px) */
@media (max-width: 430px) {
  .project-section {
    padding: 2rem 0;
  }

  .project-wrapper {
    width: 90%;
  }

  .project {
    width: 140px;
  }

  .project img {
    width: 20px;
  }

  .project h3 {
    font-size: 1.4rem;
  }

  .project-header p {
    font-size: 15px;
  }

  .project-grid {
    row-gap: 4rem;
  }

  .project-items {
    gap: 1rem;
  }

  .project-type {
    font-size: 14px;
  }

  .project-type + h5 {
    font-size: 1.5rem;
  }

  .project-description {
    font-size: 14px;
    margin-bottom: 0.3rem;
  }

  .visit-site p,
  .visit-site i {
    font-size: 14px;
  }

  .project-viewmore {
    width: 140px;
    padding: 10px 0;
    font-size: 15px;
  }

  .project-image {
    width: 100%;
    aspect-ratio: 16/9;
  }
}
</style>