///1
const box = document.querySelector('.box')

let positionX = 0
let positionY = 0

const move = () => {
    if (positionX <= 440 && positionY <= 0) {
        positionX += 8
        box.style.left = `${positionX}px`
        setTimeout(move, 1)
    } else if (positionX >= 440 && positionY <= 440) {
        positionY += 8
        box.style.top = `${positionY}px`
        setTimeout(move, 1)
    } else if (positionY === 448 && positionX !== 0) {
        positionX -= 8
        box.style.left = `${positionX}px`
        setTimeout(move, 1)
    } else {
        positionY -= 8
        box.style.top = `${positionY}px`
        setTimeout(move, 1)
    }
}
move()

///2
const text = document.querySelector('.text')
const stop = document.querySelector('.stop')
const start = document.querySelector('.start')

let count = 0
let clear;

start.onclick = () =>{
    clear = setInterval(() => {
        count++
        text.innerText = count
    }, 1000)
}

stop.onclick = () =>{
    clearInterval(clear)
}






