function revealResume() {
    document.getElementById("resumeContent").style.display = "block";
    document.getElementById("knowMoreBtn").style.display = "none";
  }

  function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle("dark-mode");
  }