var position = 0, test, test_status, question, userChoice,choices, chA,chB,chC,chD;
var correct = 0;

var bank = [
    ['What does une bibliothèque mean ?','a libray','a house','a bakery','a shop',0],
    ['What is une patinoire?','swimming pool','ice rink','car park','book shop',1],
    ['What is un champignon ?','a carrot','a mushroom','a strawberry','an onion',1],
    ['What does un librairie mean?','a library','a bank','a bookshop','a hospital',2],
    ['Vous ........ dans un bureau?','travaille','travailles','travailler','travaillez',3],
    ['Which of these can you not drink?','citron pressé ','fleu','chocolat','eau',1],
    ['Les lettres sont ......... le tiroir dela commode?','dans','par','au','devant',0],
    ['Which is not a means of transport?','bateau','camion','parapluie','moto',2],
    ['Which is not edible?','riz','poisson','carte','poulet',2],
    ['What is deux cent vingt?','20','2','100','220',3],
    ['What is a baker shop?','une boulangerie','un timbre','une poste','un marché',0],
    ['Which is 86?','soixante seize','cinquante six','quatre vingt seize','quatre-vingt six',3]
]
//shuffle the question bank

function shuffle (){
    var i = bank.length, j, temp;
    while(--i>0){
        j = Math.floor(Math.random()*(i+1));
        temp = bank[j];
        bank[j]= bank[i];
        bank[i]= temp;
    }
    return bank;
}
//get the first 5 question after shuffling the bank
shuffle();
var questions = bank.slice(0,5);

//show the questions and the answers which were chosen by users



function _(x){
    return document.getElementById(x);
}

function renderQuestion(){
    test = _('test');
    final=_('final')
    //for the last question
    if(position>=questions.length){
        test.innerHTML='';
        final.innerHTML = "<h3>You got "+ correct + " of "+ questions.length + " questions correct</h3>";
        _('test_status').innerHTML='Test completed';
        _('result').innerHTML='';
        final.innerHTML +="<button class='restart btn' id='restart-btn' onclick='restart()'><span>Restart</span></button>";
        allUserChoices=[];
        position=0;
        correct=0;
        return false //stop renderQuestion function continuing after this line
    }
    //show what question u are on
    _('test_status').innerHTML='Question ' + (position+1)+" of "+ questions.length;
    //
    question=questions[position][0];
    chA=questions[position][1];
    chB=questions[position][2];
    chC=questions[position][3];
    chD=questions[position][4];
    _('result').innerHTML='';
    test.innerHTML ="<h3 id='question'>"+ question +"</h3>"
    test.innerHTML += "<div class='container'><input type='radio' id='chA' name='choices' value='0'><label for='chA'>" + chA +"</label></div>";
    test.innerHTML += "<div class='container'><input type='radio' id='chB' name='choices' value='1'><label for='chB'>" + chB +"</label></div>";
    test.innerHTML += "<div class='container'><input type='radio' id='chC' name='choices' value='2'><label for='chC'>" + chC +"</label></div>";
    test.innerHTML += "<div class='container'><input type='radio' id='chD' name='choices' value='3'><label for='chD'>" + chD +"</label></div>";

    test.innerHTML += "<button class='check btn' id='check-btn' onclick='checkAnswer()'><span>Check</span></button>";
}

//show all results of the question after user click check answer btn
function showResult(){
    _('result').innerHTML += '<h5>Q: ' + questions[position][0] + '</h5>';
    for(var i=1;i<5;i++){
        _('result').innerHTML += '<p class="gray-background" id="opt'+(i-1)+'">'+ questions[position][i]+'</p>';
    } 
    _('result').innerHTML +='<button class="next btn" id="next-btn" onclick="nextQuestion()"><span>Next</span></button>';    
}
var allUserChoices=[];
function checkAnswer(){
    //look through group whose class name is /choices/ to see which choice is selected by a user
    choices = document.getElementsByName('choices');//the result of this is an array of input 
    for(var i = 0; i < choices.length;i++){
        if(choices[i].checked){
            userChoice=choices[i].value;
                        
        }        
    }
    console.log('user choice'+ userChoice);
    if(userChoice == questions[position][5]){
        correct ++;
        _('test').innerHTML='';
        _('result').innerHTML = '<h4>Congratulation!</h4>';
        showResult();
        //add green background to the correct choice
        //getElementByClassName('gray-background')is an array which stores 4 options: 0,1,2,3
        document.getElementsByClassName('gray-background')[userChoice].className='correct-answer'; 

    }else{
        _('test').innerHTML='';
       _('result').innerHTML = '<h4>Sorry! It\'s a shame</h4>';
       showResult();
       var choiceId= 'opt'+ userChoice;
       var correctId= 'opt' + questions[position][5];
       _(choiceId).classList.remove('gray-background');
       _(correctId).classList.remove('gray-background');
       _(choiceId).classList.add('wrong-answer');
       _(correctId).classList.add('correct-answer');
       
    }
    
    //show the finish btn at last question, instead of next btn??
    
    position = position +1;
    ;
    
}



//start the test,also works for next btn
function nextQuestion(){
  renderQuestion();
}

function restart(){
    _('final').innerHTML='';
    shuffle();
    questions = bank.slice(0,5);
    renderQuestion();
}
//load the question
window.addEventListener("load",renderQuestion,false);


