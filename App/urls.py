from django.urls import path,include

from .views import Flashcards
app_name="App"

urlpatterns=[
    path('Cards/', Flashcards),
]