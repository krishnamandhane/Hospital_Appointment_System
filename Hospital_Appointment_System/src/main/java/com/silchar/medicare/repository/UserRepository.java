package com.silchar.medicare.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.silchar.medicare.entity.User;
public interface UserRepository extends JpaRepository<User,Integer> {

}
