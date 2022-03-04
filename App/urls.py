from django.urls import path,include

from .views import Flashcards
app_name="App"
from . import views
urlpatterns=[
    path('Communication/',Flashcards,name="Communication"),
    path('' ,views.Introduction),
    path('Recommender/',views.Recommender,name="Recommender"),
    path('Tips/<str:search>',views.getInfo,name="Advice"),
    path('Tasks/',views.getTask,name="All_Tasks"),
]