const promise = require('bluebird');

const options = {
    promiseLib: promise
};

const pgp = require('pg-promise')(options);
//const connectingString = process.env.DATABASE_URL; 
const connectingString = "postgres://localhost:5432/";
const db = pgp(connectingString);

getClasses = (req, res) => {
    const params = req.body;
    console.log(params);
    const classCharacteristics = [];
    const returnedClassList = [];
    
    /*
     *  Edit the keys to make them vaid inputs for  SQL 'LIKE' query
     */
    for(var key in params){
        if (params[key]["value"] != null) {
            classCharacteristics.push("%" + params[key]["value"] + "%"); 
        }
        else{
            classCharacteristics.push(params[key]["value"]); 
        }
    }


    for(var i = 0; i < classCharacteristics.length; i += 3){

        let wcVal = classCharacteristics[i+2];
        let distVal = classCharacteristics[i+1];
        let classCharacteristicArray = [classCharacteristics[i], classCharacteristics[i+1], classCharacteristics[i+2]]
            
        /*
         * If world culture and distributive fields both have a value
         */
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


        /*
         * If world culture value is null ("don't care") and distributive value is not null.
         */ 
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

        /*
         * If world culture value i snot null and distributive value is null ("don't care")
         */
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

        /*
         *  If world culture and distirbutive value are both null ("don't care")
         */
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
