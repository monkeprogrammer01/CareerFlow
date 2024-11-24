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
    is_staff = models.BooleanField(default=False)
    is_employer = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True, null=True)
    name = models.TextField()
    user_image = models.ImageField()
    location = models.TextField()
    objects = UserManager()
    USERNAME_FIELD = "email"


class Resume(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='resumes')
    title = models.CharField(max_length=255)
    experience = models.TextField()
    skills = models.TextField()
    education = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)



