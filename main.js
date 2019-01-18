var btn = document.querySelector('input.startBtn');
var ph = document.querySelector('p');
var val = document.querySelector('.bValue');





function counter(b){
    b--;
    console.log('осталось ' + b + ' заходов');
    if (b > 0){
        counter(b);
    }
}


// btn.onclick = function(){
//     this.style.backgroundColor = 'red';
//     console.log('ya rabotay')
// }


btn.addEventListener('click' , counter.bind(this, parseInt(val.value)));


console.log(parseInt(val.value));