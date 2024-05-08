import nodemailer, { Transporter } from "nodemailer";

const fromEmail: any = "havvnapp@gmail.com";
const emailPassword: any = "svfx nrpl hjql elpa";

const transporter: Transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  auth: {
    user: fromEmail,
    pass: emailPassword,
  },
});

const sendReservationEmail = async (
  receiverEmail: any,
  subject: any,
  guestName: any,
  guestEmail: any,
  checkInDate: any,
  checkOutDate: any,
  hostName: any
): Promise<void> => {
  const emailTemplate = `<html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <style>
        body {
          font-family: "Uber Move Text", "helveticaneue", Helvetica, Arial,
            sans-serif;
        }
      </style>
    </head>
    <body>
      <table
        width="100%"
        border="0"
        cellpadding="0"
        cellspacing="0"
        style="
          background-color: #d6d6d5;
          border: 0;
          border-collapse: collapse;
          border-spacing: 0;
        "
        bgcolor="#d6d6d5"
      >
        <tbody>
          <tr>
            <td align="center" style="display: block">
              <table
                width="100%"
                border="0"
                cellpadding="0"
                cellspacing="0"
                style="
                  border: 0;
                  border-collapse: collapse;
                  border-spacing: 0;
                  max-width: 700px;
                "
              >
                <tbody>
                  <tr>
                    <td style="background-color: #fff">
                      <table
                        height="70"
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        width="100%"
                        align="left"
                        style="
                          background-color: #fff;
                          border-collapse: collapse;
                          table-layout: fixed;
                          width: 100%;
                        "
                        background="https://d3smpkehiq8afm.cloudfront.net/assets/Logos/Feed/dark_mode_background/ffffff_nav_d_1x.png"
                      >
                        <tbody>
                          <tr>
                            <td
                              style="
                                width: 100px;
                                text-align: center;
                                background-color: #f3eff0;
                              "
                            >
                              <img
                                alt="Havvn Logo"
                                src="https://raw.githubusercontent.com/adipshr/havvn/master/public/images/havvn-logo.png"
                                style="
                                  border: 0 solid #1e293b;
                                  border-radius: 0;
                                  display: block;
                                  outline: 0;
                                  text-decoration: none;
                                  height: auto;
                                  width: 200px;
                                  font-size: 13px;
                                  margin: 0 auto;
                                "
                              />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <table
                        width="100%"
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        style="border-collapse: collapse; width: 100%"
                      >
                        <tbody>
                          <tr>
                            <td
                              style="
                                direction: ltr;
                                text-align: left;
                                background-color: #996f00;
                              "
                            >
                              <div class="m_-995294407785604879hide414">
                                <img
                                  src="https://cdn.dribbble.com/users/1192925/screenshots/4171170/media/9ac8a17f71df6827a00415a5f3549da7.gif"
                                  width="700"
                                  height
                                  style="
                                    clear: both;
                                    display: block;
                                    height: auto;
                                    max-width: 100%;
                                    outline: none;
                                    text-decoration: none;
                                    width: 700px;
                                  "
                                  border="0"
                                  alt
                                  tabindex="0"
                                />
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td style="background-color: #fff">
                      <table
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        width="100%"
                        align="left"
                        style="
                          background-color: #fdf2dc;
                          border-collapse: collapse;
                          table-layout: fixed;
                          width: 100%;
                        "
                      >
                        <tbody>
                          <tr>
                            <td>
                              <table
                                border="0"
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                                align="center"
                                style="
                                  margin: 0 auto;
                                  max-width: 560px;
                                  width: 100%;
                                "
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      style="
                                        padding: 30px 14px 7px;
                                        direction: ltr;
                                        text-align: left;
                                        color: #000;
                                        font-size: 38px;
                                        font-weight: 500;
                                        line-height: 50px;
                                      "
                                    >
                                      Hey ${hostName},
                                      a reservation has been made for your
                                      property on Havvn!
                                    </td>
                                  </tr>
                                  <tr>
                                    <td
                                      style="
                                        padding: 7px 14px 23px;
                                        direction: ltr;
                                        text-align: left;
                                        color: #000;
                                        font-size: 20px;
                                        font-weight: 400;
                                        line-height: 26px;
                                      "
                                    >
                                      <div>
                                        Get ready to welcome your guest and
                                        provide them with an exceptional
                                        experience.
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td style="padding: 0 14px 23px">
                                      <div
                                        lang="x-btn"
                                        style="
                                          font-family: uber move text,
                                            helveticaneue, Helvetica, Arial,
                                            sans-serif;
                                          font-weight: 700;
                                          font-size: 16px;
                                          line-height: 22px;
                                        "
                                      >
                                        <a
                                          href="https://havvn.vercel.app/trips"
                                          style="
                                            background-color: #000;
                                            border-color: #000;
                                            color: #fff;
                                            border-radius: 0;
                                            border-style: solid;
                                            border-width: 13px 18px;
                                            display: inline-block;
                                            letter-spacing: 1px;
                                            max-width: 300px;
                                            min-width: 100px;
                                            text-align: center;
                                            text-decoration: none;
                                          "
                                          target="_blank"
                                          width="14"
                                          height="13"
                                          style="
                                            margin-left: 7px;
                                            clear: both;
                                            display: block;
                                            margin-top: 2px;
                                            max-width: 100%;
                                            outline: none;
                                            text-decoration: none;
                                          "
                                          ><span>Manage your reservations</span>
                                          <span
                                            style="
                                              padding-top: 3px;
                                              display: inline-block;
                                            "
                                            ><img
                                              src="https://d3smpkehiq8afm.cloudfront.net/assets/arrows/arrow_white_left.png"
                                              width="14"
                                              height="13"
                                              style="
                                                margin-left: 7px;
                                                clear: both;
                                                display: block;
                                                margin-top: 2px;
                                                max-width: 100%;
                                                outline: none;
                                                text-decoration: none;
                                              " /></span
                                        ></a>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <table
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        width="100%"
                        align="left"
                        style="
                          background-color: #fff1e1;
                          border-collapse: collapse;
                          table-layout: fixed;
                          width: 100%;
                        "
                      >
                        <tbody>
                          <tr>
                            <td>
                              <table
                                border="0"
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                                align="center"
                                style="
                                  padding: 25px 14px 10px;
                                  margin: 0 auto;
                                  max-width: 560px;
                                  width: 100%;
                                "
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      style="
                                        direction: ltr;
                                        text-align: left;
                                        color: #000;
                                        font-size: 20px;
                                        line-height: 26px;
                                        font-weight: 500;
                                      "
                                    >
                                      Guest Name
                                    </td>
                                  </tr>
                                  <tr>
                                    <td
                                      style="
                                        direction: ltr;
                                        text-align: left;
                                        color: #000;
                                        font-size: 20px;
                                        line-height: 26px;
                                      "
                                    >
                                      ${guestName}
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <table
                                border="0"
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                                align="center"
                                style="
                                  padding: 10px 14px;
                                  margin: 0 auto;
                                  max-width: 560px;
                                  width: 100%;
                                "
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      style="
                                        direction: ltr;
                                        text-align: left;
                                        color: #000;
                                        font-size: 20px;
                                        font-weight: 500;
                                        line-height: 26px;
                                      "
                                    >
                                      Check-In
                                    </td>
                                  </tr>
                                  <tr>
                                    <td
                                      style="
                                        direction: ltr;
                                        text-align: left;
                                        color: #000;
                                        font-size: 20px;
                                        line-height: 26px;
                                      "
                                    >
                                      ${checkInDate}
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <table
                                border="0"
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                                align="center"
                                style="
                                  padding: 10px 14px;
                                  margin: 0 auto;
                                  max-width: 560px;
                                  width: 100%;
                                "
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      style="
                                        direction: ltr;
                                        text-align: left;
                                        color: #000;
                                        font-size: 20px;
                                        font-weight: 500;
                                        line-height: 26px;
                                      "
                                    >
                                      Check-Out
                                    </td>
                                  </tr>
                                  <tr>
                                    <td
                                      style="
                                        direction: ltr;
                                        text-align: left;
                                        color: #000;
                                        font-size: 20px;
                                        line-height: 26px;
                                      "
                                    >
                                      ${checkOutDate}
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <table
                                border="0"
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                                align="center"
                                style="
                                  padding: 10px 14px;
                                  margin: 0 auto;
                                  max-width: 560px;
                                  width: 100%;
                                "
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      style="
                                        direction: ltr;
                                        text-align: left;
                                        color: #000;
                                        font-size: 20px;
                                        font-weight: 500;
                                        line-height: 26px;
                                      "
                                    >
                                      Guest Email
                                    </td>
                                  </tr>
                                  <tr>
                                    <td
                                      style="
                                        direction: ltr;
                                        text-align: left;
                                        color: #000;
                                        font-size: 20px;
                                        line-height: 26px;
                                      "
                                    >
                                      ${guestEmail}
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
  
                      <div
                        style="
                          background: #15103c;
                          background-color: #15103c;
                          margin: 0 auto;
                        "
                      >
                        <table
                          align="center"
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          role="presentation"
                          style="
                            background: #15103c;
                            background-color: #15103c;
                            width: 100%;
                          "
                        >
                          <tbody>
                            <tr>
                              <td
                                style="
                                  border: undefined solid undefined;
                                  direction: ltr;
                                  font-size: 0;
                                  padding: 20px 0;
                                  padding-bottom: 18px;
                                  padding-left: 16px;
                                  padding-right: 16px;
                                  padding-top: 18px;
                                  text-align: center;
                                "
                              >
                                <div
                                  class="mj-column-per-100 mj-outlook-group-fix"
                                  style="
                                    font-size: 0;
                                    text-align: left;
                                    direction: ltr;
                                    display: inline-block;
                                    vertical-align: top;
                                    width: 100%;
                                  "
                                >
                                  <table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    role="presentation"
                                    style="
                                      background-color: transparent;
                                      border: 0 solid undefined;
                                      vertical-align: top;
                                    "
                                    width="100%"
                                  >
                                    <tbody>
                                      <tr>
                                        <td
                                          style="
                                            background: 0 0;
                                            font-size: 0;
                                            word-break: break-word;
                                          "
                                        >
                                          <div
                                            style="height: 2px; line-height: 2px"
                                          >
                                            &#x200A;
                                          </div>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td
                                          align="left"
                                          style="
                                            font-size: 0;
                                            padding: 10px 25px;
                                            padding-top: 0;
                                            padding-right: 0;
                                            padding-bottom: 0;
                                            padding-left: 0;
                                            word-break: break-word;
                                          "
                                        >
                                          <div
                                            style="
                                              font-family: Helvetica;
                                              font-size: 12px;
                                              letter-spacing: 0.4px;
                                              line-height: 1.6;
                                              text-align: left;
                                              color: #444;
                                            "
                                          >
                                            <p style="text-align: center">
                                              <span
                                                style="
                                                  color: #e3e0ff;
                                                  font-size: 18px;
                                                "
                                                >Havvn Technologies Inc</span
                                              >
                                            </p>
                                            <p style="text-align: center">
                                              <span style="color: #e3e0ff"
                                                >Mussoorie Diversion Road,
                                                Dehradun, Uttarakhand 248009</span
                                              >
                                            </p>
                                          </div>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td
                                          style="
                                            background: 0 0;
                                            font-size: 0;
                                            word-break: break-word;
                                          "
                                        >
                                          <div
                                            style="height: 8px; line-height: 8px"
                                          >
                                            &#x200A;
                                          </div>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </body>
  </html>
  `;

  const mailOptions = {
    from: {
      name: "Havvn",
      address: fromEmail,
    },
    to: receiverEmail,
    subject: subject,
    html: emailTemplate,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Reservation email sending email:", error);
    } else {
      console.log("Reservation email sent successfully:", info.messageId);
    }
  });
};

export default sendReservationEmail;
