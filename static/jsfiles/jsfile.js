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
    console.log(copy.push(buttons[i].classList[1]))
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
    }
}
function functionRed() {
    for(let i=0;i<copy.length;i++){
        buttons[i].classList.remove(copy[i].classList[1]);
        buttons[i].classList.add('btn-danger');
    }
}
    