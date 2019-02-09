<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="home.aspx.cs" Inherits="Ajax_Solution_Website.Home1" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <script>
        function Confirm() {
            $("#myModal").modal('show');
        }
        function valid() {
            var str = document.getElementById("txtName").value;
            if (document.getElementById("txtName").value == "") {
                document.getElementById("span1").innerHTML = "Enter Name";
                document.getElementById("btnSubmit").disabled = true;
            }
            else
            {
                document.getElementById("span1").innerHTML = "";
                document.getElementById("btnSubmit").disabled = false;
            }


        }

        function phonenumber() {
            var phoneno = document.getElementById("txtcontact").value;
            if (isNaN(phoneno) || phoneno.length != 10) {
                document.getElementById("span3").innerHTML = "Not a valid Phone Number";
                document.getElementById("btnSubmit").disabled = true;
            }
            else 
            {
                document.getElementById("span3").innerHTML = "";
                document.getElementById("btnSubmit").disabled = false;
            }

        }

        function email()
        {
            var email = document.getElementById("txtemail").value;
            var re = /\S+@\S+\.\S+/;
            if (!(re.test(email))) {
                document.getElementById("span2").innerHTML = "Not a valid email";
                document.getElementById("btnSubmit").disabled = true;
            }
            else {
                document.getElementById("span2").innerHTML = "";
                document.getElementById("btnSubmit").disabled = false;
            }
        }
        function reference() {
            var str = document.getElementById("txtreference").value;
            if (document.getElementById("txtreference").value == "") {
                document.getElementById("span5").innerHTML = "Enter reference";
                document.getElementById("btnSubmit").disabled = true;
            }
            else {
                document.getElementById("span5").innerHTML = "";
                document.getElementById("btnSubmit").disabled = false;
            }


        }

        function IsBlank()
        {
            if (document.getElementById('<%= txtName.ClientID %>').value == "" || document.getElementById("txtcontact").value == "" || document.getElementById("txtemail").value=="") {
                if(document.getElementById('<%= txtName.ClientID %>').value == "")
                    document.getElementById("span1").innerHTML = "Enter Name";
                else
                    document.getElementById("span1").innerHTML ="";
                if (document.getElementById('<%= txtcontact.ClientID %>').value == "")
                    document.getElementById("span3").innerHTML = "Not a valid Phone Number";
                else
                    document.getElementById("span3").innerHTML = "";
                if (document.getElementById("txtemail").value=="")
                    document.getElementById("span2").innerHTML = "Not a valid email";
                else
                    document.getElementById("span2").innerHTML = "";
                if(document.getElementById('<%= txtreference.ClientID %>').value == "")
                    document.getElementById("span5").innerHTML = "Enter reference";
                else
                    document.getElementById("span5").innerHTML ="";
                document.getElementById("btnSubmit").disabled = true;
                return false;
            }
            else
                return true;
        }

        
    </script>
    <style>
        .req {
	color: Red;
}
    </style>
     <title>Ajax Solutions</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href="bootstrap3/css/bootstrap.css" rel="stylesheet" />
    <script src="bootstrap3/js/bootstrap.js"></script>
    <link href="bootstrap3/css/custom.css" rel="stylesheet" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
    <link href="https://fonts.googleapis.com/css?family=Ubuntu" rel="stylesheet" />
     <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    
    <link href="bootstrap3/css/style.css" rel="stylesheet" />

