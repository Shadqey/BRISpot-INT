package com.brispot.dev.BRISpot.web;

import com.brispot.dev.BRISpot.model.Pipeline;
import com.brispot.dev.BRISpot.model.PipelineRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
// import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.Collection;
import java.util.Optional;


public class PipelineController {
    
    private final Logger log = LoggerFactory.getLogger(PipelineController.class);
    private PipelineRepository pipelineRepository;

    public PipelineController(PipelineRepository pipelineRepository) {
        this.pipelineRepository = pipelineRepository;
    }

    @GetMapping("/pipelines")
    Collection<Pipeline> pipelines() {
        return pipelineRepository.findAll();
    }

    @GetMapping("/pipeline/{kodePerusahaan}")
    public ResponseEntity<?> getPipeline(@PathVariable String kodePerusahaan) {
        Optional<Pipeline> pipeline = pipelineRepository.findByKodePerusahaan(kodePerusahaan);
        
        return pipeline
            .map(response -> ResponseEntity.ok().body(response))
            .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping("/pipeline")
    ResponseEntity<Pipeline> createPipeline(@Valid @RequestBody Pipeline pipeline) throws URISyntaxException {
        log.info("Request to create pipeline: {}", pipeline);
        Pipeline result = pipelineRepository.save(pipeline);
        return ResponseEntity.created(new URI("/api/pipeline" + result.getKodePerusahaan()))
            .body(result);
    }

    @PutMapping("/group/{kodePerusahaan}")
    ResponseEntity<Pipeline> updatePipeline(@Valid @RequestBody Pipeline pipeline) {
        log.info("Request to update pipeline: {}", pipeline);
        Pipeline result = pipelineRepository.save(pipeline);
        return ResponseEntity.ok().body(result);
    }

    @DeleteMapping("/group/{kodePerusahaan}")
    public ResponseEntity<?> deletePipeline(@PathVariable String kodePerusahaan) {
        log.info("Request to delete pipeline: {}", kodePerusahaan);
        pipelineRepository.deleteByKodePerusahaan(kodePerusahaan);
        return ResponseEntity.ok().build();
    }

}