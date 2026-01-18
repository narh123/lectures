// function submit() {
//   var test = document.getElementById('test')
// console.log(test.value)

//test.value = ' ';

// function submit(){
// var test = document.getElementById('test')
// console.log(test.value)

// test.value = '';
// }
// function submit(){
//     var radio = document.getElementsByName('gender')


//     for(var i=0; i<radio.length; i++){
//         if(radio[i].checked){
//             console.log(radio[i].value)
//     //    console.log(radio[i].checked)   
//         }

//     }

// // console.log(radio)
// }


// function submit(){
//     event.preventDefault()
//     console.log(e)
// }
// function validateName(){
//     var firstName = document.getElementById('firstName')
//     if(firstName.value){
//         firstName.style.border = '2px solid red'

//     }
//     console.log(firstName)
// }
// function inputChange(){
//     console.log('test')
// }
// function submit(){
//     var firstName = document.getElementById('firstName');
//     var lastName = document.getElementById('lastName');
//     var heading = document.getElementById('heading');
//     heading.innerHtml = firstName.value + '' + lastName.value

// }
// heading.innerHTML = '<i>hello world</i>'

function expandText(){
    // var shortText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    // var text = '  Ipsa neque magni atque sed rerum, nulla sit, dolorem natus aperiam libero, praesentium veritatis inventore exercitationem. Ad a temporibus deserunt recusandae ab?'

    var para = document.getElementById('para');
    var link = document.getElementById('link');
    var showText = document.getElementById('showText')

    if (link.innerHTML === 'see more') {
        para.innerHtml = 'see less'
        showText.style.display = 'block'
    } else {
        // para.innerHtml = shortText
        link.innerHTML = 'see more'
        showText.style.display = 'block'



    }


}
