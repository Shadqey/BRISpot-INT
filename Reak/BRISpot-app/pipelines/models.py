from django.db import models
from core.models import BaseModel
# Create your models here.

class Pipeline(BaseModel):
    kode_perusahaan = models.CharField(
        max_length=50, primary_key=True
        )
    nama_perusahaan = models.CharField(
        max_length=75
        )
    grup_usaha = models.CharField(
        max_length=75
        )
    kategori_bank = models.CharField(
        max_length=50
        )
    negara_asal = models.CharField(
        max_length=255
        )
    kategori_perusahaan = models.CharField(
        max_length=50
        )
    alamat_perusahaan = models.CharField(
        max_length=255
        )
    deskripsi_perusahaan = models.CharField(
        max_length=255
        )
    sektor_industri = models.CharField(
        max_length=50
        )
    logo_perusahaan = models.ImageField(
        upload_to ='logo-perusahaan/'
        )
    fasilitas_pinjaman = models.CharField(
        max_length=75
        )
    currency = models.CharField(
        max_length=25
        )
    plafond = models.BigIntegerField()