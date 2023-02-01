const heart = document.getElementById("heart");
const languages = document.getElementById("languages");

heart.addEventListener("click", function() {
  if (languages.style.display === "none") {
    languages.style.display = "block";
  } else {
    languages.style.display = "none";
  }
});