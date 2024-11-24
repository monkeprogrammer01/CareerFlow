from django.urls import path
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from .views import RegistrationAPIView, LoginAPIView, ProfileAPIView

app_name = "users"

urlpatterns = [
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('registration/', RegistrationAPIView.as_view(), name='registration' ),
    path('login/', LoginAPIView.as_view(), name="login"),
    path('', ProfileAPIView.as_view(), name="profile")
]
