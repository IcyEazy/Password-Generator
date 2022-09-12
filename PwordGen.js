var btnCopy = document.getElementById("span-copy");
var msgCopy = document.getElementById("spancopy");
var btnGenerate = document.getElementById("span-generate");
var msgGenerate = document.getElementById("spangen");
var info1 = document.getElementById("info1");
var spaninfo1 = document.getElementById("spaninfo1");
var info2 = document.getElementById("info2");
var spaninfo2 = document.getElementById("spaninfo2");
var info3 = document.getElementById("info3");
var spaninfo3 = document.getElementById("spaninfo3");
var log = document.querySelector("#h3a");
var number = document.getElementById("number");
var range = document.querySelector("#range");
var easyToSay = document.querySelector("#say");
var easyToRead = document.querySelector("#read");
var allCharacters = document.querySelector("#all");
var lowerCase = document.querySelector("#lower");
var upperCase = document.querySelector("#upper");
var numbers = document.querySelector("#numbers");
var symbols = document.querySelector("#symbols");
var meter = document.querySelector("meter");
var btnCopied = document.querySelector("#btncopied");
var btn = document.querySelector("button");

btnCopy.addEventListener("mouseover", function(){
    msgCopy.style.display = "inline";
});
btnCopy.addEventListener("mouseout", function(){
    msgCopy.style.display = "none";
});
btnCopy.addEventListener("click", copyText);

btn.addEventListener("click", function(){
    btnCopied.style.display = "inline";
    copyText();
});
btn.addEventListener("mouseout", function(){
    btnCopied.style.display = "none";
});

btnGenerate.addEventListener("mouseover", function(){
    msgGenerate.style.display = "inline";
});
btnGenerate.addEventListener("mouseout", function(){
    msgGenerate.style.display = "none";
});
btnGenerate.addEventListener("click", function(){
    if(allCharacters.checked || easyToRead.checked){
        return all();
    }
    else{
        return toSay();
    }
});

info1.addEventListener("mouseover", function(){
    spaninfo1.style.display = "flex";
});
info1.addEventListener("mouseout", function(){
    spaninfo1.style.display = "none";
});

info2.addEventListener("mouseover", function(){
    spaninfo2.style.display = "flex";
});
info2.addEventListener("mouseout", function(){
    spaninfo2.style.display = "none";
});

info3.addEventListener("mouseover", function(){
    spaninfo3.style.display = "flex";
});
info3.addEventListener("mouseout", function(){
    spaninfo3.style.display = "none";
});

number.addEventListener("click", function(){
    range.value = number.value;
    meter.value = number.value;
    if(easyToSay.checked){
        return toSay();
    }
    if(easyToRead.checked || allCharacters.checked){
        return all();
    }
});

range.addEventListener("click", function(){
    number.value = range.value;
    meter.value = range.value;
    if(easyToSay.checked){
        return toSay();
    }
    if(easyToRead.checked || allCharacters.checked){
        return all();
    }
});

easyToSay.addEventListener("click", function(){
    lowerCase.checked = true;
    upperCase.checked = true;
    numbers.checked = false;
    symbols.checked = false;
    numbers.disabled = true;
    symbols.disabled = true;
    return toSay();
});;

easyToRead.addEventListener("click", function(){
    lowerCase.checked = true;
    upperCase.checked = true;
    numbers.checked = true;
    symbols.checked = true;
    return all();
});

allCharacters.addEventListener("click", function(){
    lowerCase.checked = true;
    upperCase.checked = true;
    numbers.checked = true;
    symbols.checked = true;
    return all();
});

lowerCase.addEventListener("click", function(){
    if(easyToRead.checked || allCharacters.checked){
        return all();
    }
    if(easyToSay.checked || lowerCase.checked){
        return toSay();
    }
});

upperCase.addEventListener("click", function(){
    if(easyToRead.checked || allCharacters.checked){
        return all();
    }
    if(easyToSay.checked || upperCase.checked){
        return toSay();
    }
});

numbers.addEventListener("click", function(){
    if(easyToRead.checked || allCharacters.checked){
        return all();
    }
});

symbols.addEventListener("click", function(){
    if(easyToRead.checked || allCharacters.checked){
        return all();
    }
});

