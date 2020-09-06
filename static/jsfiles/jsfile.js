function clickMe(){
birthday=prompt("what is you birth year ?")
var days=(2020-birthday)*365
var h1=document.createElement('h1')
var node=document.createTextNode('your age is '+days)

h1.setAttribute("id","ageInDays")
h1.appendChild(node)
document.getElementById('flex-box-result').appendChild(h1)
}
function reset(){
    document.getElementById('ageInDays').remove()
}
function generatePika(){
    var image=document.createElement('img')
    image.src="https://media1.tenor.com/images/4c050b61abb46c8bc1fea2ecff97dc9f/tenor.gif?itemid=16139297"
    document.getElementById('pika-generate').appendChild(image)

}