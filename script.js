const writeBtn = document.querySelector(".write");
const modal = document.querySelector(".editor-modal");
const closeBtn = document.querySelector("#closeBtn");
const publishBtn = document.querySelector("#publishBtn");
const feed = document.querySelector(".feed");

writeBtn.addEventListener("click", () => {
    modal.classList.add("show");
});

closeBtn.addEventListener("click", () => {
    modal.classList.remove("show");
});

publishBtn.addEventListener("click", () => {

    const title = document.querySelector("#postTitle").value;
    const desc = document.querySelector("#postDesc").value;

    if(title === "" || desc === ""){
        alert("Please fill all fields");
        return;
    }

    const article = document.createElement("article");

    article.classList.add("post");

    article.innerHTML = `
        <div class="author">
            <img src="https://picsum.photos/50" alt="">
            <span>You</span>
        </div>

        <h2>${title}</h2>

        <p>${desc}</p>

        <div class="post-footer">
            Just Now
        </div>
    `;

    feed.prepend(article);

    document.querySelector("#postTitle").value = "";
    document.querySelector("#postDesc").value = "";

    modal.classList.remove("show");
});

const menuBtn = document.querySelector(".menu-btn");
const sidebar = document.querySelector(".left-sidebar");

menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("active");
});