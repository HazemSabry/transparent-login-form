success_hsl = "100, 60%, 50%";
error_hsl = "0, 60%, 50%";

document.getElementById("login-submit").onclick = (e) => {
  e.preventDefault();

  const email = document.getElementById("email");
  const password = document.getElementById("password");

  if (!email.value.includes("@") && password.value.length < 8) {
    console.log(`login failed email not valid`);
    console.log(`login failed password too short`);
    email.style.boxShadow = `0 0 0 1px hsl(${error_hsl})`;
    password.style.boxShadow = `0 0 0 1px hsl(${error_hsl})`;
    return;
  } else if (!email.value.includes("@")) {
    console.log(`login failed email not valid`);
    email.style.boxShadow = `0 0 0 1px hsl(${error_hsl})`;
    password.style.boxShadow = `0 0 0 1px hsl(${success_hsl})`;
    return;
  } else if (password.value.length < 8) {
    console.log(`login failed password too short`);
    email.style.boxShadow = `0 0 0 1px hsl(${success_hsl})`;
    password.style.boxShadow = `0 0 0 1px hsl(${error_hsl})`;
    return;
  }

  email.style.boxShadow = `0 0 0 1px hsl(${success_hsl})`;
  password.style.boxShadow = `0 0 0 1px hsl(${success_hsl})`;

  console.log("login success");
};
