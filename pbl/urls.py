from django.conf.urls import include, url
from . import views
urlpatterns=[
	url(r'^$',views.index,name='index'),
        url(r'^score$',views.score_list,name='score_list'),
        url(r'^score/(?P<student_id>[0-9]+)/$',views.score_details,name='score_details'),
        # url(r'^score/(?P<st>[0-9]+)/$',views.score_details,name='score_details'),
        # url(r'^post/(?P<pk>[0-9]+)/$',views.post_detail,name='post_detail'),
        url(r'^about$',views.about,name='about'),
        url(r'^contact$',views.contact,name='contact'),
        url(r'^demo0$',views.demo0,name='demo0'),
        url(r'^demo1$',views.demo1,name='demo1'),
        url(r'^demo2$',views.demo2,name='demo2'),
        url(r'^demo3$',views.demo3,name='demo3'),
        url(r'^demo4$',views.demo4,name='demo4'),
	#url(r'^post/(?P<pk>[0-9]+)/$',views.post_detail,name='post_detail'),
	#url(r'^post/new/$', views.post_new, name='post_new'),
	#url(r'^post/(?P<pk>[0-9]+)/edit/$', views.post_edit, name='post_edit'),
]
