


var left = 0;
function abc() {
    console.log(characters)
    var characters = document.getElementById('characters');
    if(event.keyCode === 68 ){
        left= left + 10
        characters.style.left  = left+'px'

    }
    if(event.keyCode===65){
        left= left - 10
        characters.style.left  = left+'px'
    }
}
    
window.onkeydown = abc;

function foo (){
    console.log('two')
}
console.log('one')
setTimeout(foo, 1000)
console.log('three')
    


   
    




    

