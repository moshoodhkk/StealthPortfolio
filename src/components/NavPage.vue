<template>
  <div class="nav-wrapper">
    <div class="hero-wrapper">
      <header>
        <div class="logo"><img src="../assets/logo.png" alt="logo" /></div>
        <nav>
          <a href="#home" class="home" @click.prevent="scrollToSection('home')"
            >Home</a
          >
          <a
            href="#about"
            class="about"
            @click.prevent="scrollToSection('about')"
            >About</a
          >
          <a
            href="#projects"
            class="work"
            @click.prevent="scrollToSection('projects')"
            >Projects</a
          >
          <a
            href="#experience"
            class="experience"
            @click.prevent="scrollToSection('experience')"
            >Experience</a
          >
          <a
            href="#reviews"
            class="reviews"
            @click.prevent="scrollToSection('reviews')"
            >Reviews</a
          >
        </nav>
        <button class="nav-btn" @click="scrollToSection('contact')">
          Contact
        </button>
        <button
          class="nav-toggle"
          @click="toggleFunc"
          :class="{ 'is-active': isActive }"
          aria-label="Menu"
          aria-expanded="false"
        >
          <div class="hamburger-box">
            <span class="hamburger-inner"></span>
          </div>
        </button>
      </header>
    </div>
    <div
      class="overlay"
      :class="{ active: isActive }"
      @click="toggleFunc"
    ></div>
    <div class="toggle-popUp" :class="{ 'active-popup': isActive }">
      <a href="#home" @click.prevent="scrollToSection('home')">Home</a>
      <a href="#about" @click.prevent="scrollToSection('about')">About</a>
      <a href="#projects" @click.prevent="scrollToSection('projects')"
        >Projects</a
      >
      <a href="#experience" @click.prevent="scrollToSection('experience')"
        >Experience</a
      >
      <a href="#reviews" @click.prevent="scrollToSection('reviews')">Review</a>
      <a
        href="#contact"
        class="contact-mb"
        @click.prevent="scrollToSection('contact')"
        >Contact</a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "NavPage",
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    toggleFunc() {
      this.isActive = !this.isActive;
      if (this.isActive) {
        document.body.style.overflow = "hidden";
        document.body.style.position = "fixed";
        document.body.style.width = "100%";
        document.body.style.height = "100%";
      } else {
        document.body.style.overflow = "";
        document.body.style.position = "";
        document.body.style.width = "";
        document.body.style.height = "";
      }
    },
    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        this.isActive = false;
        document.body.style.overflow = "";
        document.body.style.position = "";
        document.body.style.width = "";
        document.body.style.height = "";
      }
    },
  },
};
</script>

<style scoped>
.hero-wrapper {
  width: 85%;
  margin: 0 auto 1.8rem;
}

header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.2rem 0 0.7rem;
}

.logo {
  width: 85px;
  height: 53px;
}

.logo img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

nav {
  display: flex;
  gap: 2rem;
}
nav a:first-child {
  color: hsl(39, 97%, 43%);
}

nav a {
  position: relative;
  text-decoration: none;
  color: hsl(0 0% 10%);
  font-family: "Inter", "serif";
  font-size: 15px;
  font-weight: 450;
  transition: all 0.3s ease;
  padding: 5px 10px;
  border-radius: 5px;
}

nav a:not(:first-child):hover {
  color: hsl(39, 97%, 43%);
  background-color: rgba(255, 187, 0, 0.1);
  transform: translateY(-2px);
}

nav a:first-child {
  color: hsl(39, 97%, 43%);
  background-color: rgba(255, 187, 0, 0.1);
}

.nav-btn {
  padding: 12px 27px;
  background-color: transparent;
  border: 1.3px solid black;
  border-radius: 20px;
  cursor: pointer;
  transition: 0.4s ease-in;
}

.nav-btn:hover {
  background-color: hsl(0 0% 10%);
  color: #ffff;
}

.nav-toggle {
  z-index: 1001;
  width: 48px;
  height: 48px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  display: none;
  position: relative;
  transition: all 0.4s ease;
  border-radius: 50%;
}

.toggle-popUp {
  display: none;
}

.overlay {
  display: none;
}

.close-toggle {
  display: none;
}

.toggle-popUp a:not(.contact-mb) {
  text-decoration: none;
  color: hsl(0 0% 10%);
  font-size: 19px;
  transition: color 0.3s ease;
}

.toggle-popUp a:first-child:not(.contact-mb) {
  color: hsl(39, 97%, 43%);
}

.toggle-popUp a:not(:first-child):not(.contact-mb):hover {
  color: hsl(39, 97%, 43%);
}

.contact-mb {
  display: block;
  padding: 10px 35px;
  background-color: transparent;
  border: 1.3px solid black;
  border-radius: 20px;
  cursor: pointer;
  transition: 0.3s ease;
  color: hsl(0 0% 10%);
  text-decoration: none !important;
}

.contact-mb:hover {
  background-color: hsl(0 0% 10%);
  color: #ffff;
  text-decoration: none;
}

.contact-mb:focus {
  text-decoration: none;
  outline: none;
}

