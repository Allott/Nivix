function constructReg(re) {//to save me typing out all the diffrent characters a ton
    var regex = "";
    regex += re;
    regex += re;
    regex += re + "*";
    regex = new RegExp(regex, 'ig');
    return regex;
} 

var myArgs = process.argv;
var str = "";

if (myArgs.length === 2) {
    console.log("no input");
    return 0;
}
else {
    
    for (var i = 2; i < myArgs.length; i++) {
        str += " " + myArgs[i];
    }
}

var ninety = constructReg("(c|e|i|m|n|o|r|v|w|x|z)");
var output = ""
var slicestart = 0;

while ((found = ninety.exec(str)) !== null) {
    var rotate = found[0];
    var rotate2 = "";
    for (var i = 0; i < rotate.length; i++) {
        switch (rotate.charAt(i)) {//better solution in future
            case "c":
                rotate2 += "U";
                break;
            case "e":
                rotate2 += "W";
                break;
            case "i":
                rotate2 += "-";
                break;
            case "m":
                rotate2 += "E";
                break;
            case "n":
                rotate2 += "Z";
                break;
            case "o":
                rotate2 += "O";
                break;
            case "r":
                rotate2 += "L";
                break;
            case "v":
                rotate2 += ">";
                break;
            case "w":
                rotate2 += "3";
                break;
            case "x":
                rotate2 += "X";
                break;
            case "z":
                rotate2 += "N";
                break;
            default:
        }
    }

    output += str.slice(slicestart, ninety.lastIndex - rotate.length).toUpperCase();
    output += "(" + rotate2 + ")90";
    slicestart = ninety.lastIndex;
}

output += str.slice(slicestart, str.length) + " = 1";
console.log(output)


