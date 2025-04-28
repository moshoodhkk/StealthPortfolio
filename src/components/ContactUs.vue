<template>
  <div class="contact-wrapper">
    <div class="contact-container">
      <div class="contact-header">
        <div class="header-decoration">
          <span class="line"></span>
          <span class="dot"></span>
          <span class="line"></span>
        </div>
        <h2>Get In Touch</h2>
        <p>
          Let's discuss your project and see how I can help bring your ideas to
          life
        </p>
      </div>

      <div class="contact-content">
        <div class="contact-info">
          <div class="info-item">
            <div class="icon-wrapper">
              <i class="bi bi-envelope"></i>
            </div>
            <div>
              <h3>Email</h3>
              <p>suxces.stealth@outlook.com</p>
            </div>
          </div>
          <div class="info-item">
            <div class="icon-wrapper">
              <i class="bi bi-telephone"></i>
            </div>
            <div>
              <h3>Phone</h3>
              <p>+234 9032897113</p>
            </div>
          </div>
        </div>

        <form class="contact-form" @submit.prevent="handleSubmit">
          <div class="form-header">
            <h3>Send Me a Message</h3>
            <p>
              Fill out the form below and I'll get back to you as soon as
              possible
            </p>
          </div>

          <!-- Success Message -->
          <div v-if="formStatus === 'success'" class="form-status success">
            <i class="bi bi-check-circle"></i>
            <p>
              Your message has been sent successfully! I'll get back to you
              soon.
            </p>
          </div>

          <!-- Error Message -->
          <div v-if="formStatus === 'error'" class="form-status error">
            <i class="bi bi-exclamation-circle"></i>
            <p>{{ errorMessage }}</p>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label for="name">Your Name</label>
              <div class="input-wrapper">
                <i class="bi bi-person"></i>
                <input
                  id="name"
                  type="text"
                  v-model="form.name"
                  placeholder="John Doe"
                  required
                  :disabled="isSubmitting"
                />
              </div>
            </div>
            <div class="form-group">
              <label for="email">Your Email</label>
              <div class="input-wrapper">
                <i class="bi bi-envelope"></i>
                <input
                  id="email"
                  type="email"
                  v-model="form.email"
                  placeholder="john@example.com"
                  required
                  :disabled="isSubmitting"
                />
              </div>
            </div>
          </div>

          <div class="form-group">
            <label for="subject">Subject</label>
            <div class="input-wrapper">
              <i class="bi bi-chat-dots"></i>
              <input
                id="subject"
                type="text"
                v-model="form.subject"
                placeholder="What's this about?"
                required
                :disabled="isSubmitting"
              />
            </div>
          </div>

          <div class="form-group">
            <label for="message">Your Message</label>
            <div class="input-wrapper textarea-wrapper">
              <i class="bi bi-pencil"></i>
              <textarea
                id="message"
                v-model="form.message"
                placeholder="Tell me about your project..."
                required
                :disabled="isSubmitting"
              ></textarea>
            </div>
          </div>

          <button type="submit" class="submit-btn" :disabled="isSubmitting">
            <span v-if="!isSubmitting">Send Message</span>
            <span v-else>Sending...</span>
            <i v-if="!isSubmitting" class="bi bi-send"></i>
            <i v-else class="bi bi-arrow-repeat spin"></i>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import emailjs from "@emailjs/browser";

// EmailJS configuration
// TODO: Move these values to environment variables for better security
const EMAILJS_PUBLIC_KEY = "ijPpcGA9Vb9lhg1z9";
const EMAILJS_SERVICE_ID = "service_n5ee7r7";
const EMAILJS_TEMPLATE_ID = "template_qoxbyqq";

// Initialize EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);

