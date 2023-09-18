import { tabItems } from ".";
import { removeAndAddClass } from "../../helpers/removeAndAddClass";
import { offerPrice } from "./price";

export const chooseSettings = () => {
  tabItems.forEach((item) => {
    const memoryButtons = item.querySelectorAll(".memory-content__item");
    const colorsButtons = item.querySelectorAll(".colors-content__item");
    const model = item.getAttribute("data-tab");
    memoryButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const memory = button.getAttribute("data-memory");
        if (memory) offerPrice(item, model, memory);
        removeAndAddClass(memoryButtons, button);
      });
    });
    memoryButtons[0].click();
    colorsButtons.forEach((button) => {
      button.addEventListener("click", () => {
        removeAndAddClass(colorsButtons, button);
      });
    });
    colorsButtons[0].click();
  });
};
