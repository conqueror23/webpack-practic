console.log("these content are inside package b ");

const getData =(time)=>{
    const result = ((time)=>{
        console.log('get your time',time);
    })();
    result(2);
}

export const getData