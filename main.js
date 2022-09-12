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
