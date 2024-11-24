from rest_framework import serializers
from .models import Vacancy, Application


class VacancySerializer(serializers.ModelSerializer):
    employer_name = serializers.ReadOnlyField(source='employer.username')  # Дополнительное поле для имени работодателя

    class Meta:
        model = Vacancy
        fields = '__all__'  # Все поля модели Vacancy


class ApplicationSerializer(serializers.ModelSerializer):
    username = serializers.ReadOnlyField(source='user.username')  # Имя пользователя
    vacancy_title = serializers.ReadOnlyField(source='vacancy.title')  # Заголовок вакансии

    class Meta:
        model = Application
        fields = '__all__'  # Все поля модели Application