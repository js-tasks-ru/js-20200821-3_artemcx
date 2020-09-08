export default class NotificationMessage {
    element;
    isNotificationShown = false;
    timeoutID = 0;

    constructor(message, {duration, type} = {}) {
        this.message = message;
        this.duration = duration;
        this.type = type;
        this.render();
    }

    get template() {
        return `
        <div class="notification ${this.type}" style="--value:20s">
            <div class="timer"></div>
            <div class="inner-wrapper">
                <div class="'notification-header">${this.type}</div>
                <div class="notification-body">
                    ${this.message}
                </div>
            </div>
        </div>
        `
    }


    render() {
        const element = document.createElement('div');

        element.innerHTML = this.template;

        this.element = element.firstElementChild;

    }

    show(target) {
        if (!this.isNotificationShown) {
            this.timeoutID = setTimeout(() => {
                this.remove()
            }, this.duration)
            this.isNotificationShown = true;
            target ? target.appendChild(this.element) :
                document.body.appendChild(this.element);
        }
    }

    remove() {
        this.element.remove();
        this.isNotificationShown = false;
    }

    destroy() {
        this.remove();
        // this.element = null;
    }

}
