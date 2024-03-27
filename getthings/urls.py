from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import GettingViewSet

router = DefaultRouter()
router.register('getting', GettingViewSet)

urlpatterns = [
    path('getting/', include(router.urls)),
]
