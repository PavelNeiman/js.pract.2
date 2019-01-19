var btn = document.querySelector('input.startBtn');
var ph = document.querySelector('p');
var val;





function counter(b){
    b--;
    console.log('осталось ' + b + ' заходов');
    if (b > 0){
        counter(b);
    }
}






document.querySelector('.bValue').oninput = function(){
    val = this.value;
    btn.addEventListener('click' , counter.bind(this, val ));
    document.querySelector('p.textp').innerHTML = this.value;
    val = [];
    
}


