package com.brispot.dev.BRISpot.model;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;

import jakarta.persistence.*;

@Data
@NoArgsConstructor
@RequiredArgsConstructor
@Entity
@Table(name = "lkns")
public class LKN {

    @Id
    @GeneratedValue
    private Long id;

    @NonNull
    @Column(unique = true)
    private String namaPerusahaan;

    private String tujuanKunjungan;

    private String tanggalKunjungan;
    
    private String waktuKunjungan;

    private String lokasiKunjungan;

    private Boolean setReminder;

    @ManyToOne(cascade = CascadeType.PERSIST)
    private User user;

    @ManyToOne(cascade = CascadeType.PERSIST)
    private Pipeline pipeline;
}