</head>
<body>
    <%--Dhanraj --%>
    <nav id="home" class="navbar navbar-inverse col-xs-12" style="margin-bottom: 0px; position: fixed; z-index: 999;">
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar" style="margin-top: 20px;">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <div class="logo">
                    <img class="img-responsive" style="width: 150px;" src="Images/ajaxsolutionlogo.png" />
                </div>
            </div>
            <div class="collapse navbar-collapse" id="myNavbar">
                <ul id="topnav" class="navbar-right menu" style="margin-top: 20px;">
                    <li><a href="#home" class="box bar">HOME</a></li>
                    <li><a href="#services" class="box bar">SERVICES & SOLUTIONS</a></li>
                    <li><a href="#portfolio" class="box bar">PORTFOLIO</a></li>  
                    <li><a href="#career" class="box bar">CAREERS</a></li>                           
                    <li><a href="#contact" class="box bar">CONTACT US</a></li>
                </ul>
            </div>
        </div>
    </nav>
    <div class="banner">
        <header style="background-color: rgba(0,0,0,0.3); height: 100vh;">
            <div class="container banner-inner-wrapper">
                <h1 class="text-center" style="">We can give the best solution for your business</h1>
                <span class="spacer20"></span>
                <a href="#services" class="btn btn-custom center-block" style="transition:2s;">GET STARTED &nbsp&nbsp<i class="fa fa-angle-double-right"></i></a>
            </div>
        </header>
    </div>
    <section id="services">
    <h3 class="section-header text-center">What we do</h3>
    <div class="container">
        <h2 class="text-center" style="font-weight: bold">We develop solutions to grow your business faster</h2>
        <p class="text-center">We provide technology solutions, integration of multiple businesses through various digital platforms and industry automation. We also provide Mobile Applications for next generation digital business experience.</p>
        <span class="spacer20"></span>
        <div class="row">
            <div class="col-sm-6 m-t-20">
                <div class="row">
                    <div class="col-xs-2">
                        <img class="" src="Images/web-design-icon.png" />
                    </div>
                    <div class="col-xs-10 services-right-text-block">
                        <h3>WEBSITE/WEB APPLICATION</h3>
                        <%--<p>Custom responsive website is important for online business. because at present many websites available on the internet. So it is difficult to grow up in the competitive market with the predesigned website. Because it never looks professional & could not represent your idea in front of customers.</p>--%>
                        <p>Today, a responsive website is imperative for online business. Each website has to be customized or tuned to the type of business it caters to. Custom responsive website is important for online business. Hence an interactive website is the need of the hour today.</p>
                        <i class="fa fa-angle-double-right">&nbsp</i>Website Design<br />
                        <i class="fa fa-angle-double-right">&nbsp</i>Website Maintenance<br />
                        <i class="fa fa-angle-double-right">&nbsp</i>Web Application</a>
                       <%-- <a href="#" title="website designer company in pune"><i class="fa fa-angle-double-right">&nbsp</i>Website Design</a><br />
                        <a href="#" title="website maintenance company in pune"><i class="fa fa-angle-double-right">&nbsp</i>Website Maintenance</a>
                    --%>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 m-t-20">
                <div class="row">
                    <div class="col-xs-2">
                        <img src="Images/application.png" />
                    </div>
                    <div class="col-xs-10 services-right-text-block">
                        <h3>MOBILE APPLICATION</h3>
                        <p>With capabilities across platforms (iOS, Android and Microsoft), our mobile app development services can availed to build both customer and enterprise apps. Our mobile solutions include sales force enabling apps, product configurators and mobile-based Learning Management Systems.</p>
                        <i class="fa fa-angle-double-right">&nbsp</i>Android Application<br />   
                        <i class="fa fa-angle-double-right">&nbsp</i>iOS Application<br />
                        <i class="fa fa-angle-double-right">&nbsp</i>Windows Application<br />                        
                     <%-- <a href="#" title="windows application development company in pune"><i class="fa fa-angle-double-right">&nbsp</i>Windows Application</a><br />
                        <a href="#" title="android application development company in pune"><i class="fa fa-angle-double-right">&nbsp</i>Android Application</a><br />
                        <a href="#" title="web application development company in pune"><i class="fa fa-angle-double-right">&nbsp</i>Web Application</a>
                 --%>

                    </div>
                </div>
            </div>
            <div class="col-sm-6 m-t-20">
                <div class="row">
                    <div class="col-xs-2">
                        <img src="Images/ERPsolution.png" />
                    </div>
                    <div class="col-xs-10 services-right-text-block">
                        <h3>ERP SOLUTIONS</h3>
                        <p>Customised ERP systems can be created for seamlessly merging basic processes like planning, manufacturing, operations, sales etc. which can talk to each other in a manufacturing enterprise.</p>
                      <i class="fa fa-angle-double-right">&nbsp</i>Sugar Industry ERP System<br />
                      <%-- <a href="#" title="ERP solution company in pune"><i class="fa fa-angle-double-right">&nbsp</i>Sugar Industry ERP System</a><br />--%>
                    
                    </div>
                </div>
            </div>
            <div class="col-sm-6 m-t-20">
                <div class="row">
                    <div class="col-xs-2">
                        <img src="Images/web-design-icon.png" />
                    </div>
                    <div class="col-xs-10 services-right-text-block">
                        <h3>UI / UX Designing</h3>
                        <p>We take care of developing the front-end, and work collaboratively with the back-end development team to create a compelling experience for your users.</p>
                        <i class="fa fa-angle-double-right">&nbsp</i>Rsponsive User Interface Development<br />
                     <%-- <a href="#" title="website designer company in pune"><i class="fa fa-angle-double-right">&nbsp</i>Rsponsive User Interface Development</a><br />--%>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </section>
    <span class="clearfix"></span>
    <section id="career"> 
        <span class="spacer10"></span>
         <h3 class="section-header text-center">Careers Apportunity At Ajax</h3>
        
           <div class="container">   
               <div class="col-sm-12 row">
         <button data-toggle="collapse" data-target="#android" style="width:100%;display:block;margin-top:10px;" class="btn btn-block btn-custom col-sm-12">Android Developer</button>
                  
              <div id="android" class="collapse" style="padding:20px;" >
                    <p>We are looking for an Android developer responsible for the development and maintenance of mobile & Web applications.
                       Primary focus will be the development of Android applications and their integration with back-end Preferences.
                       Preferably Candidate with 1-2 years of experience, Must have Completed Graduation, Ready to Work Full Time.</p>
                  <span class="spacer10"></span>
                    <b>Job Responsibilities -</b><br />
                     <span class="spacer10"></span>
                        > Consistently demonstrate enterprise and functional competencies.<br />
                        > Must Have Worked on Any Android Application Development.<br />
                        > Android mobile developer will be required to design, develop, test, documentation, deploy, support.<br />
                        > Candidate should exhibit a high degree of initiative, ability to learn and adapt to new technologies quickly.<br />
                     <span class="spacer10"></span>
                        • Job Location: Pune<br />
                        • Category: IT Software - Mobile<br />
                        • Experience: Minimum 1-2 years experience in mobile application development.<br />
                        • Preferably Education:BCS,BCA,MCS,MCA,BE Computer.<br />
               </div> 
           </div>
           
                <div class="col-sm-12 row">
         <button data-toggle="collapse" data-target="#net" style="width:100%;display:block;margin-top:10px;" class="btn btn-block btn-custom col-sm-12">.Net Developer</button>

                     <div id="net" class="collapse" style="padding:20px;" >
                    <p>We are looking for an .Net developer responsible for the development and maintenance of windows & web applications.
                         Preferably Candidate with 2+ years of experience, Must have Completed Graduation, Ready to Work Full Time.</p>
                  <span class="spacer10"></span>
                    <b>Job Responsibilities -</b><br />
                     <span class="spacer10"></span>
                        > Consistently demonstrate enterprise and functional competencies.<br />
                        > Must Have Worked on Any Android Application Development.<br />
                        > Android mobile developer will be required to design, develop, test, documentation, deploy, support.<br />
                        > Candidate should exhibit a high degree of initiative, ability to learn and adapt to new technologies quickly.<br />
                     <span class="spacer10"></span>
                        • Role : Software Developer<br />
                        • Skills : C# and ASP.NET, ADO.NET, SQL Server, Ajax, JQuery, JavaScript, MVC.<br />
                        • Experience : 2+ Years<br />
                        • Work Location : Pune Waked (No Transport Facility Provided)<br />
                        • Preferably Education:BCS,BCA,MCS,MCA,BE Computer.<br />

               </div> 

              
         </div>
           
       </div>

    </section>
      <span class="clearfix"></span>
    <span class="spacer30"></span>
    <span class="spacer30"></span>
    <section id="contact">
    <div style="background-image:url(Images/page-heading-background-contact-us.jpg);background-position:center center;background-size:cover;">
        <div style="background-color: rgba(0,0,0,0.7);padding:20px 0px 90px 0px">
         <h3 class="section-header text-center">Contact Us</h3>
            
            
                    <span id="span4" style="color:red;"> </span>
            <span class="spacer30"></span>
             <span class="spacer20"></span>
        <div class="container" >
        <div class="col-sm-6">
            <form id="Form1" runat="server" onsubmit="return IsBlank()">
                <div class="form-group">
                    <asp:TextBox ID="txtName" onblur="valid()"  runat="server" Type="text" CssClass="form-control" Text="" placeholder="Name"></asp:TextBox>
                    <span id="span1" style="color:red;"></span>
                </div>
                <div class="form-group">
                    <asp:TextBox ID="txtemail"  onblur="email()" runat="server" Type="email" CssClass="form-control" placeholder="Email"></asp:TextBox>
                    <span id="span2" style="color:red;"> </span>
                </div>
                <div class="form-group">
                    <asp:TextBox ID="txtcontact" onblur="phonenumber()" Type="tel" runat="server" CssClass="form-control" placeholder="Contact Number"></asp:TextBox>
                <span id="span3" style="color:red;"> </span>
                </div>
                <div class="form-group">
                    <asp:TextBox ID="txtreference" onblur="reference()"  runat="server" Type="text" CssClass="form-control" Text="" placeholder="reference"></asp:TextBox>
                    <span id="span5" style="color:red;"></span>
                </div>
                <div class="form-group">
                      <asp:TextBox ID="txtmsg" runat="server" type="text" TextMode="MultiLine" Height="80"  CssClass="form-control" placeholder="Message"></asp:TextBox>
                </div>
                   
        <div id="myModal" class="modal fade">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                        &times;</button>
                    <h4 class="modal-title">
                        Success</h4>
                </div>
                <div class="modal-body">
                    <b>Your data was submited. We will contact you soon.</b>
                </div>
               
            </div>
        </div>
    </div>
                    <asp:Button class="btn btn-primary btn-block" ID="btnSubmit" runat="server" Text="SUBMIT" OnClick="btnSubmit_Click"  data-dismiss="modal"  UseSubmitBehavior="false"  />
               </form>
               
        </div>
        <div class="col-sm-6" style="color:#ffce00;padding:20px;">
             <div class="row">
                    <div class="col-sm-6 services-right-text-block">
                        <i style="font-size:25px;" class="fa fa-home"></i> 
                        <h3>Address</h3>
                        <span><b>Ajax Solutions Ltd.</b></span><br /><span>Office No. 5, Metro 9, 2nd Floor,<br />Opp. Wisdom World School,<br />Wakad, Pune - 411 057</span>
                    </div>
                    <div class="col-sm-6 services-right-text-block">
                        <i style="font-size:25px;" class="fa fa-envelope"></i> 
                        <h3>Email</h3>
                        <span>sales@ajaxsolutions.in</span><br />
                        <span>contact@ajaxsolutions.in</span><br />
                        <span>hr-openings@ajaxsolutions.in</span>
                        <%--<br
                        <span>support@ajaxsolutions.in</span>--%>
                    </div>
                </div>
        </div>
    </div>
        </div>
      </div>
        </section>
    <footer>
        <div>
            <div class="container">
                <div class="col-md-3 m-t-20">
                    <img class="img-responsive" style="width: 150px;" src="Images/ajaxsolutionlogo.png" />
                    <span class="spacer10"></span>
                    <span>Ajax Solutions Ltd.</span><br />
                    <span>Email : contact@ajaxsolutions.in</span><br />
                    <span>Phone : +91 98 8198 5049</span>
                </div>
                <div class="col-md-4 m-t-20">
                    <div>
                        <h5 class="footer-section-header">ABOUT US</h5>
                    </div>
                    <div class="footer-line"></div>
                    <span class="spacer10"></span>
                    <p>We at Ajax Solutions driven by technology solutions which helps our customers to focus on business and grow unlimited. Our aim is to provide top tech solutions to our customers which keeps them ahead of the world. We work in next generation digital business solutions and mobile application solutions for tomorrows growing digital business needs.</p>
                </div>
                <div class="col-md-3 m-t-20">
                    <div>
                        <h5 class="footer-section-header">OUR SERVICES</h5>
                    </div>
                    <div class="footer-line"></div>
                    <span class="spacer10"></span>
                    <div>
                        <ul class="footer-navigation">
                            <li><a href="#">Web Design</a></li>
                            <li><a href="#">Application Development</a></li>
                            <li><a href="#">Software Development</a></li>
                            <li><a href="#">ERP Solution</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-2 m-t-20">
                    <div>
                        <h5 class="footer-section-header">QUICK LINKS</h5>
                    </div>
                    <div class="footer-line"></div>
                    <span class="spacer10"></span>
                    <div>
                        <ul class="footer-navigation">
                            <li><a href="#services" class="box bar">Services</a></li>
                            <li><a href="#portfolio">Portfolio</a></li>
                            <li><a href="#career">Careers</a></li>
                            <li><a href="#contact">Contact Us</a></li>    
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div style="background-color: #202021; padding: 20px 0px">
            <div class="container">
                <div class="col-md-6">
                    <span style="color:#fff;">© Copyrights 2019 All Rights Reserved</span>
                </div>
                <div class="col-md-6 col-xs-12 footer-social">
                    <ul>
                        <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                        <li><a href="#"><i class="fa fa-pinterest"></i></a></li>
                        <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
    <script>
        $(function () {
            $('#topnav').find('a').click(function () {
                if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    if (target.length) {
                        $('html,body').animate({
                            scrollTop: target.offset().top
                        }, 1000);

                        return false;
                    }
                }
            });
        });
        </script>

</body>
</html>
