<template>
  <div class="hero-wrapper">
    <div class="hero-content">
      <img class="double-arrow" src="../assets/asset1.png" alt="" />
      <div class="profession">
        <h5>
          Hello, I'm StealthDev <br />
          a {{ displayedText }}
        </h5>
        <p>
          A committed Frontend Developer, passionate about crafting digital
          experiences that are both visually stunning and flawlessly functional.
        </p>
        <div class="hero-buton">
          <button @click="scrollToContact"><span>Let's Work</span></button>
        </div>
      </div>
      <div class="profession-image">
        <img class="pencil-draw" src="../assets/asset2.png" alt="" />
        <div class="circle-wrapper">
          <img class="circle-content" src="../assets/asset4.png" alt="" />
          <img class="profile-image" src="../assets/hero_profile.png" alt="" />
        </div>
        <div class="profession-details">
          <div class="profession-years">
            <h4>2</h4>
            <p>Years of Experience</p>
          </div>
          <div class="profession-client">
            <h4>30%</h4>
            <p>Client on Worldwide</p>
          </div>
          <div class="profession-client">
            <h4>69</h4>
            <p>Project Done</p>
          </div>
          <div class="profession-rating">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <p>5 Star Rating (1k + Review)</p>
          </div>
        </div>
      </div>
      <a
        href="#footer"
        @click.prevent="scrollToFooter"
        class="scroll-to-bottom"
        aria-label="Scroll to footer"
      >
        <i class="bi bi-arrow-down"></i>
      </a>
    </div>

    <div class="brands-wrapper">
      <div class="brands-container">
        <div class="brands-content">
          <img src="../assets/asset7.png" class="brand brand1" alt="" />
          <img src="../assets/asset8.png" class="brand brand2" alt="" />
          <img src="../assets/asset9.png" class="brand brand3" alt="" />
          <img src="../assets/asset10.png" class="brand brand4" alt="" />
          <img src="../assets/asset11.png" class="brand brand5" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeroContentVue",

  data() {
    return {
      texts: ["Web Developer", "Designer"],
      currentText: "",
      textIndex: 0,
      typingSpeed: 100,
    };
  },
  computed: {
    displayedText() {
      return this.currentText;
    },
  },
  methods: {
    typeText() {
      const currentFullText = this.texts[this.textIndex];
      if (this.currentText.length < currentFullText.length) {
        this.currentText += currentFullText.charAt(this.currentText.length);
        setTimeout(this.typeText, this.typingSpeed);
      } else {
        setTimeout(() => {
          this.currentText = "";
          this.textIndex = (this.textIndex + 1) % this.texts.length;
          setTimeout(this.typeText, this.typingSpeed);
        }, 2000);
      }
    },
    scrollToFooter() {
      const footer = document.querySelector("#footer");
      if (footer) {
        footer.scrollIntoView({ behavior: "smooth" });
      }
    },
    scrollToContact() {
      const contact = document.querySelector("#contact");
      if (contact) {
        contact.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
  mounted() {
    this.typeText();
  },
};
</script>

<style scoped>
.hero-content {
  padding: 1rem 0;
  display: flex;
  width: 85%;
  margin: 0 auto;
  position: relative;
  justify-content: space-between;
}
.double-arrow {
  position: absolute;
  width: 60px;
  left: 40%;
  top: 5px;
  transform: rotate(15deg);
}
.pencil-draw {
  position: absolute;
  width: 100px;
  left: -5%;
  bottom: 30px;
  z-index: 200;
}

.profession {
  width: 45%;
  margin-top: 1.5rem;
}

.profession h5 {
  line-height: 1.7;
  width: 100%;
  max-width: 380px;
  height: 100px;
  font-size: 30px;
  margin-bottom: 0.5rem;
}

.profession p {
  line-height: 1.5;
  width: 100%;
  max-width: 650px;
  font-size: 15px;
  color: hsl(0 0% 20%);
  margin-bottom: 2rem;
}
.hero-buton {
  display: flex;
  align-items: center;
  gap: 20px;
}

.hero-buton button {
  padding: 13px 25px;
  background: hsl(0 0% 10%);
  color: #ffff;
  border-radius: 25px;
  outline: none;
  border: none;
  cursor: pointer;
  font-size: 13.5px;
  transition: all 0.3s ease;
}

.hero-buton button span {
  display: inline-block;
  transition: transform 0.3s ease;
}

.hero-buton button:hover {
  background: hsl(0 0% 15%);
  transform: scale(1.05);
  box-shadow: 0 0 30px 15px rgba(255, 255, 255, 0.6);
}

.hero-buton button:hover span {
  animation: bounce 0.6s ease 1;
}

@keyframes bounce {
  0% {
    transform: translateY(0);
  }
  33% {
    transform: translateY(-5px);
  }
  66% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-2.5px);
  }
}

