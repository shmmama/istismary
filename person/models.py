from django.db import models

# Create your models here.
class person(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    time = models.DateTimeField()
    contentPost = models.TextField()
    profileImage = models.ImageField()
    postImage = models.ImageField()

    

