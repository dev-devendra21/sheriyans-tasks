document.addEventListener("DOMContentLoaded", () => {
  const main = document.querySelector("main");
  const btn = document.querySelector("button");

  const greetings = [
    "नमस्ते (Hindi)",
    "नमस्कार (Marathi)",
    "வணக்கம் (Tamil)",
    "హలో / నమస్తే (Telugu)",
    "ನಮಸ್ತೆ (Kannada)",
    "নমস্কার / হ্যালো (Bengali)",
    "નમસ્તે (Gujarati)",
    "ਸਤ ਸ੍ਰੀ ਅਕਾਲ (Punjabi)",
    "നമസ്കാരം (Malayalam)",
    "नमस्कार (Nepali)",
    "নমস্কার (Assamese)",
    "ହେଲୋ / ନମସ୍କାର (Odia)",
    "नमस्कार (Konkani)",
    "नमस्कार (Sanskrit)",
    "नमस्कार (Dogri)",
    "नमस्कार (Bodo)",
    "नमस्कार (Kashmiri)",
    "नमस्कार (Santali)",
    "नमस्कार (Sindhi)",
    "Hello (English)",
    "Hola (Spanish)",
    "Bonjour (French)",
    "Hallo (German)",
    "Ciao (Italian)",
    "Здравствуйте (Russian)",
    "Olá (Portuguese)",
    "你好 (Chinese - Mandarin)",
    "こんにちは (Japanese)",
    "안녕하세요 (Korean)",
    "مرحبا (Arabic)",
    "Salam (Persian/Farsi)",
    "Habari (Swahili)",
    "Sawubona (Zulu)",
    "Xin Chào (Vietnamese)",
    "Kamusta (Filipino)",
    "Halo (Indonesian)",
    "Hej (Swedish)",
    "Hei (Norwegian)",
    "Halló (Icelandic)",
  ];

  function generateRandomPosition() {
    return `${Math.floor(Math.random() * 100)}%`;
  }

  function generateRandomText() {
    return greetings[Math.floor(Math.random() * greetings.length)];
  }

  function generateRandomColor() {
    return `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(
      Math.random() * 255
    )}, ${Math.floor(Math.random() * 255)})`;
  }

  function generateRandomSize() {
    return `${Math.floor(Math.random() * 50)}px`;
  }

  function generateRandomRotation() {
    return `${Math.floor(Math.random() * 360)}deg`;
  }

  btn.addEventListener("click", () => {
    const p = document.createElement("p");
    p.style.position = "absolute";
    p.style.top = generateRandomPosition();
    p.style.left = generateRandomPosition();
    p.style.fontSize = generateRandomSize();
    p.style.color = generateRandomColor();
    p.textContent = generateRandomText();
    main.appendChild(p);
  });

  main.appendChild(p);
});
