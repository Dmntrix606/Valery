onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    // Dividimos el texto en dos líneas
    const lines = ['Te quiero doc', 'Feliz viernes 13'];
    const titleElement = document.getElementById('title');
    let lineIndex = 0;
    let charIndex = 0;

    function appendTitle() {
      if (lineIndex < lines.length) {
        if (charIndex < lines[lineIndex].length) {
          // Agregar el carácter actual al título
          titleElement.innerHTML += lines[lineIndex][charIndex];
          charIndex++;
          setTimeout(appendTitle, 300); // Pausa entre cada carácter
        } else {
          // Agregar un salto de línea después de completar una línea
          titleElement.innerHTML += '<br>';
          lineIndex++;
          charIndex = 0; // Reiniciar el índice de caracteres
          setTimeout(appendTitle, 300); // Pausa entre líneas
        }
      }
    }

    appendTitle();

    clearTimeout(c);
  }, 1000);
};
