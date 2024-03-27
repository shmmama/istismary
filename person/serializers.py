from rest_framework import serializers
from .models import person

class PersonSerializer(serializers.ModelSerializer):
    class Meta:
        model = person
        fields = ['id' , 'first_name', 'last_name', 'contentPost']
