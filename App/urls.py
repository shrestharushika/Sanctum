from django.urls import path,include

from .views import Flashcards
app_name="App"
from .views import Flashcards,Introduction,Recommender,getInfo

urlpatterns=[
    path('Communication/',Flashcards,name="Communication"),
    path('',Introduction),
    path('Recommender/',Recommender,name="Recommender"),
    path('Tips/<str:search>',getInfo,name="Advice"),
]