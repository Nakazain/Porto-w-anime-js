export function wrapWords(
  element: HTMLElement,
  wordClassName = "word",
  charClassName: string | null = null
) {
  if (!element) return;
  const text = element.textContent || "";
  element.innerHTML = "";

  const words = text.split(/\s+/);
  words.forEach((word, wi) => {
    const wordSpan = document.createElement("span");
    wordSpan.className = wordClassName;
    wordSpan.style.display = "inline-block";

    if (charClassName) {
      [...word].forEach((char) => {
        const charSpan = document.createElement("span");
        charSpan.className = charClassName;
        charSpan.style.display = "inline-block";
        charSpan.textContent = char;
        wordSpan.appendChild(charSpan);
      });
    } else {
      wordSpan.textContent = word;
    }

    element.appendChild(wordSpan);

    if (wi < words.length - 1) {
      element.appendChild(document.createTextNode(" "));
    }
  });
}

