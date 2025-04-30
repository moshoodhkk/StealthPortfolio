<template>
  <div class="footer-wrapper">
    <div class="header-container">
      <div class="header">
        <h3>LET'S WORK TOGETHER</h3>
        <img src="../assets/asset12.png" alt="" />
      </div>
      <div class="footer-star">
        <img src="../assets/asset30.png" alt="" />
      </div>
      <a href="#contact" @click.prevent="scrollToSection('contact')"
        >Let's Talk</a
      >
    </div>

    <div class="footer-nav">
      <ul>
        <a href="#home" @click.prevent="scrollToSection('home')"
          ><li>Home</li></a
        >
        <a href="#about" @click.prevent="scrollToSection('about')"
          ><li>About</li></a
        >
        <a href="#projects" @click.prevent="scrollToSection('projects')"
          ><li>Projects</li></a
        >
        <a href="#experience" @click.prevent="scrollToSection('experience')"
          ><li>Experience</li></a
        >
        <a href="#reviews" @click.prevent="scrollToSection('reviews')"
          ><li>Reviews</li></a
        >
      </ul>

      <div class="contacts">
        <div class="phone">
          <span>Phone:</span>
          <p>+234 9032897113</p>
        </div>
        <!-- <span class="contact-line"></span> -->
        <div class="mail">
          <span>Mail:</span>
          <p>suxces.stealth@outlook.com</p>
        </div>
      </div>
    </div>

    <span class="footer-line"></span>

    <div class="footer-socials">
      <p>©2025 Moshood. All rights reserved.</p>
      <div class="socials">
        <i class="fa-brands fa-linkedin-in"></i>
        <i class="fa-brands fa-github"></i>
        <i class="fa-brands fa-twitter"></i>
      </div>
    </div>

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
export default {
  name: "FooterSection",
  data() {
    return {
      showScrollButton: false,
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    },
    handleScroll() {
      // Show button when scrolled to bottom
      const scrollPosition = window.scrollY + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      this.showScrollButton = scrollPosition >= documentHeight - 100;
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
.footer-wrapper {
  width: 85%;
  margin: auto;
  padding: 4rem 0 3rem;
  font-family: "Poppins", "serif";
}

.header-container {
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
  position: relative;
  padding: 0.5rem 0;
}

.header-container a {
  padding: 12px 35px;
  background-color: var(--secondary-color);
  color: #ffff;
  border-radius: 20px;
  font-size: 12.5px;
  text-decoration: none;
  transition: all 0.3s ease;
}

.header-container a:hover {
  box-shadow: 0 0 15px 3px rgba(255, 187, 0, 0.3);
  transform: translateY(-2px);
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}

.header h3 {
  font-size: 25px;
  color: hsl(0, 0%, 26%);
}

.header img {
  width: 27px;
  position: absolute;
  top: -40%;
  right: -12%;
}

.footer-star {
  position: absolute;
  top: -30%;
  left: 55%;
  width: 45px;
}

.footer-star img {
  width: 100%;
}

.footer-nav {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.3rem;
}

.footer-nav ul {
  display: flex;
  gap: 1.7rem;
}

.footer-nav ul a,
li {
  font-size: 13px;
  font-weight: 500;
  list-style: none;
  text-decoration: none;
  color: hsl(0, 0%, 30%);
  transition: all 0.3s ease;
  padding: 5px 10px;
  border-radius: 5px;
}

.footer-nav ul a:hover,
li:hover {
  color: hsl(39, 100%, 56%);
  background-color: rgba(255, 187, 0, 0.1);
  transform: translateY(-2px);
}

.contacts {
  display: flex;
  gap: 1.5rem;
  font-size: 13px;
  color: hsl(0, 0%, 30%);
  font-weight: 500;
  position: relative;
}

.contact-line {
  display: block;
  height: 100%;
  left: 42%;
  position: absolute;
  width: 0.9px;
  background-color: hsl(0, 0%, 75%);
}

.footer-line {
  display: block;
  border: 1px solid hsl(0, 0%, 75%);
  margin-bottom: 2rem;
}

.footer-socials {
  width: 55%;
  margin-left: auto;
  color: hsl(0, 0%, 75%);
  display: flex;
  justify-content: space-between;
}

.footer-socials p {
  font-size: 13px;
  color: hsl(0, 0%, 30%);
}
.socials {
  display: flex;
  gap: 0.5rem;
  color: hsl(0, 0%, 50%);
  align-items: center;
}

.socials i {
  font-size: 15px;
  padding: 7px 7.7px;
  border-radius: 50%;
  transition: 0.3s;
}

.socials i:hover {
  cursor: pointer;
  color: #ffff;
  background-color: var(--secondary-color);
}

/* screen size 991px */
@media (max-width: 991px) {
  .footer-wrapper {
    width: 85%;
    margin: auto;
    padding: 4rem 0 3rem;
    font-family: "Poppins", "serif";
  }

  .header-container {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;
    position: relative;
    padding: 0.5rem 0;
  }
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
  }

  .header h3 {
    font-size: 25px;
    color: hsl(0, 0%, 26%);
  }

  .header img {
    width: 27px;
    position: absolute;
    top: -40%;
    right: -12%;
  }

  .footer-star {
    position: absolute;
    top: -30%;
    left: 60%;
    width: 45px;
  }

  .footer-star img {
    width: 100%;
  }

  .header-container a {
    padding: 12px 35px;
    background-color: var(--secondary-color);
    color: #ffff;
    border-radius: 20px;
    font-size: 12.5px;
    text-decoration: none;
  }

  .footer-nav {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 1rem;
  }

  .footer-nav ul {
    width: 40%;
    display: none;
    justify-content: space-between;
  }

  .footer-nav ul a,
  li {
    font-size: 14px;
    font-weight: 500;
    list-style: none;
    text-decoration: none;
    color: hsl(0, 0%, 30%);
  }

  .contacts {
    display: flex;
    gap: 2rem;
    font-size: 14px;
    color: hsl(0, 0%, 30%);
    font-weight: 500;
    position: relative;
  }

  .phone {
    display: flex;
    gap: 0.5rem;
  }

  .mail {
    display: flex;
    gap: 0.5rem;
  }
  .contact-line {
    display: block;
    height: 100%;
    left: 42%;
    position: absolute;
    width: 0.9px;
    background-color: hsl(0, 0%, 75%);
  }

  .footer-line {
    display: block;
    border: 0.5px solid hsl(0, 0%, 75%);
    margin-bottom: 2rem;
  }
  .footer-socials {
    width: 55%;
    margin-left: auto;
    color: hsl(0, 0%, 75%);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .footer-socials p {
    font-size: 13.5px;
    color: hsl(0, 0%, 30%);
  }
  .socials {
    display: flex;
    gap: 0.3rem;
    color: hsl(0, 0%, 50%);
    align-items: center;
  }

  .socials i {
    font-size: 16.5px;
    padding: 7px 7.7px;
    border-radius: 50%;
    transition: 0.3s;
  }

  .socials i:hover {
    cursor: pointer;
    color: #ffff;
    background-color: var(--secondary-color);
  }
}

/* screen size 768px */
@media (max-width: 768px) {
  .footer-wrapper {
    width: 85%;
    margin: auto;
    padding: 4rem 0 3rem;
    font-family: "Poppins", "serif";
  }

  .header-container {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 1rem;
    margin-bottom: 2rem;
    position: relative;
    padding: 0.5rem 0;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
  }

  .header h3 {
    font-size: 25px;
    color: hsl(0, 0%, 26%);
  }

  .header img {
    width: 27px;
    position: absolute;
    top: -40%;
    right: -12%;
  }

  .footer-star {
    position: absolute;
    top: 30%;
    left: 80%;
    width: 45px;
  }

  .footer-star img {
    width: 100%;
  }

  .header-container a {
    padding: 11px 33px;
    background-color: var(--secondary-color);
    color: #ffff;
    border-radius: 20px;
    font-size: 13.5px;
    text-decoration: none;
  }

  .footer-nav {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 1rem;
  }

  .footer-nav ul {
    width: 40%;
    display: none;
    justify-content: space-between;
  }

  .footer-nav ul a,
  li {
    font-size: 15px;
    font-weight: 500;
    list-style: none;
    text-decoration: none;
    color: hsl(0, 0%, 30%);
  }

  .contacts {
    display: flex;
    gap: 2rem;
    font-size: 14.5px;
    color: hsl(0, 0%, 30%);
    font-weight: 500;
    position: relative;
  }

  .phone {
    display: flex;
    gap: 0.5rem;
  }

  .mail {
    display: flex;
    gap: 0.5rem;
  }
  .contact-line {
    display: block;
    height: 100%;
    left: 42%;
    position: absolute;
    width: 0.9px;
    background-color: hsl(0, 0%, 75%);
  }

  .footer-line {
    display: block;
    border: 0.5px solid hsl(0, 0%, 75%);
    margin-bottom: 2rem;
  }
  .footer-socials {
    width: 65%;
    margin-left: auto;
    color: hsl(0, 0%, 75%);
    display: flex;
    justify-content: space-between;
  }

  .footer-socials p {
    font-size: 14px;
    color: hsl(0, 0%, 30%);
  }
  .socials {
    display: flex;
    gap: 0.3rem;
    color: hsl(0, 0%, 50%);
    align-items: center;
  }

  .socials i {
    font-size: 17px;
    padding: 7px 7.7px;
    border-radius: 50%;
    transition: 0.3s;
  }

  .socials i:hover {
    cursor: pointer;
    color: #ffff;
    background-color: var(--secondary-color);
  }

  .scroll-to-top {
    position: fixed;
    top: 85%;
    right: 20px;
    width: 50px;
    height: 50px;
    z-index: 1000;
  }

  .scroll-to-top i {
    font-size: 1.3rem;
  }
}

/* screen size 575px */
@media (max-width: 575px) {
  .footer-wrapper {
    width: 90%;
    margin: auto;
    padding: 4rem 0 3rem;
    font-family: "Poppins", "serif";
  }

  .header-container {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 2.3rem;
    margin-bottom: 2.5rem;
    position: relative;
    padding: 0.5rem 0;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
  }

  .header h3 {
    font-size: 25px;
    color: hsl(0, 0%, 26%);
  }

  .header img {
    width: 27px;
    position: absolute;
    top: -65%;
    right: -12%;
  }

  .footer-star {
    position: absolute;
    top: 50%;
    left: 70%;
    width: 45px;
  }

  .footer-star img {
    width: 100%;
  }

  .header-container a {
    padding: 11px 33px;
    background-color: var(--secondary-color);
    color: #ffff;
    border-radius: 20px;
    font-size: 14px;
    text-decoration: none;
  }

  .footer-nav {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 1rem;
  }

  .footer-nav ul {
    width: 40%;
    display: none;
    justify-content: space-between;
  }

  .footer-nav ul a,
  li {
    font-size: 15px;
    font-weight: 500;
    list-style: none;
    text-decoration: none;
    color: hsl(0, 0%, 30%);
  }

  .contacts {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    font-size: 14.5px;
    color: hsl(0, 0%, 30%);
    font-weight: 500;
    position: relative;
  }

  .phone {
    display: flex;
    gap: 0.5rem;
  }

  .mail {
    display: flex;
    gap: 0.5rem;
  }
  .contact-line {
    display: block;
    height: 100%;
    left: 42%;
    position: absolute;
    width: 0.9px;
    background-color: hsl(0, 0%, 75%);
  }

  .footer-line {
    display: block;
    border: 0.5px solid hsl(0, 0%, 75%);
    margin-bottom: 2rem;
  }
  .footer-socials {
    width: 100%;
    margin-left: auto;
    color: hsl(0, 0%, 75%);
    display: flex;
    justify-content: space-between;
  }

  .footer-socials p {
    font-size: 14px;
    color: hsl(0, 0%, 30%);
  }
  .socials {
    display: flex;
    gap: 0.3rem;
    color: hsl(0, 0%, 50%);
    align-items: center;
  }

  .socials i {
    font-size: 17px;
    padding: 7px 7.7px;
    border-radius: 50%;
    transition: 0.3s;
  }

  .socials i:hover {
    cursor: pointer;
    color: #ffff;
    background-color: var(--secondary-color);
  }
}

/* screen size 430px */
@media (max-width: 430px) {
  .footer-wrapper {
    width: 90%;
    margin: auto;
    padding: 4rem 0 3rem;
    font-family: "Poppins", "serif";
  }

  .header-container {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 2.3rem;
    margin-bottom: 2.5rem;
    position: relative;
    padding: 0.5rem 0;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
  }

  .header h3 {
    font-size: 23px;
    color: hsl(0, 0%, 26%);
  }

  .header img {
    width: 27px;
    position: absolute;
    top: -65%;
    right: -12%;
  }

  .footer-star {
    position: absolute;
    top: 50%;
    left: 70%;
    width: 45px;
  }

  .footer-star img {
    width: 100%;
  }

  .header-container a {
    padding: 11px 33px;
    background-color: var(--secondary-color);
    color: #ffff;
    border-radius: 20px;
    font-size: 14px;
    text-decoration: none;
  }

  .footer-nav {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 1rem;
  }

  .footer-nav ul {
    width: 40%;
    display: none;
    justify-content: space-between;
  }

  .footer-nav ul a,
  li {
    font-size: 15px;
    font-weight: 500;
    list-style: none;
    text-decoration: none;
    color: hsl(0, 0%, 30%);
  }

  .contacts {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    font-size: 14.5px;
    color: hsl(0, 0%, 30%);
    font-weight: 500;
    position: relative;
  }

  .phone {
    display: flex;
    gap: 0.5rem;
  }

  .mail {
    display: flex;
    gap: 0.5rem;
  }
  .contact-line {
    display: block;
    height: 100%;
    left: 42%;
    position: absolute;
    width: 0.9px;
    background-color: hsl(0, 0%, 75%);
  }

  .footer-line {
    display: block;
    border: 0.5px solid hsl(0, 0%, 75%);
    margin-bottom: 2rem;
  }
  .footer-socials {
    width: 100%;
    margin-left: auto;
    color: hsl(0, 0%, 75%);
    display: flex;
    justify-content: space-between;
  }

  .footer-socials p {
    font-size: 14px;
    color: hsl(0, 0%, 30%);
  }
  .socials {
    display: flex;
    gap: 0.3rem;
    color: hsl(0, 0%, 50%);
    align-items: center;
  }

  .socials i {
    font-size: 18px;
    padding: 7px 7.7px;
    border-radius: 50%;
    transition: 0.3s;
  }

  .socials i:hover {
    cursor: pointer;
    color: #ffff;
    background-color: var(--secondary-color);
  }
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

/* Fade animation */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

/* Responsive styles */
@media (max-width: 480px) {
  .scroll-to-top {
    bottom: 90px;
    right: 15px;
    width: 45px;
    height: 45px;
    padding: 8px;
  }
}
</style>