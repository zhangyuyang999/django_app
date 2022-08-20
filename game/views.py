from django.shortcuts import render
from django.http import HttpResponse


# Create your views here.

def index(request):
    line1 = '<h1>这是一个游戏网页的开发<h1/>'
    return HttpResponse(line1)


def play(request):
    line1 = '<h1 style="text-align: center">游戏界面<h1/>'
    return HttpResponse(line1)
