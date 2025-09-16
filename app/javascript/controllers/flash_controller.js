import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    connect() {
        // Wait 5 seconds (5000 milliseconds) then call the close method
        setTimeout(() => {
            this.close()
        }, 5000)
    }

    // This action removes the flash message element from the page
    close() {
        this.element.remove()
    }
}