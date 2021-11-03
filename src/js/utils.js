document.addEventListener('DOMContentLoaded', () => {
    // Set year at footer
    const spanYear = document.querySelector('#footYear'),
    date = new Date(),
    year = date.getFullYear()
    spanYear.textContent = year
})