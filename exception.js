var a=300;
var b=20;
try{
	console.log(a/b);
}
catch(error){
	console.log(error)
}

finally{
	console.log('Finally Done')
}
console.log('past error');
console.log('finished');