//CRUD create read update read
// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID
//destructuring object mongodb , can be also:
const {MongoClient, ObjectID} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'


MongoClient.connect(connectionURL, { useNewUrlParser: true },(error, client)=>{
    if(error){
        return console.log('Unable to connect to database!')
    }

     const db = client.db(databaseName)
   
    // db.collection('users').deleteMany({
    //     age:25
    // }).then((result)=>{
    //     console.log(result)
    // }).catch((error)=>{
    //     console.log(error)
    // })

    // db.collection('tasks').deleteOne({
    //     desctiption: "Start workout."
    // }).then((result)=>{
    //     console.log(result)
    // }).catch((error)=>{
    //     console.log(error)
    // })
})

