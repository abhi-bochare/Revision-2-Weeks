// Generate 100 items
const allItems = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  title: `Item ${i + 1}`,
  description: `Description for item ${i + 1}`,
}));

const container = document.getElementById("container");
const loader = document.getElementById("loader");
const endMessage = document.getElementById("end");

let currentIndex = 0;
const ITEMS_PER_LOAD = 10;
let isLoading = false;

function loadItems() {
  if (isLoading) return;

  isLoading = true;
  loader.style.display = "block";

  setTimeout(() => {
    const nextItems = allItems.slice(
      currentIndex,
      currentIndex + ITEMS_PER_LOAD
    );

    nextItems.forEach((item) => {
      const div = document.createElement("div");
      div.className = "item";
      div.innerHTML = `
        <h4>${item.title}</h4>
        <p>${item.description}</p>
      `;
      container.appendChild(div);
    });

    currentIndex += ITEMS_PER_LOAD;
    loader.style.display = "none";
    isLoading = false;

    if (currentIndex >= allItems.length) {
      window.removeEventListener("scroll", handleScroll);
      endMessage.textContent = "🎉 No more items to load";
    }
  }, 800);
}

function handleScroll() {
  const scrollPosition = window.innerHeight + window.scrollY;
  const threshold = document.body.offsetHeight - 100;

  if (scrollPosition >= threshold) {
    loadItems();
  }
}

loadItems();

window.addEventListener("scroll", handleScroll);
