let panel = document.querySelector('.arrow1')
let slidey = document.querySelector('.exist')
let panel2 = document.querySelector('.arrow2')
let c=1
panel.addEventListener('click', slider)
function slider () {
if (c%2 === 0) {
    document.querySelector('.exist').className ='exist'
    c++
}else {
    document.querySelector('.exist').className='exist panel'
c++
}
}



//panel2.addEventListener ('click', slideBack)

//function slideBack () {
  //  slidey.classList.add('nopanel')}

//for (i=0;i<panel.length)