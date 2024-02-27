let count = 0;

document.getElementById('decrease').onclick = function() {
    if (count === 0) {
        count = 0
    }
    else {
        count-=1;
        document.getElementById('countLabel').innerHTML = count;
    
    }
        
}

document.getElementById('reset').onclick = function() {
    count = 0
    document.getElementById('countLabel').innerHTML = count;
}

document.getElementById('increase').onclick = function() {
    if (count === 10){
        count = 10
        document.getElementById('countLabel').innerHTML = 'Seloco ganhou';
    
    }
    else {
        count+=1;
        document.getElementById('countLabel').innerHTML = count;

    }
}