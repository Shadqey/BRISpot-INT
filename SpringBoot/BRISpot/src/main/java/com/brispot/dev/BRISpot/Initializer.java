package com.brispot.dev.BRISpot;

import com.brispot.dev.BRISpot.model.Pipeline;
import com.brispot.dev.BRISpot.model.User;

import com.brispot.dev.BRISpot.model.PipelineRepository;
import com.brispot.dev.BRISpot.model.UserRepository;

import org.springframework.boot.CommandLineRunner;
// import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

// import java.time.Instant;
// import java.util.Collections;
import java.util.stream.Stream;
import java.util.Optional;

@Component
class Initializer implements CommandLineRunner {

    private final PipelineRepository pipelineRepository;
    private final UserRepository userRepository;

    public Initializer(PipelineRepository pipelineRepository, UserRepository userRepository) {
        this.pipelineRepository = pipelineRepository;
        this.userRepository = userRepository;
    }

    @Override
    public void run(String... strings) {
        Stream.of(1L, 2L, 3L, 4L).forEach(id ->
            pipelineRepository.save(new Pipeline(id))
        );

        User user = new User("Ridwan Efendy", "90168000", "No 1112123", "Laki-laki", "E23", "Intern", "Kantor Pusat", "CMG", "WCWB", "Level 1", "RM", "dyywan@gmail.com", "081234712877");

        userRepository.save(user);

        Optional<Pipeline> a = pipelineRepository.findByKodePerusahaan("A");
        Pipeline finalA;

        if (a.isPresent()) {
            finalA = a.get();
            pipelineRepository.save(finalA);
        }

        pipelineRepository.findAll().forEach(System.out::println);
        userRepository.findAll().forEach(System.out::println);
    }
}