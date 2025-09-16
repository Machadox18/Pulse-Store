const prevButton = document.getElementById('prev')
const nextButton = document.getElementById('next')
const items = document.querySelectorAll('.item')/*tem vários elementos,por isso tem All*/
const dots = document.querySelectorAll('.dot')
const numberIndicator = document.querySelector('.numbers')/*só tem um elemento*/
const list = document.querySelector('.list')

let active = 0; //let:um valor que pode ser trocado/mudado
const total = items.length  //const:um valor que é contante,resumindo,não pode ser mudado
let timer;

function update(direction) {

    document.querySelector('.item.active').classList.remove('active')
    document.querySelector('.dot.active').classList.remove('active')


    if(direction > 0){
        active = active + 1

        if(active === total){
            active = 0
        }
    }
    
    
    else if(direction < 0){
        active = active -1
    
        if(active < 0){
            active = total -1
        }
    
    }

    items[active].classList.add('active')
    dots[active].classList.add('active')

    
    numberIndicator.textContent = String(active + 1).padStart(2,'0') /*vai adicionar algo no início,neste caso em específico,o número foi convertido para string,para assim,a representação da página passará de 1 para 01 e assim sucessivamente.o 2 significa o número de carcteres que terá*/
                                                                            
}
clearInterval(timer)
timer = setInterval(() => {
    update(1)
   }, 5000); //são milisegundos,5000 mil milisegundos = 5 segundos

prevButton.addEventListener('click', function() {
  update(-1)
})

nextButton.addEventListener('click', function() {
  update(1)
})
   

