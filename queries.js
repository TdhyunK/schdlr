const promise = require('bluebird');

const options = {
    promiseLib: promise
};

const pgp = require('pg-promise')(options);
const connectingString = 'postgres://djlkxokvmzgxhs:4ccedc5accec73afb2a354977c8f80305f5f8b6ab1a5991ec6efc968f6e47add@ec2-23-21-162-90.compute-1.amazonaws.com:5432/d5p027vcbtirlc';
const db = pgp(connectingString);

getClasses = (req, res) => {
    const params = req.body;
    const classCharacteristics = [];
    const returnedClassList = [];
    
    for(var key in params){
        if (params[key]["value"] != null) {
            classCharacteristics.push("%" + params[key]["value"] + "%"); 
        }
        else{
            classCharacteristics.push(params[key]["value"]); 
        }
    }
    if(classCharacteristics.length > 3){
        let tmp = classCharacteristics[3];
        classCharacteristics[3] = classCharacteristics[5];
        classCharacteristics[5] = tmp;
    }



    for(var i = 0; i < classCharacteristics.length; i += 3){

        let wcVal = classCharacteristics[i+2];
        let distVal = classCharacteristics[i+1];
        let classCharacteristicArray = [classCharacteristics[i], classCharacteristics[i+1], classCharacteristics[i+2]]

        if(wcVal != null && distVal != null){
            db.any(`select * from courses_18s where period LIKE $1 and wc LIKE $3 and dist LIKE $2`, classCharacteristicArray)
            .then(function(data){
                res.status(200).json({
                    status: 'success',
                    data: data 
                });
            })
            .catch((err) => err);
        }

        else if(wcVal == null && distVal != null){
            db.any(`select * from courses_18s where period LIKE $1 and dist LIKE $2`, classCharacteristicArray)
            .then(function(data){
                res.status(200).json({
                    status: 'success',
                    data: data 
                });
            })
            .catch((err) => err);
        }
        else if(wcVal != null && distVal == null){
            db.any(`select * from courses_18s where period LIKE $1 and wc LIKE $3`, classCharacteristicArray)
            .then(function(data){
                res.status(200).json({
                    status: 'success',
                    data: data 
                });
            })
            .catch((err) => err);
        
        }

        else if(wcVal == null && distVal == null){
            db.any(`select * from courses_18s where period LIKE $1`, classCharacteristicArray)
            .then(function(data){
                res.status(200).json({
                    status: 'success',
                    data: data 
                });
            })
            .catch((err) => err);
        }
    }
}

module.exports = {
    getClasses: getClasses  
};
