# backend/disaster/models.py
from django.db import models
from accounts.models import User

class DisasterType(models.TextChoices):
    FLOOD = "Flood"
    EARTHQUAKE = "Earthquake"
    STORM = "Storm"
    FIRE = "Fire"
    OTHER = "Other"

class HelpRequest(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="help_requests")
    disaster_type = models.CharField(max_length=50, choices=DisasterType.choices, default=DisasterType.OTHER)
    description = models.TextField()
    location_lat = models.FloatField()
    location_lng = models.FloatField()
    is_urgent = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    resolved = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.user.username} - {self.disaster_type} ({self.created_at})"

class Disaster(models.Model):
    name = models.CharField(max_length=100)
    location = models.CharField(max_length=200)
    severity = models.CharField(max_length=50)
    created_by = models.ForeignKey(User, on_delete=models.CASCADE, related_name="disasters")
    date_reported = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} - {self.location}"
