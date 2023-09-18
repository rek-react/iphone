import { removeAndAddClass } from "../../helpers/removeAndAddClass";

export const choosePerson = () => {
    const buttons = document.querySelectorAll(".form-offer__button");
    const entityInput = document.querySelector(".form-offer__input#entity");
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        if (button.getAttribute("id") === "entity") {
          entityInput.classList.add("show");
        } else {
          entityInput.classList.remove("show");
        }
        removeAndAddClass(buttons, button);
      });
    });
  };
  