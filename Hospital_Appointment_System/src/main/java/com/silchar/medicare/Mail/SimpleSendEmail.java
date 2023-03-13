package com.silchar.medicare.Mail;

import java.util.*;

import javax.activation.*;
import javax.mail.*;
import javax.mail.internet.*;

public class SimpleSendEmail {

	 private static String femail = "hospitalmanagement78@gmail.com";
	    private static String pass = "xyxfdfdfdiii";
    boolean done = false;
    
//    public static void main(String args[]){
//    	sendEmailThread sendEmail = new sendEmailThread("ningesh1406@gmail.com", "hi", "i am");
//        Thread t = new Thread(sendEmail);
//        t.start();
//    }

    public SimpleSendEmail(String toemail, String Subject, String message) {
        String to = toemail;
        String subject = Subject;
        String messageText = message;

        boolean sessionDebug = false;
// Create some properties and get the default Session.
        Properties props = System.getProperties();
        props.setProperty("mail.smtp.host", "smtp.gmail.com");
        props.setProperty("mail.smtp.auth", "true");
        props.setProperty("mail.smtp.port", "" + 587);
        props.setProperty("mail.smtp.starttls.enable", "true");

        Session session = createSmtpSession();
// Set debug on the Session so we can see what is going on
// Passing false will not echo debug info, and passing true
// will.        
        session.setDebug(sessionDebug);
        try {
// Instantiate a new MimeMessage and fill it with the
// required information.
            Message msg = new MimeMessage(session);
            msg.setFrom(new InternetAddress(femail));
            InternetAddress[] address = {new InternetAddress(to)};
            msg.setRecipients(Message.RecipientType.TO, address);
            msg.setSubject(subject);
            msg.setSentDate(new Date());
            msg.setText(messageText);
            
            //  Send the complete message parts
            msg.setContent(messageText,"text/html");
// Hand the message to the default transport service
// for delivery.
            Transport.send(msg);
            done = true;
            System.out.println("Mail Send successfully");
        } catch (MessagingException mex) {
            done = false;
            mex.printStackTrace();
            System.out.println("Mail Does Not Send.....");
        }
    }

   

    public static Session createSmtpSession() {
        final Properties props = new Properties();
        props.setProperty("mail.smtp.host", "smtp.gmail.com");
        props.setProperty("mail.smtp.auth", "true");
        props.setProperty("mail.smtp.port", "" + 587);
        props.setProperty("mail.smtp.starttls.enable", "true");
        props.put("mail.smtp.starttls.required", "true");
        props.put("mail.smtp.ssl.protocols", "TLSv1.2");
        
      
        return Session.getInstance(props, new Authenticator() {
            @Override
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication(femail, pass);
            }
        });
    }
}