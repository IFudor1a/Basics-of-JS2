function validBraces(braces){
    let trace = [];
    if (braces.length % 2 !== 0 ) return false;
    braces.split('').map(el => {
        if(el === '{' || el === '(' || el === '['){ trace.push(el);}
        else{
            let lastelement = trace[trace.length-1];
            console.log(lastelement);
            if ((el === '}' && lastelement === '{') || (el === ')' && lastelement === '(') || (el === ']' && lastelement === '[') ){ console.log(el); trace.pop(); }
        }
        console.log(trace)
    });
    if(trace.length  == 0) return true;
    else {
        return false
    }
}