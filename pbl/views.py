from django.shortcuts import render, get_object_or_404 ,redirect ,HttpResponse
from .models import *
from django.views import generic
# for login required decorator
from django.contrib.auth.decorators import login_required
from django.utils.html import strip_tags, escape
from django.contrib import messages
# 404 and 500 error
from django.shortcuts import render_to_response
from django.template import RequestContext
import random

# Create your views here.
context = {
    'page' : 'web application security learning tools',
}

# 404 error
def handler404(request):
    response = render_to_response('404.html', {},
                                  context_instance=RequestContext(request))
    response.status_code = 404
    return response


def handler500(request):
    response = render_to_response('500.html', {},
                                  context_instance=RequestContext(request))
    response.status_code = 500
    return response


# class IndexView(generic.ListView):
# 	template_name = 'pbl/index.html'
# 	# context_name = 'index'


def index(request):
#    request.session['location'] = "unknown"
#    if request.user.is_authenticated():
#        request.session['location'] = "Earth"
    return render(request,'pbl/index.html',{})

# @login_required(login_url='/accounts/login')
def score_list(request):
    if not request.user.is_authenticated():
    	html = "<html><body>You must first login to access this page. <span> <a href="'../'">Go Home page</a></span></body></html>"
    	return HttpResponse(html)
    if not request.user.is_superuser:
    	html = "<html><body>Invalid Access <span> <a href="'../'">Go Home page</a></span></body></html>"
    	return HttpResponse(html)
    scores = Score.objects.all().order_by("-score")
    return render(request,'pbl/score_list.html',{'scores':scores})        
        

def score_details(request, student_id):
    if not request.user.is_authenticated():
    	html = "<html><body>You must first login to access this page. <span> <a href="'../'">Go Home page</a></span></body></html>"
    	return HttpResponse(html)
    if request.user.id != int(student_id) and not(request.user.is_superuser):
    	html = "<html><body>Invalid access <span> <a href="'../../'">Go Back</a></span></body></html>"
    	return HttpResponse(html)
    try:
        competition = Competition.objects.filter(student=student_id).order_by("-id")
    except Competition.DoesNotExist:
        pass
    return render(request,'pbl/score_details.html',{'competition':competition, 'student_id':student_id})



def about(request):
    return render(request,'pbl/about.html',{})
def contact(request):
    return render(request,'pbl/contact.html',{})

def demo0(request):
    # messages.error(request)
    if not request.user.is_authenticated():
        html = "<html><body>You must first login to access this page. <span> <a href="'../'">Go Home page</a></span></body></html>"
        return HttpResponse(html)
    if request.method != "POST":
        return render(request,'pbl/demo0/demo0.html',{})
    passwd = escape(strip_tags(request.POST.get("inputPassword")))
        # passwd = escape(strip_tags(form.cleaned_data['inputPassword']))
    if passwd=="12345678":
        challenge_id = 1
        level_id = 1
        completed = is_already_completed_level(request.user,challenge_id,level_id)
        if not completed:
        	compute_score(request,challenge_id,level_id)
        return redirect('index')
    messages.error(request,"Incorrect Password")
    return render(request,'pbl/demo0/demo0.html',{})

def is_already_completed_level(user,c_id,l_id):
	try:
		comp = Competition.objects.filter(student=user,challenge=c_id, level=l_id)
		if comp:
			return 1
	except Competition.DoesNotExist:
		return 0

def demo1(request):
	if not request.user.is_authenticated():
		html = "<html><body>You must first login to access this page. <span> <a href="'../'">Go Home page</a></span></body></html>"
		return HttpResponse(html)
	if request.method != "POST":
		return render(request,'pbl/demo1/demo1.html',{})
	passwd = escape(strip_tags(request.POST.get("inputPassword")))
	if passwd=="s12345678":
		challenge_id = 1
		level_id = 2
		completed = is_already_completed_level(request.user,challenge_id,level_id)
		if not completed:
			compute_score(request,challenge_id,level_id)
		return redirect('index')
	messages.error(request,"Incorrect Password")
	return render(request,'pbl/demo1/demo1.html',{})

def demo2(request):
	if not request.user.is_authenticated():
		html = "<html><body>You must first login to access this page. <span> <a href="'../'">Go Home page</a></span></body></html>"
		return HttpResponse(html)
	if request.method != "POST":
		return render(request,'pbl/demo2/demo2.html',{})
	passwd = escape(strip_tags(request.POST.get("inputPassword")))
	if passwd=="b0b802febcbb710fbcc537dbce86745d":
		challenge_id = 1
		level_id = 3
		completed = is_already_completed_level(request.user,challenge_id,level_id)
		if not completed:
			compute_score(request,challenge_id,level_id)
		return redirect('index')
	messages.error(request,"Incorrect Password")
	return render(request,'pbl/demo2/demo2.html',{})

