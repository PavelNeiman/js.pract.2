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




// console.log(parseInt(val.value));

document.querySelector('.bValue').onchange = function(){
    console.log(this.value);
    val = this.value;
    console.log (val)

}


btn.addEventListener('click' , counter.bind(this, val ));