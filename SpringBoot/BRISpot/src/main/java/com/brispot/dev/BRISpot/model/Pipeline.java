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
@Table(name = "pipelines")
public class Pipeline {
    
    @Id
    @GeneratedValue
    private Long id;

    @NonNull
    @Column(unique = true)
    private String kodePerusahaan;

    private String namaPerusahaan;

    private String grupUsaha;

    private String kategoriBank;

    private String negaraAsal;

    private String kategoriPerusahaan;

    private String alamatPerusahaan;

    private String deskripsiPerusahaan;

    private String sektorIndustri;

    private byte[] logoPerusahaan;

    private String fasilitasPinjaman;

    private String currency;

    private String plafond;

    private byte[] dokumentasiKredit;

    private byte[] identitasPerusahaan;

    private byte[] dataFinancial;

    private byte[] legalitasUsaha;

    private byte[] dokumenAgunan;

    private byte[] lainLain;

    @ManyToOne(cascade = CascadeType.PERSIST)
    private User user;
}
