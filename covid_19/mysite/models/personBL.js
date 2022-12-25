const Person = require('../models/personModel')


exports.getAllPersons = function()
{
    return new Promise((resolve,reject) =>
        {
            Person.find({}, function(err,pers)
            {
                if(err)
                {
                    reject(err)
                }
                else
                {
                    resolve(pers)
                }
            })
        })
}

exports.getPerson = function(id)
{
    return new Promise((resolve,reject) =>
        {
            Person.findById(id, function(err,per)
            {
                if(err)
                {
                    reject(err)
                }
                else
                {
                    resolve(per)
                }
            })
        })
}




exports.addPerson = function(obj)
{
    return new Promise((resolve,reject) =>
        {
            const p = new Person({
               
                FirstName : obj.FirstName,
                LastName : obj.LastName,
                id : obj.id,
                address: { city: obj.city, street: obj.street , number:obj.number},
                birthday: obj.birthday,
                phone: obj.phone,
                cellphone: obj.cellphone,
                vaccine1: obj.vaccine1,
                vaccine2: obj.vaccine2,
                vaccine3: obj.vaccine3,
                vaccine4: obj.vaccine4,
                covid19: {
                    start: obj.start,
                    finish: obj.finish
                  },
                company: obj.company
                
            });

            p.save(function(err)
            {
                if(err)
                {
                    reject(err)
                }
                else
                {
                    resolve('Created !')
                }
            })
        })

}


exports.updatePerson = function(id,obj)
{
    return new Promise((resolve,reject) =>
        {
            Person.findByIdAndUpdate(id,
                {
                   
                 FirstName : obj.FirstName,
                LastName : obj.LastName,
                address: { city: obj.city, street: obj.street , number:obj.number},
                birthday: obj.birthday,
                phone: obj.phone,
                cellphone: obj.cellphone,
                vaccine1: obj.vaccine1,
                vaccine2: obj.vaccine2,
                vaccine3: obj.vaccine3,
                vaccine4: obj.vaccine4,
                covid19: {start: obj.start, finish: obj.finish },
                company: obj.company
                
                }, function(err)
                {
                    if(err)
                    {
                        reject(err)
                    }
                    else
                    {
                        resolve('Updated !')
                    }
                } )
        })
}



exports.deletePerson = function(id)
{
    return new Promise((resolve,reject) =>
        {
            Person.findByIdAndDelete(id,function(err)
            {
                if(err)
                {
                    reject(err)
                }
                else
                {
                    resolve('Deleted !')
                }
            }) 
   
        })
}

exports.getPersonById = function(personId)
{
    
    return new Promise((resolve,reject) =>
        {
            Person.find({id:personId}, function(err,per)
            {
                if(err)
                {
                    reject(err)
                }
                else
                {
                    
                    resolve(per)
                }
            })
        })
}