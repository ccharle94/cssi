function init(){
	let button = document.querySelector("#button1");

	button.addEventListener("click", generateMsg);


/*Add Event Listener to button element that calls generateMsg() function*/
// }
}

function generateMsg(){
// {#noun1,#noun2,#verb,#adjective,#place,#button1,#msg
	//Create a constant array of the ids of the input textfields.*/
const idNames =["noun1","noun2","verb","adjective","place"];

document.body.style.backgroundColor ="lavender";

 	let values = [];
	let insults = ["You dummy",'Ya Mama',"Ya bald grammy","Ya sister ugly","sorry..ugly"]

	for (let i = 0; i < idNames.length;i++)
{
	values[i] = document.getElementById(idNames[i]).value;
	if(values[i] === "") {values[i] = "[Write Something"  + insults[i] +"]"};
}

	/*Using a for loop, populate the values array with the values of the
	 textfields*/


	let msg = `If anybody is wondering, please know that I am <strong>${values[2]}</strong> at <strong>${values[4]}</strong> without you.
	You might want to consider <strong>${values[3]}</strong> <strong>${values[0]}</strong>... then again, you always preferred
	<strong>${values[1]}</strong>.`;

	//Display the msg string in the paragraph element with id 'msg'
document.getElementById('msg').innerHTML=msg;}
