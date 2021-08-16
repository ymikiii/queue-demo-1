const createList = value =>{
    return createNode(value);
};
const appendList = (list, value) => {
    const node = createNode(value);
    let x = list;
    while(x.next){
      x= x.next;
    }
    // x.next === null //x 是最后一个节点
    x.next = node;
    return node;
};
const removeFromList = (list, node) =>{
   let x = list
   let p = node;
   while(x !== node && x !== null){
    p = x;
    x = x.next;
   }
   if(x === null){
       return false
   }else if(x === p) {
       p = x.next
       return p
   }else{
       p.next = x.next;
       return list
   }
};

const createNode = value => {
return {
    data: value,
    next: null
   };
};
const travelList = (list,fn) =>{
    let x = list;
    while(x !== null){
        fn(x);
        x = x.next;
    }
}

const list = createList(10);
const node = list 
const newList = removeFromList(list,node)
