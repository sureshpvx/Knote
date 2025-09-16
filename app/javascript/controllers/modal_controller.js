import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    static targets = ["modal", "dialog"]

    connect() {
        // We only need the Escape key listener here now
        this.boundCloseOnEscape = (e) => this.closeOnEscape(e)
        document.addEventListener("keydown", this.boundCloseOnEscape)
    }

    disconnect() {
        document.removeEventListener("keydown", this.boundCloseOnEscape)
    }

    open() {
        this.modalTarget.classList.remove("hidden")
        this.modalTarget.classList.remove("opacity-0")
        this.dialogTarget.classList.remove("scale-95")
    }

    close() {
        this.modalTarget.classList.add("opacity-0")
        this.dialogTarget.classList.add("scale-95")

        setTimeout(() => {
            this.modalTarget.classList.add("hidden")
        }, 300)
    }

    closeOnEscape(event) {
        if (event.key === "Escape") {
            this.close()
        }
    }
}