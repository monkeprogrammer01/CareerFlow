from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager
from django.db import models


class UserManager(BaseUserManager):
    def create_user(self, email, password=None):
        if email == None:
            raise TypeError("Users must have an email address.")

        user = self.model(email=email)
        user.set_password(password)
        user.save()
        return user

    def create_superuser(self, email, password):
        if password is None:
            raise TypeError('Superusers must have a password.')

        user = self.create_user(email, password)
        user.is_superuser = True
        user.is_staff = True
        user.save()

        return user


class User(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(unique=True)

    is_employer = models.BooleanField()
    created_at = models.DateTimeField(auto_now_add=True, null=True)
    name = models.TextField()
    user_image = models.ImageField()
    location = models.TextField()

    USERNAME_FIELD = "email"