.hero-buton button:hover img {
  width: 40px;
  cursor: pointer;
}

.profession-image {
  position: relative;
  width: 50%;
  height: auto;
  display: flex;
  justify-content: flex-end;
  margin-left: auto;
}

.circle-wrapper {
  position: relative;
  align-self: center;
  width: 67%;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  margin-bottom: 10px;
  overflow: hidden;
  z-index: 20;
}

.circle-wrapper::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 180px;
  max-height: 200px;
  bottom: 0;
  left: 0;
  background-color: var(--secondary-color);
  z-index: 10;
}

.circle-content {
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 2;
}

.profile-image {
  position: absolute;
  z-index: 100;
  width: 100%;
  height: auto;
  /* bottom: -15px; */
  /* left: -9%; */
}

.profession-details {
  text-align: right;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  align-self: end;
  justify-content: end;
  width: 30%;
}

.profession-details h4 {
  font-size: 21px;
  color: hsl(37, 7%, 23%);
  margin-bottom: 0.4rem;
}

.profession-details p {
  font-size: 13px;
  color: hsl(37, 7%, 40%);
}

.profession-rating i {
  color: var(--secondary-color);
  font-size: 13px;
  margin: 0 0.2rem 0.4rem 0;
}

/* Scroll to bottom button styles */
.scroll-to-bottom {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: hsl(0 0% 10%);
  border: none;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  z-index: 1000;
  text-decoration: none;
}

.scroll-to-bottom i {
  font-size: 1.2rem;
  transition: transform 0.3s ease;
}

.scroll-to-bottom:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
  background-color: hsl(0 0% 15%);
}

.scroll-to-bottom:hover i {
  transform: translateY(2px);
}

/* Remove old scroll icon styles */
.scroll-icon {
  display: none;
}

/* Responsive styles for scroll button */
@media (max-width: 768px) {
  .scroll-to-bottom {
    bottom: -10px;
    width: 40px;
    height: 40px;
  }

  .scroll-to-bottom i {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .scroll-to-bottom {
    display: none;
  }
}

/* brands */
.brands-wrapper {
  margin-top: 3rem;
  background-color: var(--secondary-color);
  padding: 20px 0;
  height: 90px;
}

.brands-container {
  position: relative;
  width: 85%;
  margin: 0 auto;
  height: 100%;
  overflow: hidden;
  padding: 2px;
}

.brands-content {
  width: 100%;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  animation: brand 20s linear infinite;
}

.brand {
  width: 100px;
}

.brand1 {
  width: 120px;
}

.brand5 {
  width: 120px;
}

@keyframes brand {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(-100%);
  }
}

