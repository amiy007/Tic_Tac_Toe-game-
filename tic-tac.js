var restart=document.querySelector("#b");
var sq=document.querySelectorAll("td");

function clear() {
	for (var i = 0; i<sq.length;i++)
	{
		sq[i].textContent="";
	}
}

restart.addEventListener("click",clear);

function change() {
	if(this.textContent===" ")
	{
		this.textContent="x";
	}
	else if(this.textContent==="x")
	{this.textContent="o";
}
else
{
	this.textContent=" ";
} 
res();
}

for (var i = 0; i < sq.length; i++) {
	sq[i].addEventListener("click",change);
}
function res()
{
	var xscore=0;
	var oscore=0;
if(sq[0].textContent=="x"&&sq[1].textContent=="x"&&sq[2].textContent=="x")
{
	alert("Hurray! x player has won!");
	xscore++;
	clear();
}
else if (sq[0].textContent=="x"&&sq[3].textContent=="x"&&sq[6].textContent=="x")
{
	alert("Hurray! x player has won!");
	xscore++;
	clear();
}
else if (sq[0].textContent=="x"&&sq[4].textContent=="x"&&sq[8].textContent=="x")
{
	alert("Hurray! x player has won!");
xscore++;
clear();}
else if (sq[1].textContent=="x"&&sq[4].textContent=="x"&&sq[7].textContent=="x")
{
	alert("Hurray! x player has won!");
xscore++;
clear();}
else if (sq[2].textContent=="x"&&sq[5].textContent=="x"&&sq[8].textContent=="x")
{
	alert("Hurray! x player has won!");
xscore++;
clear();}
else if (sq[6].textContent=="x"&&sq[7].textContent=="x"&&sq[8].textContent=="x")
{
	alert("Hurray! x player has won!");
xscore++;
clear();}
else if (sq[3].textContent=="x"&&sq[4].textContent=="x"&&sq[5].textContent=="x")
{
	alert("Hurray! x player has won!");
xscore++;
clear();}
else if (sq[2].textContent=="x"&&sq[4].textContent=="x"&&sq[6].textContent=="x")
{
	alert("Hurray! x player has won!");
xscore++;
clear();}
else if(sq[0].textContent=="o"&&sq[1].textContent=="o"&&sq[2].textContent=="o")
{
	alert("Hurray! o player has won!");
oscore++;
clear();}
else if (sq[0].textContent=="o"&&sq[3].textContent=="o"&&sq[6].textContent=="o")
{
	alert("Hurray! o player has won!");
oscore++;
clear();}
else if (sq[0].textContent=="o"&&sq[4].textContent=="o"&&sq[8].textContent=="o")
{
	alert("Hurray! o player has won!");
oscore++;
clear();}
else if (sq[1].textContent=="o"&&sq[4].textContent=="o"&&sq[7].textContent=="o")
{
	alert("Hurray! o player has won!");
oscore++;
clear();}
else if (sq[2].textContent=="o"&&sq[5].textContent=="o"&&sq[8].textContent=="o")
{
	alert("Hurray! o player has won!");
oscore++;
clear();}
else if (sq[6].textContent=="o"&&sq[7].textContent=="o"&&sq[8].textContent=="o")
{
	alert("Hurray! o player has won!");
oscore++;
clear();}
else if (sq[3].textContent=="o"&&sq[4].textContent=="o"&&sq[5].textContent=="o")
{
	
	alert("Hurray! o player has won!");
oscore++;
clear();}
else if (sq[2].textContent=="o"&&sq[4].textContent=="o"&&sq[6].textContent=="o")
{
	alert("Hurray! o player has won!");
oscore++;
clear();}
//else if(xscore==0 && oscore==0)
	//{alert("Alas! it's a tie  haha cat's game")}

}
