// app/javascript/controllers/modal_controller.js
import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    // The this.element is the <div id="modal_container">

    open() {
        // Make the modal visible and start the fade-in transition
        this.element.classList.remove("hidden");
        requestAnimationFrame(() => this.element.classList.remove("opacity-0"));
    }

    close() {
        // Start the fade-out transition
        this.element.classList.add("opacity-0");

        // After the transition ends, hide the modal and clear its content
        setTimeout(() => {
            this.element.classList.add("hidden");
            this.clearFrame();
        }, 300); // This duration should match your CSS transition duration
    }

    // Helper function to find and clear the turbo-frame
    clearFrame() {
        const frame = this.element.querySelector("turbo-frame");
        if (frame) {
            frame.innerHTML = "";
        }
    }
}