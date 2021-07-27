p1=localStorage.getItem("player1_name")
p2=localStorage.getItem("player2_name")
p1score=0
p2score=0
document.getElementById("player1name").innerHTML=p1+ ":"
document.getElementById("player2name").innerHTML=p2+ ":"
document.getElementById("player1score").innerHTML=p1score+ ":"
document.getElementById("player2score").innerHTML=p2score+ ":"
document.getElementById("playerquestion").innerHTML="questionturn "+ p1;
document.getElementById("playeranswer").innerHTML="answerturn "+ p2;
function send()
{
number1=document.getElementById("number1").value
number2=document.getElementById("number2").value
actualanswer=parseInt(number1)*parseInt(number2);
questionword="<h4> Q."+number1+" X "+number2+"</h4>";
inputbox="<br> answer: <input id='checkbox'>";
checkbutton="<br><br><button class='btn btn-info' onclick='check()'>check</button>";
row=questionword+inputbox+checkbutton;
document.getElementById("output").innerHTML=row
document.getElementById("number1").value="";
document.getElementById("number2").value="";
}