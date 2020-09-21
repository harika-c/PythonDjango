function rockGame(humanChoice)
{
console.log(humanChoice.id)
var bot=botChoice(randomNumber())
// console.log(bot)
var a=returnArray(humanChoice.id,bot)
info=whoWon(a)
// console.log(info)
frontEnd(humanChoice.id,bot,info)
}
function randomNumber(){
    return Math.round(Math.random()*2)
}
function botChoice(number){
    return ['rock','paper','scissors'][number]
}
function returnArray(humanChoice, botChoice){
    choose={'rock':{'rock':0.5,'scissors':1,'paper':0},
            'paper':{'rock':1,'scissors':0,'paper':0.5},
            'scissors':{'rock':0,'scissors':0.5,'paper':1}
    }
    human=choose[humanChoice][botChoice]
    bot=choose[botChoice][humanChoice]
    
    return [human,bot];
}
function whoWon([human,bot]){
    if(human===0){
        return {'message':'you lost','color':'red'}
    }else if(human===0.5){
        return {'message':'you tie','color':'yellow'}
    }else{
        return {'message':'you won','color':'green'}
    }

}
function frontEnd(human,bot,info){
    var data={
        'rock':document.getElementById('rock').src,
        'paper':document.getElementById('paper').src,
        'scissors':document.getElementById('scissors').src
    }

    document.getElementById('rock').remove()
    document.getElementById('paper').remove()
    document.getElementById('scissors').remove()
    
    humanChoice=document.createElement('div')
    bottChoice=document.createElement('div')
    text=document.createElement('div')

    humanChoice.innerHTML="<img src='"+data[human]+"' width=200 height=200 style='box-shadow:0px  10px 50px rgba(37,50,233,1)'>"
    text.innerHTML="<h2 style='color:"+info.color+"'; font-size:80px; padding:30px;>"+info.message+"<h2>"
    bottChoice.innerHTML="<img src='"+data[bot]+"' width=200 height=200 style='box-shadow:0px  10px 50px rgba(243,38,24,1)'>"
    
    console.log(humanChoice)    
    
    document.getElementById('fl').appendChild(humanChoice)
    document.getElementById('fl').appendChild(text)
    document.getElementById('fl').appendChild(bottChoice)
    
}
buttons=document.getElementsByTagName("button")
var copy=[]
for (let i=0; i<buttons.length;i++)
{
    copy.push(buttons[i].classList[1])
}
console.log(copy)

function buttonColorChange(ele)
{
    console.log(ele.value)
    if(ele.value === 'red'){
        functionRed();
    }else if(ele.value==='green'){
        functionGreen();
    }else if(ele.value ==='reset'){
        functionReset();
    }else {
        randomFunction();
    }
}
function functionRed() {
    for(let i=0;i<copy.length;i++){
        buttons[i].classList.remove(buttons[i].classList[1]);
        buttons[i].classList.add('btn-danger');
    }
}
function functionGreen() {
    for(let i=0;i<copy.length;i++){
        buttons[i].classList.remove(buttons[i].classList[1]);
        buttons[i].classList.add('btn-success');
    }
}
function functionReset() {
    for(let i=0;i<copy.length;i++){
        buttons[i].classList.remove(buttons[i].classList[1]);
        buttons[i].classList.add(copy[i]);
    }
}
function randomFunction(){
    var randombtns=["btn-primary", "btn-danger", "btn-success", "btn-warning"];
    
    for (let i=0;i<copy.length;i++){
        let randombutton=copy[Math.floor(Math.random()*4)]
        buttons[i].classList.remove(buttons[i].classList[1]);
        buttons[i].classList.add(randombutton);
    }
}
document.querySelector('#blackjack-hit').addEventListener('click',hitButton);
document.querySelector('#blackjack-deal').addEventListener('click',dealButton);
document.querySelector('#blackjack-stand').addEventListener('click',standButton);
yourcards={
    'you':{'scoreSpan':'#your-box-result','div':'#your-box','score':0},
    'dealer':{'scoreSpan':'#dealer-box-result','div':'#dealer-box','score':0},
    'cards':['2','3','4','5','6','7','8','9','10','K','J','Q','A'],
    'cardsMap':{'2':2,'3':3,'4':4,'5':5,'6':6,'7':7,'8':8,'9':9,'10':10,'J':1,'Q':1,'K':1,'A':[1,11]}
}
const youData=yourcards['you'];
const dealerData=yourcards['dealer'];
const randomCard=yourcards['cards'];
const cardsMap=yourcards['cardsMap'];
const hitSound=new Audio('static/sounds/swish.mp3');
const awwSound=new Audio('static/sounds/aww.mp3');
const cashSound=new Audio('static/sounds/cash.mp3');
var total=0;

