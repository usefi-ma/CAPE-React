import nodemailer from "nodemailer";

export default class ContactRequest {
  static async sendMail(req, res) {
    console.log("Server working on contact form.");
    let reply = "Success";
    let check = true;

    if (
      !req.body.name ||
      !req.body.email ||
      !req.body.subject ||
      !req.body.message
    ) {
      check = false;
      reply = "Please fill out all fields.";
    }
    if (!check) {
      res.send(reply);
      console.log(
        "Bad check." +
          req.body.name +
          req.body.email +
          req.body.subject +
          req.body.message
      );
    }

    if (check) {
      console.log("Check was true.");
      // Create Contact Request object to store properties from msgInfo
      const contactRequest = {
        name: req.body.name,
        email: req.body.email,
        subject: req.body.subject,
        message: req.body.message,
      };

      await ContactRequest.sendConfirmationEmail(contactRequest);
      await ContactRequest.sendContactRequest(contactRequest);
    }
  }

  // Set up confirmation email
  static async sendConfirmationEmail(contactRequest) {
    let confirmationMailOptions = {
      from: '"CAPE Educators" <cape-confirmation@outlook.com>',
      to: contactRequest.email,
      subject: "Contact Request Received",
      html: `<head><meta charset='utf-8' /><title></title><style>*{box-sizing: border-box; color: black;}</style></head><body style='background-color: #f4f4f4; font-family: Roboto, arial, sans-serif'><div style='background-color: #0d2764; height: 140px;'></div><div style='background-color: white; margin: -80px auto 0 auto; padding: 20px 60px 80px 60px;'><div style='font-size: 30px; font-weight: 300; margin-top: 20px; text-align: center;'> Contact Request Received! </div><br /><p style='text-align: center;'>Thanks for contacting us at C.A.P.E! We've received your contact request and one of our team members will get back to you as soon as possible.</p><div class='box-sizing: border-box; width: 100%;'><br /><br /><div style='font-size: 18px; text-align: center'>Your message: ${contactRequest.message} <br></div></div></div></body>`,
    };

    console.log("Created confirmation transport object.");

    let response = await ContactRequest.wrappedSendMail(
      confirmationMailOptions
    );
    return response;
  }

  // Set up contact request
  static async sendContactRequest(contactRequest) {
    let receiveMailOptions = {
      from: '"CAPE Educators" <cape-confirmation@outlook.com>',
      to: '"CAPE Educators" <cape-confirmation@outlook.com>',
      subject: `Contact request from ${contactRequest.name}`,
      text: contactRequest.message,
      html: `<b>${contactRequest.subject}</b><br> <p>${contactRequest.message}</p><br> <p>From: ${contactRequest.name} <br> ${contactRequest.email}</p>`,
    };

    console.log("Created contact request transport object.");

    let response = await ContactRequest.wrappedSendMail(receiveMailOptions);
    return response;
  }

  // Send email 
  static wrappedSendMail = async (mailOptions) => {
    return new Promise((resolve, reject) => {
      let transporter = nodemailer.createTransport({
        host: "smtp.office365.com",
        port: "587",
        auth: {
          user: "cape-confirmation@outlook.com",
          pass: "CAPE2023!educators",
        },
        secureConnection: false,
        tls: {
          ciphers: "SSLv3",
        },
      });

      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log("Error sending email: " + error);
          resolve(false);
        } else {
          console.log("Email sent successfully: " + info.response);
          resolve(true);
        }
      });
    });
  };
}
