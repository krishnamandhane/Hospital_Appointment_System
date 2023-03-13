package com.silchar.medicare.validate;

import org.hibernate.Session;
import org.hibernate.Transaction;

import com.silchar.medicare.controller.HibernateUtil;
import com.silchar.medicare.entity.Receptionist;

public class ReceptionistValidate {

	
	
	public boolean validate(String userName, String password) {

        Transaction transaction = null;
        com.ycp.medicare.Entity.Receptionist Receptionistlogin = null;
        try (Session session = HibernateUtil.getSessionFactory().openSession()) {
            // start a transaction
            transaction = session.beginTransaction();
            // get an user object
            Receptionistlogin=(com.ycp.medicare.Entity.Receptionist)session.createQuery("FROM Receptionist U WHERE U.username = :userName").setParameter("userName", userName)
            .uniqueResult();

            if (Receptionistlogin != null && Receptionistlogin.getPassword().equals(password)) {
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
