const filterButtons = document.querySelectorAll("[data-filter]");
const labCards = document.querySelectorAll("[data-category]");
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    filterButtons.forEach((item) => item.classList.toggle("active", item === button));
    labCards.forEach((card) => {
      card.hidden = filter !== "all" && card.dataset.category !== filter;
    });
  });
});

const toast = document.querySelector("[data-toast]");
document.querySelector("[data-copy-email]").addEventListener("click", async (event) => {
  const button = event.currentTarget;
  try {
    await navigator.clipboard.writeText(button.dataset.email);
    button.firstChild.textContent = "Email copied ";
  } catch {
    button.firstChild.textContent = button.dataset.email + " ";
  }
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 3200);
});
