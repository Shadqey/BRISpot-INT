package com.brispot.dev.BRISpot;

import com.brispot.dev.BRISpot.model.Pipeline;
// import com.brispot.dev.BRISpot.model.User;

import com.brispot.dev.BRISpot.model.PipelineRepository;

import org.springframework.boot.CommandLineRunner;
// import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

// import java.time.Instant;
// import java.util.Collections;
import java.util.stream.Stream;
import java.util.Optional;

@Component
class Initializer implements CommandLineRunner {

    private final PipelineRepository repository;

    public Initializer(PipelineRepository repository) {
        this.repository = repository;
    }

    @Override
    public void run(String... strings) {
        Stream.of("A", "B", "C", "D").forEach(kodePerusahaan ->
            repository.save(new Pipeline(kodePerusahaan))
        );

        Optional<Pipeline> a = repository.findByKodePerusahaan("A");
        Pipeline finalA;

        if (a.isPresent()) {
            finalA = a.get();
            repository.save(finalA);
        }

        repository.findAll().forEach(System.out::println);
    }
}