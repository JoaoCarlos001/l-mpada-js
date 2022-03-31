const lampOn = document.getElementById('on')
const lampOff = document.getElementById('off')
const lamp = document.getElementById('lamp')
const img = document.getElementById('main')

lampOn.addEventListener('click', on)
lampOff.addEventListener('click', off)
lamp.addEventListener('mouseover',on)
lamp.addEventListener('mouseout', off)

function on(){
   lamp.src = './assets/lampada lig 3.jpg'
   img.style.boxShadow = '1px 5px 10px yellow';
   lampOff.style.visibility = 'visible';
   lampOn.style.visibility = 'hidden';
}

function off(){
    lamp.src = './assets/lampada deslig.jpg'
    img.style.boxShadow = 'none';
    lampOn.style.visibility = 'visible';
    lampOff.style.visibility = 'hidden';
}