const sections = [
  {
    title: "Section 1",
    content: "Content for section 1. This is some detailed information.",
  },
  {
    title: "Section 2",
    content: "Content for section 2. This is some detailed information.",
  },
  {
    title: "Section 3",
    content: "Content for section 3. This is some detailed information.",
  },
];

const accordion = document.getElementById("accordion");
let activeIndex = null;

function renderAccordion() {
  accordion.innerHTML = "";

  sections.forEach((section, index) => {
    const item = document.createElement("div");
    item.className = "accordion-item";

    const header = document.createElement("div");
    header.className = "accordion-header";
    header.textContent = section.title;

    const content = document.createElement("div");
    content.className = "accordion-content";
    content.textContent = section.content;

    if (index === activeIndex) {
      content.classList.add("open");
    }

    header.addEventListener("click", () => {
      activeIndex = activeIndex === index ? null : index;
      renderAccordion();
    });

    item.appendChild(header);
    item.appendChild(content);
    accordion.appendChild(item);
  });
}

renderAccordion();
