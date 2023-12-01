package com.brispot.dev.BRISpot.model;

import org.springframework.data.jpa.repository.JpaRepository;

// import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, String> {

    Optional<User> findByPersonalNumber(String personalNumber);

    void deleteByPersonalNumber(String personalNumber);

}