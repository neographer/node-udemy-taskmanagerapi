const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'neo@task.com',
        subject: 'Thanks for joining!',
        text: `Welcome to the app, ${name}`
    })
}

const sendCancellationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'neo@task.com',
        subject: 'Thanks for joining!',
        text: `Welcome to the app, ${name}`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}