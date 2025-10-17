(function () {
  const searchInput = document.getElementById("service-search-bar");
  const services = Array.from(document.querySelectorAll(".service-content"));
  const noResults = document.getElementById("no-results");

  if (!searchInput || services.length === 0) {
    // nothing to do if elements don't exist
    return;
  }

  // optional debounce helper (waits 150ms after user stops typing)
  function debounce(fn, delay = 150) {
    let t;
    return function (...args) {
      clearTimeout(t);
      t = setTimeout(() => fn.apply(this, args), delay);
    };
  }

  function normalize(str) {
    return (str || "").toLowerCase().trim();
  }

  function filterServices() {
    const query = normalize(searchInput.value);
    let anyVisible = false;

    // if query empty -> show all
    if (query === "") {
      services.forEach(card => {
        card.style.display = "";
      });
      if (noResults) noResults.style.display = "none";
      return;
    }

    services.forEach(card => {
      // defensive queries: some cards might not have these nodes
      const titleEl = card.querySelector(".service-content-title h3");
      const descEl = card.querySelector(".service-content-text p");

      const title = normalize(titleEl ? titleEl.textContent : "");
      const desc = normalize(descEl ? descEl.textContent : "");

      if (title.includes(query) || desc.includes(query)) {
        card.style.display = "";
        anyVisible = true;
      } else {
        card.style.display = "none";
      }
    });

    if (noResults) {
      noResults.style.display = anyVisible ? "none" : "block";
    }
  }

  // use input event and debounce to improve UX
  searchInput.addEventListener("input", debounce(filterServices, 120));
})();