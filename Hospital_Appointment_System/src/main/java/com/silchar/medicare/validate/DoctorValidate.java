package com.silchar.medicare.validate;

import org.hibernate.Session;
import org.hibernate.Transaction;

import com.silchar.medicare.Controller.HibernateUtil;
import com.silchar.medicare.Entity.Doctor;

public class DoctorValidate {
	
	
	
	 public boolean validate(String userName, String password) {

	        Transaction transaction = null;
	        Doctor doctorlogin = null;
	        try (Session session = HibernateUtil.getSessionFactory().openSession()) {
	            // start a transaction
	            transaction = session.beginTransaction();
	            // get an user object
	            doctorlogin=(Doctor)session.createQuery("FROM Doctor D WHERE D.username = :userName").setParameter("userName", userName)
	            .uniqueResult();

	            if (doctorlogin != null && doctorlogin.getPassword().equals(password)) {
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
