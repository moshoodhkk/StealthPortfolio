<template>
  <div class="reviewpage-wrapper">
    <img class="review-bg" src="../assets/asset17.png" alt="" />
    <div class="reviewpage-grid">
      <div class="items item1">
        <div class="item1-wrapper">
          <div class="item1-header">
            <div class="item1-header-text">
              <h2>Hear what they say about us?</h2>
              <img src="../assets/asset23.png" alt="" />
            </div>
          </div>
          <p class="item1-feedback">
            We love our client and our clients love us. see all feedback
          </p>
          <a href="" @click.prevent="toggleShowAll">{{
            showAll ? "See less feed back" : "See all feed back"
          }}</a>
        </div>
      </div>

      <!-- item2  -->
      <div
        class="items item2"
        v-for="(review, index) in displayedReviews"
        :key="index"
      >
        <div class="item2-wrapper">
          <div class="items-icon">
            <img src="../assets/asset24.png" alt="" />
          </div>
          <p class="feedback-content">
            {{ review.feedback }}
          </p>
          <div class="profile-rating">
            <div class="profile-wrapper">
              <div class="profile-img">
                <img :src="review.image" alt="" />
              </div>
              <div class="name-role">
                <h5>{{ review.name }}</h5>
                <p>{{ review.role }}</p>
              </div>
            </div>
            <!-- rating stars -->
            <div class="rating-star">
              <i class="bi bi-star-fill" v-for="icon in icons" :key="icon"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ReviewPageVue",
  data() {
    return {
      showAll: false,
      icons: 5,
      reviews: [
        {
          name: "Timileyin Samuel",
          image: require("../assets/asset25.png"),
          feedback: `He's creativity and attention to detail transformed our website into a visually stunning and user-friendly platform. His ability to understand our vision and bring it to life exceeded our expectations.`,
          role: "Customer",
        },
        {
          name: "Alatishe Omolayo",
          image: require("../assets/asset26.png"),
          feedback: `Working with Moshood was a game-changer! He transformed our ideas into a sleek, modern, and user-friendly website.`,
          role: "Customer",
        },
        {
          name: "Hameed Rauf",
          image: require("../assets/asset27.png"),
          feedback: `Professional, efficient, and innovative—Moshood delivered a stunning website that perfectly aligns with our brand.`,
          role: "Customer",
        },
        {
          name: "Balogun Ireayomide",
          image: require("../assets/asset28.png"),
          feedback: `Moshood's UI/UX design skills are incredible. He transformed our outdated website into a stunning, user-friendly platform. The design is clean and engaging.`,
          role: "Customer",
        },
        {
          name: "Abdulrahman Monsuro",
          image: require("../assets/asset29.png"),
          feedback: `Moshood is an exceptional developer! He built a fast, secure, and scalable web application for our company, exceeding our expectations.`,
          role: "Customer",
        },
      ],
    };
  },

  methods: {
    toggleShowAll(event) {
      event.preventDefault();
      this.showAll = !this.showAll;
    },
  },

  computed: {
    displayedReviews() {
      return this.showAll ? this.reviews : this.reviews.slice(0, 3);
    },
  },
};
</script>

<style scoped>
.reviewpage-wrapper {
  font-family: "Poppins", "serif";
  background-color: hsl(28, 71%, 97%);
  position: relative;
  overflow: hidden;
  padding: 4rem 0;
}

.review-bg {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.reviewpage-grid {
  width: 85%;
  margin: 0 auto;
  position: relative;
  z-index: 100;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: minmax(auto, max-content);
  gap: 3rem;
  height: 100%;
}

.item1 {
  padding: 1.8em;
  border-radius: 7px;
  padding-left: 0;
}

.item1-wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
}

.item1-header {
  display: flex;
  gap: 2rem;
  position: relative;
  align-items: center;
}
.item1-header img {
  width: 30px;
  align-self: start;
  position: absolute;
  right: -10%;
  top: -43%;
}
.item1-header h2 {
  line-height: 1.3;
  font-size: 1.7rem;
  margin-bottom: 0.5rem;
}

.item1-feedback {
  font-size: 14px;
  margin-bottom: 1.5rem;
}

