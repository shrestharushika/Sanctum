from django.shortcuts import render
from django.http import JsonResponse
# Create your views here.



def Flashcards(request):
    return render(request,'index.html')

def Introduction(request):
    return render(request,'Intro.html')