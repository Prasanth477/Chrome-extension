//here user details validation should be added . then only the message should be passed to backgorund

// document.getElementById("loginForm").addEventListener("submit", async () => {
//   const response = await chrome.runtime.sendMessage({ greeting: "hello" });
//   // do something with response here, not outside the function
//   console.log(response);
// });
let username = "";
let password = "";

chrome.runtime.sendMessage({ localstorage: "username" }, function (response) {
  username = response.username;
  document.getElementById("username").value = username;
});

chrome.runtime.sendMessage({ localstorage: "password" }, function (response) {
  password = response.password;
  document.getElementById("password").value = password;
  document.getElementById("loginbtn").click();
});
