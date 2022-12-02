document.querySelectorAll(`.charBottom`).forEach(content => {
    const items = content.querySelectorAll(`.content`)
    const buttonsHTML = Array.from(items, () => {
        return `<div class="point"></div>`
        console.log(buttonsHTML)
    })
});