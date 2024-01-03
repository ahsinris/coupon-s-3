import nodemailer from 'nodemailer'
/** nodemailer for sending mail to user to reset password */

async function sendMail(email, subject, text) {
    const transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
            user: process.env.EMAIL_ID,
            pass: process.env.APP_PASSWORD
        }
    })
    const mailOptions = {
        from: process.env.EMAIL_ID,
        to: email,
        subject: subject,
        text: text
    }
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('error in sending email', error)
        }
        else {
            res.json({ Status: "email send sucessfully" })
        }
    })
}

export default sendMail