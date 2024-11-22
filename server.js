let pass = document.getElementById("js-password");
let msg = document.getElementById("msg");
let str = document.getElementById("strength");

pass.addEventListener("input", () => {
  if (pass.value.length > 0) {
    msg.style.display = "block";
  } else {
    msg.style.display = "none";
    str.innerHTML = "";
    pass.style.borderColor = "white"; //
    return;
  }

  // Determine password strength based on length
  if (pass.value.length < 4) {
    str.innerHTML = "Weak";
    str.style.color = "#ff5925";
    pass.style.borderColor = "#ff5925";
  } else if (pass.value.length >= 4 && pass.value.length < 8) {
    str.innerHTML = "Medium";
    str.style.color = "yellow";
    pass.style.borderColor = "yellow";
  } else {
    str.innerHTML = "Strong";
    str.style.color = "#26d730";
    pass.style.borderColor = "#26d730";
  }
});
