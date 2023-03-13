package com.silchar.medicare.validate;
import org.hibernate.Session;
import org.hibernate.Transaction;

import com.silchar.medicare.controller.HibernateUtil;
import com.silchar.medicare.entity.User;

public class UserValidate {



    public boolean validate(String userName, String password) {

        Transaction transaction = null;
        	User userlogin = null;
        try (Session session = HibernateUtil.getSessionFactory().openSession()) {
            // start a transaction
            transaction = session.beginTransaction();
            // get an user object
            userlogin=(User)session.createQuery("FROM User U WHERE U.username = :userName").setParameter("userName", userName)
            .uniqueResult();

            if (userlogin != null && userlogin.getPassword().equals(password)) {
                return true;
            }
            // commit transaction
            transaction.commit();
        } catch (Exception e) {
            if (transaction != null) {
                //transaction.rollback();
            }
            e.printStackTrace();
        }
        return false;
    }

}
