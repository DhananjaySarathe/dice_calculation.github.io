
var randomNo1=Math.random()*6;
var randomNo2=Math.random()*6;
randomNo2=Math.floor(randomNo2)+1;
randomNo1=Math.floor(randomNo1)+1;

// Dice-1

var dice1="images/dice"+randomNo1+".png";
var dice2="images/dice"+randomNo2+".png";

//As dice1 & dice2 are javascript variable so it do not need to be in double-quotes (mtlb string form mai nahi direct likhenge)

document.querySelector(".dice1").setAttribute("src",dice1); 
document.querySelector(".dice2").setAttribute("src",dice2);

var arr=["Addition","Subtraction","Multiplication"];
var arrsel=Math.floor(Math.random()*3);
var elem=arr[arrsel];

var option=document.querySelector('.input_div h2').textContent=elem;
var btnclk=document.querySelector('button');
btnclk.addEventListener('click',task);

var ansr=0;
var ansr2=0;
if(arrsel==0)
{
    ansr=randomNo1+randomNo2;
}
else if(arrsel==1)
{
    ansr=randomNo1-randomNo2;
    ansr2=randomNo2-randomNo1;
}
else{
    ansr=randomNo1*randomNo2;
}

var check=document.querySelector("#resultt");
console.log(check);

function task(){
    var ansrtxt=document.querySelector('.inputt').value;
    console.log(ansrtxt.length);
    if(ansrtxt.length===0)
    {
        check.innerHTML="Input Your answer";
        return;
    }
    if(ansrtxt==ansr && arrsel!=1)
    {
        check.innerHTML="Correct Answer";
    }
    else if(arrsel==1 && (ansrtxt==ansr || ansrtxt==ansr2))
    {
        check.innerHTML="Correct Answer";
    }
    else 
    {
        check.innerHTML="Wrong Answer Try Again";
    }

    console.log(check.innerHTML);
    
    if(check.innerHTML=="Correct Answer")
    {
        setTimeout(() => {
            location.reload();            
        }, 800);
    }
}
