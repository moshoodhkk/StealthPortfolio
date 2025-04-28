<template>
  <div id="experience" class="experience-wrapper">
    <div class="experience-container">
      <!-- my experience -->
      <div class="my-experience">
        <div class="experience-content">
          <div class="experience-header">
            <h4>My Experience</h4>
            <img src="../assets/asset12.png" alt="" />
          </div>
          <p class="intro">
            As a budding developer, I'm eager to explore opportunities across
            various industries. I'm always excited to take on new challenges and
            grow in my journey.
          </p>
          <a
            href="#projects"
            @click.prevent="scrollToProjects"
            class="download-btn"
            >View Projects</a
          >
        </div>
        <img class="experience-img" src="../assets/asset22.png" alt="" />
      </div>

      <!-- timeline items -->
      <div class="timeline-wrapper">
        <div class="timeline-container">
          <span class="straight-line"></span>
          <div class="timeline-item">
            <span class="timeline-dates">Feb 2024 - Now </span>
            <div class="timeline-circle"></div>
            <div class="timeline-content">
              <p class="timeline-title">Front-End Developer at Tta Academy</p>
              <p class="timeline-info">
                My journey as a Junior Front-End Developer began with engaging
                myself in web development and learning from experienced
                developers. My role involves assisting in building web
                components, translating design concepts into code, and
                optimizing user interfaces.
              </p>
            </div>
          </div>

          <div class="timeline-item">
            <span class="timeline-dates">Oct - Feb 2025 </span>
            <div class="timeline-circle"></div>
            <div class="timeline-content">
              <p class="timeline-title">JavaScript</p>
              <p class="timeline-info">
                As a Junior Web Developer with JavaScript, I have immersed
                myself in web and app development, working with experienced
                developers to master front-end technologies. My focus is on
                creating interactive interfaces, enhancing functionality, and
                ensuring smooth performance.
              </p>
            </div>
          </div>

          <!-- front-end dev -->
          <div class="timeline-item">
            <span class="timeline-dates">Mar 2023 - Sep 2024 </span>
            <div class="timeline-circle"></div>
            <div class="timeline-content">
              <p class="timeline-title">Html, Css, Bootstrap</p>
              <p class="timeline-info">
                My journey as a Front-End Developer began with building a strong
                foundation in HTML, CSS, and Bootstrap, creating responsive and
                visually appealing web pages. I collaborated with experienced
                developers to refine my skills in structuring content, styling
                interfaces, and enhancing user experiences...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyExperienceVue",
  methods: {
    scrollToProjects() {
      const projectsSection = document.querySelector("#projects");
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
};
</script>

<style scoped>
.experience-wrapper {
  width: 85%;
  margin: 5rem auto;
  display: flex;
  justify-content: space-between;
  font-family: "Poppins", "serif";
}

.experience-container {
  display: flex;
  justify-content: space-between;
}

.my-experience {
  width: 35%;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 2.5rem;
  position: relative;
}

.experience-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: start;
}
.experience-header {
  display: flex;
  position: relative;
}
.experience-header h4 {
  font-size: 27px;
  font-weight: bold;
  color: hsl(0 0% 20%);
}

.experience-header img {
  width: 30px;
  position: absolute;
  right: -17%;
  top: -35%;
}

.intro {
  font-size: 13px;
  color: #727070;
}

.my-experience a {
  border-radius: 25px;
  background-color: var(--secondary-color);
  text-decoration: none;
  padding: 10px 25px;
  color: #ffff;
  font-size: 13px;
}

.experience-img {
  position: absolute;
  bottom: 5%;
  width: 130px;
  align-self: center;
}

.timeline-wrapper {
  width: 60%;
}

.timeline-container {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  height: 100%;
}

.timeline-item {
  display: flex;
  justify-content: space-between;
}

.timeline-dates {
  text-align: end;
  width: 30%;
  align-self: start;
  font-size: 13.5px;
  line-height: 1;
  font-weight: 550;
}

.timeline-circle {
  align-self: start;
  width: 13px;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  background-color: var(--secondary-color);
  display: block;
}

