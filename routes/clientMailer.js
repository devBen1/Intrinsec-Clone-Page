var nodemailer = require('nodemailer');

require('dotenv').config();

let transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: 587,
    secure: false,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASSWORD
    },
    tls: {
      rejectUnauthorized:false
    }
});

exports.sendFile = function(fullname,email,emailSubject,path){
    const regOutput = `    

    <div>
    <center class="m_-2032945968588071252wrapper">
    <div>
        <table class="m_-2032945968588071252wrapper" width="100%" cellspacing="0" cellpadding="0" border="0" bgcolor="#FFFFFF">
        <tbody><tr>
            <td width="100%" valign="top" bgcolor="#FFFFFF">
            <table role="content-container" width="100%" cellspacing="0" cellpadding="0" border="0" align="center">
                <tbody><tr>
                <td width="100%">
                    <table width="100%" cellspacing="0" cellpadding="0" border="0">
                    <tbody><tr>
                        <td>                                
                        <table style="width:100%;max-width:600px" width="100%" cellspacing="0" cellpadding="0" border="0" align="center">
                            <tbody><tr>
                            <td role="modules-container" style="padding:0px 0px 0px 0px;color:#000000;text-align:left" width="100%" bgcolor="#FFFFFF" align="left"><table class="m_-2032945968588071252preheader" role="module" style="display:none!important;opacity:0;color:transparent;height:0;width:0" width="100%" cellspacing="0" cellpadding="0" border="0">
                                <tbody><tr>
                                <td role="module-content">
                                    <p></p>
                                </td>
                                </tr>
                            </tbody></table><table role="module" style="table-layout:fixed" width="100%" cellspacing="0" cellpadding="0" border="0">
                                <tbody>
                                <tr>
                                    <td style="padding:0px 0px 20px 0px" role="module-content" bgcolor="">
                                    </td>
                                </tr>
                                </tbody>
                            </table><table class="m_-2032945968588071252wrapper" role="module" style="table-layout:fixed" width="100%" cellspacing="0" cellpadding="0" border="0">
                                <tbody>
                                <tr>
                                    <td style="font-size:6px;line-height:10px;padding:0px 0px 0px 0px" valign="top" align="center">
                                    <img class="m_-2032945968588071252max-width CToWUd" style="display:block;color:#000000;text-decoration:none;font-family:Helvetica,arial,sans-serif;font-size:16px;max-width:30%!important;width:30%;height:auto!important" alt="" src="https://intrinsecsecurity.com/wp-content/themes/intrinsec/images/logos/intrinsec-logo.svg" width="180" border="0">
                                    </td>
                                </tr>
                                </tbody>
                            </table><table role="module" style="table-layout:fixed" width="100%" cellspacing="0" cellpadding="0" border="0">
                                <tbody>
                                <tr>
                                    <td style="padding:0px 0px 10px 0px" role="module-content" bgcolor="">
                                    </td>
                                </tr>
                                </tbody>
                            </table><table role="module" style="table-layout:fixed" width="100%" cellspacing="0" cellpadding="0" border="0">
                                <tbody>
                                <tr>
                                    <td style="padding:0px 0px 0px 0px" role="module-content" valign="top" height="100%" bgcolor="">
                                    <table style="line-height:5px;font-size:5px" width="100%" height="5px" cellspacing="0" cellpadding="0" border="0" align="center">
                                        <tbody>
                                        <tr>
                                            <td style="padding:0px 0px 5px 0px" bgcolor="#022144"></td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    </td>
                                </tr>
                                </tbody>
                            </table><table role="module" style="table-layout:fixed" width="100%" cellspacing="0" cellpadding="0" border="0">
                                <tbody>
                                <tr>
                                    <td style="padding:18px 0px 18px 0px;line-height:22px;text-align:inherit" role="module-content" valign="top" height="100%" bgcolor=""><div><div style="font-family:inherit;text-align:inherit"><span style="line-height:1.8;background-color:transparent;margin-top:0pt;margin-bottom:0pt;font-size:12pt;font-family:Arial;color:#000000;font-weight:400;font-style:normal;font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;text-decoration-line:none;text-decoration-style:initial;text-decoration-color:initial;vertical-align:baseline;white-space:pre-wrap"><strong>Dear ${fullname},</strong></span></div>
                            <div style="font-family:inherit;text-align:inherit">&nbsp;</div>
                            <div style="font-family:inherit;text-align:inherit"><span style="line-height:1.8;background-color:transparent;margin-top:0pt;margin-bottom:0pt;font-size:12pt;font-family:Arial;color:#000000;font-weight:400;font-style:normal;font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;text-decoration-line:none;text-decoration-style:initial;text-decoration-color:initial;vertical-align:baseline;white-space:pre-wrap"><strong>Your registration on Intrinsec for the cloud security training and certification was successful and your invite can be found on this mail.</strong></span></div>
                            <div style="font-family:inherit;text-align:inherit"><br>
                            </div>
                            <div style="font-family:inherit;text-align:inherit"><span style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;text-decoration-line:none;text-decoration-style:initial;text-decoration-color:initial;vertical-align:baseline;white-space:pre-wrap"><strong>The course takes you through the all you need to master cloud security and the outline includes: &nbsp;</strong></span></div>
                            <div style="font-family:inherit;text-align:inherit"><br>
                            </div>
                            <div style="font-family:inherit;text-align:inherit"><span style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;font-size:12pt;font-family:Arial;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;text-decoration-line:none;text-decoration-style:initial;text-decoration-color:initial;vertical-align:baseline;white-space:pre-wrap"><strong>
        -AWS Cloud Security<br>
        -Azure Cloud Security<br>
        -Google Cloud Security<br>
        -Wazuh Cloud Security<br>
        -etc &nbsp;</strong></span></div>

                            <div style="font-family:inherit;text-align:inherit">&nbsp;</div>
                            <div style="font-family:inherit;text-align:inherit"><span style="line-height:1.8;background-color:transparent;margin-top:0pt;margin-bottom:0pt;font-size:12pt;font-family:Arial;color:#000000;font-weight:400;font-style:normal;font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;text-decoration-line:none;text-decoration-style:initial;text-decoration-color:initial;vertical-align:baseline;white-space:pre-wrap"><strong>Take the course and pass the free exam to receive a free AWS cloud certificate and badge.<br><br>We hope you enjoy the course and for more information, do not hesitate to contact us on </strong></span><span style="line-height:1.8;background-color:transparent;margin-top:0pt;margin-bottom:0pt;font-size:12pt;font-family:Arial;color:#000000;font-weight:400;font-style:normal;font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;text-decoration-line:underline;text-decoration-style:initial;text-decoration-color:initial;vertical-align:baseline;white-space:pre-wrap"><strong><a href="mailto:training@intrinsecurity.com" target="_blank">training@intrinsecurity.com</a></strong></span></div>
                            <div style="font-family:inherit;text-align:inherit">&nbsp;</div>
                            <div style="font-family:inherit;text-align:inherit"><span style="line-height:1.8;background-color:transparent;margin-top:0pt;margin-bottom:0pt;font-size:12pt;font-family:Arial;color:#000000;font-weight:400;font-style:normal;font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;text-decoration-line:none;text-decoration-style:initial;text-decoration-color:initial;vertical-align:baseline;white-space:pre-wrap"><strong>Warm regards,</strong></span></div>
                            <div style="font-family:inherit;text-align:inherit"><span style="line-height:1.8;background-color:transparent;margin-top:0pt;margin-bottom:0pt;font-size:12pt;font-family:Arial;color:#000000;font-weight:400;font-style:normal;font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;text-decoration-line:none;text-decoration-style:initial;text-decoration-color:initial;vertical-align:baseline;white-space:pre-wrap"><strong>Intrinsec Training Team</strong></span><br>
                            <br>
                            <br>
                            </div><div></div></div></td>
                                </tr>
                                </tbody>
                            </table><table role="module" style="table-layout:fixed" width="100%" cellspacing="0" cellpadding="0" border="0">
                                <tbody>
                                <tr>
                                    <td style="padding:0px 0px 30px 0px" role="module-content" bgcolor="">
                                    </td>
                                </tr>
                                </tbody>
                            </table><div role="module" style="color:#444444;font-size:12px;line-height:20px;padding:16px 16px 16px 16px;text-align:Center"><div><p style="font-size:12px;line-height:20px">Intrinsec Cloud Security</p><p style="font-size:12px;line-height:20px"><span>Herndon, VA
                                </span>, <span>United States</span>, <span></span> <span></span></p></div><p style="font-size:12px;line-height:20px"></p></div></td>
                                                                </tr>
                                                                </tbody></table>
                                                                
                                                    </td>
                                                    </tr>
                                                </tbody></table>
                                                </td>
                                            </tr>
                                            </tbody></table>
                                        </td>
                                        </tr>
                                    </tbody></table>
                                    </div>
                                </center>
                                <img src="https://ci4.googleusercontent.com/proxy/ezcFWQNurML4QcCZkOPU3wg5xnkRyVIXpI8eE9jKPdvdQOX6BxeEXs183Vwj_7Mp_RzYwvU5Hr4OHPJwMasYV9kmHuyzrPRR8WhqHRky6skaFAF3UVyo3a0n5rPD3RlbGNhNbPsvZtRkXypsxFU3azrPW5YlQylsLnw8ATjeSKypgqfcONzRPnd9U5lN9Jt-RW5OxwOr1w3bmctlqgeXnjLDoElNjuhv-yzTWQZQSApFwcCysbh53ZFiTp5scKmuts1ufw4CVmKiyFyPAc-tQTXPMxyC6x_AgyVEJRWlt4S2-748fF8eEvhuDuz6WJUrovIjQ89cfUmJTkaM7XKzP6VZhce4-6hon1-Uo8xP0xWGWess67h99KQ41GkFoDdDdAJJkUmdHnmiK5SYgkSNNSAxrBATRMb8wM8pNf2tnXfRZJudIhHNn-GaZalszWLWevNqZZbpwRWRF8tqGHQ7Zt-SJL6IDuUhZ6oTXXKQjRYH2dizqXZCnNIOwo7Urueu4zw0bykM-xTnMw8iLOnzxo4bhh4tsgrnw7Wd-is6M-PSRLGNCxUj4U_14VD51W_-WRdPy-Rzx3dmHKrraqHLHO_VqigQeBvvg14Mh2pe4vhgmz3jyO3PZja7J7pEPybBIiBCybcvq0pGJsems7Vv894kw1z6Y5ZQC6AynQPC9nVLQyxswDl_KLpauq0BcBLwL-WczvZy0AvmPFHIhcd_hkHCCrSCUA7mbRqX0FNJm0T6O5m6SyzvId9r319ZE73BBeVHqSFoWRnjmCZxjDTe2r6m4GAlw3Hbxl2YuGxuMk8JD55KFlbM3FeDnEhZQedaWAiHc4kx4PlKKwaPY2nCG3SBOVmzDbuMbz8FSOzUFPIU-R4UdgsuOR-UKHwUwgr6Sxy2NyswVFYHdd5hLrQM49qAC6M92F3J9SkuAFFt5FPlNCv-8m7Aevw5oSGoLxdqVtb284jqRFHPi3SJLKoCboC_D4w1-L58LE5kMFa7hXYM-R1ZOqpnV6Jj6qd0FBNY6sin3SksrNrdkfHbgGZcRC4r6rHI3wAtPwZT2qpbD1YcphLKyZrzb4dRNrBTGEXXJHqgmm0AD26KEGg6eRheWgLNYizVn82TYjkF3SdVmVDVurYqm7twnjvJxVLSLabw9v8lHB49DgupN5e7jyXA9Q8dfdktF5mNPRLhl-T4_nES1dDcOU7PUjvbhw_b17kHZEGLgsT3yRUIKcWN9qsJtPXMCdehUpVWHCKoalbdLAEgV-HztqxGM3uCVmqoRzs9MoL3pgyzbEWEB7djtKo-z8bSxS1hmHE169h82rkWDaAK19yRVvdmpY-qY3i2sM3EB_ab366MQo9leJcpZHvk6L3EGHNdFylBxV_-RZVY5YgT23wlVKx35FWUfDCP-tbUrI3XaFC6VNr4FqbFn1pXYuZfoKGW46LGTx202fikYA-NNIho_IMjMa2rNGWMvBoz4FXu3LlefzU5V14eyv2xzdFX6xj9LpWfLRw9GONPZjDB=s0-d-e1-ft#http://url9705.decagonhq.com/wf/open?upn=mqX0zi9tOWzCeMVP0tUfPsD36Em9y2tbKEmRZk6tDB0twvVRCfEo9n3jERcb6w8ABbxQ3KFwvA3j3GpDmlk1LRI2wtr4-2FTq3zwLs1CKa7N-2Fqu1TaKUd94nVZCONFOIGhE-2B8f3ci5dk1-2BhY1HLn-2FylFN6a8HC9FKzsFOWbzDWjef06hAhxNuqg2UdxAHtPRZAi9EzPHv5O4ibBsVmXhT-2F6J8xfGs4h0HUFyZG0xBRrBraR-2FAAJuQagj0d4U5T1ovXbbS4jbCE4D70XOIZBkLIVpg-2BZJB7skVg-2FbDndfGA6lJDFW2NlD-2BmoRJIvzNoZiwjl9MLZAjKDM8k8QMJKY2HuaYyw9DY0TvnbXEjXv1Lmn-2BdQw2iblFxAP70BW-2BI75cwRrEoHx2EeqzDeAHxU1WlHIJRfKGcUdHf-2B2ai3Z7mxBObBVXi06IonHsa4E57P7Vz9uavuZ07iyAIYqm6wVFgkXDs2hSy059opbr5H8CId5sjaWaC3beR3bWYfUliIQbgJ3i48OjpsisI9SnY3-2FJoGUXIofZLgxsnsY3s8XWpIyWUcxGRYtL6HzITaTgh0MzNdl2D99tAVjiOCc5sFvwCi8NkseFrIxKhEeAw-2BZgAzFPVwcwA9N7LVFEDOCQReyJpNtkWmLloJB5jv0udFrRwnQYS-2F9jSNX4lLnikjSJBs2vfPr-2BcJ3OlqAmxj7-2Bw5x4Stz-2FipFk18kqBg0RK5T2NQ8NI19ZImfMQhiE-2BKBldfrQnKDBAuHDXXxRbC5w6LfJDCo1UxIZMtZxli747TvpV3vPr-2ByyZp4gQTNLsVicpn43knmfPT6orlp2mN3kDsgH80WHhwOLY4No7uqLK-2Bhb3PAXu0MaVl8jVfXjl1X3z6cAq8jTuphvIfzFk4vuv-2FpU9Y-2FtFyss-2FVYk0EHto1lnpdUOrEBdPtFj3zL9J3ZXfKLO9777OzHiJdOiI0M-2BjCzAT9xDi62lK6FHel4x7IYiHl1JIDbFD3ftQaRZDGiId98j9Ul8xDzNjzmw7z9pgpsBE" alt="" style="height:1px!important;width:1px!important;border-width:0!important;margin-top:0!important;margin-bottom:0!important;margin-right:0!important;margin-left:0!important;padding-top:0!important;padding-bottom:0!important;padding-right:0!important;padding-left:0!important" class="CToWUd" width="1" height="1" border="0"></div><div class="yj6qo"></div><div class="adL">
                            </div></div></div><div id=":1ik" class="ii gt" style="display:none"><div id=":1ij" class="a3s aiL "></div></div><div class="hi"></div></div>
    `;
    
    let mailOptions = {
        from: '"{{SENDER_DATA}}" <{{EMAIL_ADDRESS_GOES_HERE}}>',
        to: email,
        subject: emailSubject,
        attachments:[{
            filename: 'invite.ics',
            path: __dirname + path,
            contentType: 'application/ics'
        }],
        text: `
        Hello ${fullname},\n\n

        Your registration on Intrinsec for the cloud security training and certification was successful and your invite can be found on this mail.\n\n
        
        The course takes you through the all you need to master cloud security the outline includes:\n\n
        
        -AWS Cloud Security\n
        -Azure Cloud Security\n
        -Google Cloud Security\n
        -Wazuh Cloud Security\n
        -etc\n\n
        
        You are enrolled in the course, and find in the attached your invite link. Take the course and pass the free exam to receive a free AWS cloud certificate and badge.\n\n
        
        We hope you enjoy the course! We would love to hear your feedback, and you can reach us anytime at training@intrinsec.com.\n\n
        
        Regards,\n
        The Intrinsec
        `,
        html: regOutput
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if(error){
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

    });

}

exports.sendAdmin = function(fullname,email,ip_address,company_name,agent,job_description){
    const regOutput = `    

        Hello Admininstrator,<br><br>

        A new user registered on the platform.<br><br>
        
        User details can be seen below:<br><br>
        
        -Fullname: ${fullname}<br>
        -Email: ${email}<br>
        -IP Address: ${ip_address}<br>
        -Company: ${company_name}<br>
        -Agent: ${agent}<br>
        -Job Description: ${job_description}<br><br>
        
        Regards,<br>
        Automated Mail
    `;
    
    let mailOptions = {
        from: '"{{SENDER_DATA}}" <{{EMAIL_ADDRESS_GOES_HERE}}>',
        to: '{{EMAIL_ADDRESS_GOES_HERE}}',
        subject: 'New User Registered',
        text: `
        Hello Admininstrator,\n\n

        A new user registered on the platform.\n\n
        
        User details can be seen below:\n\n
        
        -Fullname: ${fullname}\n
        -Email: ${email}\n
        -IP Address: ${ip_address}\n
        -Company: ${company_name}\n
        -Agent: ${agent}\n
        -Job Description: ${job_description}\n\n
        
        Regards,\n
        Automated Mail
        `,
        html: regOutput
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if(error){
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

    });

}
