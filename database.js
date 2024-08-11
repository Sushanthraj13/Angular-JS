const {MongoClient} = require('mongodb')
const client = new MongoClient('mongodb://localhost:27017')
client.connect().then(() => {
    console.log('Conncted Successfully')

    console.log('Exiting')
    client.close()
    
})
.catch(error => console.log('Failed to Connect!',error))