function reverseString1(str) {
    return str.split('').reverse().join('');
}

function reverseString2(str) {
    let newStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }
    return newStr;
}

function reverseString3(str) {
    if (str === '') {
        return '';
    } else {
        return reverseString3(str.slice(1)) + str.charAt(0);
    }
}

function reverseString4(str) {
    return (str === '') ? '' : reverseString4(str.slice(1)) + str.charAt(0);
}

function reverseString5(str) {
    return [...str].reverse().join('');
}

function reverseString6(str) {
    let newArr = [];
    for (let i = str.length - 1, j = 0; i >= 0; i--, j++) {
        newArr[j] = str[i];
    }
    return newArr.join('');
}

function reverseString7(str) {
    let newArr = [];
    for (let i = 0, len = str.length; i <= len; i++) {
        newArr.push(str.charAt(len - i));
    }
    return newArr.join('');
}

function reverseString8(str) {
    let i = str.length, newStr = '';
    while (i > 0) {
        newStr += str.substring(i - 1, i);
        i--;
    }
    return newStr;
}

function reverseString9(str) {
    let newStr;
    for (let i = str.length - 1, o = ''; i >= 0; newStr += str[i--]) {
    }
    return newStr;
}

function reverseString10(str) {
    function rev(str, len, newStr) {
        return (len === 0) ? newStr : rev(str, --len, (newStr += str[len]));
    }

    return rev(str, str.length, '');
}

function reverseString11(str) {
    str = str.split('');
    let len = str.length;
    let mid = Math.floor(len / 2) - 1;
    let tmp;

    for (let i = 0; i <= mid; i++) {
        tmp = str[len - i - 1];
        str[len - i - 1] = str[i];
        str[i] = tmp;
    }
    return str.join('');
}

console.log(reverseString1('W każdej kropli jadu'));
console.log(reverseString2('W każdej strudze śliny'));
console.log(reverseString3('Jestem'));
console.log(reverseString4('Ja - jestem'));
console.log(reverseString5('Nada, groza, nada'));
console.log(reverseString6('Groza, nada, groza'));
console.log(reverseString7('Hail nothing'));
console.log(reverseString8('Full of nothing'));
console.log(reverseString9('Nothing is with thee'));
console.log(reverseString10('Poza skrajem'));
console.log(reverseString11('Po przeciwnej stronie ja'));
