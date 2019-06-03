function includes(initialString, sub, position=false) {
    let workStr, result = false, re = new RegExp(sub, 'g');
    if (position) {
      workStr = initialString.substring(position,initialString.length);
    } else {
      workStr = initialString;
    }
    result = workStr.match(re);
    return result == null ? false : true;
}

function substr(str, start = 0, end) {
    let stringArray = [];
    stringArray = str.split('').slice(start, end).join('');
    return stringArray;
}
substr('stroka', 1);

function trim(str) {
    let stringArray = [], res = [];
    stringArray = str.split(' ');
    for (let i=0;i<stringArray.length; i++) {
        if (stringArray[i] == ' ' || stringArray[i] == '')  stringArray.shift();
    }

    for (let i=stringArray.length; i>0; i--) {
        if (stringArray[i] == ' '|| stringArray[i] == '')  stringArray.pop();
    }
    return stringArray.join('');
}
trim('     goo goo ga ga   ');

function toLowerCase(str) {
    let result = '';
    for(let i=0; i<str.length; i++){
        let code = str.charCodeAt(i);
        if ((code>64 && code<91)||(code>1039 && code<1072)){
        code = code + 32;
        result = result +  String.fromCharCode(code);
        }
        else result = result + str[i];
    }
    return result;
}
//toLowerCase('A-Z PRIVET MEDVED А-Я');

function toUpperCase(str) {
    let result = '';
    for(let i=0; i<str.length; i++){
        let code = str.charCodeAt(i);
        if ((code>96 && code<123)||(code>1071 && code<1105)){
        code = code - 32;
        result = result +  String.fromCharCode(code);
        }
        else result = result + str[i];
    }
    return result;
}
//toUpperCase('a-z privet medved а-я');

function split(str, separator='', limit) {
    let currentWord = '', result = [];

    for (let i=0; i<str.length; i++) {
        if(str.charAt(i) !== separator)
         currentWord = currentWord + str.charAt(i);
        if(str.charAt(i) == separator || (i== str.length-1)) {
            result.push(currentWord);
            currentWord = '';
        }
        if (result.length == limit) break;
    }
    return result;
}
//split('Pen,Pineapple,Apple,Pen', ',' );
//split('Pen Pineapple Apple Pen', ' ' );
//split('Pen Pineapple Apple Pen' );
 function repeat(str, times) {
	 let result = '';
    switch (times) {
			case (1/0):
			case(-1): 
				throw "Range Error";
			case (0):
				result = '';
				break;
			case (1):
				result = str;
				break;
			default:
				if (times % 1 != 0) times = Math.floor(times);
				for (let i=0; i<times; i++) {
				result = result + str;
				}	
		}
		return result;
 }
//repeat('privet', 2.5);

function indexOf(str, searching, position = false) {
	if (position >= str.length && searching !== '') return -1;
    	if (position >= str.length && searching == '') return str.length;
	let result=-1, workStr;
	if (position) {
		workStr = str.substring(position,str.length);
	} else {
		workStr = str;
	}
	for (let i=0; i<workStr.length; i++) {
		for (let j=0; j<searching.length; j++) {
			if (workStr[i+j] !== searching[j]) {
        break;
			}
			
			if (j === searching.length - 1) {
        return i;
        } 
	}
	}
	return result;
}
//indexOf('123blah123', 'bla');

//от конца к началу
function lastIndexOf(str, searching, position = false) {
	let result=-1, workStr;
	if (position) {
		workStr = str.substring(position,str.length);
	} else {
		workStr = str;
	}
	for (let i=0; i<workStr.length; i++) {
		for (let j=0; j<searching.length; j++) {
			if (workStr[i+j] !== searching[j]) {
        break;
			}
			
			if (j === searching.length - 1) {
        result = i;
      } 
		}
	}
	return result;
}
//lastIndexOf('канал','а', 0);
//('канал'.lastIndexOf('а', 0);

function endsWith(str, ending, position=false) {
    let initialEnding;
    if (position) str = str.substr(0, position);
	initialEnding = str.substr(str.length - ending.length);
	if (initialEnding == ending) return true
	else return false;
}
//endsWith('Быть или не быть, вот в чём вопрос.', 'вопрос.');
//endsWith('Быть или не быть, вот в чём вопрос.', 'Быть');



