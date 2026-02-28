


var questions = [
    {
        question: 'What does HTML stand for-?',
        Option1: 'Hyper Text Markup Language',
        Option2: 'High Text Markup Language',
        Option3: 'Hyperlinks Text Markup Language',
        Option4: 'Home Tool Markup Language',
        answer: 'Hyper Text Markup Language'
    },

    {
        question: 'Which tag is used to define a paragraph in HTML?',
        Option1: 'para',
        Option2: 'p',
        Option3: 'pg',
        Option4: 'paragraph',
        answer: 'p'
    },

    {
        question: 'What is the purpose of the <br> tag?',
        Option1: 'Start a new paragraph',
        Option2: 'Break line',
        Option3: 'Bold text',
        Option4: 'Create a list',
        answer: 'Break line'
    },
]
var index = 0;
var score = 0;

function renderQuestion() {

    var question = document.getElementById('question');

    var options = document.getElementsByName('option');
    for (var i = 0; i < options.length; i++) {
        // console.log(option[i].value)
        if (options[i].checked) {
            if (options[i].value === questions[index - 1].answer) {
                score++;
            }
            // console.log(options[i].value)
        }


    }
    if (!questions[index]) {
        console.log('Result:' + score)
        return;
    }


    questions.innerHTML = `
        
        <div>
           <p>${questions[index].question}</p>

           <label> <input type="radio" name="option" value='${questions[index].Option1}'>${questions[index].Option1}</label>
            <label ><input type="radio" name="option" value='${questions[index].Option2}'>${questions[index].Option2}</label>
            <label ><input type="radio" name="option" value'${questions[index].Option4}'>${questions[index].Option4}</label>
            <label><input type="radio" name="option" value='${questions[index].Option3}'>${questions[index].Option3}</label>
              
            

        </div>
    `
    index++;
}
renderQuestion()

// function renderQuestion(){

// }