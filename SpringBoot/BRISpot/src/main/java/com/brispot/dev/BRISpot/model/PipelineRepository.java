package com.brispot.dev.BRISpot.model;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PipelineRepository extends JpaRepository<Pipeline, Long> {
    Pipeline findByKodePerusahaan(String kodePerusahaan);
}