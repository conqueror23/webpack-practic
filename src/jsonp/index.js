function show(data){
    console.log('show the data in the backend',data)
}




function jsonp({url,params,callback}){
    return new Promise((resolve,reject)=>{
        let script = document.createElement('script');
        window[callback] = function(data){
            resolve(data)
            document.body.remove(script)
        }
        params = {...params,callback};
        let arr = [];
        for( let key in params){
            arr.push(`${key}=${params[key]}`)
        }
        script.src =`${url}?${arr.join('&')}`
        document.body.appendChild(script)
    })
}

jsonp({
    url:"http://localhost:3001/say",
    params:{wd:"I loves coding here"},
    callback:show
}).then(data =>{
    console.log('get the data in the front-end',data);

})