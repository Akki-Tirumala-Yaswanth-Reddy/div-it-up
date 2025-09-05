const arr = []
let r = 8, c = 8;
const container = document.getElementById('container');

for(var i = 0 ; i < 16 ; i++){
    const row = document.createElement('div');
    const rowArr = []
    for(var j = 0 ; j < 16 ; j++){
        const pixel = document.createElement('div');
        pixel.style.display = 'inline-block';
        pixel.style.width = '20px';
        pixel.style.height = '20px';
        pixel.style.margin = '1px';
        pixel.style.background = 'white';
        pixel.style.border = '1px solid black';
        row.appendChild(pixel);
        rowArr.push(pixel);
        }
    arr.push(rowArr);
    container.appendChild(row);
}

focusOn(r,c);

function changeColor(i, j){
    const pixel = arr[i][j];
    pixel.style.background = pixel.style.background === 'white' ? 'black' : 'white';
}

function focusOn(i, j){
    const pixel = arr[i][j];
    pixel.style.border = '1px dashed blue';
}

function unFocus(i, j){
    const pixel = arr[i][j];
    pixel.style.border = '1px solid black';
}

function reset(){
    arr.forEach(row => {
        row.forEach(pixel => {
            pixel.style.background = 'white';
        })
    })
    resetElement = document.getElementById('reset');
    resetElement.blur();
}

document.addEventListener('keydown', (e) => {
    const key = e.key;
    if (key === 'a' && c > 0){
        unFocus(r,c);
        c--;
        focusOn(r,c);
    }
    else if (key === 'd' && c < 15){
        unFocus(r,c);
        c++;
        focusOn(r,c);
    }
    else if (key === 's' && r < 15){
        unFocus(r,c);
        r++;
        focusOn(r,c);
    }
    else if (key === 'w' && r > 0){
        unFocus(r,c);
        r--;
        focusOn(r,c);
    }
    else if (key === 'Enter'){
        changeColor(r,c);
    }
});

