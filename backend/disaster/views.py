# backend/disaster/views.py
from rest_framework import generics, permissions
from .models import HelpRequest, Disaster
from .serializers import HelpRequestSerializer, DisasterSerializer

class HelpRequestCreateView(generics.CreateAPIView):
    serializer_class = HelpRequestSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        # save logged-in user as 'user' on HelpRequest
        serializer.save(user=self.request.user)

class HelpRequestListView(generics.ListAPIView):
    serializer_class = HelpRequestSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        if user.role in ["volunteer", "admin"]:
            return HelpRequest.objects.filter(resolved=False).order_by("-created_at")
        return HelpRequest.objects.filter(user=user, resolved=False).order_by("-created_at")

class DisasterListView(generics.ListAPIView):
    serializer_class = DisasterSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        if user.role in ["volunteer", "admin"]:
            return Disaster.objects.all().order_by("-date_reported")
        return Disaster.objects.filter(created_by=user).order_by("-date_reported")
