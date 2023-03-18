function onClick(element) {
  [...document.getElementsByClassName("button")].forEach((el) =>
    el.classList.remove("current")
  );

  element.classList.add("current");
  console.log(
    [...document.getElementsByClassName("button current")][0].textContent
  );
  if (
    [...document.getElementsByClassName("button current")][0].textContent ===
    "Annually"
  ) {
    [...document.getElementsByClassName("planPricePro")][0].textContent =
      "499/year";
    [...document.getElementsByClassName("planPriceBuss")][0].textContent =
      "944/year";
  }

  if (
    [
      ...document.getElementsByClassName("button current"),
    ][0].textContent.trim() === "Monthly"
  ) {
    [...document.getElementsByClassName("planPricePro")][0].textContent =
      "49/year";
    [...document.getElementsByClassName("planPriceBuss")][0].textContent =
      "99/year";
  }
}
