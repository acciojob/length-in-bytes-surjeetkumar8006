const byteSize = (str) => {
  let res=0;
	for (let index = 0; index < str.length; index++) {
		res++;
	
	}
	return res;
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
