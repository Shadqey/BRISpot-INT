from django.db import models

# Create your models here.
from core.models import BaseModel
# Create your models here.

class User(BaseModel):
    nama = models.CharField(
        max_length=100
    )
    personal_number = models.CharField(
        max_length=10
    )
    nip = models.CharField(
        max_length=25
    )
    jenis_kelamin = models.CharField(
        max_length=50
    )
    eselon = models.CharField(
        max_length=10
    )
    jabatan = models.CharField(
        max_length=25
    )
    area_kerja = models.CharField(
        max_length=100
    )
    sub_area_kerja = models.CharField(
        max_length=100
    )
    unit_kerja = models.CharField(
        max_length=100
    )
    level_id = models.CharField(
        max_length=25
    )
    role_pengguna = models.CharField(
        max_length=100
    )
    email = models.CharField(
        max_length=100
    )
    nomor_handphone = models.CharField(
        max_length=25
    )