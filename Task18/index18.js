class CountersViewManager {
    createEl({ type = "div", content, attributes } = {}) {
        const $el = document.createElement(type);

        if (content) {
            typeof content === "string"
                ? ($el.textContent = content)
                : $el.append(content);
        }

        if (attributes)
            Object.entries(attributes).forEach(([key, value]) => {
                $el.setAttribute(key, value);
            });

        return $el;
    }

    formatTime(seconds) {
        const hrs = Math.floor(seconds / 3600);
        const mins = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;

        const pad = (num) => String(num).padStart(2, "0");
        return `${pad(hrs)}:${pad(mins)}:${pad(secs)}`;
    }

    clearContent(container, flag) {
        if (!container && container.nodeType !== 1) return;

        while (container.firstElementChild) {
            container.firstElementChild.remove();
        }

        if (flag) container.remove();
    }

    createCounterBox(id) {
        const container = this.createEl({ attributes: { "data-counter": id } });
        const btnContainer = this.createEl({});
        const content = this.createEl({ type: "p", content: "0" });
        const stopBtn = this.createEl({
            type: "button",
            content: "stop",
            attributes: { "data-stop": id },
        });
        const continueBtn = this.createEl({
            type: "button",
            content: "continue",
            attributes: { "data-continue": id },
        });
        const deleteBtn = this.createEl({
            type: "button",
            content: "delete",
            attributes: { "data-delete": id },
        });

        btnContainer.insertAdjacentElement("beforeend", stopBtn);
        btnContainer.insertAdjacentElement("beforeend", continueBtn);
        btnContainer.insertAdjacentElement("beforeend", deleteBtn);

        container.insertAdjacentElement("beforeend", content);
        container.insertAdjacentElement("beforeend", btnContainer);

        return container;
    }
}

class Counter extends CountersViewManager {
    constructor(root) {
        super();
        this.counters = [];
        this.root = root;
        this.container = null;
    }

    initCounter() {
        const timerId = JSON.stringify(Math.random());
        const timerBox = this.createCounterBox(timerId);

        let count = parseInt(prompt("Enter your count", 85), 10);
        if (isNaN(count) || count <= 0) {
            alert("Please enter a valid positive number!");
            return;
        }

        const intervalId = setInterval((formatTime) => {
            count--;
            const timer = this.counters.find((timer) => timer.timerId === timerId);
            if (timer) {
                console.log(this.counters)
                timer.count = count;
                timerBox.firstElementChild.textContent = this.formatTime(count);
            }
            if (count <= 0) {
                clearInterval(intervalId);
                timerBox.firstElementChild.textContent = "00:00:00";
            }
        }, 1000);

        this.counters.push({
            timerId,
            intervalId,
            count,
            timerBox,
        });

        this.container.insertAdjacentElement("beforeend", timerBox);
        return timerId;
    }

    stopCounter(timerId) {
        const timer = this.counters.find((timer) => timer.timerId === timerId);
        if (timer) {
            clearInterval(timer.intervalId);
        }
    }

    startCounter(timerId) {
        const timer = this.counters.find((timer) => timer.timerId === timerId);
        if (timer) {
            timer.intervalId = setInterval(() => {
                timer.count--;
                timer.timerBox.firstElementChild.textContent = timer.count;
            }, 1000);
        }
    }

    deleteCounter(timerId) {
        const timer = this.counters.find((timer) => timer.timerId === timerId);
        if (timer) {
            clearInterval(timer.intervalId);
            this.counters = this.counters.filter(
                ({ timerId }) => timerId !== timer.timerId,
            );
            this.clearContent(timer.timerBox, true);
        }
    }

    init() {
        const createBtn = this.createEl({
            content: this.createEl({
                type: "button",
                content: "Create counter",
            }),
        });
        const counterContainer = this.createEl({
            content: createBtn,
            attributes: {
                id: "counters",
            },
        });
        this.container = counterContainer;

        createBtn.addEventListener("click", () => {
            this.initCounter();
        });

        counterContainer.addEventListener("click", (e) => {
            const el = e.target;
            const dataAttributes = el.dataset;
            switch (true) {
                case "stop" in dataAttributes: {
                    this.stopCounter(dataAttributes.stop);
                    break;
                }
                case "continue" in dataAttributes: {
                    this.startCounter(dataAttributes.continue);
                    break;
                }
                case "delete" in dataAttributes: {
                    this.deleteCounter(dataAttributes.delete);
                    break;
                }
                default: {
                    console.log("default", e.target.dataset);
                }
            }
        });

        this.root.insertAdjacentElement("beforeend", counterContainer);
    }
}

new Counter(document.body).init();