from django.shortcuts import render, get_object_or_404 ,redirect
from .models import *

# Create your views here.
context = {
    'page' : 'web application security learning tools',
}
def index(request):
#    request.session['location'] = "unknown"
#    if request.user.is_authenticated():
#        request.session['location'] = "Earth"
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
	if request.method == "POST":
		# 
		c = Competition(student_id =2 ,challenge_id=2 ,level_id=1)
		c.save()
		return redirect('index')
	
	return render(request,'pbl/demo0/demo0.html',{})

def demo1(request):
    return render(request,'pbl/demo1/demo1.html',{})

def demo2(request):
    return render(request,'pbl/demo2/demo2.html',{})

def demo3(request):
    return render(request,'pbl/demo3/demo3.html',{})

def demo4(request):
    return render(request,'pbl/demo4/demo4.html',{})