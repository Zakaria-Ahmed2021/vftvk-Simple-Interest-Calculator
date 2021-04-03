function compute()
{
	var p,t,r,si;
    p = document.getElementById("principal").value;
    t = document.getElementById ("years").value;
	r = document.getElementById ("rate").value;
	si = parseInt((p*t*r)/100 );

	let date =  new Date().getFullYear();
	console.log(date);
	y=(+date)+(+t);
	document.getElementById ('num0').innerHTML ="If you deposit "+p;
	document.getElementById ('num2').innerHTML ="at an interest rate of "+r+"%";
	document.getElementById ('num').innerHTML ="You will receive an amount of "+si;
	document.getElementById ('num1').innerHTML ="in the year "+y;
}