/* screen size 991px  */
@media (max-width: 991px) {
  .hero-content {
    display: flex;
    width: 85%;
    margin: 0 auto;
    position: relative;
    justify-content: space-between;
  }
  .double-arrow {
    position: absolute;
    width: 45px;
    left: 45%;
    top: 5px;
    transform: rotate(15deg);
  }
  .pencil-draw {
    position: absolute;
    width: 3.8rem;
    left: -7%;
    bottom: 20%;
    z-index: 200;
  }

  .profession {
    width: 45%;
    margin-top: 3rem;
  }

  .profession h5 {
    line-height: 1.5;
    width: 100%;
    max-width: 380px;
    height: 90px;
    font-size: 25px;
    margin-bottom: 0.2rem;
  }

  .profession p {
    line-height: 1.5;
    width: 100%;
    max-width: 650px;
    font-size: 13px;
    color: hsl(0 0% 20%);
    margin-bottom: 1rem;
  }
  .hero-buton {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .hero-buton button {
    padding: 11px 23px;
    background: hsl(0 0% 10%);
    color: #ffff;
    border-radius: 25px;
    outline: none;
    border: none;
    cursor: pointer;
    font-size: 12.5px;
  }

  .hero-buton img {
    width: 40px;
    cursor: pointer;
  }

  .profession-image {
    position: relative;
    width: 50%;
    height: auto;
    display: flex;
    justify-content: flex-end;
    margin-left: auto;
  }

  .circle-wrapper {
    position: relative;
    align-self: start;
    width: 85%;
    aspect-ratio: 1 / 1;
    border-radius: 50%;
    margin-bottom: 10px;
    margin-top: 2rem;
    overflow: hidden;
    z-index: 20;
  }

  .circle {
    width: 100%;
  }

  .circle-wrapper::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 130px;
    max-height: 180px;
    bottom: 0;
    left: 0;
    background-color: var(--secondary-color);
    z-index: 10;
  }

  .circle-content {
    position: absolute;
    width: 100%;
    left: 0;
    top: 0;
    z-index: 2;
  }

  .profile-image {
    position: absolute;
    z-index: 100;
    width: 115%;
    height: auto;
    bottom: -15px;
    left: -9%;
  }

  .profession-details {
    text-align: right;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    justify-content: start;
    width: 35%;
    margin-top: 3rem;
  }

  .profession-details h4 {
    font-size: 18px;
    color: hsl(37, 7%, 23%);
    margin-bottom: 0.4rem;
  }

  .profession-details p {
    font-size: 13px;
    color: hsl(37, 7%, 40%);
  }

  .profession-rating i {
    color: var(--secondary-color);
    font-size: 12px;
    margin: 0 0.2rem 0.4rem 0;
  }

  /* brands */
  .brands-wrapper {
    margin-top: 3rem;
    background-color: var(--secondary-color);
    padding: 20px 0;
    height: 90px;
  }

  .brands-container {
    position: relative;
    width: 85%;
    margin: 0 auto;
    height: 100%;
    overflow: hidden;
    padding: 2px;
  }

  .brands-content {
    width: 100%;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    animation: brand 20s linear infinite;
  }

  .brand {
    width: 100px;
  }

  .brand1 {
    width: 120px;
  }

  .brand5 {
    width: 120px;
  }

  @keyframes brand {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(-100%);
    }
  }
}

