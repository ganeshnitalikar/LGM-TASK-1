var myNodeList = document.getElementsByTagName('li');
var i;

for(i=0; i<myNodeList.length; i++)
{
    var span = document.createElement('span');
    var txt = document.createTextNode('\u00D7');
    span.className='close';
    span.appendChild(txt);
    myNodeList[i].appendChild(span);
}


//Remove Task Button Logic
var close=document.getElementsByClassName('close');
var i;

for(i=0; i<close.length;  i++)
{
    close[i].onclick=function(){
        var div = this.parentElement;
        div.style.display="none";
    }
}

var list= document.querySelector("ul")
list.addEventListener('click',function(ev)
{
    if(ev.target.tagName==='LI')
    {
        ev.target.classList.toggle('checked')
    }
},false)




function newElement(){
    var li=document.createElement('li');
    var inputValue = document.getElementById('item').value
    var t=document.createTextNode(inputValue)
    li.appendChild(t)
    if(inputValue==='')
    {
        alert('Enter The Task Title')
    }else{
        document.getElementById('list').appendChild(li)
        li.className='border';
    }
    document.getElementById('item').value=''
    var span = document.createElement('span');
    var txt = document.createTextNode('\u00D7');
    span.className='close';
    span.appendChild(txt);
    myNodeList[i].appendChild(span);

    for(i=0; i<close.length; i++)
    {
        close[i].onclick=function(){
            var div=this.parentElement;
            div.style.display='none';
        }
    }
}