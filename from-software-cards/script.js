const panels = document.querySelectorAll('.panel')

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeEnabled()
        panel.classList.add('enabled')
    })
})

function removeEnabled() {
    panels.forEach((panel) => {
        panel.classList.remove('enabled')
    })
}