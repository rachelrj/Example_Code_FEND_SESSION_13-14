// Paste into brwoser

function debounce(func, delay) {
  let debounceTimer;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => func.apply(context, args), delay);
  };
}

const resizedEventFunction = () => {
  console.log("Resized");
};

window.addEventListener(
  "resize",
  debounce(() => {
    resizedEventFunction();
  }, 200)
);

// Versus just

window.addEventListener("resize", resizedEventFunction);