def demo3(request):
	if not request.user.is_authenticated():
		html = "<html><body>You must first login to access this page. <span> <a href="'../'">Go Home page</a></span></body></html>"
		return HttpResponse(html)
	if request.method != "POST":
		return render(request,'pbl/demo3/demo3.html',{})
	else:
		challenge_id = 2
		level_id = 1
		completed = is_already_completed_level(request.user,challenge_id,level_id)
		if not completed:
			compute_score(request,challenge_id,level_id)
			# flag = compute_score(request,challenge_id,level_id)
			# if flag:
			# 	return redirect('index')
		return redirect('index')

def demo4(request):
	if not request.user.is_authenticated():
		html = "<html><body>You must first login to access this page. <span> <a href="'../'">Go Home page</a></span></body></html>"
		return HttpResponse(html)
	if request.method != "POST":
		return render(request,'pbl/demo4/demo4.html',{})
	else:
		challenge_id = 2
		level_id = 2
		completed = is_already_completed_level(request.user,challenge_id,level_id)
		if not completed:
			compute_score(request,challenge_id,level_id)
			# flag = compute_score(request,challenge_id,level_id)
			# if flag:
			# 	return redirect('index')
		return redirect('index')

#web login challenge Level 3 - challenge_id = 1 Level_id = 4
def demo5(request):
	if not request.user.is_authenticated():
		html = "<html><body>You must first login to access this page. <span> <a href="'../'">Go Home page</a></span></body></html>"
		return HttpResponse(html)
	if request.method != "POST":
		return render(request,'pbl/demo5/index.html',{})
	passwd = escape(strip_tags(request.POST.get("inputPassword")))
	if passwd=="nulltester":
		challenge_id = 1
		level_id = 4
		completed = is_already_completed_level(request.user,challenge_id,level_id)
		if not completed:
			compute_score(request,challenge_id,level_id)
		return redirect('index')
	messages.error(request,"Incorrect Password")
	return render(request,'pbl/demo5/index.html',{})

def demo5_1(request):
	return render(request,'pbl/demo5/donotlookinhere/password.txt', {})

def app_logic0(request):
	if not request.user.is_authenticated():
		html = "<html><body>You must first login to access this page. <span> <a href="'../'">Go Home page</a></span></body></html>"
		return HttpResponse(html)
	if request.method != "POST":
		return render(request,'pbl/app_logic/0/index.html',{})
	# if request.POST.get("inputAmount") is not None:
	# 	inputAmount = escape((strip_tags(request.POST.get("inputAmount"))))
	# 	if not(inputAmount) or len(inputAmount)>4:
	# 		messages.error(request,"Enter the Amount: $1 to $9,999")
	# 	else:
	# 		success, msg = doTransfer(inputAmount)
	# 		if success:

	# 			return HttpResponse("<html><body>it works</body></html>")
	# 		else: messages.error(request,msg)
	# 	return render(request,'pbl/app_logic/0/index.html',{})
	return render(request,'pbl/app_logic/0/index.html',{})

def app_logic1(request):
	if not request.user.is_authenticated():
		html = "<html><body>You must first login to access this page. <span> <a href="'../'">Go Home page</a></span></body></html>"
		return HttpResponse(html)
	if request.method != "POST":
		return render(request,'pbl/app_logic/1/index.html',{})
	if request.POST.get("inputAmount") is not None:
		inputAmount = escape((strip_tags(request.POST.get("inputAmount"))))
		try:
			inp = int(inputAmount)
			if inp > 9999:
				messages.error(request,"Enter the Amount: $1 to $9,999")
			else:
				success,txt = doTransfer1(inp)
				if success:
					challenge_id = 3
					level_id = 2
					completed = is_already_completed_level(request.user,challenge_id,level_id)					
					if not completed:
						compute_score(request,challenge_id,level_id)
						messages.success(request,"Congratulations, You have completed Application Flow Challenge - Level 1")
					else: messages.success(request,"Congratulations beating up again- Application Flow Challenge - Level 1. But you will not get the score")
					return render(request,'pbl/app_logic/1/answers.html',{})
				else: 
					txt = txt + "\n Can you pull money \nback to your account??"
					messages.error(request,txt)
			# messages.info(request,str(inp))
		except ValueError:
			messages.error(request,"Enter the Amount: $1 to $9,999")
	# messages.error(request,"Enter the Amount: $1 to $9,999")
	return render(request,'pbl/app_logic/1/index.html',{})

