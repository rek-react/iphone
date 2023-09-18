export const removeAndAddClass = (elements, element, className = "active") => {
  elements.forEach((item) => {
    item.classList.remove(className);
  });
  element.classList.add(className);
};
