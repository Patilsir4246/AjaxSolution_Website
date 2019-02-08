using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Net.Mail;

namespace Ajax_Solution_Website
{
    public partial class Home1 : System.Web.UI.Page
    {
        Page page = HttpContext.Current.CurrentHandler as Page;

        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void btnSubmit_Click(object sender, EventArgs e)
        {
            if (txtName.Text != "" && txtcontact.Text != "" && txtemail.Text != "" && txtreference.Text != "")
            {
                send_email(txtName.Text, txtemail.Text, txtcontact.Text, txtmsg.Text);
                txtName.Text = "";
                txtemail.Text = "";
                txtcontact.Text = "";
                txtmsg.Text = "";
                Page.ClientScript.RegisterStartupScript(this.GetType(), "Script", "Confirm();", true);
            }
            else
            {

            }
        }

        private void send_email(string name, string email, string contact, string msg)
        {
            try
            {
                MailMessage message = new MailMessage();
                SmtpClient smtpClient = new SmtpClient();
                MailAddress fromAddress = new MailAddress("contact@ajaxsolutions.in");
                message.From = fromAddress;
                message.To.Add("contact@ajaxsolutions.in");
                message.Subject = "Feedback from website";
                message.IsBodyHtml = true;
                message.Body = "Following details are from contact form :" + "<br>" + " Name :" + name.Trim() + "<br>" + " Contact :" + contact.Trim() + "<br>" + "Email Id :" + email.Trim() + "<br> Message :" + msg.Trim();
                smtpClient.Host = "mail.ajaxsolutions.in";
                smtpClient.Port = 25;
                smtpClient.UseDefaultCredentials = false;
                smtpClient.Credentials = new System.Net.NetworkCredential("contact@ajaxsolutions.in", "ajaxsolutions@123");
                smtpClient.Send(message);

            }
            catch (Exception ex)
            {
                Response.Write("Error in Sending Email - " + ex.Message);
            }

        }

        protected void btnChange_Click(object sender, EventArgs e)
        {
            Response.Write("Button Clicked");
        }
    }
}