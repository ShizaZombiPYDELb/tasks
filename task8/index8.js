let ladder = {
    lad: 0,
    up: function () {
        this.lad ++
        return this;// підніматиме вас на одну сходинку
    },
    down: function () {
        if (this.lad <= 0) console.log("куди? низче никуди")
        else this.lad --
            return this;// опускатиме вас на одну сходинку
    },
    showStep: function () {
        console.log(this.lad)
        return this;// показує поточну сходинку
    }
};

ladder.up().up().down().showStep(); // 1

