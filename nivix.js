function constructReg(re) {//to save me typing out all the diffrent characters a ton
    var regex = "";
    regex += re;
    regex += re;
    regex += re + "*";
    regex = new RegExp(regex, 'ig');
    return regex;
} 


var ninety = constructReg("(c|e|i|l|m|n|o|r|v)");

console.log(ninety);

var str = "daniel allott jamie hannah niv oovvll"

console.log(str.match(ninety))





//take in input
var myArgs = process.argv;

if (myArgs.length === 2) {
    console.log("no input");
}
else
{
    var s = "";
    for (var i = 2; i < myArgs.length; i++) {
        s += " " + myArgs[i];
    }
    console.log(s);
}