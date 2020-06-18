const data ={en:"en",zh:"zh",vi:"vi"};

const data2 ={...data};

const createData3 =(data)=>{
    return {...data,...data2}
}

const data3 = createData3(data2);

console.log(`whats in objects ${data} , ${data2}, ${data3}`);