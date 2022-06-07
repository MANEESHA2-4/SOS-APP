# SOS-APP

**Description:-**
     
       The aim of the project is to develop an Web application that lets its users to send notifications to admin in case of an emergency or a panic situation. 
       The users can send multiple text messages and query on the press of a single button.
       
**Getting Started This is an example of how you may give instructions on setting up your project locally. To get a local copy up and running follow these simple example steps.**

        Prerequisites This is an example of how to list things you need to use the software and how to install them.

                   * npm npm install npm -g npm version npm -v:6.14.8

                   * Procedures :1.ng new filename 
                                2.ng g s servicename

                   * Packages-Angular: 1.ng g c componentname 
                                      2.npm i bootstrap --save  
                                      3.npm i -g@angular -cli

                   * Packages-Nodejs : 1.npm init 
                                      2.npm i express body-parser cors--save
                                      3.npm i nodemailer 
       
 **Technologies Used:**
      
       * HTML-5
       * CSS-3
       * Bootstrap-5
       * Angular-11
       * Node.js
       * Couch DB
       
  **Services**
      
       * User Login (Validation)
       * Admin Login (Validation)
       * Manage User Dashboard (Add,Delete)
       * Manage Admin Dashboard (View,reply)
       * Admin-User  - (View Query,View Report,Reply)
       * User-Admin  - raising Query,sending report,sending Feedback
       * User  - Adding/Removing Emergency Contact
       
 **Project Structure**
 
      * Home page      -This is the first page in this project.here,we can see the navbar containing adminlogin,userlogin,about,Faq and some app features.
      
      * sign in form   - When new user regiser in the form, The email and password match to the database the user dashboard page will appear in the website.
      
      * User Dashboard -This Dashboard is used only by registered user,In this Dashboard Provides some services like Raising Query,Sending Report,sending                      Feedback,adding and removing contacts.These services are provided in form format.once,form get submit.it will sent to admin dashboard
       besides, when a user logged in to the dashboard,their email_id will auto-filled in the form field.
       
      * Sending E-mail - Once,the user logged in,user can contact us by simply clicking the button send-email.Admin will respond the user immediately.
      
      * Add emergency contact-enter the contact details and remove the contact details is displayed. 
      
      * Admin form-user name and password  match to the database the admin dashboard will appear in the website.
      
      * Admin Dashboard-This Dashboard is used only by admin,In this Dashboard contains the information that submitted by user(for example:In user dashboard,user raise        the Query in Query form and they submit it.That submitted information can view by admin in admin dashboard).The admin respond to their query by sending reply to        user.
      
      * About us-About the emergency-SOS app. 
      
      * Faq-It display some default Frequently Asked Question about the app.
     


                                     
