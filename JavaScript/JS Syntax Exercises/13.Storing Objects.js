function storingObjects (input) {
    for (let i = 0; i<input.length; i++) {
        let split = input[i].split(' -> ');
        let name = split[0];
        let age = split[1];
        let grade = split[2];
        let obj = {'Name':name, 'Age':age, 'Grade':grade};
        for (let key in obj) {
            console.log(key +': ' + obj[key]);
        }
    }
}