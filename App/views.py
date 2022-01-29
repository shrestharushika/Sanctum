from asyncio.windows_events import NULL
from django.shortcuts import render
from django.http import JsonResponse
import pandas as pd;
# Create your views here.



def Flashcards(request):
    return render(request,'index.html')

def Introduction(request):
    return render(request,'Intro.html')

# def Search(request):

#     return render(request,'Recommender.html')

def Recommender(request):
    data=pd.read_csv("Voiceproject\Data\Handling Alzh Patients.csv",encoding='unicode_escape')

    recommend=pd.read_csv("Voiceproject\Data\Recommend.csv",encoding='unicode_escape')
    # print(data)
    headings=[]
    stress_manag_tips=[]
    
    search=""
    seen=set()
    if request.method=="POST":
        search=request.POST["search"]  #get the search value
   
    if(search):
        print(search)
        # searched_data=data[data["Condition"].str.contains(search,case=False)]
        # print(searched_data)

        for i in range(0,len(data)):
            if( data["Condition"][i]==search): #search for particular condition
            #     stress_manag_tips.append(data["To do"][i])

                if data["Tips"][i] not in seen:
                    headings.append(data["Tips"][i]) #append unique values
                    seen.add(data["Tips"][i])
                # print(stress_manag_tips)
        # headings=headings.unique()
    else:
        print("plz write something")
    if(headings):
        info={
                "head":headings,
                # "tips":stress_manag_tips,
                "search":search
            }
    else:
        info={
                "head":"NA",
                "tips":"",
                "search":"NA"
            }
    
    return render(request,'Recommender.html',info)

def getInfo(request,search):
    data=pd.read_csv("Voiceproject\Data\Handling Alzh Patients.csv",encoding='unicode_escape')
    stress_manag_tips=[]

    for i in range(0,len(data)):
            if( data["Tips"][i]==search):
                stress_manag_tips.append(data["To do"][i])
    
    if(stress_manag_tips):
        info={
                # "head":headings,
                "tips":stress_manag_tips,
                "search":search
            }
    else:
        info={
               
                "tips":" ",
                "search":"NA",
            }

    return render(request,'Tips.html',info)