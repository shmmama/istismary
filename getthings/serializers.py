from rest_framework import serializers
from .models import getting

class GettingSerializer(serializers.ModelSerializer):
    class Meta:
        model = getting
        fields = '__all__'
