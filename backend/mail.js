function mail(name, email, message){
    const mailer=require('nodemailer')
var transporter = mailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'prashantsinghrajput56@gmail.com',
    pass: 'wgez svyo eonj srbt'
  }
});

var mailOptions = {
  from: 'prashantsinghrajput56@gmail.com',
  to: email,
  subject: 'portfolio req',
  text: 'hello '+name+' we found your message '+message+' will get to you soon'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
}

module.exports=mail