package com.brispot.dev.BRISpot.model;

import org.springframework.data.jpa.repository.JpaRepository;

// import java.util.List;
import java.util.Optional;

public interface PipelineRepository extends JpaRepository<Pipeline, Long> {

    Optional<Pipeline> findById(Long id);

    void deleteById(Long id);


}