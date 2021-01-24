import("../pkg/index.js")
  .then((wasm) => {
    const pre = document.getElementById("gol");
    const universe = wasm.Universe.new();

    requestAnimationFrame(function renderLoop() {
      pre.textContent = universe.render();
      universe.tick();

      requestAnimationFrame(renderLoop);
    });
  })
  .catch(console.error);
