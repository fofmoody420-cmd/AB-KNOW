const form = document.getElementById("searchForm");
const input = document.getElementById("searchInput");
const message = document.getElementById("searchMessage");
const themeBtn = document.getElementById("themeBtn");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const query = input.value.trim().toLocaleLowerCase("ar");
  const sections = [...document.querySelectorAll(".section")];
  sections.forEach(section => section.classList.remove("hidden"));

  if (!query) {
    message.textContent = "اكتب كلمة عشان نبحث عنها 💚";
    return;
  }

  let count = 0;
  sections.forEach(section => {
    const text = section.innerText.toLocaleLowerCase("ar");
    const match = text.includes(query);
    section.classList.toggle("hidden", !match);
    if (match) count++;
  });

  message.textContent = count
    ? `لقينا ${count} قسم فيه نتائج لبحثك 💚`
    : "ملقيناش نتائج. جرّب كلمة تانية.";
});

input.addEventListener("input", function () {
  if (!input.value.trim()) {
    document.querySelectorAll(".section").forEach(section =>
      section.classList.remove("hidden")
    );
    message.textContent = "";
  }
});

themeBtn.addEventListener("click", function () {
  document.body.classList.toggle("light");
  themeBtn.textContent =
    document.body.classList.contains("light") ? "🌙" : "☀️";
});
