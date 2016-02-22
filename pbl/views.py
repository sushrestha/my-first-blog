from django.shortcuts import render, get_object_or_404 ,redirect ,HttpResponse
from .models import *
from django.views import generic

# Create your views here.
context = {
    'page' : 'web application security learning tools',
}

# class IndexView(generic.ListView):
# 	template_name = 'pbl/index.html'
# 	# context_name = 'index'


def index(request):
#    request.session['location'] = "unknown"
#    if request.user.is_authenticated():
#        request.session['location'] = "Earth"
    return render(request,'pbl/index.html',{})

def score_list(request):
    if request.user.is_authenticated:
        scores = Score.objects.all()
        return render(request,'pbl/score_list.html',{'scores':scores})
    else:
    	return render(request,'pbl/index.html',{})

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
		return render(request,'pbl/demo1/demo1.html',{})
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
		return render(request,'pbl/demo2/demo2.html',{})
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
		return render(request,'pbl/demo3/demo3.html',{})
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
		return render(request,'pbl/demo4/demo4.html',{})
	else:
		challenge_id = 2
		level_id = 2
		completed = is_already_completed_level(request.user,challenge_id,level_id)
		if not completed:
			flag = compute_score(request,challenge_id,level_id)
			if flag:
				return redirect('index')
		return redirect('index')

def demo5(request):
	if request.method != "POST":
		return render(request,'pbl/demo5/index.html',{})
	else:
		html = "<html><body>It is now.</body></html>"
		return HttpResponse(html)
	# if request.method != "POST":
	# 	return render(request,'pbl/demo5/index.html',{})
	# else:

	# 	challenge_id = 1
	# 	level_id = 4
	# 	completed = is_already_completed_level(request.user,challenge_id,level_id)
	# 	if not completed:
	# 		flag = compute_score(request,challenge_id,level_id)
	# 		if flag:
	# 			return redirect('index')
	# 	return redirect('index')

def demo5_1(request):
	return render(request,'pbl/demo5/donotlookinhere/password.txt', {})

def demo6(request):
	if request.method != "POST":
		return render(request,'pbl/demo6/index.html',{})
	else:
		# return redirect('index')
		html = "<html><body>You got it.</body></html>"
		return HttpResponse(html)
def demo7(request):
	if request.method != "POST":
		return render(request,'pbl/demo7/index.html',{})
	else:
		html = "<html><body>You got it.</body></html>"
		return HttpResponse(html)
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