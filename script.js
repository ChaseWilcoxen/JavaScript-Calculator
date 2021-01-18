//get history by returning id="history value"
function getHistory(){
	return document.getElementById("history-value").innerText;
}
//print history by printing arg (num) to history value
function printHistory(num){
	document.getElementById("history-value").innerText=num;
}
//get output by returning value of output-value
function getOutput(){
	return document.getElementById("output-value").innerText;
}
//print output by retrieving element id and placing num in output value
function printOutput(num){
	if(num==""){
		document.getElementById("output-value").innerText=num;
	}
	else{
		document.getElementById("output-value").innerText=getFormattedNumber(num);
	}	
}
// get formatted number with commas
function getFormattedNumber(num){
	if(num=="-"){
		return "";
	}
	let n = Number(num);
	let value = n.toLocaleString("en");
	return value;
}
//format numbers with commas
function reverseNumberFormat(num){
	return Number(num.replace(/,/g,''));
}
//setting var operator by getting operator by class name
let operator = document.getElementsByClassName("operator");
for(let i =0;i<operator.length;i++){
	operator[i].addEventListener('click',function(){
		if(this.id=="clear"){
			printHistory("");
			printOutput("");
		}
		else if(this.id=="backspace"){
			let output=reverseNumberFormat(getOutput()).toString();
			if(output){
				output= output.substr(0,output.length-1);
				printOutput(output);
			}
		}
		else{
			let output=getOutput();
			let history=getHistory();
			if(output==""&&history!=""){
				if(isNaN(history[history.length-1])){
					history= history.substr(0,history.length-1);
				}
			}
			if(output!="" || history!=""){
				output= output==""?output:reverseNumberFormat(output);
				history=history+output;
				if(this.id=="="){
					let result=eval(history);
					printOutput(result);
					printHistory("");
				}
				else{
					history=history+this.id;
					printHistory(history);
					printOutput("");
				}
			}
		}
		
	});
}
let number = document.getElementsByClassName("number");
for(let i =0;i<number.length;i++){
	number[i].addEventListener('click',function(){
		let output=reverseNumberFormat(getOutput());
		if(output!=NaN){ 
			output=output+this.id;
			printOutput(output);
		}
	});
}

