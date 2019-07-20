export const displayNotification = (msg, timeout) => {
    const msgBox = createMessageBox(msg);
    document.body.appendChild(msgBox);
    removeNotification(msgBox, timeout);
};

const createMessageBox = msgText => {
    const msgBox = document.createElement("div");
    msgBox.style.position = "fixed";
    msgBox.style.top = "2vw";
    msgBox.style.fontWeight = "bolder";
    msgBox.style.fontSize = "2vw";
    msgBox.style.right = "2vw";
    msgBox.style.padding = "0.5vw";
    msgBox.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
    msgBox.style.zIndex = "99999999999999999999999999999"; // TODO: Better solution
    msgBox.style.color = "teal";
    msgBox.innerHTML = `${msgText}`;
    return msgBox;
};

const removeNotification = (msgBox, timeout) => {
    setTimeout(() => document.body.removeChild(msgBox), timeout);
};
