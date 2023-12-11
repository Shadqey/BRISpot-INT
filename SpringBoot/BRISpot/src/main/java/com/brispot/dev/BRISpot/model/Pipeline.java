package com.brispot.dev.BRISpot.model;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;

import jakarta.persistence.*;

@Data
@NoArgsConstructor
@Entity
@Table(name = "pipelines")
public class Pipeline {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(unique = true)
    private Long id;
    
    private String kodePerusahaan;

    private String namaPerusahaan;

    private String grupUsaha;

    private String kategoriBank;

    private String negaraAsal;

    private String kategoriPerusahaan;

    private String alamatPerusahaan;

    private String deskripsiPerusahaan;

    // private String sektorIndustri;

    private byte[] logoPerusahaan;

    private String[] fasilitasPinjaman;

    private String[] currency;

    private String[] plafond;

    private String[] eksposure;

    private byte[] dokumentasiKredit;

    private byte[] identitasPerusahaan;

    private byte[] dataFinancial;

    private byte[] legalitasUsaha;

    private byte[] dokumenAgunan;

    private byte[] lainLain;

    public Pipeline(String kodePerusahaan, String namaPerusahaan, String grupUsaha, String kategoriBank, String negaraAsal, String kategoriPerusahaan, String alamatPerusahaan, String deskripsiPerusahaan, String[] fasilitasPinjaman, String[] currency, String[] plafond, String[] eksposure) {
        this.kodePerusahaan = kodePerusahaan;
        this.namaPerusahaan = namaPerusahaan;
        this.grupUsaha = grupUsaha;
        this.kategoriBank = kategoriBank;
        this.negaraAsal = negaraAsal;
        this.kategoriPerusahaan = kategoriPerusahaan;
        this.alamatPerusahaan = alamatPerusahaan;
        this.deskripsiPerusahaan = deskripsiPerusahaan;
        this.fasilitasPinjaman = fasilitasPinjaman;
        this.currency = currency;
        this.plafond = plafond;
    }

    @ManyToOne(cascade = CascadeType.PERSIST)
    private User user;
}
