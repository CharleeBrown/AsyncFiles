async function test(){
	
	await new Promise(r => setTimeout(r, 2000));
	console.log("Test");
};

async function other(){
	
	let newTest = await test();
	console.log("test hit");
}

other();