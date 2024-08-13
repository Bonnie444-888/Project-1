function Gratitude() {
  let name = prompt("What is your name?");
  let age = prompt("How old are you?");

  if (age > 19) {
    alert(
      "Hey " + name + " You are " + age + " 🙏Be grateful in any situation 😊"
    );
  } else {
    alert(
      "Hey " +
        name +
        " You are " +
        age +
        " learn gratitude and find your feet🙏"
    );
  }
}
let Grateeful = document.querySelector("button");
Grateeful.addEventListener("click", Gratitude);
