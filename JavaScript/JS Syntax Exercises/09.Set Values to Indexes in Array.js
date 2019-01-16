
function setValues(input){
    let length = Number(input[0]);
    let result = [];
    for (let i = 0; i<length; i++) {
        result[i] = 0;
    }
    for (let i = 1; i<input.length; i++) {
        let splited = input[i].split(' - ');
        let index = splited[0];
        let value = splited[1];
        result[index] = value;
    }
    for (let i = 0; i<result.length; i++) {
        console.log(result[i]);
    }
}