export default {
  name: "ContactUs",
  data() {
    return {
      form: {
        name: "",
        email: "",
        subject: "",
        message: "",
      },
      isSubmitting: false,
      formStatus: null, // null, 'success', or 'error'
      errorMessage: "",
    };
  },
  methods: {
    async handleSubmit() {
      this.isSubmitting = true;
      this.formStatus = null;

      try {
        // Using EmailJS to send the email
        const result = await emailjs.send(
          EMAILJS_SERVICE_ID, // Your EmailJS service ID
          EMAILJS_TEMPLATE_ID, // Your EmailJS template ID
          {
            from_name: this.form.name,
            from_email: this.form.email,
            subject: this.form.subject,
            message: this.form.message,
            to_email: "suxces.stealth@outlook.com", // Your email address
          },
          EMAILJS_PUBLIC_KEY // Your EmailJS user ID
        );

        if (result.status === 200) {
          // Success
          this.formStatus = "success";
          // Reset form
          this.form = {
            name: "",
            email: "",
            subject: "",
            message: "",
          };
        } else {
          // Error
          this.formStatus = "error";
          this.errorMessage = "Failed to send message. Please try again.";
        }
      } catch (error) {
        console.error("Error sending email:", error);
        this.formStatus = "error";
        this.errorMessage = "Failed to send message. Please try again.";
      } finally {
        this.isSubmitting = false;
      }
    },
  },
};
</script>

<style scoped>
.contact-wrapper {
  padding: 6rem 0;
  background: linear-gradient(135deg, hsl(28, 71%, 97%), hsl(39, 100%, 97%));
  position: relative;
  overflow: hidden;
}

.contact-wrapper::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  opacity: 0.5;
}

.contact-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
}

.contact-header {
  text-align: center;
  margin-bottom: 3.5rem;
}

.header-decoration {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
}

.line {
  height: 2px;
  width: 60px;
  background: linear-gradient(
    90deg,
    transparent,
    var(--secondary-color),
    transparent
  );
}

.dot {
  width: 12px;
  height: 12px;
  background: var(--secondary-color);
  border-radius: 50%;
  margin: 0 1rem;
  position: relative;
  box-shadow: 0 0 20px var(--secondary-color);
}

.contact-header h2 {
  font-size: 2.4rem;
  font-weight: 700;
  background: linear-gradient(
    135deg,
    hsl(0 0% 45%),
    var(--secondary-color) 70%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1.5rem;
  position: relative;
  font-family: "Poppins", sans-serif;
}

.contact-header p {
  font-size: 1rem;
  color: hsl(0 0% 35%);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
  font-family: "Poppins", sans-serif;
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 3rem;
  align-items: start;
}

.contact-info {
  display: grid;
  gap: 2rem;
}

.info-item {
  background: white;
  padding: 1.5rem;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: flex-start;
  gap: 1.2rem;
}

.info-item::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(255, 187, 0, 0.1),
    rgba(255, 187, 0, 0)
  );
  opacity: 0;
  transition: opacity 0.3s ease;
}

.info-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.info-item:hover::before {
  opacity: 1;
}

