let str = "hello welcome to javascript"
let strArr = str.split(" ")
// console.log(strArr);
// console.log(strArr.join());
// console.log(strArr.join(","));

strArr.forEach((word)=>{
    // console.log(word);
    let revArr = []
    for (let index = word.length-1; index >=0; index--) {
    //   console.log(word[index]);
    revArr.push(word[index])
    }
    console.log(...revArr);
    // revArr.join(",")
    // console.log(revArr);
    // console.log("\n");
})






// let count_obj = {}
// for (const chr of str) {
//     if (!(count_obj[chr])) {
//         count_obj[chr] = 1
//     }
//     else{
//         count_obj[chr] =  count_obj[chr] + 1
//     }
// }
// console.log(count_obj);

// let strArr = str.split("")

// let set = new Set(strArr)    //set([array])
// console.log(set);   //helo


// set.forEach((element)=>{
//     // console.log(element);
//     let count= 0;
//     for (const char of str) {
//         if (element == char) {
//             count = count+1
//         }
//     }
//     console.log(element +" : "+count);
// })

// strArr = str.split("")
// console.log(strArr);
// let arr = [1, 2]
// arr.indexOf

// strArr.forEach((element, index) => {
//     // console.log(element +" : "+index);
//     if (!(strArr.indexOf(element) == index)) {
//         console.log(element);
//     }
// });

//reversing the given string
// let strArr = ""
// for (let index = str.length-1; index >=0; index--) {
//     strArr = strArr+str[index]
//     // strArr.push(str[index])
// //   console.log(str[index]);
// }
// // console.log(strArr);
// // console.log(strArr.join(""));
// console.log(strArr);