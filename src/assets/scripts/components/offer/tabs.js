import { tabItems } from ".";
import { removeAndAddClass } from "../../helpers/removeAndAddClass";

export const offerTabs = () => {
    const buttons = document.querySelectorAll(".offer__button");
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const valueDataAttribute = button.getAttribute("data-tab");
        removeAndAddClass(buttons, button);
        tabItems.forEach((item) => {
          item.classList.remove("show");
          if (valueDataAttribute === item.getAttribute("data-tab")) {
            item.classList.add("show");
          }
        });
      });
    });
    buttons[0].click()
  };