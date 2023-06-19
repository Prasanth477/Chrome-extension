let signinButton = document.getElementById("button1");

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
    url: "http://127.0.0.1:5500/login.html",
    width: 500,
    height: 600,
  }).focus();
  // chrome.storage.local.set({ logged_in: true }).then(() => {
  //   console.log("Value is set");
  // });

  // chrome.storage.local.get(["logged_in"]).then((result) => {
  //   if (result.logged_in) {
  //     chrome.action.setPopup({
  //       popup: "afterSignin/bookmark.html",
  //     });
  //     console.log("crct");
  //   } else {
  //     console.log("error");
  //   }
  //   console.log("loggedinState", result.logged_in);
  //   // console.log("Value currently is " + result.logged_in);
  // });
});
