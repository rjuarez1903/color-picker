const colorChoice  = document.querySelector('#color-choice')
const modeChoice   = document.querySelector('#mode')
const getSchemeBtn = document.querySelector('#get-scheme-btn')
const section      = document.querySelector('section')

const renderColors = (data) => {
    const colors = data.colors
    colors.forEach(element => {
        section.innerHTML += `
        <div class="color-col">
            <div class="color" style="background-color: ${element.hex.value}"></div>
            <p>${element.hex.value}</p>
        </div>
        `
    });
}

const getScheme = (e) => {
    section.innerHTML = ''
    e.preventDefault()
    const baseURL = 'https://www.thecolorapi.com/'
    const color   = colorChoice.value.slice(1)
    const mode    = modeChoice.value
    console.log(color)
    console.log(mode)
    console.log('Clicked')
    fetch(`${baseURL}scheme?hex=${color}&mode=${mode}`)
        .then(response => response.json())
        .then(data => {
            renderColors(data)
        })
}

getSchemeBtn.addEventListener('click', getScheme)