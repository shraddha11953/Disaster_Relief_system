


# backend/disaster/urls.py
from django.urls import path
from .views import HelpRequestCreateView, HelpRequestListView, DisasterListView

urlpatterns = [
    path("create/", HelpRequestCreateView.as_view(), name="helprequest-create"),
    path("list/", HelpRequestListView.as_view(), name="helprequest-list"),
    path("disasters/", DisasterListView.as_view(), name="disaster-list"),
]

