

let s = "earth",
 t = "arhte"


let flag = true;
if (s.length == t.length) {
    s = s.split('').sort()
    t = t.split('').sort()
    s.forEach((element, index) => {
        if (!(element == t[index])) flag  = false
    });
}
else {
    flag = false
}

console.log(flag)