.timeline-content {
  line-height: 1;
  width: 60%;
  font-size: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.straight-line {
  position: absolute;
  top: 0;
  left: 35%;
  transform: translateX(-50%);
  border: 1px solid hsl(0 0% 85%);
  height: 100%;
  z-index: -1;
}

.timeline-title {
  font-weight: 600;
  margin: 0 0 0.6rem;
  padding: 0;
}

.timeline-info {
  font-size: 12px;
  line-height: 1.7;
  color: #727070;
}

/* screen size 991px */
@media (max-width: 991px) {
  .experience-wrapper {
    width: 85%;
    margin: 4rem auto;
    display: flex;
    justify-content: space-between;
    font-family: "Poppins", "serif";
  }

  .experience-container {
    display: flex;
    justify-content: space-between;
  }

  .my-experience {
    width: 35%;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 2.5rem;
    position: relative;
  }

  .experience-content {
    display: flex;
    flex-direction: column;
    gap: 1.3rem;
    align-items: start;
  }
  .experience-header {
    display: flex;
    position: relative;
  }
  .experience-header h4 {
    font-size: 26px;
    font-weight: bold;
    color: hsl(0 0% 20%);
  }

  .experience-header img {
    width: 28px;
    position: absolute;
    right: -17%;
    top: -33%;
  }

  .intro {
    font-size: 13.5px;
    color: #727070;
  }

  .my-experience a {
    border-radius: 25px;
    background-color: var(--secondary-color);
    text-decoration: none;
    padding: 11px 25px;
    color: #ffff;
    font-size: 14px;
  }

  .experience-img {
    position: absolute;
    bottom: 5%;
    width: 125px;
    align-self: center;
  }

  .timeline-wrapper {
    width: 65%;
  }

  .timeline-container {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    height: 100%;
  }

  .timeline-item {
    display: flex;
    justify-content: space-between;
  }

  .timeline-dates {
    text-align: end;
    width: 30%;
    align-self: start;
    font-size: 15px;
    line-height: 1;
    font-weight: 550;
  }

  .timeline-circle {
    align-self: start;
    width: 13px;
    aspect-ratio: 1 / 1;
    border-radius: 50%;
    background-color: var(--secondary-color);
    display: block;
  }

  .timeline-content {
    line-height: 1;
    width: 60%;
    font-size: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .straight-line {
    position: absolute;
    top: 0;
    left: 35%;
    transform: translateX(-50%);
    border: 1px solid hsl(0 0% 85%);
    height: 100%;
    z-index: -1;
  }

  .timeline-title {
    font-weight: 600;
    margin: 0 0 0.6rem;
  }

  .timeline-info {
    font-size: 13px;
    line-height: 1.7;
    color: #727070;
  }
}

/* screen size 768px */
@media (max-width: 768px) {
  .experience-wrapper {
    width: 85%;
    margin: 4rem auto;
    display: flex;
    justify-content: space-between;
    font-family: "Poppins", "serif";
  }

  .experience-container {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    gap: 5rem;
  }

  .my-experience {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: start;
    position: relative;
  }

  .experience-content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: start;
    width: 60%;
  }
  .experience-header {
    display: flex;
    align-items: center;
    position: relative;
  }
  .experience-header h4 {
    font-size: 26px;
    font-weight: bold;
    color: hsl(0 0% 20%);
  }

  .experience-header img {
    width: 27px;
    position: absolute;
    right: -16%;
    top: -30%;
  }

  .intro {
    max-width: 400px;
    font-size: 15px;
    color: #727070;
  }

  .my-experience a {
    border-radius: 25px;
    background-color: var(--secondary-color);
    text-decoration: none;
    padding: 11px 25px;
    color: #ffff;
    font-size: 15px;
  }

  .experience-img {
    position: absolute;
    bottom: 10%;
    right: 10%;
    width: 120px;
    align-self: center;
  }

  .timeline-wrapper {
    width: 100%;
  }

  .timeline-container {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    height: 100%;
  }

  .timeline-item {
    display: flex;
    justify-content: space-between;
  }

  .timeline-dates {
    text-align: end;
    width: 27%;
    align-self: start;
    font-size: 17px;
    line-height: 1;
    font-weight: 550;
  }

  .timeline-circle {
    align-self: start;
    width: 13px;
    aspect-ratio: 1 / 1;
    border-radius: 50%;
    background-color: var(--secondary-color);
    display: block;
  }

  .timeline-content {
    line-height: 1;
    width: 65%;
    font-size: 18px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .straight-line {
    position: absolute;
    top: 0;
    left: 31%;
    transform: translateX(-50%);
    border: 1px solid hsl(0 0% 85%);
    height: 100%;
    z-index: -1;
  }

  .timeline-title {
    font-size: 18px;
    font-weight: 600;
    margin: 0 0 0.6rem;
    padding: 0;
  }

  .timeline-info {
    font-size: 15px;
    line-height: 1.7;
    color: #727070;
  }
}

/* screen size 575px */
@media (max-width: 575px) {
  .experience-wrapper {
    width: 90%;
    margin: 4rem auto;
    display: flex;
    justify-content: space-between;
    font-family: "Poppins", "serif";
  }

  .experience-container {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    gap: 5rem;
  }

  .my-experience {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: start;
    position: relative;
  }

  .experience-content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: start;
    width: 100%;
  }
  .experience-header {
    display: flex;
    align-items: center;
    position: relative;
  }
  .experience-header h4 {
    font-size: 28px;
    font-weight: bold;
    color: hsl(0 0% 20%);
  }

  .experience-header img {
    width: 27px;
    position: absolute;
    right: -16%;
    top: -30%;
  }

  .intro {
    line-height: 1.6;
    max-width: 100%;
    font-size: 17px;
    color: #727070;
  }

  .my-experience a {
    border-radius: 25px;
    background-color: var(--secondary-color);
    text-decoration: none;
    padding: 12px 25px;
    color: #ffff;
    font-size: 15px;
  }

  .experience-img {
    position: absolute;
    bottom: 10%;
    right: 10%;
    width: 120px;
    align-self: center;
    display: none;
  }

  .timeline-wrapper {
    width: 100%;
  }

  .timeline-container {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    height: 100%;
  }

  .timeline-item {
    display: flex;
    justify-content: space-between;
  }

  .timeline-dates {
    text-align: end;
    width: 28%;
    align-self: start;
    font-size: 17px;
    line-height: 1;
    font-weight: 550;
  }

  .timeline-circle {
    align-self: start;
    width: 13px;
    aspect-ratio: 1 / 1;
    border-radius: 50%;
    background-color: var(--secondary-color);
    display: block;
  }

  .timeline-content {
    line-height: 1;
    width: 65%;
    font-size: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .straight-line {
    position: absolute;
    top: 0;
    left: 31.4%;
    transform: translateX(-50%);
    border: 1px solid hsl(0 0% 85%);
    height: 100%;
    z-index: -1;
  }

  .timeline-title {
    font-size: 17px;
    font-weight: 600;
    margin: 0 0 0.6rem;
    padding: 0;
  }

  .timeline-info {
    font-size: 15px;
    line-height: 1.7;
    color: #727070;
  }
}

/* screen size 430px */
@media (max-width: 430px) {
  .experience-wrapper {
    width: 90%;
    margin: 4rem auto;
    display: flex;
    justify-content: space-between;
    font-family: "Poppins", "serif";
  }

  .experience-container {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    gap: 5rem;
  }

  .my-experience {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: start;
    position: relative;
  }

  .experience-content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: start;
    width: 100%;
  }
  .experience-header {
    display: flex;
    align-items: center;
    position: relative;
  }
  .experience-header h4 {
    font-size: 28px;
    font-weight: bold;
    color: hsl(0 0% 20%);
  }

  .experience-header img {
    width: 27px;
    position: absolute;
    right: -16%;
    top: -30%;
  }

  .intro {
    line-height: 1.6;
    max-width: 100%;
    font-size: 16px;
    color: #727070;
  }

  .my-experience a {
    border-radius: 25px;
    background-color: var(--secondary-color);
    text-decoration: none;
    padding: 12px 27px;
    color: #ffff;
    font-size: 15px;
  }

  .experience-img {
    position: absolute;
    bottom: 10%;
    right: 10%;
    width: 120px;
    align-self: center;
    display: none;
  }

  .timeline-wrapper {
    width: 100%;
  }

  .timeline-container {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    height: 100%;
  }

  .timeline-item {
    display: flex;
    justify-content: space-between;
  }

  .timeline-dates {
    text-align: end;
    width: 28%;
    align-self: start;
    font-size: 17px;
    line-height: 1;
    font-weight: 550;
  }

  .timeline-circle {
    align-self: start;
    width: 13px;
    aspect-ratio: 1 / 1;
    border-radius: 50%;
    background-color: var(--secondary-color);
    display: block;
  }

  .timeline-content {
    line-height: 1;
    width: 65%;
    font-size: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .straight-line {
    position: absolute;
    top: 0;
    left: 31.4%;
    transform: translateX(-50%);
    border: 1px solid hsl(0 0% 85%);
    height: 100%;
    z-index: -1;
  }

  .timeline-title {
    font-size: 17px;
    font-weight: 600;
    margin: 0 0 0.6rem;
    padding: 0;
  }

  .timeline-info {
    font-size: 16px;
    line-height: 1.7;
    color: #727070;
  }
}
</style>