function getCharacters(length) {
    var result           = '';
    var characters       = 'ABC01DEFabc!@GHIJK2fgh3LMN&/OPQjklR45STUopqVWXYZ67wxyde#$i89mnrs%?tuv*z';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

function toReadCharsLow(length){
    var result              = '';
    var lowerLetters        = 'abcdefghiklmnopqrstuvwxyz';
    for (var i = 0; i < length; i++){
        result += lowerLetters.charAt(Math.floor(Math.random() * (lowerLetters.length)));
    }
    return result;
}

function toReadCharsUpp(length){
    var result              = '';
    var upperLetters        = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for (var i = 0; i < length; i++){
        result += upperLetters.charAt(Math.floor(Math.random() * (upperLetters.length)));
    }
    return result;
}

function toReadCharsNums(length){
    var result              = '';
    var figures             = '0123456789';
    for (var i = 0; i < length; i++){
        result += figures.charAt(Math.floor(Math.random() * (figures.length)));
    }
    return result;
}

function toReadCharsSymb(length){
    var result              = '';
    var symbols             = '/!@#$%^&*?';
    for (var i = 0; i < length; i++){
        result += symbols.charAt(Math.floor(Math.random() * (symbols.length)));
    }
    return result;
}

function toReadCharsLowUpp(length){
    var result              = '';
    var lowUpp              = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    for (var i = 0; i < length; i++){
        result += lowUpp.charAt(Math.floor(Math.random() * (lowUpp.length)));
    }
    return result;
}

function toReadCharsLowNum(length){
    var result              = '';
    var lowNum              = 'abcdefghijklmnopqrstuvwxyz0123456789'
    for (var i = 0; i < length; i++){
        result += lowNum.charAt(Math.floor(Math.random() * (lowNum.length)));
    }
    return result;
}

function toReadCharsLowSymb(length){
    var result              = '';
    var lowSymb             = 'abcdefghijklmnopqrstuvwxyz/!@#$%^&*?';
    for (var i = 0; i < length; i++){
        result += lowSymb.charAt(Math.floor(Math.random() * (lowSymb.length)));
    }
    return result;
}

function toReadCharsUppNum(length){
    var result              = '';
    var uppNum             = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    for (var i = 0; i < length; i++){
        result += uppNum.charAt(Math.floor(Math.random() * (uppNum.length)));
    }
    return result;
}

function toReadCharsUppSymb(length){
    var result              = '';
    var uppSymb             = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ/!@#$%^&*?';
    for (var i = 0; i < length; i++){
        result += uppSymb.charAt(Math.floor(Math.random() * (uppSymb.length)));
    }
    return result;
}

function toReadCharsNumSymb(length){
    var result              = '';
    var numSymb             = '0123456789/!@#$%^&*?';
    for (var i = 0; i < length; i++){
        result += numSymb.charAt(Math.floor(Math.random() * (numSymb.length)));
    }
    return result;
}

function toReadCharsLowUppNum(length){
    var result              = '';
    var lowUppNum             = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    for (var i = 0; i < length; i++){
        result += lowUppNum.charAt(Math.floor(Math.random() * (lowUppNum.length)));
    }
    return result;
}

function toReadCharsLowUppSymb(length){
    var result              = '';
    var lowUppSymb          = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ/!@#$%^&*?';
    for (var i = 0; i < length; i++){
        result += lowUppSymb.charAt(Math.floor(Math.random() * (lowUppSymb.length)));
    }
    return result;
}

function toReadCharsUppNumSymb(length){
    var result              = '';
    var uppNumSymb             = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/!@#$%^&*?';
    for (var i = 0; i < length; i++){
        result += uppNumSymb.charAt(Math.floor(Math.random() * (uppNumSymb.length)));
    }
    return result;
}

function toReadCharsNumSymbLow(length){
    var result              = '';
    var numSymbLow          = '0123456789/!@#$%^&*?abcdefghijklmnopqrstuvwxyz';
    for (var i = 0; i < length; i++){
        result += numSymbLow.charAt(Math.floor(Math.random() * (numSymbLow.length)));
    }
    return result;
}

function all(){
    if(((allCharacters.checked || easyToRead.checked) && lowerCase.checked && upperCase.checked && numbers.checked && symbols.checked)){
        numbers.disabled = false;
        symbols.disabled = false;
        return log.innerHTML = getCharacters(number.value);
    }
    if(((easyToRead.checked || allCharacters) && lowerCase.checked) && (!upperCase.checked && !numbers.checked && !symbols.checked)){
        return log.innerHTML = toReadCharsLow(number.value);
    }
    if(((easyToRead.checked || allCharacters) && upperCase.checked) && (!lowerCase.checked && !numbers.checked && !symbols.checked)){
        return log.innerHTML = toReadCharsUpp(number.value);
    }
    if(((easyToRead.checked || allCharacters) && numbers.checked) && (!lowerCase.checked && !upperCase.checked && !symbols.checked)){
        return log.innerHTML = toReadCharsNums(number.value);
    }
    if(((easyToRead.checked || allCharacters) && symbols.checked) && (!lowerCase.checked && !upperCase.checked && !numbers.checked)){
        return log.innerHTML = toReadCharsSymb(number.value);
    }
    if(((easyToRead.checked || allCharacters) && lowerCase.checked && upperCase.checked) && (!numbers.checked && !symbols.checked)){
        return log.innerHTML = toReadCharsLowUpp(number.value);
    }
    if(((easyToRead.checked || allCharacters) && lowerCase.checked && numbers.checked) && (!upperCase.checked && !symbols.checked)){
        return log.innerHTML = toReadCharsLowNum(number.value);
    }
    if(((easyToRead.checked || allCharacters) && lowerCase.checked && symbols.checked) && (!upperCase.checked && !numbers.checked)){
        return log.innerHTML = toReadCharsLowSymb(number.value);
    }
    if(((easyToRead.checked || allCharacters) && upperCase.checked && numbers.checked) && (!lowerCase.checked && !symbols.checked)){
        return log.innerHTML = toReadCharsUppNum(number.value);
    }
    if(((easyToRead.checked || allCharacters) && upperCase.checked && symbols.checked) && (!lowerCase.checked && !numbers.checked)){
        return log.innerHTML = toReadCharsUppSymb(number.value);
    }
    if(((easyToRead.checked || allCharacters) && numbers.checked && symbols.checked) && (!lowerCase.checked && !upperCase.checked)){
        return log.innerHTML = toReadCharsNumSymb(number.value);
    }
    if(((easyToRead.checked || allCharacters) && lowerCase.checked && upperCase.checked && numbers.checked) && (!symbols.checked )){
        return log.innerHTML = toReadCharsLowUppNum(number.value);
    }
    if(((easyToRead.checked || allCharacters) && lowerCase.checked && upperCase.checked && symbols.checked) && (!numbers.checked )){
        return log.innerHTML = toReadCharsLowUppSymb(number.value);
    }
    if(((easyToRead.checked || allCharacters) && upperCase.checked && numbers.checked && symbols.checked) && (!lowerCase.checked )){
        return log.innerHTML = toReadCharsUppNumSymb(number.value);
    }
    if(((easyToRead.checked || allCharacters) && numbers.checked && symbols.checked && lowerCase.checked) && (!upperCase.checked )){
        return log.innerHTML = toReadCharsNumSymbLow(number.value);
    }
}

function toSayCharsAll(length){
    var result              = '';
    var characters          = 'ABCabcDEFdefGHIghiJKLjklMNOmnoPQRpqrSTUstuVWXvwxYZyz';
    for (var i = 0; i < length; i++){
        result += characters.charAt(Math.floor(Math.random() * (characters.length)));
    }
    return result;
}

function toSayCharsUpp(length){
    var result              = '';
    var upperLetters        = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for (var i = 0; i < length; i++){
        result += upperLetters.charAt(Math.floor(Math.random() * (upperLetters.length)));
    }
    return result;
}

function toSayCharsLow(length){
    var result              = '';
    var lowerLetters        = 'abcdefghijklmnopqrstuvwxyz';
    for (var i = 0; i < length; i++){
        result += lowerLetters.charAt(Math.floor(Math.random() * (lowerLetters.length)));
    }
    return result;
}

function toSay(){
    if(easyToSay.checked && upperCase.checked && lowerCase.checked){
        return log.innerHTML = toSayCharsAll(range.value);
    }
    if(easyToSay.checked && upperCase.checked){
        return log.innerHTML = toSayCharsUpp(number.value); 
    }
    if(easyToSay.checked && lowerCase.checked){
        return log.innerHTML = toSayCharsLow(number.value);
    }
}

function copyText(){
    navigator.clipboard.writeText(log.textContent);
}