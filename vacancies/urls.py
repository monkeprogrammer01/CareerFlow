from django.urls import path
from .views import (
    VacancyListAPIView, VacancyDetailAPIView,
    ApplicationListAPIView, ApplicationDetailAPIView
)

urlpatterns = [
    path('vacancies/', VacancyListAPIView.as_view(), name='vacancy-list'),
    path('vacancies/<int:pk>/', VacancyDetailAPIView.as_view(), name='vacancy-detail'),
    path('applications/', ApplicationListAPIView.as_view(), name='application-list'),
    path('applications/<int:pk>/', ApplicationDetailAPIView.as_view(), name='application-detail'),
]