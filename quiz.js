var myQuestions = [
    {
      question: "You cut out a piece of me and now I bleed internally/Left here without you (No, no, no), without you (Ooh)",
      answers: {
        a: 'Male',
        b: 'Female',
      },
      correctAnswer: 'a'
    },
    {
      question: "Center of attention/You know you can get whatever you want from me/Whenever you want it, baby",
      answers: {
        a: 'Male',
        b: 'Female',
      },
      correctAnswer: 'b'
    },
    {
        question: "You're supposed to hold me down/But you're holding me back/And that's the sound of me not calling you back",
      answers: {
        a: 'Male',
        b: 'Female',
      },
      correctAnswer: 'b'
    },
    {
        question: "You tell me, ain't nobody better than me, I think that there's better than me/Hope you see the better in me, always end up better in' me",
      answers: {
        a: 'Male',
        b: 'Female',
      },
      correctAnswer: 'a'
    }
  ];
  
  var quizContainer = document.getElementById('quiz');
  var resultsContainer = document.getElementById('results');
  var submitButton = document.getElementById('submit');
  
  generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);
  
  function generateQuiz(questions, quizContainer, resultsContainer, submitButton){
  
    function showQuestions(questions, quizContainer){
      // we'll need a place to store the output and the answer choices
      var output = [];
      var answers;
  
      // for each question...
      for(var i=0; i<questions.length; i++){
        
        // first reset the list of answers
        answers = [];
  
        // for each available answer...
        for(letter in questions[i].answers){
  
          // ...add an html radio button
          answers.push(
            '<label>'
              + '<input type="radio" name="question'+i+'" value="'+letter+'">'
              + letter + ': '
              + questions[i].answers[letter]
            + '</label>'
          );
        }
  
        // add this question and its answers to the output
        output.push(
          '<div class="question">' + questions[i].question + '</div>'
          + '<div class="answers">' + answers.join('') + '</div>'
        );
      }
  
      // finally combine our output list into one string of html and put it on the page
      quizContainer.innerHTML = output.join('');
    }
  
    function showResults(questions, quizContainer, resultsContainer){
      
        // gather answer containers from our quiz
        var answerContainers = quizContainer.querySelectorAll('.answers');
        
        // keep track of user's answers
        var userAnswer = '';
        var numCorrect = 0;
        
        // for each question...
        for(var i=0; i<questions.length; i++){
    
          // find selected answer
          userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
          
          // if answer is correct
          if(userAnswer===questions[i].correctAnswer){
            // add to the number of correct answers
            numCorrect++;
            
            // color the answers green
            answerContainers[i].style.color = 'lightgreen';
          }
          // if answer is wrong or blank
          else{
            // color the answers red
            answerContainers[i].style.color = 'red';
          }
        }
    
        // show number of correct answers out of total
        resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
      }
    
      // show questions right away
      showQuestions(questions, quizContainer);
      
      // on submit, show results
      submitButton.onclick = function(){
        showResults(questions, quizContainer, resultsContainer);
      }
  
}