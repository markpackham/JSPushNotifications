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
let interval;
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "hidden") {
    const leavingDate = new Date();
    setInterval(() => {
      notification = new Notification("Please come back", {
        body: `You have been gone for ${Math.round(
          (new Date() - leavingDate) / 1000
        )} seconds`,
        tag: "Come back",
      });
    }, 100);
  } else {
    if (notification !== undefined) {
      notification.close();
    }
  }
});
