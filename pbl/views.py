from django.shortcuts import render
from .models import *

# Create your views here.
def index(request):
    
    request.session['location'] = "unknown"
    if request.user.is_authenticated():
        request.session['location'] = "Earth"
    return render(request,'pbl/index.html',{})

def score_list(request):
    scores = Score.objects.all()
    competitions = Competition.objects.all()
    return render(request,'pbl/score_list.html',{'scores':scores ,'competitions':competitions})

def about(request):
    return render(request,'pbl/about.html',{})
def contact(request):
    return render(request,'pbl/contact.html',{})

def demo0(request):
    return render(request,'pbl/demo0/demo0.html',{})
