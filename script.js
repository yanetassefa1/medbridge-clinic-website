document.addEventListener("DOMContentLoaded", function () {

    /* ========= IMAGE GALLERY (SERVICES) ========= */
    const gallery = document.getElementById("gallery");
  
    if (gallery) {
      const images = [
        {
          src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
          thumb: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=400&q=80",
          alt: "Clinic reception area",
          caption: "Welcoming reception area"
        },
        {
          src: "https://images.unsplash.com/photo-1580281658628-6c2f65b6d40d?auto=format&fit=crop&w=1200&q=80",
          thumb: "https://images.unsplash.com/photo-1580281658628-6c2f65b6d40d?auto=format&fit=crop&w=400&q=80",
          alt: "Doctor consulting patient",
          caption: "Patient-centered care"
        },
        {
          src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
          thumb: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=400&q=80",
          alt: "Healthcare professional",
          caption: "Professional healthcare support"
        }
      ];
  
      const mainImg = document.getElementById("gallery-main-img");
      const caption = document.getElementById("gallery-caption");
      const thumbs = document.getElementById("gallery-thumbs");
  
      function setImage(index) {
        mainImg.src = images[index].src;
        mainImg.alt = images[index].alt;
        caption.textContent = images[index].caption;
      }
  
      images.forEach((img, index) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "thumb-btn";
        btn.innerHTML = `<img src="${img.thumb}" alt="${img.alt}" class="thumb-img">`;
        btn.addEventListener("click", () => setImage(index));
        thumbs.appendChild(btn);
      });
  
      setImage(0);
    }
  
    /* ========= FAQ TOGGLE (SERVICES) ========= */
    const questions = document.querySelectorAll(".faq-question");
  
    questions.forEach(question => {
      question.addEventListener("click", function () {
        const answer = this.nextElementSibling;
        answer.hidden = !answer.hidden;
      });
    });
  
    /* ========= FORM VALIDATION (CONTACT) ========= */
    const form = document.getElementById("contact-form");
  
    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
  
        const name = document.getElementById("fullName");
        const email = document.getElementById("email");
        const message = document.getElementById("message");
        const status = document.getElementById("form-status");
  
        let valid = true;
  
        if (name.value.trim().length < 2) {
          document.getElementById("fullName-error").textContent = "Enter at least 2 characters.";
          valid = false;
        } else {
          document.getElementById("fullName-error").textContent = "";
        }
  
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.value.match(emailPattern)) {
          document.getElementById("email-error").textContent = "Enter a valid email.";
          valid = false;
        } else {
          document.getElementById("email-error").textContent = "";
        }
  
        if (message.value.trim().length < 10) {
          document.getElementById("message-error").textContent = "Message must be at least 10 characters.";
          valid = false;
        } else {
          document.getElementById("message-error").textContent = "";
        }
  
        if (valid) {
          status.textContent = "Message submitted successfully!";
          status.className = "status-success";
          form.reset();
        } else {
          status.textContent = "Please fix the errors below.";
          status.className = "status-error";
        }
      });
    }
  
  });