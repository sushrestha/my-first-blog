from django.conf.urls import include, url
from . import views
handler404 = 'views.my_404_view'
urlpatterns = [
	    url(r'^$',views.index,name='index'),
        url(r'^score/$',views.score_list,name='score_list'),
        url(r'^score/(?P<student_id>[0-9]+)/$',views.score_details,name='score_details'),
        url(r'^about/$',views.about,name='about'),
        url(r'^contact/$',views.contact,name='contact'),
        url(r'^demo0/$',views.demo0,name='demo0'),
        url(r'^demo1/$',views.demo1,name='demo1'),
        url(r'^demo2/$',views.demo2,name='demo2'),
        url(r'^demo3/$',views.demo3,name='demo3'),
        url(r'^demo4/$',views.demo4,name='demo4'),
        url(r'^demo5/$',views.demo5,name='demo5'),
        url(r'^demo5/donotlookinhere/password.txt$',views.demo5_1,name='demo5_1'),
        url(r'^crypto/$',views.crypto,name='crypto'),
        url(r'^demo6/$',views.demo6,name='demo6'),
        url(r'^demo7/$',views.demo7,name='demo7'),
        url(r'^xss/1/$',views.xss_1,name='xss_1'),
        url(r'^rand_form/$',views.rand_form,name='rand_form'),
        url(r'^vuln_form/$',views.vuln_form,name='vuln_form'),
]
