const Exit = document.getElementById("Exit")

Exit.addEventListener('click', () => {
    if (confirm("Close Window?")) {
        close();
      }
  })