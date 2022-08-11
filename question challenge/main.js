/*let questions = ['Will you be successful in your journey of Javascript?', 'Will ifuy accept your proposal to marry you?', 'How is your journey so far as a software engineer']

randomQuestion = Math.floor(Math.random() * questions.length)
console.log(questions[randomQuestion])

function prompt(){

    prompt('Kindly enter your preferred answer in the box below')
}
prompt()

let question = {
    quest: 'What is the name of this course\'s teacher?',
    answers: ['John', 'Micheal', 'Jonas'],
    correctAns: function(){
        for(let i = 0; i < this.answers.length; i++){
            let answer = this.answers[i]
            console.log(answer)
            if(answer === 'Jonas'){
                console.log('Correct answer!')
            }else {
                console.log('Wrong answer')
            }
        }
    }
}
*/
(function(){

    function Question(question, answers, correct){
        this.question = question,
        this.answers = answers,
        this.correct = correct
    }
    
    Question.prototype.displayQuestion = function (){
        console.log(this.question)
    
        for(let i = 0; i < this.answers.length; i++){
            console.log(i + ': ' + this.answers[i])
        }
    }
    
    Question.prototype.checkAnswer = function(ans, callback){
        let sc;
        if(ans === this.correct){
            console.log('Correct answer')
            sc = callback(true)
        }else {
            console.log('Wrong answer, Try again!!')
            sc = callback(false)
        }
        this.displayScore(sc)
    }

    Question.prototype.displayScore = function(score){
        console.log('Your current score is: ' + score)
        console.log('-------------------------------------------')
    }
    
    let q1 = new Question('Is Javascript the coolest programming language in the world?', ['Yes', 'No'], 0)
    
    let q2 = new Question('Will ifuy accept your proposal to marry you?', ['Yes', 'No'], 0)
    
    let q3 = new Question('What is the name of the course\'s teacher?', ['John', 'Mary', 'Jonas', 'Isaac'], 2)
    
    let q4 = new Question('What best does describe coding?', ['Fun', 'Boring', 'Hard', 'Lite'], 0)
    
    let questions = [q1, q2, q3, q4]

    function score(){
        let sc  = 0;
        return function (correct){
            if (correct){
                sc++
            }
                return sc
            }
        }
    let keepScore = score()

    function nextQuestion(){
    
    let randomQuestion = Math.floor(Math.random() * questions.length)
    console.log(questions[randomQuestion])
    questions[randomQuestion].displayQuestion()
    
    let answer = prompt('Please, enter the correct answer to the question OR type (exit) to remove the prompt dialog')
    

    if(answer !== 'exit'){
        questions[randomQuestion].checkAnswer(parseInt(answer), keepScore)
        nextQuestion()
    }
    }

    nextQuestion()
    

})
()

