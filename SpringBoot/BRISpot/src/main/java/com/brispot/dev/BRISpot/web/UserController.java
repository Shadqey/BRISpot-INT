package com.brispot.dev.BRISpot.web;

import com.brispot.dev.BRISpot.model.User;
import com.brispot.dev.BRISpot.model.UserRepository;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.Collection;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class UserController {
    
    private final Logger log = LoggerFactory.getLogger(UserController.class);
    private UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping("/users")
    Collection<User> users() {
        return userRepository.findAll();
    }

    @GetMapping("/user/{personalNumber}")
    public ResponseEntity<?> getUser(@PathVariable String personalNumber) {
        Optional<User> user = userRepository.findByPersonalNumber(personalNumber);

        return user
            .map(response -> ResponseEntity.ok().body(response))
            .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping("/user")
    ResponseEntity<User> createUser(@Valid @RequestBody User user) throws URISyntaxException {
        log.info("Request to create user: {}", user);
        User result = userRepository.save(user);
        return ResponseEntity.created(new URI("/api/user" + result.getPersonalNumber()))
            .body(result);
    }

    @PutMapping("/user/{personalNumber}")
    ResponseEntity<User> updateUser(@Valid @RequestBody User user) {
        log.info("Request to update user:  {}", user);
        User result = userRepository.save(user);
        return ResponseEntity.ok().body(result);
    }

    @DeleteMapping("/user/{personalNumber}")
    public ResponseEntity<?> deleteUser(@PathVariable String personalNumber) {
        log.info("Request to delete user: {}", personalNumber);
        userRepository.deleteByPersonalNumber(personalNumber);
        return ResponseEntity.ok().build();
    }
}