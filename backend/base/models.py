"""
    This file contains the models for the base app.
    The Product model is the only model in this app.
"""
from django.db import models


# Create your models here.
class Product(models.Model):
    """Product Model"""
    
    name = models.CharField(max_length=200)
    price = models.DecimalField(max_digits=7, decimal_places=2)
    description = models.TextField(null=True, blank=True)
    # image = models.ImageField(null=True, blank=True, upload_to='images/')
    imageLink = models.CharField(max_length=200, null=True, blank=True)
    createdAt = models.DateTimeField(auto_now_add=True)
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return str(self.name)
