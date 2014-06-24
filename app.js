(function() {
    var score = 0,
        currentQuestion = 0,
        questions = [{
            question: "Who is the current president of the USA?",
            choices: ['George Bush', 'Barack Obama', 'John F Kennedy', 'Bill Clinton'],
            answer: 1
        }, {
            question: "Test2",
            choices: ['George Bush', 'Barack Obama', 'John F Kennedy', 'Bill Clinton'],
            answer: 1
        }, {
            question: "Test3",
            choices: ['George Bush', 'Barack Obama', 'John F Kennedy', 'Bill Clinton'],
            answer: 1
        }, {
            question: "Test4",
            choices: ['George Bush', 'Barack Obama', 'John F Kennedy', 'Bill Clinton'],
            answer: 1
        }];

    var addChoices = function addChoices(question) {
        var questionSpan = document.getElementById('question');
        var scoreSpan = document.getElementById('score');
        var lists = document.querySelectorAll('li');
        if (currentQuestion < questions.length) {
            var choices = question.choices; // take passed in object and assign choices array
            questionSpan.innerHTML = " " + question.question; // take passed in object and assign question
            for (var i = 0; i < 4; i++) {
                lists[i].innerHTML = choices[i];
            };
            scoreSpan.innerHTML = " " + score;
        }
    }
    var submitChoice = function submitChoice(choice) {
        var question = questions[currentQuestion];
        if (choice === question.answer) {
            score += 20;
            currentQuestion += 1;
            addChoices(questions[currentQuestion]);
        } else {
            currentQuestion += 1;
            addChoices(questions[currentQuestion]);
        }
    }

    // event listeners 
    // can be refactored using loop and setting buttons in a container to make a nodelist

    {
        document.getElementById("A").addEventListener('click', function() {
            if (currentQuestion < questions.length) {
                submitChoice(0);
            }
        }, false);
        document.getElementById("B").addEventListener('click', function() {
            if (currentQuestion < questions.length) {
                submitChoice(1);
            }
        }, false);
        document.getElementById("C").addEventListener('click', function() {
            if (currentQuestion < questions.length) {
                submitChoice(2);
            }
        }, false);
        document.getElementById("D").addEventListener('click', function() {
            if (currentQuestion < questions.length) {
                submitChoice(3);
            }
        }, false);
    }

    // initialize first question in page
    addChoices(questions[currentQuestion]);


})();