function parsenObjects(input) {
    for (let line of input) {
        let obj = JSON.parse(line);
        for (let sam in obj) {
            if (sam=='name')
             console.log('Name: '+ obj[sam]);
            else if (sam == 'age')
                console.log('Age: '+ obj[sam]);
            else
                console.log('Date: '+ obj[sam]);
        }
    }
}