const { RockingChair } = require("lucide");

const ops = ["5","2","C","D","+"]

const record = []

for (let i =0 ; i < ops.length; i++) {

    if (Number(ops[i])) {
        record.push(parseInt(ops[i]))
    }

    else {
        if (ops[i] == 'C')
                {
                    record.pop()
                }

                if (ops[i] == 'D')
                {
                    let double = 1;
                    double = parseInt(record[record.length - 1]) * 2
                    record.push(double)
                }

                if (ops[i] == '+')
                {
                    let addPrev = 0;
                    addPrev = parseInt(record[record.length -1] + parseInt(record[record.length - 2]))
                    record.push(addPrev)
                }
        }
    }

let res = record.reduce((prev, curr)=> prev + curr, 0)
return (res)




















// const ops = ["5","-2","4","C","D","9","+","+"]

// const record = []


// for (let i = 0; i < ops.length; i++){

//     if(Number(ops[i])) {
//         record.push(parseInt(ops[i]))
//     }


//     if(ops[i] === 'C') {
//         record.pop()
//     }


//     if (ops[i] === 'D') {
//         let double = 1;
//         double = record[record.length-1] * 2
//         record.push(double)
//     }


//     if (ops[i] === '+') {
//         let plusPrev = 0;
//         plusPrev = parseInt(record[record.length - 2]) + parseInt(record[record.length -1])
//         record.push(plusPrev)
//     }
// }

// const res = record.reduce((prev, curr)=> prev + curr, 0)

// return res
