const s1 = [{a:1}, {a:2}, {a:3}, {a:4}, {a:128}, {a:129}, {b:65}, {b:66}, {c:1}, {c:10}, {c:42}];
const s2 = [{a:1}, {a:2}, {a:3}, {a:4}, {a:5}, {a:126}, {a:127}, {b:100}, {c:2}, {c:3}, {d:1}];
const s3 = {};


const sortedData = [];

//look in S1
s1.forEach((elemnt) => {
const key = Object.keys(elemnt)[0];
if(!s3[key]) {
s3[key] = [];
}
s3[key].push(elemnt);
});


//look in S2
s2.forEach((elemnt) => {
const key = Object.keys(elemnt)[0];
if(!s3[key]) {
s3[key] = [];
}

//create S3
const elemntIns3 = s3[key].find(elems3 => elemnt[key] === elems3[key]);

if(!elemntIns3) {
s3[key].push(elemnt);
}
});


//sort S3
for(let key in s3) {
s3[key].sort( (elem1, elem2) => {
const key = Object.keys(elem1)[0];
return elem1[key] - elem2[key];
});
sortedData.push(...s3[key])
}
console.log(s3)
