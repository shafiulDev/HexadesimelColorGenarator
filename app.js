const container = document.getElementById('container')
const colorName = document.getElementById('colorName')
const colorGenarateBtn = document.getElementById('colorGenarateBtn')

function hexColorGenarator(e) {

    let hexNo = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']

    let color = '#'
    for (let i = 0; i < 6; i++) {

        let num = Math.round(Math.random() * 15)
        let num2 = hexNo[num]
        color += num2
    }
    container.style.backgroundColor = color
    colorName.innerHTML = color
    colorName.style.color = color
}
colorGenarateBtn.addEventListener('click', hexColorGenarator)