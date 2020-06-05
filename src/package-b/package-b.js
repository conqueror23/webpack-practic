console.log("these content are inside package b ");

const getData =(time)=>{
    const result = ((time)=>{
        console.log('get your time',time);
    })();
    return result(2);
}

export default getData