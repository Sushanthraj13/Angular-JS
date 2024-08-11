const {MongoClient} = require('mongodb')
const client = new MongoClient('mongodb://localhost:27017')

client.db('MCA').collection('bookstore').updateOne({
    name:'intmca'},
    {
        $set:
        {email: 'sushanth@gmail.com'}
}).then((res) =>{
    console.log(res)
    client.close()
})
.catch((err)=> console.log(err))