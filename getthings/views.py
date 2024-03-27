from rest_framework import viewsets
from .models import getting
from .serializers import GettingSerializer

class GettingViewSet(viewsets.ModelViewSet):
    queryset = getting.objects.all()
    serializer_class = GettingSerializer
