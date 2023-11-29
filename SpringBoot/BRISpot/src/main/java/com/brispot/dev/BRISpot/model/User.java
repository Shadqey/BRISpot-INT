package com.brispot.dev.BRISpot.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "users")
public class User {
    @Id
    private String id;
    
    private String nama;

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

}