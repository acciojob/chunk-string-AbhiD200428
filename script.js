function stringChop(str, size) {
	if (str == null) {
		return [];
	}
	var chunks = [];
	var currChunk = "";
	for(var index = 0; index < str.length; index++) {
		if (index % size === 0 && index !== 0) {
			chunks.push(currChunk);
			currChunk = "";
		}
		currChunk += str[index];
	}
	if(currChunk !== "") {
		chunks.push(currChunk);
	}
	return chunks;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
