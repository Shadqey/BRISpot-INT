from django.shortcuts import render
from pipelines.models import Pipeline
from django.http import HttpResponse, Http404
from .serializers import PipelineSerializer, DetailPipelineSerializer
from .models import Pipeline
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import generics
from rest_framework.request import Request

# Create your views here.

class PipelineView(APIView):
    
    def get(self, request, pk=None, format=None):
        if pk:
            data = self.get_object(pk)
            serializer = PipelineSerializer(data)
        else:
            data = Pipeline.objects.all()
            serializer = PipelineSerializer(data, many=True)
            return Response(serializer.data)
        
    def post(self, request, format=None):
        data = request.data
        serializer = PipelineSerializer(data=data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        response = Response()
        response.data = {
            'message' : 'A New Pipeline is Created',
            'data' : serializer.data
        }
        
        return response
    
class UpdatePipelineDocuments(APIView):
    def get(self, request, id):
        try:
            return Pipeline.objects.get(pk=id)
        except Pipeline.DoesNotExist:
            raise Http404
        
    def put(self, request, id, format=None):
        pipeline = Pipeline.objects.get(pk=id)
        pipeline.dokumentasi_kredit = request.data["dokumentasi_kredit"]
        pipeline.identitas_perusahaan = request.data["identitas_perusahaan"]
        pipeline.data_financial = request.data["data_financial"]
        pipeline.legalitas_usaha = request.data["legalitas_usaha"]
        pipeline.dokumen_agunan = request.data["dokumen_agunan"]
        pipeline.lain_lain = request.data["lain_lain"]
        
        pipeline.save()
        
        serializer = PipelineSerializer(pipeline)
        
        # response = Response()
        # response.data = {
        #     'message' : 'A New Pipeline is Created',
        #     'data' : serializer.data
        # }
        
        return Response(serializer.data)
    
class UpdatePipeline(APIView):
    def get(self, request, id):
        try:
            return Pipeline.objects.get(pk=id)
        except Pipeline.DoesNotExist:
            raise Http404
        
    def put(self, request, id, format=None):
        pipeline = Pipeline.objects.get(pk=id)
        pipeline.kode_perusahaan = request.data["kode_perusahaan"]
        pipeline.nama_perusahaan = request.data["nama_perusahaan"]
        pipeline.grup_usaha = request.data["grup_usaha"]
        pipeline.kategori_bank = request.data["kategori_bank"]
        pipeline.negara_asal = request.data["negara_asal"]
        pipeline.kategori_perusahaan = request.data["kategori_perusahaan"]
        pipeline.alamat_perusahaan = request.data["alamat_perusahaan"]
        pipeline.deskripsi_perusahaan = request.data["deskripsi_perusahaan"]
        pipeline.sektor_industri = request.data["sektor_industri"]
        pipeline.logo_perusahaan = request.data["logo_perusahaan"]
        pipeline.fasilitas_pinjaman = request.data["fasilitas_pinjaman"]
        pipeline.currency = request.data["currency"]
        pipeline.plafond = request.data["plafond"]
        
        pipeline.save()
        
        serializer = PipelineSerializer(pipeline)
        return Response(serializer.data)
    
class DetailPipelineView(generics.RetrieveAPIView):
    queryset = Pipeline.objects.all()
    serializer_class = DetailPipelineSerializer
    lookup_field = 'id'
    
class ListPipelineView(generics.ListAPIView):
    queryset = Pipeline.objects.all()
    serializer_class = PipelineSerializer