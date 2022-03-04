from asyncio import tasks
import email
from unicodedata import name
from django.db import models

# Create your models here.
class addindiscussion(models.Model):
    id=models.CharField(primary_key=True,max_length=10)
    name=models.CharField(max_length=50)
    age=models.CharField(max_length=50)
    email=models.EmailField()
    problem=models.TextField(null=True)

class remindersys(models.Model):
    id=models.CharField(primary_key=True,max_length=10)
    set_time=models.DateField()
    tasks=models.TextField()
    set_date=models.DateField()