.item1 a {
  padding: 10px 25px;
  font-size: 12px;
  text-transform: uppercase;
  text-decoration: none;
  color: #ffff;
  border-radius: 8px;
  background-color: var(--secondary-color);
}

.item2 {
  background-color: hsl(38, 92%, 88%);
  border-radius: 10px;
  position: relative;
  padding: 1.3rem;
  overflow: hidden;
  transition: box-shadow 0.3s ease;
}

.item2:hover {
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

.item2::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, hsl(39, 100%, 56%));
  transition: width 0.3s ease;
}

.item2::after {
  content: "";
  position: absolute;
  bottom: 0;
  right: 0;
  width: 2px;
  height: 0;
  background: linear-gradient(180deg, transparent, hsl(39, 100%, 56%));
  transition: height 0.3s ease 0.3s;
}

.item2:hover::before {
  width: 100%;
}

.item2:hover::after {
  height: 100%;
}

.item2-wrapper {
  padding: 0.5rem 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1rem;
}

.items-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  width: 25px;
  aspect-ratio: 1 / 1;
  background-color: var(--secondary-color);
  border-radius: 50%;
}

.items-icon img {
  width: 100%;
}

.feedback-content {
  font-size: 12px;
  line-height: 1.6;
}

.profile-rating {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.profile-wrapper {
  display: flex;
  gap: 0.2rem;
  align-items: center;
}
.profile-img {
  width: 30px;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  overflow: hidden;
  object-fit: cover;
}
.profile-img img {
  width: 100%;
}

.name-role {
  line-height: 1.4;
}
.name-role h5 {
  font-size: 13px;
  font-weight: 550;
}
.name-role p {
  font-size: 12px;
  color: hsl(0 0% 35%);
}
.rating-star {
  display: flex;
  gap: 0.2rem;
  align-self: end;
}
.rating-star i {
  font-size: 11px;
  color: var(--secondary-color);
}

/* screen size 991px */
@media (max-width: 991px) {
  .reviewpage-wrapper {
    font-family: "Poppins", "serif";
    background-color: hsl(28, 71%, 97%);
    position: relative;
    overflow: hidden;
    padding: 4rem 0;
  }

  .review-bg {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }

  .reviewpage-grid {
    width: 85%;
    margin: 0 auto;
    position: relative;
    z-index: 100;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: minmax(auto, max-content);
    gap: 3rem;
    height: 100%;
  }

  .item1 {
    padding: 1.8em;
    border-radius: 7px;
    padding-left: 0;
  }

  .item1-wrapper {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
  }

  .item1-header {
    width: 100%;
    display: flex;
    align-items: center;
  }

  .item1-header-text {
    position: relative;
    width: 300px;
  }
  .item1-header img {
    width: 28px;
    align-self: start;
    position: absolute;
    right: -3%;
    top: -23%;
  }
  .item1-header h2 {
    line-height: 1.3;
    font-size: 1.7rem;
    margin-bottom: 0.5rem;
    margin-right: 15px;
  }

  .item1-feedback {
    font-size: 14px;
    margin-bottom: 1.5rem;
  }

  .item1 a {
    padding: 10px 25px;
    font-size: 12px;
    text-transform: uppercase;
    text-decoration: none;
    color: #ffff;
    border-radius: 8px;
    background-color: var(--secondary-color);
  }

  .item2 {
    border-radius: 7px;
    background-color: hsl(38, 92%, 88%);
    padding: 1.8em;
  }

  .item2-wrapper {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 1rem;
  }

  .items-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
    width: 25px;
    aspect-ratio: 1 / 1;
    background-color: var(--secondary-color);
    border-radius: 50%;
  }

  .items-icon img {
    width: 100%;
  }

  .feedback-content {
    font-size: 12px;
    line-height: 1.6;
  }

  .profile-rating {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  .profile-wrapper {
    display: flex;
    gap: 0.2rem;
    align-items: center;
  }
  .profile-img {
    width: 30px;
    aspect-ratio: 1 / 1;
    border-radius: 50%;
    overflow: hidden;
    object-fit: cover;
  }
  .profile-img img {
    width: 100%;
  }

  .name-role {
    line-height: 1.4;
  }
  .name-role h5 {
    font-size: 13px;
    font-weight: 550;
  }
  .name-role p {
    font-size: 12px;
    color: hsl(0 0% 35%);
  }
  .rating-star {
    display: flex;
    gap: 0.2rem;
    align-self: end;
  }
  .rating-star i {
    font-size: 11px;
    color: var(--secondary-color);
  }
}

/* screen size 768px */
@media (max-width: 768px) {
  .reviewpage-wrapper {
    font-family: "Poppins", "serif";
    background-color: hsl(28, 71%, 97%);
    position: relative;
    overflow: hidden;
    padding: 4rem 0;
  }

  .review-bg {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }

  .reviewpage-grid {
    width: 85%;
    margin: 0 auto;
    position: relative;
    z-index: 100;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: minmax(auto, max-content);
    gap: 1.5rem;
    height: 100%;
  }

  .item1 {
    padding: 1.8em;
    border-radius: 7px;
    padding-left: 0;
  }

  .item1-wrapper {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
  }

  .item1-header {
    width: 100%;
    display: flex;
    align-items: center;
    white-space: wrap;
  }

  .item1-header-text {
    position: relative;
    width: 180px;
  }
  .item1-header img {
    width: 28px;
    align-self: start;
    position: absolute;
    right: 0%;
    top: -23%;
  }

  .item1-header h2 {
    line-height: 1.3;
    font-size: 1.6rem;
    margin-bottom: 0.5rem;
    margin-right: 15px;
  }

  .item1-feedback {
    font-size: 15px;
    margin-bottom: 1.5rem;
  }

  .item1 a {
    padding: 11px 25px;
    font-size: 14px;
    text-transform: uppercase;
    text-decoration: none;
    color: #ffff;
    border-radius: 8px;
    background-color: var(--secondary-color);
  }

  .item2 {
    border-radius: 7px;
    background-color: hsl(38, 92%, 88%);
    padding: 1.8em;
  }

  .item2-wrapper {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 1rem;
  }

  .items-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
    width: 27px;
    aspect-ratio: 1 / 1;
    background-color: var(--secondary-color);
    border-radius: 50%;
  }

  .items-icon img {
    width: 100%;
  }

  .feedback-content {
    font-size: 13.5px;
    line-height: 1.6;
  }

  .profile-rating {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  .profile-wrapper {
    display: flex;
    gap: 0.2rem;
    align-items: center;
  }

  .profile-img {
    width: 30px;
    aspect-ratio: 1 / 1;
    border-radius: 50%;
    overflow: hidden;
    object-fit: cover;
  }
  .profile-img img {
    width: 100%;
  }

  .name-role {
    line-height: 1.4;
  }
  .name-role h5 {
    font-size: 14px;
    font-weight: 550;
  }
  .name-role p {
    font-size: 13px;
    color: hsl(0 0% 35%);
  }
  .rating-star {
    display: flex;
    gap: 0.2rem;
    align-self: end;
  }
  .rating-star i {
    font-size: 11px;
    color: var(--secondary-color);
  }
}

/* screen size 576px */
@media (max-width: 576px) {
  .reviewpage-wrapper {
    font-family: "Poppins", "serif";
    background-color: hsl(28, 71%, 97%);
    position: relative;
    overflow: hidden;
    padding: 4rem 0;
  }

  .review-bg {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }

  .reviewpage-grid {
    width: 90%;
    margin: 0 auto;
    position: relative;
    z-index: 100;
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: minmax(auto, max-content);
    gap: 1.5rem;
    height: 100%;
  }

  .item1 {
    padding: 1.8em;
    border-radius: 7px;
    padding-left: 0;
  }

  .item1-wrapper {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
  }
  .item1-header {
    width: 100%;
    display: flex;
    align-items: center;
  }

  .item1-header-text {
    position: relative;
    width: 270px;
  }

  .item1-header img {
    width: 24px;
    align-self: start;
    position: absolute;
    right: -8%;
    top: -25%;
  }
  .item1-header h2 {
    line-height: 1.3;
    font-size: 1.6rem;
    margin-bottom: 0.5rem;
    margin-right: 0px;
  }

  .item1-feedback {
    font-size: 15px;
    margin-bottom: 1.5rem;
  }

  .item1 a {
    padding: 11px 25px;
    font-size: 13px;
    text-transform: uppercase;
    text-decoration: none;
    color: #ffff;
    border-radius: 8px;
    background-color: var(--secondary-color);
  }

  .item2 {
    border-radius: 7px;
    background-color: hsl(38, 92%, 88%);
    padding: 1.8em;
  }

  .item2-wrapper {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 1rem;
  }

  .items-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
    width: 27px;
    aspect-ratio: 1 / 1;
    background-color: var(--secondary-color);
    border-radius: 50%;
  }

  .items-icon img {
    width: 100%;
  }

  .feedback-content {
    font-size: 13.5px;
    line-height: 1.6;
  }

  .profile-rating {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  .profile-wrapper {
    display: flex;
    gap: 0.2rem;
    align-items: center;
  }

  .profile-img {
    width: 30px;
    aspect-ratio: 1 / 1;
    border-radius: 50%;
    overflow: hidden;
    object-fit: cover;
  }
  .profile-img img {
    width: 100%;
  }

  .name-role {
    line-height: 1.4;
  }
  .name-role h5 {
    font-size: 14px;
    font-weight: 550;
  }
  .name-role p {
    font-size: 13px;
    color: hsl(0 0% 35%);
  }
  .rating-star {
    display: flex;
    gap: 0.2rem;
    align-self: end;
  }
  .rating-star i {
    font-size: 11px;
    color: var(--secondary-color);
  }
}

/* screen size 430px */
@media (max-width: 430px) {
  .reviewpage-wrapper {
    font-family: "Poppins", "serif";
    background-color: hsl(28, 71%, 97%);
    position: relative;
    overflow: hidden;
    padding: 4rem 0;
  }

  .review-bg {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }

  .reviewpage-grid {
    width: 90%;
    margin: 0 auto;
    position: relative;
    z-index: 100;
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: minmax(auto, max-content);
    gap: 1.5rem;
    height: 100%;
  }

  .item1 {
    padding: 1.8em;
    border-radius: 7px;
    padding-left: 0;
  }

  .item1-wrapper {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
  }

  .item1-header {
    width: 100%;
    display: flex;
    align-items: center;
  }

  .item1-header-text {
    position: relative;
    width: 80%;
  }

  .item1-header img {
    width: 24px;
    align-self: start;
    position: absolute;
    right: -6%;
    top: -27%;
  }
  .item1-header h2 {
    line-height: 1.3;
    font-size: 1.6rem;
    margin-bottom: 0.5rem;
    margin-right: 0;
  }

  .item1-feedback {
    font-size: 16px;
    margin-bottom: 1.5rem;
  }

  .item1 a {
    padding: 12px 25px;
    font-size: 14px;
    text-transform: uppercase;
    text-decoration: none;
    color: #ffff;
    border-radius: 8px;
    background-color: var(--secondary-color);
  }

  .item2 {
    border-radius: 7px;
    background-color: hsl(38, 92%, 88%);
    padding: 1.8em;
  }

  .item2-wrapper {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 1rem;
  }

  .items-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
    width: 28px;
    aspect-ratio: 1 / 1;
    background-color: var(--secondary-color);
    border-radius: 50%;
  }

  .items-icon img {
    width: 100%;
  }

  .feedback-content {
    font-size: 13.5px;
    line-height: 1.6;
  }

  .profile-rating {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  .profile-wrapper {
    display: flex;
    gap: 0.2rem;
    align-items: center;
  }

  .profile-img {
    width: 30px;
    aspect-ratio: 1 / 1;
    border-radius: 50%;
    overflow: hidden;
    object-fit: cover;
  }
  .profile-img img {
    width: 100%;
  }

  .name-role {
    line-height: 1.4;
  }
  .name-role h5 {
    font-size: 14.5px;
    font-weight: 550;
  }
  .name-role p {
    font-size: 13px;
    color: hsl(0 0% 35%);
  }
  .rating-star {
    display: flex;
    gap: 0.2rem;
    align-self: end;
  }
  .rating-star i {
    font-size: 11.5px;
    color: var(--secondary-color);
  }
}
</style>