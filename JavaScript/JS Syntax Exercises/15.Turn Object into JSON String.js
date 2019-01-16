function turnObject(input) {
    let obj = {};
    for (let line of input) {
        let split  = line.split(' -> ');
        let key = split[0];
        let value = split[1];
        if (isNaN(Number(value))) {
            obj[key] = value;
        } else {
            obj[key] = Number(value);
        }
    }
    let str = JSON.stringify(obj);
    console.log(str);
}