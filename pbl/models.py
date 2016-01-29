from __future__ import unicode_literals

from django.db import models
from django.utils import timezone

# Create your models here.
class Level(models.Model):
    author = models.ForeignKey('auth.User')
    title = models.CharField(max_length=10)
    value = models.IntegerField()
    created_date = models.DateTimeField(default=timezone.now)
    published_date = models.DateTimeField(blank=True, null=True)
    def publish(self):
        self.published_date = timezone.now()
        self.save()
    def __str__(self):
        return self.title

class Student(models.Model):
    first_name = models.CharField(max_length=100)
    last_name =  models.CharField(max_length=100)
    organization = models.CharField(max_length=100)
    position = models.CharField(max_length=100)
	
    def __str__(self):
        name = self.first_name+' '+self.last_name
        return name

class Score(models.Model):
    student = models.ForeignKey(Student, on_delete=models.CASCADE)
    level = models.ForeignKey(Level, on_delete=models.CASCADE)
    score = models.IntegerField(default=0)
    def __str__(self):
        st = self.student.first_name+' '+self.student.last_name
        return st



















