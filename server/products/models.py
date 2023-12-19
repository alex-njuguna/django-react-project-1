from django.db import models

"""create a product model with:
image, name, price, category, description"""
class Product(models.Model):
    image = models.ImageField(upload_to='images')
    name = models.CharField(max_length=50)
    price = models.DecimalField(max_digits=8, decimal_places=2)
    category = models.CharField(max_length=50, blank=True)
    description = models.TextField()

    def __str__(self):
        return self.name

