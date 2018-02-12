const promise = require('bluebird');

const options = {
    promiseLib: promise
};

const pgp = require('pg-promise')(options);
const connectingString = 'postgres://localhost:5432/';
const db = pgp(connectingString);

getClasses = (req, res) => {
    const params = req.body;
    const classCharacteristics = [];
    const returnedClassList = [];
    
    for(var key in params){
       classCharacteristics.push(params[key]["value"]); 
    }

    if(classCharacteristics.length > 3){
        let tmp = classCharacteristics[3];
        classCharacteristics[3] = classCharacteristics[5];
        classCharacteristics[5] = tmp;
    }



    for(var i = 0; i < classCharacteristics.length; i += 3){

        let distIsOrEqual = classCharacteristics[i+1] == null ? "is" : "=";
        let wcIsOrEqual = classCharacteristics[i + 2] == null ? "is" : "="; 
        let classCharacteristicArray = [classCharacteristics[i], classCharacteristics[i+1], classCharacteristics[i+2]]

        db.any(`select * from courses_18s where period = $1 and wc ${wcIsOrEqual}$3 and dist ${distIsOrEqual} $2`, classCharacteristicArray)
        .then(function(data){
            returnedClassList.push(data);
        } ); 
        
    }

}

module.exports = {
    getClasses: getClasses  
};
