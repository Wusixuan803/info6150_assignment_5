document.getElementById("usResident").addEventListener("change", function () {
  document.getElementById("zipcodeField").style.display = this.checked
    ? "block"
    : "none";
  document.getElementById("zipcode").required = this.checked;
});

document
  .getElementById("pizzaForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let valid = true;
    let name = document.getElementById("name").value;
    let birthYear = parseInt(document.getElementById("birthYear").value);
    let password = document.getElementById("password").value;
    let pizzaType = document.querySelector('input[name="pizzaType"]:checked');
    let zipcode = document.getElementById("zipcode").value;
    let currentYear = new Date().getFullYear();

    document.getElementById("nameError").innerText =
      name.length >= 3 ? "" : "Name must be at least 3 characters.";
    document.getElementById("birthYearError").innerText =
      birthYear > 1900 && birthYear < currentYear ? "" : "Invalid year.";
    document.getElementById("passwordError").innerText =
      password.length >= 8 ? "" : "Password must be at least 8 characters.";
    document.getElementById("pizzaTypeError").innerText = pizzaType
      ? ""
      : "Select a pizza preference.";

    // Check if the zipcode is exactly 5 digits and is not "00000"
    if (zipcode.length === 5 && zipcode === "00000") {
      document.getElementById("zipcodeError").innerText = "Invalid zipcode.";
      valid = false;
    } else if (
      zipcode.length === 5 ||
      !document.getElementById("usResident").checked
    ) {
      document.getElementById("zipcodeError").innerText = "";
    } else {
      document.getElementById("zipcodeError").innerText =
        "Zipcode must be 5 digits.";
      valid = false;
    }

    // Overall validation for the form
    valid =
      valid &&
      name.length >= 3 &&
      birthYear > 1900 &&
      birthYear < currentYear &&
      password.length >= 8 &&
      pizzaType &&
      (!document.getElementById("usResident").checked ||
        (zipcode.length === 5 && zipcode !== "00000"));

    document.getElementById("formMessage").innerText = valid
      ? "Accepted"
      : "Please correct the errors above.";
  });
