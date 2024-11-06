const btn1 = document.querySelector('#btn1')
const output1 = document.querySelector('#output1')
const btn2 = document.querySelector('#btn2')
const output2 = document.querySelector('#output2')
const btn3 = document.querySelector('#btn3')
const output3 = document.querySelector('#output3 > p')
const btn4 = document.querySelector('#btn4')
const output4 = document.querySelector('#output4')
const btn5 = document.querySelector('#btn5')
const output5 = document.querySelector('#output5')
const message = document.querySelector('#message')

btn1.addEventListener('click', () => {
    let textColor = 'rgb(0, 0, 0)'
    output1.style.color = output1.style.color === 'red' ? textColor : 'red'

})

btn2.addEventListener('click', () => {
    const span = document.createElement('span')
    span.innerHTML = 'Hello word'
    const isSpan = output2.querySelector('span')
    if (isSpan) {
        isSpan.remove()
    } else {
        output2.append(span)
    }
})

btn3.addEventListener('click', () => {
    output3.classList.toggle('small-text')
})

btn4.addEventListener('click', () => {
    let textColor = 'rgb(0, 0, 0)'
    output4.style.color = output4.style.color === 'red' ? textColor : 'red'
})

btn5.addEventListener('click', () => {
    console.log(message.value)
})




