const loginForm = document.querySelector(".login-form");

const loginSubmit = () => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    window.alert("Please fill in all the fields");
  } else {
    console.log(
      `${email.name}: ${email.value}, ${password.name}: ${password.value}`
    );
    event.currentTarget.reset();
  }
};

loginForm.addEventListener("submit", loginSubmit);
