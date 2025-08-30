// Utility: Show message
function showMessage(msg, type) {
  const messageBox = document.getElementById("messageBox");
  messageBox.style.display = "block";
  messageBox.textContent = msg;
  messageBox.className = type;
}

// Utility: Validate email
function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Utility: Validate password (min 8 chars, uppercase, lowercase, number)
function isValidPassword(password) {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
  return regex.test(password);
}

// Main validation function
function validateForm(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const password = document.getElementById("password").value;

  if (!name || !email || !phone || !password) {
    showMessage("All fields are required.", "error");
    return;
  }
  if (!isValidEmail(email)) {
    showMessage("Invalid email format.", "error");
    return;
  }
  if (!/^\d{10}$/.test(phone)) {
    showMessage("Phone must be exactly 10 digits.", "error");
    return;
  }
  if (!isValidPassword(password)) {
    showMessage("Password must have 8+ chars, uppercase, lowercase, and number.", "error");
    return;
  }

  // If all good
  showMessage("Form submitted successfully!", "success");
  document.getElementById("userForm").reset();
}

// Toggle password visibility
document.getElementById("togglePassword").addEventListener("click", () => {
  const passwordField = document.getElementById("password");
  const toggleBtn = document.getElementById("togglePassword");
  if (passwordField.type === "password") {
    passwordField.type = "text";
    toggleBtn.textContent = "Hide";
  } else {
    passwordField.type = "password";
    toggleBtn.textContent = "Show";
  }
});

// Attach form validation
document.getElementById("userForm").addEventListener("submit", validateForm);

