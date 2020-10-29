// Login page
var contentEle = document.body.querySelector(".content");
var inputBox = document.body.querySelector(".text");
var messageBox = document.body.querySelector(".message");
var messageBox2 = document.body.querySelector(".message2");
var notes = [];
var priority = [];

// List of approved usernames
var list = [
  {
    name: "cade's tester"
  },
  {
    name: "coolStudent123"
  }
];

var i = 0;
i < list.length;
i++;
document.body.querySelector(".submit").addEventListener("click", function () {
  if (inputBox.value == list[i].name) {
    contentEle.innerHTML = "";
    alert("Login successful, redirecting you.");
    var headEle = document.createElement("h1");
    messageBox.innerHTML = "";
    headEle.innerHTML = "View page - Create Notes Here";
    contentEle.appendChild(headEle);
    var noteEle = document.createElement("input");
    var impEle = document.createElement("input");
    noteEle.placeholder = "Note...";
    var impEle = document.createElement("input");
    impEle.placeholder = "Priority...";
    contentEle.appendChild(noteEle);
    contentEle.appendChild(impEle);
    var noteButton = document.createElement("button");
    noteButton.textContent = "Save note";
    noteButton.addEventListener("click", function () {
      if (impEle.value.length == 0) {
        messageBox2.innerHTML = "";
        messageBox2.innerHTML = "You must assign a priority to your note.";
      }
      if (isNaN(impEle.value)) {
        messageBox2.innerHTML = "";
        messageBox2.innerHTML = "Value entered for Priority was not a number.";
      } else {
        priority.push(impEle.value);
        renderNote();
      }
      if (noteEle.value.length <= 1) {
        messageBox.innerHTML = "";
        messageBox.innerHTML =
          "Your note input must be longer than 1 character.";
      } else {
        notes.push(noteEle.value);
        renderNote();
      } //The note output.
    });
    function renderNote() {
      document.body.querySelector(".note").innerHTML = "";
      document.body.querySelector(".import").innerHTML = "";
      for (var x = 0; x < notes.length; x++) {
        messageBox.innerHTML = "";
        messageBox2.innerHTML = "";
        var itmEle = document.createElement("h3");
        itmEle.innerHTML = "Note: " + notes[x] + "     Priorty: " + priority[x];
        document.body.querySelector(".note").appendChild(itmEle);
      }
    }
    contentEle.appendChild(noteButton);
  } else {
    messageBox.innerHTML = "";
    messageBox.innerHTML = "Username not found.";
  }
  if (inputBox.value.length <= 2) {
    messageBox.innerHTML = "";
    messageBox.innerHTML = "Username too few characters.";
  }

  if (inputBox.value.length >= 15) {
    messageBox.innerHTML = "";
    messageBox.innerHTML = "Username too many characters.";
  }
});