const str = "123456754321";
let len = str.length - 1;
let strRev = "";
const palindrome = (string, length) => {
    if (length >= 0) {
        strRev += str[length];
        length--;
        palindrome(str, length);
    }
};

palindrome(str, len);

if (str === strRev) console.log(true);
else console.log(false);
