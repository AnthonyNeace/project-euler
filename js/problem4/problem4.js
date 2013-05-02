var currentMultiple = 0, previousPalindrome = 0, maxPalindrome = 0, currentI = 0, currentJ = 0;

function problem4(){
	document.getElementById('output').innerHTML = 'Calculating...';
	document.getElementById('button').disabled = true; 
	setTimeout(problem4handler, 100);
}

function problem4handler(){
	for(var i = 100; i < 1000; i++){	
		for(var j = 100; j < 1000; j++){
			currentMultiple = i * j;
			if((parseInt(reverse(currentMultiple.toString())) == currentMultiple) && (currentMultiple > previousPalindrome)){
				previousPalindrome = currentMultiple, maxPalindrome = currentMultiple, currentI = i, currentJ = j; 
			}	
		}
	}
	document.getElementById('output').innerHTML = 'Largest Palindrome: '+maxPalindrome+'<br>Given by inputs:     '+currentI+' * '+currentJ+'';	
	document.getElementById('button').disabled = false; 			
}

function reverse(inStr){
	return inStr.split("").reverse().join("");
}    