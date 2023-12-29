

const strs = ["eat","tea","tan","ate","nat","bat"]


    let hash = {}
    for (let str of strs) {
        let keyStr = str.split('').sort().join('');
        (!hash[keyStr]) ? hash[keyStr] = [str] : hash[keyStr].push(str);
    }

    console.log(Object.values(hash));




