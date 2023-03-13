package com.silchar.medicare.Mail;

public class sendEmailThread implements Runnable {

    String toemail = "";
    String Subject = "";
    String message = "";


    public sendEmailThread(String temail, String sbject, String msg) {

        toemail = temail;
        Subject = sbject;
        message = msg;
    }

   

   @Override
    public void run() {

        try {
           
                new SimpleSendEmail(toemail, Subject, message);
            
        } catch (Exception e) {
        }
    }
}