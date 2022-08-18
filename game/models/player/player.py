from django.db import models
from django.contrib.auth.models import User


class Player(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    photo = models.URLField(blank=True, max_length=256)

    def __str__(self):
        return str(self.user)
