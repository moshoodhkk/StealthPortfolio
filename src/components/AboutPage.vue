<template>
  <div class="about-wrapper">
    <img src="../assets/asset17.png" alt="" class="about-bgimage" />

    <div class="about-page">
      <img src="../assets/asset14.png" class="about-img" alt="" />

      <div class="flex-image">
        <img src="../assets/asset2.png" class="about-pencil" alt="" />

        <div class="about-experience">
          <img src="../assets/asset13.png" alt="" />
        </div>

        <div class="circle-wrapper">
          <div class="about-circle">
            <img src="../assets/asset15.png" class="zigzag-img" alt="" />
            <img
              src="../assets/about_profile.png"
              class="about-passport"
              alt=""
            />
          </div>
        </div>
      </div>

      <div class="about-content">
        <div class="about-header">
          <div class="about-header-text">
            <h3>About Me</h3>
            <img src="../assets/asset12.png" alt="" />
          </div>
        </div>

        <div class="about-info">
          <div>
            Hello, I'm StealthDev, a committed Frontend Developer, passionate
            about crafting digital experiences that are both visually stunning
            and flawlessly functional.
          </div>
          <div>
            My journey into the world of Frontend Development began in 2023, and
            since then, I've been on an exciting mission to create innovative,
            user-focused solutions that make a meaningful impact.
          </div>
          <div>
            As a frontend developer, I believe that exceptional design plays a
            crucial role in shaping how people interact with technology. Whether
            it's a mobile app, a website, or any digital interface, my work is
            driven by the goal of creating impactful user experiences.
          </div>
        </div>

        <div class="about-btn">
          <a @click="scrollToContact">Hire Me</a>
          <div class="about-follow">
            <span></span>
            <p>Follow Me</p>
          </div>
          <div class="about-socials">
            <i class="fa-brands fa-linkedin-in"></i>
            <i class="fa-brands fa-github"></i>
            <i class="fa-brands fa-twitter"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutPageVue",
  methods: {
    scrollToContact() {
      const contactSection = document.querySelector("#contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
};
</script>

<style scoped>
.about-wrapper {
  position: relative;
  padding: 4rem 0 6rem;
  font-family: "Poppins", sans-serif;
}

.about-bgimage {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}

.about-bgimage img {
  width: 100%;
}

.about-page {
  position: relative;
  width: 85%;
  margin: 0 auto;
  padding-top: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.about-img {
  position: absolute;
  width: 45px;
  top: 0;
}

.flex-image {
  position: relative;
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.circle-wrapper {
  width: 350px;
  aspect-ratio: 1 / 1;
}

.about-circle {
  position: relative;
  border: 4px solid var(--secondary-color);
  background-color: hsla(39, 100%, 93%, 0.667);
  width: 100%;
  height: 100%;
  border-radius: 50%;
  padding: 7px 3px 0;
  z-index: 10;
  overflow: hidden;
}

.zigzag-img {
  position: absolute;
  z-index: 100;
  width: 100%;
  transform: rotate(-5deg);
}

.about-passport {
  width: 100%;
  position: absolute;
  z-index: 100;
  bottom: -8%;
}

.about-experience {
  position: absolute;
  top: 5%;
  right: 5%;
  z-index: 200;
  width: 25%;
}

.about-experience img {
  width: 100%;
}

.about-pencil {
  position: absolute;
  width: 7.5rem;
  z-index: 200;
  left: 4%;
  bottom: 4%;
  transform: rotate(15deg);
}

.about-content {
  padding-top: 1.5rem;
  width: 50%;
  height: 100%;
}

.about-header {
  position: relative;
  gap: 0.5rem;
  width: 150px;
  margin-bottom: 1.2rem;
}

.about-header h3 {
  word-spacing: 5px;
  font-size: 1.6rem;
  color: hsl(0 0% 20%);
}

.about-header img {
  position: absolute;
  top: -50%;
  right: -8%;
  width: 30px;
}

.about-info {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin-bottom: 2rem;
}

.about-info div {
  font-size: 14.5px;
  line-height: 1.5;
  color: hsl(0 0% 45%);
}

.about-btn {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.about-btn a {
  font-family: "Poppins", "serif";
  font-weight: 450;
  width: 130px;
  font-size: 14px;
  padding: 12px 0;
  border-radius: 25px;
  background-color: var(--secondary-color);
  color: #ffff;
  text-decoration: none;
  border: none;
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;
}

.about-btn a:hover {
  box-shadow: 0 0 15px 3px rgba(255, 187, 0, 0.3);
  transform: translateY(-2px);
}

.about-follow {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.about-follow p {
  font-size: 14px;
  font-weight: 500;
  color: hsl(0 0% 50%);
}

.about-follow span {
  width: 50px;
  height: 1px;
  display: block;
  background-color: hsl(0 0% 20%);
}

.about-socials {
  display: flex;
  gap: 1.5rem;
}

.about-socials i {
  font-size: 17px;
  color: hsl(0 0% 60%);
  transition: all 0.3s ease;
  cursor: pointer;
}

.about-socials i:hover {
  color: var(--secondary-color);
  transform: translateY(-3px);
}

/* screen size 991px  */
@media (max-width: 991px) {
  .about-wrapper {
    position: relative;
    padding: 4rem 0 5rem;
  }

  .about-bgimage {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }

  .about-bgimage img {
    width: 100%;
  }

  .about-page {
    position: relative;
    width: 85%;
    margin: 0 auto;
    padding-top: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .about-img {
    position: absolute;
    width: 45px;
    top: 0;
  }

  .flex-image {
    position: relative;
    width: 40%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .circle-wrapper {
    width: 320px;
    aspect-ratio: 1 / 1;
  }

  .about-circle {
    position: relative;
    border: 4px solid var(--secondary-color);
    background-color: hsla(39, 100%, 93%, 0.667);
    width: 100%;
    height: 100%;
    border-radius: 50%;
    padding: 7px 3px 0;
    z-index: 10;
    overflow: hidden;
  }

  .zigzag-img {
    position: absolute;
    z-index: 100;
    width: 100%;
    transform: rotate(-5deg);
  }

  .about-passport {
    width: 100%;
    position: absolute;
    z-index: 100;
    bottom: 0;
  }

  .about-experience {
    position: absolute;
    top: -5%;
    right: -3%;
    z-index: 200;
    width: 32%;
  }

  .about-experience img {
    width: 100%;
  }

  .about-pencil {
    position: absolute;
    width: 6rem;
    z-index: 200;
    left: 0;
    bottom: 2%;
    transform: rotate(15deg);
  }

  .about-content {
    padding-top: 1rem;
    width: 55%;
    height: 100%;
  }

  .about-header {
    width: 100%;
    margin-bottom: 1rem;
  }

  .about-header-text {
    position: relative;
    width: 150px;
    white-space: nowrap;
  }

  .about-header h3 {
    word-spacing: 5px;
    font-size: 1.4rem;
    color: hsl(0 0% 20%);
  }

  .about-header img {
    position: absolute;
    top: -40%;
    right: 2%;
    width: 25px;
  }

  .about-info {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    margin-bottom: 1.7rem;
  }

  .about-info div {
    font-size: 14px;
    line-height: 1.5;
    color: hsl(0 0% 45%);
  }

  .about-btn {
    display: flex;
    gap: 1.3rem;
    align-items: center;
  }

  .about-btn a {
    font-family: "Poppins", "serif";
    font-weight: 450;
    width: 120px;
    font-size: 14px;
    padding: 10px 0;
    border-radius: 25px;
    background-color: var(--secondary-color);
    color: #ffff;
    text-decoration: none;
    border: none;
    text-align: center;
  }

  .about-follow {
    display: flex;
    gap: 0.6rem;
    flex-shrink: 0;
    align-items: center;
  }

  .about-follow p {
    font-size: 14px;
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    color: hsl(0 0% 50%);
  }

  .about-follow span {
    width: 40px;
    height: 0.5px;
    display: block;
    background-color: hsl(0 0% 20%);
  }

  .about-socials {
    display: flex;
    gap: 0.8rem;
  }

  .about-socials i {
    font-size: 16px;
    color: hsl(0 0% 60%);
  }
}

/* screen size 768px */
@media (max-width: 768px) {
  .about-wrapper {
    position: relative;
    padding: 4rem 0 5rem;
  }

  .about-bgimage {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }

  .about-bgimage img {
    width: 100%;
  }

  .about-page {
    position: relative;
    width: 90%;
    margin: 0 auto;
    padding-top: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .about-img {
    position: absolute;
    width: 40px;
    top: 0;
  }

  .flex-image {
    position: relative;
    width: 40%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .circle-wrapper {
    width: 330px;
    aspect-ratio: 1 / 1;
  }

  .about-circle {
    position: relative;
    border: 4px solid var(--secondary-color);
    background-color: hsla(39, 100%, 93%, 0.667);
    width: 100%;
    height: 100%;
    border-radius: 50%;
    padding: 7px 3px 0;
    z-index: 10;
    overflow: hidden;
  }

  .zigzag-img {
    position: absolute;
    z-index: 100;
    width: 100%;
    transform: rotate(-5deg);
  }

  .about-passport {
    width: 100%;
    position: absolute;
    z-index: 100;
    bottom: -15%;
  }

  .about-experience {
    top: 0%;
    right: 0%;
    z-index: 200;
    width: 33%;
    transform: rotate(10deg);
  }

  .about-experience img {
    width: 100%;
  }
  .about-experience p {
    font-size: 0.8em;
    position: absolute;
    color: #ffff;
    transform: rotate(-30deg);
    top: 30%;
    left: 19%;
  }

  .about-pencil {
    position: absolute;
    width: 5rem;
    z-index: 200;
    left: -4%;
    bottom: 2%;
    transform: rotate(15deg);
  }

  .about-content {
    padding-top: 1rem;
    width: 55%;
    height: 100%;
  }
  .about-header {
    width: 100%;
    margin-bottom: 1rem;
  }

  .about-header-text {
    position: relative;
    width: 120px;
    white-space: nowrap;
  }

  .about-header h3 {
    word-spacing: 5px;
    font-size: 1.5rem;
    color: hsl(0 0% 20%);
  }

  .about-header img {
    position: absolute;
    top: -35%;
    right: -24%;
    width: 24px;
  }

  .about-info {
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
    margin-bottom: 1.7rem;
  }

  .about-info div {
    font-size: 16px;
    line-height: 1.4;
    color: hsl(0 0% 45%);
  }

  .about-btn {
    display: flex;
    gap: 0.7rem;
    align-items: center;
  }

  .about-btn a {
    font-family: "Poppins", "serif";
    font-weight: 450;
    width: 100px;
    font-size: 13px;
    padding: 8px 17px;
    border-radius: 25px;
    background-color: var(--secondary-color);
    color: #ffff;
    text-decoration: none;
    border: none;
    text-align: center;
    white-space: nowrap;
  }

  .about-follow {
    display: flex;
    gap: 1rem;
    flex-shrink: 0;
    align-items: center;
  }

  .about-follow p {
    font-size: 14.5px;
    font-weight: 500;
    color: hsl(0 0% 55%);
  }

  .about-follow span {
    width: 40px;
    height: 0.5px;
    display: block;
    background-color: hsl(0 0% 20%);
  }

  .about-socials {
    display: flex;
    gap: 0.9rem;
  }

  .about-socials i {
    font-size: 16.5px;
    color: hsl(0 0% 60%);
  }
}

/* screen size 576px */
@media (max-width: 576px) {
  .about-wrapper {
    position: relative;
    height: auto;
    padding: 4rem 0 3rem;
  }

  .about-bgimage {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }

  .about-bgimage img {
    width: 100%;
  }

  .about-page {
    position: relative;
    width: 90%;
    margin: 0 auto;
    padding-top: 2.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 3.5rem;
  }

  .about-img {
    position: absolute;
    width: 45px;
    top: 0;
    left: 0;
  }

  .flex-image {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .circle-wrapper {
    width: 300px;
    aspect-ratio: 1 / 1;
  }

  .about-circle {
    position: relative;
    border: 4px solid var(--secondary-color);
    background-color: hsla(39, 100%, 93%, 0.667);
    width: 100%;
    height: 100%;
    border-radius: 50%;
    padding: 7px 3px 0;
    z-index: 10;
    overflow: hidden;
  }

  .zigzag-img {
    position: absolute;
    z-index: 100;
    width: 100%;
    transform: rotate(-5deg);
  }

  .about-passport {
    width: 100%;
    position: absolute;
    z-index: 100;
    bottom: -16%;
  }

  .about-experience {
    position: absolute;
    top: 0%;
    right: 17%;
    z-index: 200;
    width: 20%;
  }

  .about-experience img {
    width: 100%;
  }

  .about-pencil {
    position: absolute;
    width: 5.5rem;
    z-index: 200;
    left: 20%;
    bottom: 4%;
    transform: rotate(15deg);
  }

  .about-content {
    padding-top: 1rem;
    width: 100%;
    height: 100%;
  }

  .about-header {
    width: 100%;
    margin-bottom: 1rem;
  }

  .about-header-text {
    position: relative;
    width: 130px;
    white-space: nowrap;
  }

  .about-header h3 {
    word-spacing: 5px;
    font-size: 1.5rem;
    color: hsl(0 0% 20%);
  }

  .about-header img {
    position: absolute;
    top: -37%;
    right: -17%;
    width: 24px;
  }

  .about-info {
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
    margin-bottom: 1.7rem;
  }

  .about-info div {
    font-size: 16px;
    line-height: 1.4;
    color: hsl(0 0% 45%);
  }

  .about-btn {
    display: flex;
    gap: 0.9rem;
    align-items: center;
  }

  .about-btn a {
    font-family: "Poppins", "serif";
    font-weight: 450;
    width: 120px;
    font-size: 13.5px;
    padding: 9px 0;
    border-radius: 25px;
    background-color: var(--secondary-color);
    color: #ffff;
    text-decoration: none;
    border: none;
    text-align: center;
    white-space: nowrap;
  }

  .about-follow {
    display: flex;
    gap: 0.8rem;
    flex-shrink: 0;
    align-items: center;
  }

  .about-follow p {
    font-size: 15px;
    font-weight: 500;
    color: hsl(0 0% 55%);
  }

  .about-follow span {
    width: 40px;
    height: 0.5px;
    display: block;
    background-color: hsl(0 0% 20%);
  }

  .about-socials {
    display: flex;
    gap: 0.9rem;
  }

  .about-socials i {
    font-size: 17px;
    color: hsl(0 0% 60%);
  }
}

/* screen size 430px */
@media (max-width: 430px) {
  .about-wrapper {
    position: relative;
    height: auto;
    padding: 4rem 0 3rem;
  }

  .about-bgimage {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }

  .about-bgimage img {
    width: 100%;
  }

  .about-page {
    position: relative;
    width: 90%;
    margin: 0 auto;
    padding-top: 2.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 3.5rem;
  }

  .about-img {
    position: absolute;
    width: 45px;
    top: 0;
    left: 0;
  }

  .flex-image {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .circle-wrapper {
    width: 310px;
    aspect-ratio: 1 / 1;
  }

  .about-circle {
    position: relative;
    border: 4px solid var(--secondary-color);
    background-color: hsla(39, 100%, 93%, 0.667);
    width: 100%;
    height: 100%;
    border-radius: 50%;
    padding: 7px 3px 0;
    z-index: 10;
    overflow: hidden;
  }

  .zigzag-img {
    position: absolute;
    z-index: 100;
    width: 100%;
    transform: rotate(-5deg);
  }

  .about-passport {
    width: 100%;
    position: absolute;
    z-index: 100;
    bottom: -8%;
  }

  .about-experience {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0%;
    right: 6%;
    z-index: 200;
    width: 26%;
  }

  .about-experience img {
    width: 100%;
  }
  .about-experience p {
    font-size: 0.7em;
    position: absolute;
    color: #ffff;
    transform: rotate(-30deg);
    top: 30%;
    left: 20%;
  }

  .about-pencil {
    position: absolute;
    width: 6rem;
    z-index: 200;
    left: 8%;
    bottom: 4%;
    transform: rotate(15deg);
  }

  .about-content {
    padding-top: 1rem;
    width: 100%;
    height: 100%;
  }

  .about-header {
    width: 100%;
    margin-bottom: 1rem;
  }

  .about-header-text {
    position: relative;
    width: 140px;
    white-space: nowrap;
  }

  .about-header h3 {
    word-spacing: 5px;
    font-size: 1.5rem;
    color: hsl(0 0% 20%);
  }

  .about-header img {
    position: absolute;
    top: -35%;
    right: -8px;
    width: 24px;
  }

  .about-info {
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
    margin-bottom: 1.7rem;
  }

  .about-info div {
    font-size: 17px;
    line-height: 1.4;
    color: hsl(0 0% 50%);
  }

  .about-btn {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    width: 100%;
  }

  .about-btn a {
    font-family: "Poppins", "serif";
    font-weight: 450;
    font-size: 14px;
    padding: 10px 0px;
    border-radius: 20px;
    background-color: var(--secondary-color);
    color: #ffff;
    text-decoration: none;
    border: none;
    text-align: center;
    white-space: nowrap;
  }

  .about-btn a:hover {
    background-color: hsla(39, 100%, 47%, 0.8);
  }

  .about-follow {
    display: flex;
    gap: 0.1rem;
    align-items: center;
  }

  .about-follow p {
    font-size: 15px;
    font-weight: 500;
    color: hsl(0 0% 55%);
    font-family: "Poppins", sans-serif;
  }

  .about-follow span {
    width: 40px;
    height: 0.5px;
    display: block;
    background-color: hsl(0 0% 20%);
  }

  .about-socials {
    display: flex;
    gap: 0.5rem;
  }

  .about-socials i {
    font-size: 16px;
    color: hsl(0 0% 60%);
  }
}
</style>