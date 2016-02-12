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
    return render(request,'pbl/score_list.html',{'scores':scores})

def score_details(request, student_id):
	if request.user.is_authenticated:
		try:
			competition = Competition.objects.filter(student=student_id)
		except Competition.DoesNotExist:
			pass
		return render(request,'pbl/score_details.html',{'competition':competition, 'student_id':student_id})
	else:
		return render(request,'pbl/index.html',{})



def about(request):
    return render(request,'pbl/about.html',{})
def contact(request):
    return render(request,'pbl/contact.html',{})

def demo0(request):
	if request.method != "POST":
		return render(request,'pbl/demo0/demo0.html',{})
	else:
		challenge_id = 1
		level_id = 1
		completed = is_already_completed_level(request.user,challenge_id,level_id)
		if not completed:
			flag = compute_score(request,challenge_id,level_id)
			if flag:
				return redirect('index')
		return redirect('index')

def is_already_completed_level(user,c_id,l_id):
	try:
		comp = Competition.objects.filter(student=user,challenge=c_id, level=l_id)
		if comp:
			return 1
	except Competition.DoesNotExist:
		return 0

def demo1(request):
	if request.method != "POST":
		return render(request,'pbl/demo0/demo0.html',{})
	else:
		challenge_id = 1
		level_id = 2
		completed = is_already_completed_level(request.user,challenge_id,level_id)
		if not completed:
			flag = compute_score(request,challenge_id,level_id)
			if flag:
				return redirect('index')
		return redirect('index')

def demo2(request):
	if request.method != "POST":
		return render(request,'pbl/demo0/demo0.html',{})
	else:
		challenge_id = 1
		level_id = 3
		completed = is_already_completed_level(request.user,challenge_id,level_id)
		if not completed:
			flag = compute_score(request,challenge_id,level_id)
			if flag:
				return redirect('index')
		return redirect('index')

def demo3(request):
	if request.method != "POST":
		return render(request,'pbl/demo0/demo0.html',{})
	else:
		challenge_id = 2
		level_id = 1
		completed = is_already_completed_level(request.user,challenge_id,level_id)
		if not completed:
			flag = compute_score(request,challenge_id,level_id)
			if flag:
				return redirect('index')
		return redirect('index')

def demo4(request):
	if request.method != "POST":
		return render(request,'pbl/demo0/demo0.html',{})
	else:
		challenge_id = 2
		level_id = 2
		completed = is_already_completed_level(request.user,challenge_id,level_id)
		if not completed:
			flag = compute_score(request,challenge_id,level_id)
			if flag:
				return redirect('index')
		return redirect('index')

def compute_score(request,c_id, l_id):
	if request.user:			
		try:
			challenge = Challenge.objects.get(id=c_id) # need to make id dynamic
			level = Level.objects.get(id=l_id)
			competition = Competition(student=request.user,challenge=challenge, level=level, score=level.value)
			competition.save()
			score = Score.objects.get(student=request.user)
			score.score = score.score + level.value
			score.save()
		except Score.DoesNotExist:
			score = Score(student=request.user, score=level.value)
			score.save()
	else:
		return 0
	return 1