/* Responsiveness */

@media (max-width: 991px) {
  .hero-wrapper {
    width: 85%;
    margin: 0 auto 2rem;
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.8rem 0;
  }

  .logo {
    font-family: "Inter", "serif";
    font-weight: 700;
    font-size: 22px;
    letter-spacing: 0.1rem;
    background: linear-gradient(
      to bottom right,
      transparent,
      hsl(39, 82%, 62%),
      hsl(39, 87%, 49%)
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  nav {
    display: flex;
    gap: 2rem;
  }
  nav a:first-child {
    color: hsl(39, 97%, 43%);
  }

  nav a {
    text-decoration: none;
    color: hsl(0 0% 10%);
    font-family: "Inter", "serif";
    font-size: 15px;
    font-weight: 450;
    transition: color 0.3s ease;
  }

  nav a:not(:first-child):hover {
    color: hsl(39, 97%, 43%);
  }

  nav a:first-child {
    color: hsl(39, 97%, 43%);
  }

  .nav-btn {
    padding: 10px 25px;
    background-color: transparent;
    border: 1.3px solid black;
    border-radius: 20px;
    cursor: pointer;
  }

  nav a:not(:first-child)::before {
    content: "";
    position: absolute;
    width: 0;
    height: 1.5px;
    background-color: hsl(39, 97%, 43%);
    bottom: -2px;
    left: 0;
    transition: width 0.3s ease;
  }

  nav a:not(:first-child):hover::before {
    width: 100%;
  }

  nav a:first-child {
    color: hsl(39, 97%, 43%);
    position: relative;
  }

  nav a:first-child::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 1.5px;
    background-color: hsl(39, 97%, 43%);
    bottom: -2px;
    left: 0;
  }
}

/* screen size 768px */
@media (max-width: 768px) {
  .hero-wrapper {
    width: 90%;
    margin: 0 auto 1.7rem;
    position: relative;
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 0;
  }

  .logo {
    width: 120px;
    height: 75px;
  }

  nav {
    display: none;
  }

  .nav-btn {
    display: none;
  }

  .nav-toggle {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
  }

  .toggle-popUp {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2.5rem;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
    min-height: 400px;
    background: #ffffff;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    border-radius: 0;
    padding: 5rem 2rem;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.4s ease, visibility 0.4s ease;
    z-index: 1000;
  }

  .toggle-popUp.active-popup {
    opacity: 1;
    visibility: visible;
  }

  .toggle-popUp a {
    font-size: 1.2rem;
    color: hsl(0 0% 10%);
    font-weight: 500;
    text-decoration: none;
    transition: all 0.3s ease;
    opacity: 0;
    transform: translateY(10px);
  }

  .toggle-popUp.active-popup a {
    opacity: 1;
    transform: translateY(0);
  }

  .toggle-popUp a:nth-child(1) {
    transition-delay: 0.1s;
  }
  .toggle-popUp a:nth-child(2) {
    transition-delay: 0.15s;
  }
  .toggle-popUp a:nth-child(3) {
    transition-delay: 0.2s;
  }
  .toggle-popUp a:nth-child(4) {
    transition-delay: 0.25s;
  }
  .toggle-popUp a:nth-child(5) {
    transition-delay: 0.3s;
  }
  .toggle-popUp a:nth-child(6) {
    transition-delay: 0.35s;
  }

  .toggle-popUp a:hover {
    color: var(--secondary-color);
  }

  .contact-mb {
    display: block;
    padding: 12px 35px;
    background-color: transparent;
    border: 1.3px solid black;
    border-radius: 20px;
    cursor: pointer;
    transition: 0.3s ease;
    color: hsl(0 0% 10%);
    text-decoration: none !important;
    opacity: 0;
    transform: translateY(10px);
    transition-delay: 0.4s;
  }

  .toggle-popUp.active-popup .contact-mb {
    opacity: 1;
    transform: translateY(0);
  }

  .contact-mb:hover {
    background-color: hsl(0 0% 10%);
    color: #ffff;
  }

  .overlay {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(3px);
    z-index: 999;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease, visibility 0.3s ease;
  }

  .overlay.active {
    opacity: 1;
    visibility: visible;
    display: block;
  }
}

/* screen size 575px */
@media (max-width: 575px) {
  .hero-wrapper {
    width: 90%;
    margin: 0 auto 1.5rem;
    position: relative;
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.4rem 0;
  }

  .logo {
    width: 110px;
    height: 70px;
  }

  nav {
    display: none;
  }

  .nav-btn {
    display: none;
  }

  .contact-mb {
    display: block;
    padding: 10px 35px;
    background-color: transparent;
    border: 1.3px solid black;
    border-radius: 20px;
    cursor: pointer;
    transition: 0.3s ease;
  }

  .contact-mb:hover {
    background-color: hsl(0 0% 10%);
    color: #ffff;
  }

  .nav-toggle {
    width: 36px;
    height: 36px;
  }

  .toggle-wrapper {
    display: flex;
    flex-direction: column;
    width: 55%;
    height: 100%;
    gap: 0.45rem;
  }
  .toggle-line1 {
    display: block;
    width: 55%;
    height: 3px;
    border-radius: 15px;
    background-color: #000;
  }
  .toggle-line2 {
    display: block;
    width: 100%;
    height: 3px;
    border-radius: 15px;
    background-color: #000;
  }

  .toggle-line3 {
    display: block;
    width: 55%;
    margin-left: auto;
    height: 3px;
    border-radius: 15px;
    background-color: #000;
  }

  .toggle-popUp {
    width: 100%;
    padding: 4rem 0 30px;
  }

  .active-popup {
    transform: translateY(0%);
  }

  .toggle-popUp a {
    text-decoration: none;
    color: hsl(0 0% 10%);
    font-size: 1.1rem;
  }

  .close-toggle {
    width: 38px;
    font-size: 33px;
    color: hsl(0 0% 10%);
    position: absolute;
    right: 10%;
    top: 10%;
    cursor: pointer;
  }

  .toggle-popUp a:not(.contact-mb) {
    font-size: 1.1rem;
  }
}

/* screen size 430px */
@media (max-width: 430px) {
  .hero-wrapper {
    width: 90%;
    margin: 0 auto 1.5rem;
    position: relative;
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.4rem 0;
  }

  .logo {
    width: 105px;
    height: 65px;
  }

  nav {
    display: none;
  }

  .nav-btn {
    display: none;
  }

  .contact-mb {
    display: block;
    padding: 10px 37px;
    background-color: transparent;
    border: 1.3px solid black;
    border-radius: 20px;
    cursor: pointer;
    transition: 0.3s ease;
  }

  .contact-mb:hover {
    background-color: hsl(0 0% 10%);
    color: #ffff;
  }

  .nav-toggle {
    cursor: pointer;
    width: 60px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .toggle-wrapper {
    display: flex;
    flex-direction: column;
    width: 55%;
    height: 100%;
    gap: 0.45rem;
  }
  .toggle-line1 {
    display: block;
    width: 55%;
    height: 3px;
    border-radius: 15px;
    background-color: #000;
  }
  .toggle-line2 {
    display: block;
    width: 100%;
    height: 3px;
    border-radius: 15px;
    background-color: #000;
  }

  .toggle-line3 {
    display: block;
    width: 55%;
    margin-left: auto;
    height: 3px;
    border-radius: 15px;
    background-color: #000;
  }

  .toggle-popUp {
    width: 100%;
    padding: 4rem 0 30px;
  }

  .active-popup {
    transform: translateY(0%);
  }

  .toggle-popUp a {
    text-decoration: none;
    color: hsl(0 0% 10%);
    font-size: 1.1rem;
  }

  .close-toggle {
    width: 35px;
    font-size: 30px;
    color: hsl(0 0% 10%);
    position: absolute;
    right: 10%;
    top: 10%;
    cursor: pointer;
  }

  .toggle-popUp a:not(.contact-mb) {
    font-size: 1.1rem;
  }
}

/* Add router-link active class styling */
.router-link-active {
  color: hsl(39, 97%, 43%);
  background-color: rgba(255, 187, 0, 0.1);
}

.router-link-active:not(:first-child) {
  color: hsl(39, 97%, 43%);
  background-color: rgba(255, 187, 0, 0.1);
  transform: translateY(-2px);
}

.hamburger-box {
  width: 28px;
  height: 20px;
  display: inline-block;
  position: relative;
}

.hamburger-inner,
.hamburger-inner::before,
.hamburger-inner::after {
  height: 2px;
  background-color: #333;
  position: absolute;
  border-radius: 4px;
  transition: transform 0.4s ease, width 0.3s ease;
}

.hamburger-inner {
  width: 28px;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
}

.hamburger-inner::before {
  content: "";
  width: 14px;
  top: -8px;
  left: 0;
}

.hamburger-inner::after {
  content: "";
  width: 14px;
  bottom: -8px;
  right: 0;
  left: auto;
}

/* Active state - X transformation */
.nav-toggle.is-active .hamburger-inner {
  transform: translateY(-50%) rotate(45deg);
  background-color: var(--secondary-color);
}

.nav-toggle.is-active .hamburger-inner::before {
  width: 28px;
  top: 0;
  opacity: 0;
  transform: rotate(0) translateY(-50%);
}

.nav-toggle.is-active .hamburger-inner::after {
  width: 28px;
  bottom: 0;
  transform: rotate(-90deg);
  background-color: var(--secondary-color);
}

@media (max-width: 768px) {
  .nav-toggle {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
  }

  /* Add aria-label for accessibility */
  .nav-toggle[aria-label="Menu"] {
    position: relative;
  }

  /* High contrast mode support */
  @media (forced-colors: active) {
    .hamburger-inner,
    .hamburger-inner::before,
    .hamburger-inner::after {
      background-color: CanvasText;
    }
  }
}

/* Add smooth transition for the entire toggle */
.nav-toggle,
.nav-toggle *,
.nav-toggle *::before,
.nav-toggle *::after {
  transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
</style>