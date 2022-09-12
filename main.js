const button = document.querySelector("button");

button.addEventListener("click", () => {
  Notification.requestPermission().then((perm) => {
    if (perm === "granted") {
      const notification = new Notification("Example notification", {
        body: "This is body text",
        data: { hello: "world" },
        icon: "randoIcon.png",
      });

      notification.addEventListener("error", (e) => {
        alert("error");
      });
    }
  });
});

let notification;
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "hidden") {
    notification = new Notification("Please come back", {
      body: "Please come back, baby come back",
      tag: "Come back",
    });
  } else {
    if (notification !== undefined) {
      notification.close();
    }
  }
});
