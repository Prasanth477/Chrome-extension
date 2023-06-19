// const init = function () {
//   const injectElement = document.createElement("div");
//   injectElement.className = "rustyZone-element";
//   injectElement.innerHTML = "ABCD extension";
//   document.body.appendChild(injectElement);
// };
// init();

(async () => {
  const response = await chrome.runtime.sendMessage({ greeting: "hello" });
  // do something with response here, not outside the function
  console.log(response);
})();
