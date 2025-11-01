# backend/disaster/serializers.py
from rest_framework import serializers
from .models import HelpRequest, Disaster

class HelpRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = HelpRequest
        fields = "__all__"
        read_only_fields = ["user", "created_at", "resolved"]

class DisasterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Disaster
        fields = "__all__"
        read_only_fields = ["created_by", "date_reported"]
