const s1 = new Set();
s1.add([{a:1}, {a:2}, {a:3}, {a:4}, {a:128}, {a:129}, {b:65}, {b:66}, {c:1}, {c:10}, {c:42}])

const s2 = new Set();
s2.add([{a:1}, {a:2}, {a:3}, {a:4}, {a:5}, {a:126}, {a:127}, {b:100}, {c:2}, {c:3}, {d:1}])
const s3 = new Set([...s1,...s2]);
console.log(s3);

const types = ['a','b','c','d'];
const s1Arr = s1.values().next().value;
const s2Arr = s2.values().next().value;

for(let i = 0; i < types.length; i++){
  for(let j = 0; j < s1Arr.length; j++){
    if(types[i] in s1Arr[j]){
      console.log(types[i]);
      console.log('Yes')
      //console.log(s1Arr[j].a)
      
     // s3.add([s1Arr[j].types[i]])
    }
    else {
      continue
    }
    //console.log(s1Arr[j].types[i])
  }
}