.icon-wrapper {
  width: 50px;
  height: 50px;
  border-radius: 12px;
  background: linear-gradient(
    135deg,
    var(--secondary-color),
    hsl(39, 100%, 60%)
  );
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.info-item:hover .icon-wrapper {
  transform: rotate(10deg) scale(1.1);
}

.info-item i {
  font-size: 1.5rem;
  color: white;
}

.info-item h3 {
  font-size: 1.1rem;
  color: hsl(0 0% 20%);
  margin-bottom: 0.5rem;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
}

.info-item p {
  font-size: 0.9rem;
  color: hsl(0 0% 35%);
  line-height: 1.5;
  font-family: "Poppins", sans-serif;
}

.contact-form {
  background: white;
  padding: 2.5rem;
  border-radius: 25px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
}

.contact-form::before {
  content: "";
  position: absolute;
  top: -50%;
  right: -50%;
  width: 100%;
  height: 100%;
  background: radial-gradient(
    circle,
    rgba(255, 187, 0, 0.1) 0%,
    transparent 70%
  );
  transform: rotate(45deg);
}

.form-header {
  margin-bottom: 2.5rem;
  position: relative;
}

.form-header h3 {
  font-size: 1.7rem;
  color: hsl(0 0% 20%);
  margin-bottom: 0.8rem;
  font-weight: 700;
  font-family: "Poppins", sans-serif;
}

.form-header p {
  font-size: 1rem;
  color: hsl(0 0% 35%);
  line-height: 1.5;
  font-family: "Poppins", sans-serif;
}

.form-status {
  padding: 1rem;
  border-radius: 12px;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: 1rem;
  font-family: "Poppins", sans-serif;
}

.form-status.success {
  background: linear-gradient(
    135deg,
    rgba(46, 204, 113, 0.1),
    rgba(46, 204, 113, 0.05)
  );
  color: #27ae60;
  border: 1px solid rgba(46, 204, 113, 0.2);
}

.form-status.error {
  background: linear-gradient(
    135deg,
    rgba(231, 76, 60, 0.1),
    rgba(231, 76, 60, 0.05)
  );
  color: #c0392b;
  border: 1px solid rgba(231, 76, 60, 0.2);
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.6rem;
  font-size: 0.9rem;
  color: hsl(0 0% 20%);
  font-weight: 500;
  font-family: "Poppins", sans-serif;
}

.input-wrapper {
  position: relative;
}

.input-wrapper i {
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: hsl(0 0% 60%);
  font-size: 1.1rem;
  transition: all 0.3s ease;
}

.textarea-wrapper i {
  top: 1.2rem;
  transform: none;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 1rem 1rem 1rem 2.5rem;
  border: 2px solid hsl(0 0% 90%);
  border-radius: 12px;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  background: hsl(0 0% 98%);
  font-family: "Poppins", sans-serif;
}

.form-group textarea {
  height: 150px;
  resize: vertical;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--secondary-color);
  background: white;
  box-shadow: 0 0 0 4px rgba(255, 187, 0, 0.1);
}

.form-group input:focus + i,
.form-group textarea:focus + i {
  color: var(--secondary-color);
}

.submit-btn {
  width: 100%;
  padding: 1rem 2rem;
  background: linear-gradient(
    135deg,
    var(--secondary-color),
    hsl(39, 100%, 60%)
  );
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  position: relative;
  overflow: hidden;
  font-family: "Poppins", sans-serif;
}

.submit-btn::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    hsl(39, 100%, 60%),
    var(--secondary-color)
  );
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 1;
}

.submit-btn span,
.submit-btn i {
  position: relative;
  z-index: 2;
}

.submit-btn:hover:not(:disabled) {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(255, 187, 0, 0.2);
}

.submit-btn:hover:not(:disabled)::before {
  opacity: 1;
}

.submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.submit-btn i {
  transition: transform 0.3s ease;
}

.submit-btn:hover:not(:disabled) i {
  transform: translateX(5px);
}

.spin {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@media (max-width: 1200px) {
  .contact-container {
    padding: 0 1.5rem;
  }
}

@media (max-width: 991px) {
  .contact-content {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .contact-info {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }

  .form-row {
    grid-template-columns: 1fr;
    gap: 0;
  }
}

@media (max-width: 768px) {
  .contact-wrapper {
    padding: 6rem 0;
  }

  .contact-header h2 {
    font-size: 2.3rem;
  }

  .contact-form {
    padding: 2rem;
  }
}

@media (max-width: 480px) {
  .contact-container {
    padding: 0 1rem;
  }

  .contact-header h2 {
    font-size: 2rem;
  }

  .info-item {
    padding: 1.5rem;
  }

  .icon-wrapper {
    width: 50px;
    height: 50px;
  }

  .contact-form {
    padding: 1.5rem;
  }
}
</style> 