/* screen size 768px */
@media (max-width: 768px) {
  .hero-content {
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: 0 auto;
    position: relative;
    justify-content: space-between;
  }
  .double-arrow {
    position: absolute;
    width: 45px;
    left: 70%;
    top: 35%;
    transform: rotate(90deg);
  }
  .pencil-draw {
    position: absolute;
    width: 4.5rem;
    left: 3%;
    bottom: 10%;
    z-index: 200;
  }

  .profession {
    width: 100%;
    margin-top: 0;
  }

  .profession h5 {
    line-height: 1.7;
    width: 100%;
    max-width: 450px;
    height: 100px;
    font-size: 28px;
    margin-bottom: 0.2rem;
  }

  .profession p {
    line-height: 1.5;
    width: 100%;
    max-width: 100%;
    font-size: 20px;
    color: hsl(0 0% 20%);
    margin-bottom: 2rem;
  }
  .hero-buton {
    display: flex;
    align-items: center;
    gap: 18px;
  }

  .hero-buton button {
    padding: 12px 22px;
    background: hsl(0 0% 10%);
    color: #ffff;
    border-radius: 25px;
    outline: none;
    border: none;
    cursor: pointer;
    font-size: 17px;
  }

  .hero-buton img {
    width: 34px;
    cursor: pointer;
  }

  .profession-image {
    position: relative;
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    margin-left: 0;
  }

  .circle-wrapper {
    position: relative;
    align-self: start;
    width: 50%;
    aspect-ratio: 1 / 1;
    border-radius: 50%;
    margin-bottom: 10px;
    margin-top: 2.5rem;
    overflow: hidden;
    z-index: 20;
  }

  .circle-wrapper::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 130px;
    max-height: 180px;
    bottom: 0;
    left: 0;
    background-color: var(--secondary-color);
    z-index: 10;
  }

  .circle-content {
    position: absolute;
    width: 100%;
    left: 0;
    top: 0;
    z-index: 2;
  }

  .profile-image {
    position: absolute;
    z-index: 100;
    width: 100%;
    height: auto;
    bottom: -35%;
    left: 0%;
  }

  .profession-details {
    text-align: right;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: center;
    width: 45%;
    margin-top: 3rem;
  }

  .profession-details h4 {
    font-size: 21px;
    color: hsl(37, 7%, 23%);
    margin-bottom: 0.4rem;
  }

  .profession-details p {
    font-size: 17px;
    color: hsl(37, 7%, 40%);
  }

  .profession-rating i {
    color: var(--secondary-color);
    font-size: 12px;
    margin: 0 0.2rem 0.4rem 0;
  }

  .scroll-icon {
    display: none;
  }

  /* brands */
  .brands-wrapper {
    margin-top: 3rem;
    background-color: var(--secondary-color);
    padding: 20px 0;
    height: 90px;
  }

  .brands-container {
    position: relative;
    width: 85%;
    margin: 0 auto;
    height: 100%;
    overflow: hidden;
    padding: 2px;
  }

  .brands-content {
    width: 100%;
    top: 0;
    display: flex;
    gap: 25px;
    align-items: center;
    position: absolute;
    animation: brand 20s linear infinite;
  }

  .brand {
    width: 85px;
  }

  .brand1 {
    width: 110px;
  }

  .brand5 {
    width: 110px;
  }

  @keyframes brand {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(-100%);
    }
  }
}

/* screen size 575px */
@media (max-width: 575px) {
  .hero-content {
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: 0 auto;
    position: relative;
    justify-content: space-between;
  }
  .double-arrow {
    position: absolute;
    width: 45px;
    left: 79%;
    top: 20%;
    transform: rotate(95deg);
  }
  .pencil-draw {
    position: absolute;
    width: 4rem;
    left: 15%;
    bottom: 56%;
    z-index: 200;
    display: none;
  }

  .profession {
    width: 100%;
    margin-top: 0;
  }

  .profession h5 {
    line-height: 1.5;
    width: 100%;
    max-width: 400px;
    height: 80px;
    font-size: 1.5rem;
    margin-top: 1.3rem;
    margin-bottom: 0rem;
  }

  .profession p {
    line-height: 1.5;
    width: 100%;
    max-width: 500px;
    font-size: 0.9rem;
    color: hsl(0 0% 20%);
    margin-bottom: 1.8rem 0 0;
  }
  .hero-buton {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .hero-buton button {
    padding: 10px 22px;
    background: hsl(0 0% 10%);
    color: #ffff;
    border-radius: 25px;
    outline: none;
    border: none;
    cursor: pointer;
    font-size: 13px;
  }

  .hero-buton img {
    width: 35px;
    cursor: pointer;
  }

  .profession-image {
    position: relative;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 0;
  }

  .circle-wrapper {
    position: relative;
    align-self: center;
    width: 80%;
    aspect-ratio: 1 / 1;
    border-radius: 50%;
    margin-bottom: 10px;
    margin-top: 2.5rem;
    overflow: hidden;
    z-index: 20;
  }

  .circle-wrapper::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 130px;
    max-height: 180px;
    bottom: 0;
    left: 0;
    background-color: var(--secondary-color);
    z-index: 10;
  }

  .circle-content {
    position: absolute;
    width: 100%;
    left: 0;
    top: 0;
    z-index: 2;
  }

  .profile-image {
    position: absolute;
    z-index: 100;
    width: 100%;
    height: auto;
    bottom: -35%;
    left: 0%;
  }

  .profession-details {
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 4rem;
    justify-content: center;
    width: 100%;
    margin-top: 3.5rem;
  }

  .profession-details h4 {
    font-size: 22px;
    color: hsl(37, 7%, 23%);
    margin-bottom: 0.4rem;
  }

  .profession-details p {
    font-size: 16px;
    color: hsl(37, 7%, 40%);
  }

  .profession-rating i {
    color: var(--secondary-color);
    font-size: 13px;
    margin: 0 0.2rem 0.4rem 0;
  }

  /* brands */
  .brands-wrapper {
    margin-top: 3rem;
    background-color: var(--secondary-color);
    padding: 20px 0;
    height: 90px;
  }

  .brands-container {
    position: relative;
    width: 100%;
    margin: 0 auto;
    height: 100%;
    overflow: hidden;
  }

  .brands-content {
    width: 100%;
    top: 0;
    display: flex;
    gap: 25px;
    align-items: center;
    position: absolute;
    animation: brand 30s linear infinite;
  }

  .brand {
    width: 80px;
  }

  .brand1 {
    width: 100px;
  }

  .brand5 {
    width: 100px;
  }

  @keyframes brand {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(-100%);
    }
  }
}

