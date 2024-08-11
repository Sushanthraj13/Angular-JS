//mail

const nodemailer = require('nodemailer');

let mailTransporter = nodemailer.createTransport({
    service: 'outlook',
    auth: {
        user: 'sushanthraj683@gmail.com',
        pass: 'Raja@6362'
    }
});

let mailDetails = {
    from: 'sushanthraj683@gmail.com',
    to: 'sushanthraj683@gmail.com',
    subject: 'Test Mail',
    text: 'Node.js testing mail'
};

mailTransporter.sendMail(mailDetails, function(err, data){
    if(err){
        console.log('Error Occurs');
    }
    else{
        console.log('Email Sent Sucessfully');
    }
}); 