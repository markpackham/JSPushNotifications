const button = document.querySelector("button");

button.addEventListener("click", () => {
  Notification.requestPermission().then((perm) => {
    if (perm === "granted") {
      const notification = new Notification("Example notification", {
        body: "This is body text",
        data: { hello: "world" },
      });

      console.log(notification);

      notification.data.addEventListener("close", (e) => {
        console.log(e);
      });
    }
  });
});
