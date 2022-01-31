const deg = 6
const hr = document.querySelector('#hr')
const min = document.querySelector('#min')
const seg = document.querySelector('#min')



setInterval(() => {
    let day = new Date()
    let hh = day.getHours() * 30
    let mm = day.getMinutes() * deg
    let ss = day.getSeconds() * deg

    hr.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`
    min.style.transform = `rotateZ(${mm}deg)`
    seg.style.transform = `rotateZ(${ss}deg)`
})

var tema = document.getElementById('#btnTema')
tema.style.backgroundColor = "white"
