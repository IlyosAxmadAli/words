const sansSerif = document.querySelector('.sans-serif')
const serif = document.querySelector('.serif')
const mono = document.querySelector('.mono')
const fontSelect = document.querySelector('.font-select')

sansSerif.addEventListener('click', () => {
    document.body.style.fontFamily = 'sans-serif'
    fontSelect.textContent = 'Sans Serif'
})
serif.addEventListener('click', () => {
    document.body.style.fontFamily = 'serif'
    fontSelect.textContent = 'Serif'
})
mono.addEventListener('click', () => {
    document.body.style.fontFamily = 'monospace'
    fontSelect.textContent = 'Mono'
})