def doTransfer1(ip):
	amountOfA = 50000;
	amountOfB = 50000;
	newAmountOfA = amountOfA - ip
	newAmountOfB = amountOfB + ip
	if newAmountOfA > amountOfA:
		return 1,"Successfully Money Transferred from Account B to Account A. </br> New Balance: A: "+str(newAmountOfA)+" and B: "+str(newAmountOfB)
	else:
		return 0,"Successfully Money Transferred from Account A to Account B. \n New Balance: A: "+str(newAmountOfA)+" and B: "+str(newAmountOfB)


def xss_1(request):
	if not request.user.is_authenticated():
		html = "<html><body>You must first login to access this page. <span> <a href="'../'">Go Home page</a></span></body></html>"
		return HttpResponse(html)
	if request.method != "GET":
		return render(request,'pbl/xss/1/index.html',{})
	inputSearch = request.GET.get("search")
	# html = "<html><body><h1> Searched for:"+" <span> <a href="'../'">Go Home page</a></span></body></html>"
	# context = {
	# 	'searched' : input,
	# }
	# messages.info(request,input)
	return render(request,'pbl/xss/1/index.html',{'inputSearch':inputSearch})
	# input = request.GET.get('search')
	# return HttpResponse('<h1>Hello, %s!</h1>' % input)
	# return render(request,'pbl/xss/1/index.html',{})

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

def rand_form(request):
	if not request.user.is_authenticated():
		html = "<html><body>You must first login to access this page. <span> <a href="'../'">Go Home page</a></span></body></html>"
		return HttpResponse(html)
	if request.method != "POST":
		rnd = str(random.randint(1,3))
		# response.set_cookie('rnd_nm',rnd)
		# request.session['rnd_nm'] = rnd
		#rnd_template = "template_0"+rnd+".html"
		# return HttpResponse("<html><body>You mu %d<span> <a href="'../'">Go Home page</a></span></body></html>" % rnd)
		return render(request,'pbl/rand_form/index.html',{'rand_num': rnd})

# For form having vulnerablities
def vuln_form(request):
	if not request.user.is_authenticated():
		html = "<html><body>You must first login to access this page. <span> <a href="'../'">Go Home page</a></span></body></html>"
		return HttpResponse(html)
	if request.method != "POST":
		return render(request,'pbl/vuln_form/index.html',{})


def crypto(request):
	if not request.user.is_authenticated():
		html = "<html><body>You must first login to access this page. <span> <a href="'../'">Go Home page</a></span></body></html>"
		return HttpResponse(html)
	if request.method != "POST":
		return render(request,'pbl/crypto/index.html',{})	
	if request.POST.get("plainText") is not None:
		inputtext = escape((strip_tags(request.POST.get("plainText"))))
		if inputtext:
			encryptedtext = doEncrypt(inputtext)
			# messages.info(request,encryptedtext)
			return render(request,'pbl/crypto/index.html',{'encryptedtext':encryptedtext})
	if request.POST.get("inputPassword") is not None:
		passwd = escape(strip_tags(request.POST.get("inputPassword")))
		if passwd == doDecrypt("ADGJMPSV"):
			challenge_id = 1
			level_id = 5
			completed = is_already_completed_level(request.user,challenge_id,level_id)
			if not completed:
				compute_score(request,challenge_id,level_id)
				messages.success(request,"Congratulations, You have completed web login challenge - Level 4")
			else: messages.success(request,"Congratulations beating up again- web login challenge - Level 4. But you will not get the score")
			return render(request,'pbl/crypto/answers.html',{})
			# return HttpResponse("<html><body>You got it.</body></html>")
		messages.error(request,"Incorrect Password")
	return render(request,'pbl/crypto/index.html',{})
	# return HttpResponse("<html><body>You mu <span> <a href="'../'">Go Home page</a></span></body></html>")
def doEncrypt(p):
	decrypt = ""
	for index in range(len(p)):
		asc = ord(p[index])
		asc = asc+(index*2)
		txt = chr(asc)
		decrypt = decrypt+txt
	return decrypt
def doDecrypt(p):
	decrypt = ""
	for index in range(len(p)):
		asc = ord(p[index])
		asc = asc-(index*2)
		txt = chr(asc)
		decrypt = decrypt+txt
	return decrypt

def doTransfer(ia):
	amountOfA = 50000;
	amountOfB = 50000;
	if ia <= 999:
		return 0,"Try Harder"
	if ia>amountOfA:
		return 0,"Insufficient Amount in account!!!"
	amountOfA = amountOfA - ia
	amountOfB = amountOfB + ia
	return 1,"Successfully Money Transferred from Account A to Account B. New Balance: A: "+str(amountOfA)+" and B: "+str(amountOfB)

