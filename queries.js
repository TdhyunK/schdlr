const promise = require('bluebird');

const options = {
    promiseLib: promise
};

const pgp = require('pg-promise')(options);
const connectingString = process.env.DATABASE_URL; 
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
