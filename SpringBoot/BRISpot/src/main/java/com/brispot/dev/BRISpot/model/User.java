package com.brispot.dev.BRISpot.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    
    private String nama;

    @NonNull
    @Column(unique = true)
    private String personalNumber;

    private String nip;

    private String jenisKelamin;

    private String eselon;

    private String jabatan;

    private String areaKerja;

    private String subAreaKerja;

    private String unitKerja;

    private String levelId;

    private String rolePengguna;

    private String email;

    private String nomorHandphone;

    public User(String nama, String personalNumber, String nip, String jenisKelamin, String eselon, String jabatan, String areaKerja, String subAreaKerja, String unitKerja, String levelId, String rolePengguna, String email, String nomorHandphone) {
        this.nama = nama;
        this.personalNumber = personalNumber;
        this.nip = nip;
        this.jenisKelamin = jenisKelamin;
        this.eselon = eselon;
        this.jabatan = jabatan;
        this.areaKerja = areaKerja;
        this.subAreaKerja = subAreaKerja;
        this.unitKerja = unitKerja;
        this.levelId = levelId;
        this.rolePengguna = rolePengguna;
        this.email = email;
        this.nomorHandphone = nomorHandphone;
    }

}