function hitButton(){
    var card=randomCards()
    totalOfCards(card)
    // showCard(dealerData,card);
    showCard(youData,card);
    totalOfCards(youData,card);
    updateUiScore(youData);
}
function showCard(data,card){
    if(data['score']<=21){
        var createImg=document.createElement('img');
        createImg.src='static/images/'+card+'.png';
        createImg.height=100;
        document.querySelector(data['div']).appendChild(createImg);
        hitSound.play();
    }
}

function dealButton(){
    win=computeWinner();
    showResult(win);
    images=document.querySelector(youData['div']).querySelectorAll('img');
    imagesOfDealer=document.querySelector(dealerData['div']).querySelectorAll('img');

    for (let i=0;i<images.length;i++){
        images[i].remove()
    }
    for (let i=0;i<imagesOfDealer.length;i++){
        imagesOfDealer[i].remove()
    }
    youData['score']=0
    dealerData['score']=0
    document.querySelector(youData['scoreSpan']).textContent=0;
    document.querySelector(dealerData['scoreSpan']).textContent=0;

    document.querySelector(youData['scoreSpan']).style.color='#ffffff';
    document.querySelector(dealerData['scoreSpan']).style.color='#ffffff';
}
function randomCards(){
    return randomCard[Math.floor(Math.random(randomCard)*randomCard.length)]
    }
function totalOfCards(yourdata,card){
    if(card=='A'){
        if(yourdata['score']+cardsMap[card][1]<=21){
            yourdata['score']+=cardsMap[card][1];
        }else{
            yourdata['score']+=cardsMap[card][0];
        }
    }else{
        yourdata['score']+=cardsMap[card];
    }
    
    console.log(yourdata['score'])
}
function updateUiScore(yourdata){
    if(yourdata['score']>21){
        var k=document.querySelector(yourdata['scoreSpan']).textContent='Bust!!!';
        // var k=document.getElementById('your-box-result').textContent='BUST!!!'
        console.log(k)
        document.querySelector(yourdata['scoreSpan']).style.color='red';
    }
    else{
        document.querySelector(yourdata['scoreSpan']).textContent=yourdata['score'];
    }
}
function dealerLogic(){
    let card=randomCards();
    showCard(dealerData,card);
    totalOfCards(dealerData,card);
    updateUiScore(dealerData);
    
}
function standButton(){
    dealerLogic();
}
function computeWinner(){
    let winner;
   console.log(dealerData['score'],youData['score'])
    if(dealerData['score']==youData['score']){
        console.log("you drew");    
    }
    else if(youData['score']<=21)
    {
        if(dealerData['score']>21){
            console.log("you won");
            winner=youData;
        }else if(dealerData['score']<youData['score']){
            console.log("you won");
            winner=youData;
        }else if(dealerData['score']<=21&&dealerData['score']>youData['score']){
            console.log("dealer won");
            winner=dealerData;
        }
    }else if (youData['score']>21&&dealerData['score']<=21){
        console.log("dealer won");
        winner=dealerData;
    }else if(dealerData['score']>21&&youData['score']>21 ){
        console.log("you drew");
    }
    console.log("winner is ",winner)
    return winner;
}
function showResult(winner){
    console.log(winner,';;;;;;;;;;;;;;;;;')
    let textIs;
    let colorIs;
    if(winner == dealerData){
        textIs="You Lost :(";
        colorIs='red';
        awwSound.play();
    }else if(winner == youData){
        textIs="You Won :)";
        colorIs='green';
        cashSound.play();
    }else {
        textIs="You Drew :/";
        colorIs='yellow';
    }
    document.querySelector('#black-jack-result').textContent=textIs;
    document.querySelector('#black-jack-result').style.color=colorIs;
}