from rest_framework import serializers
from .models import Pipeline

class PipelineSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pipeline
        fields = ('id',
                  'kode_perusahaan',
                  'nama_perusahaan',
                  'grup_usaha',
                  'kategori_bank',
                  'negara_asal',
                  'kategori_perusahaan',
                  'alamat_perusahaan',
                  'deskripsi_perusahaan',
                  'sektor_industri',
                  'logo_perusahaan',
                  'fasilitas_pinjaman',
                  'currency',
                  'plafond'
                  )