function solve(input){
    let result = [];
    for (let i=0; i<input.length; i++){
        let split = input[i].split(' ');
        let command = split[0];
        let value = Number(split[1]);
        if (command=='add') {
            result.push(value);
        } else {
                result.splice(value, 1);
        }
    }
    for (let i = 0; i<result.length; i++) {
        console.log(result[i]);
    }
}