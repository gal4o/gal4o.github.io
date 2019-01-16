function keyValuePairs(input) {
    let obj = {};
    for (let i = 0; i<input.length-1; i++){
        let split = input[i].split(' ');
        let key = split[0];
        let value = split[1];
        obj[key] +=(' ' + value);
    }
    let keyForResult = input[input.length-1];
    if (obj[keyForResult]== undefined)
        console.log('None');
    else {
        let result = obj[keyForResult].split(' ');
        for(let i=1; i<result.length; i++) {
            console.log(result[i]);
        }
    }
}