const posts = [
    { title: "AI ", category: "Tech", img: "ai.jpg", desc: "Latest trends in AI", date: "Nov 2025" },
    { title: " Paris", category: "Travel", img: "paris.jpg" , desc: "la Vie en Rose", date: "Oct 2025" },
    { title: "Pizza", category: "Food", img: "pizza.jpg", desc: "pizzeria", date: "Sep 2025" },
    { title: "city of pasta ", category: "Travel", img: "italy.jpg", desc: "Bella caio from italy", date: "Jul 2025" },
    { title: "Exploring Dubai", category: "Travel", img: "dubai.jpg", desc: "Money talks ", date: "Jun 2025" },
    { title: "Healthy Smoothies", category: "Food", img: "smoothie.jpg", desc: "Refreshing smoothies", date: "May 2025" }
];

const postsPerPage = 3;
let currentPage = 1;

const blogContainer = document.getElementById("blogContainer");
const categoryFilter = document.getElementById("categoryFilter");
const searchInput = document.getElementById("searchInput");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function displayPosts() {
    let filtered = posts.filter(post =>
        (categoryFilter.value === "All" || post.category === categoryFilter.value) &&
        post.title.toLowerCase().includes(searchInput.value.toLowerCase())
    );

    const start = (currentPage - 1) * postsPerPage;
    const end = start + postsPerPage;
    const paginated = filtered.slice(start, end);

    blogContainer.innerHTML = paginated
        .map(post => `
            <div class="card">
                <img src="${post.img}" />
                <div class="card-content">
                    <h3>${post.title}</h3>
                    <p>${post.desc}</p>
                    <small>${post.date}</small>
                </div>
            </div>
        `).join("");

    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = end >= filtered.length;
}

categoryFilter.addEventListener("change", () => { currentPage = 1; displayPosts(); });
searchInput.addEventListener("input", () => { currentPage = 1; displayPosts(); });
prevBtn.addEventListener("click", () => { currentPage--; displayPosts(); });
nextBtn.addEventListener("click", () => { currentPage++; displayPosts(); });

displayPosts();