/* screen size 430px */
@media (max-width: 430px) {
  .hero-content {
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: 0 auto;
    position: relative;
    justify-content: space-between;
  }
  .double-arrow {
    position: absolute;
    width: 45px;
    left: 79%;
    top: 23%;
    transform: rotate(95deg);
  }
  .pencil-draw {
    position: absolute;
    width: 4rem;
    left: 15%;
    bottom: 56%;
    z-index: 200;
    display: none;
  }

  .profession {
    width: 100%;
    margin-top: 0;
  }

  .profession h5 {
    line-height: 1.5;
    width: 100%;
    max-width: 380px;
    height: 75px;
    font-size: 1.6rem;
    margin-top: 1.3rem;
    margin-bottom: 0.8rem;
  }

  .profession p {
    line-height: 1.5;
    width: 100%;
    max-width: 500px;
    font-size: 1.1rem;
    color: hsl(0 0% 20%);
    margin-bottom: 1.8rem 0 0;
  }
  .hero-buton {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .hero-buton button {
    padding: 13px 25px;
    background: hsl(0 0% 10%);
    color: #ffff;
    border-radius: 25px;
    outline: none;
    border: none;
    cursor: pointer;
    font-size: 15px;
  }

  .hero-buton img {
    width: 35px;
    cursor: pointer;
  }

  .profession-image {
    position: relative;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 0;
  }

  .circle-wrapper {
    position: relative;
    align-self: center;
    width: 85%;
    aspect-ratio: 1 / 1;
    border-radius: 50%;
    margin-bottom: 10px;
    margin-top: 2.5rem;
    overflow: hidden;
    z-index: 20;
  }

  .circle-wrapper::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 130px;
    max-height: 180px;
    bottom: 0;
    left: 0;
    background-color: var(--secondary-color);
    z-index: 10;
  }

  .circle-content {
    position: absolute;
    width: 100%;
    left: 0;
    top: 0;
    z-index: 2;
  }

  .profile-image {
    position: absolute;
    z-index: 100;
    width: 100%;
    height: auto;
    bottom: -35%;
    left: 0%;
  }

  .profession-details {
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 4rem;
    justify-content: center;
    width: 100%;
    margin-top: 3.5rem;
  }

  .profession-details h4 {
    font-size: 25px;
    color: hsl(37, 7%, 23%);
    margin-bottom: 0.4rem;
  }

  .profession-details p {
    font-size: 17px;
    color: hsl(37, 7%, 40%);
  }

  .profession-rating i {
    color: var(--secondary-color);
    font-size: 13px;
    margin: 0 0.2rem 0.4rem 0;
  }

  /* brands */
  .brands-wrapper {
    margin-top: 3rem;
    background-color: var(--secondary-color);
    padding: 20px 0;
    height: 90px;
  }

  .brands-container {
    position: relative;
    width: 100%;
    margin: 0 auto;
    height: 100%;
    overflow: hidden;
  }

  .brands-content {
    width: 100%;
    top: 0;
    display: flex;
    gap: 25px;
    align-items: center;
    position: absolute;
    animation: brand 30s linear infinite;
  }

  .brand {
    width: 80px;
  }

  .brand1 {
    width: 100px;
  }

  .brand5 {
    width: 100px;
  }

  @keyframes brand {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(-100%);
    }
  }
}
</style>