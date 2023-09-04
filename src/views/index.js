import Header from "./Header/Header";
import Home from "./Home/Home";
import About from "./About/About";
import Agenda from "./Agenda/Agenda";
import Speakers from "./Speakers/Speakers";
import Sponsors from "./Sponsors/Sponsors";
import Footer from "./Footer/Footer";

export { Header, Home, About, Agenda, Speakers, Sponsors, Footer };

document.addEventListener("keydown", function (event) {
  if (event.keyCode === 27 || event.keyCode === 13) {
    const activePopups = document.querySelectorAll(".active-popup");
    if (activePopups.length) {
      activePopups.forEach((popup) => {
        const overlay = popup.querySelector(".overlay");
        if (!popup.contains(event.target)) {
          overlay.style.visibility = "hidden";
          popup.classList.remove("active-popup");
        } else {
          overlay.style.visibility = "visible";
        }
      });
    }
  }
});

window.addEventListener("click", function handleClickOutsideBox(event) {
  const activePopups = document.querySelectorAll(".active-popup");
  if (activePopups.length) {
    activePopups.forEach((popup) => {
      const overlay = popup.querySelector(".overlay");
      if (!popup.contains(event.target)) {
        overlay.style.visibility = "hidden";
        popup.classList.remove("active-popup");
      } else {
        overlay.style.visibility = "visible";
      }
    });
  }
});
