var some = function (call){
setTimeout(function(){
	alert('hello world'); call();}, 1000);
}

some(function(){alert('world');});