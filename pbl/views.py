from django.shortcuts import render
from .models import Score

# Create your views here.
def index(request):
    return render(request,'pbl/index.html',{})

def score_list(request):
    scores = Score.objects.all()
    return render(request,'pbl/score_list.html',{'scores':scores})

def about(request):
    return render(request,'pbl/about.html',{})
def contact(request):
    return render(request,'pbl/contact.html',{})
