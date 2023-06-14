let signinButton = document.getElementById("button1");
let value = "ajhsdbfcvkajbdscvkjabsc";
function openCenteredWindow({ url, width, height }) {
  const pos = {
    x: screen.width / 2 - width / 2,
    y: screen.height / 2 - height / 2,
  };

  const features = `width=${width} height=${height} left=${pos.x} top=${pos.y}`;

  return window.open(url, "_blank", features);
}

signinButton.addEventListener("click", () => {
  openCenteredWindow({
    url: "https://abcddev.think201.xyz/signin",
    width: 500,
    height: 600,
  }).focus();
  // chrome.storage.local.set({ logged_in: true });
  // console.log("loggedin", chrome.browserAction.getBadgeBackgroundColor);
  // chrome.browserAction.setPopup({
  //   popup: "login.html",
  // });
});
