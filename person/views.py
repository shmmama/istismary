from rest_framework import viewsets
from .models import person
from .serializers import PersonSerializer

class PersonViewSet(viewsets.ModelViewSet):
    queryset = person.objects.all()
    serializer_class = PersonSerializer
