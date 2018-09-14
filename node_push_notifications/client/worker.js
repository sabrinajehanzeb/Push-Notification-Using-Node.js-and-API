console.log("Service Worker Loaded...");

self.addEventListener("push", e => {
  const data = e.data.json();
  console.log("Push Recieved...");
  self.registration.showNotification(data.title, {
    body: "Notified by Sabrina!",
    icon: "https://raw.githubusercontent.com/sabrinajehanzeb/Customized-Chrome-Extension/master/icon.png"
  });
});
