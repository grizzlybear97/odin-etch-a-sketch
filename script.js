const container = document.querySelector('.container');
const changeGridBtn = document.querySelector('#change-grid-btn')
let gridSize = 10;
changeGridBtn.addEventListener('click', changeGrid);

function changeGrid(){
    let size = prompt('enter grid size (max 100)')
    

    
    size = Number(size)
    console.log(typeof(size))
    if(size >= 1 && size <= 100){
        container.innerHTML = ''
        createGrid(size)
    }else {
        alert('enter valid number')
    }
}



function createGrid(gridSize){
    for(let i = 0; i < gridSize; i++){
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('item-row');
        container.append(itemDiv);
        for(let j = 0; j < gridSize; j++){
            const item = document.createElement('div');
            item.classList.add('item');
            itemDiv.append(item);
            item.addEventListener('mouseover',() =>{
                //console.log(getRandomColor())
                item.style.backgroundColor = `${getRandomColor()}`;
            })
        }
    }
}

function getRandomColor()
{
    function randomNum(){
        return Math.floor(Math.random()*255);
    }
    return `rgb(${randomNum()},${randomNum()},${randomNum()})`
}
createGrid(gridSize)
