from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request,'pbl/index.html',{})

def score_list(request):
    return render(request,'pbl/score_list.html',{})
