const API_URL = "https://jsonplaceholder.typicode.com/users";

let users = [];
let filteredUsers = [];
let sortKey = "name";
let sortOrder = "asc";

const tableBody = document.getElementById("tableBody");
const searchInput = document.getElementById("searchInput");
const domainFilter = document.getElementById("domainFilter");
const totalUsers = document.getElementById("totalUsers");
const status = document.getElementById("status");

async function fetchUsers() {
  try {
    status.textContent = "Loading...";
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error("API Error");
    users = await res.json();
    setupDomains();
    applyFilters();
    status.textContent = "";
  } catch (err) {
    status.innerHTML = `<span class="error">Failed to load data</span>`;
  }
}

function setupDomains() {
  const domains = [...new Set(users.map((u) => u.email.split("@")[1]))];
  domains.forEach((d) => {
    const option = document.createElement("option");
    option.value = d;
    option.textContent = d;
    domainFilter.appendChild(option);
  });
}

function applyFilters() {
  const search = searchInput.value.toLowerCase();
  const domain = domainFilter.value;

  filteredUsers = users.filter((u) => {
    const matchesSearch =
      u.name.toLowerCase().includes(search) ||
      u.email.toLowerCase().includes(search);
    const matchesDomain = domain ? u.email.endsWith(domain) : true;
    return matchesSearch && matchesDomain;
  });

  sortUsers();
  renderTable();
}

function sortUsers() {
  filteredUsers.sort((a, b) => {
    if (a[sortKey] < b[sortKey]) return sortOrder === "asc" ? -1 : 1;
    if (a[sortKey] > b[sortKey]) return sortOrder === "asc" ? 1 : -1;
    return 0;
  });
}

function renderTable() {
  tableBody.innerHTML = "";
  filteredUsers.forEach((u) => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${u.name}</td><td>${u.email}</td>`;
    tableBody.appendChild(row);
  });
  totalUsers.textContent = filteredUsers.length;
}

searchInput.addEventListener("input", applyFilters);
domainFilter.addEventListener("change", applyFilters);

document.querySelectorAll("th").forEach((th) => {
  th.addEventListener("click", () => {
    const key = th.dataset.key;
    if (sortKey === key) {
      sortOrder = sortOrder === "asc" ? "desc" : "asc";
    } else {
      sortKey = key;
      sortOrder = "asc";
    }
    applyFilters();
  });
});

fetchUsers();
