from django.shortcuts import render


def index(request):
    ctx = {}
    return render(request, "polls/index.html", ctx)


def component(request):
    ctx = {}
    return render(request, "polls/component.html", ctx)


def page1(request):
    ctx = {}
    return render(request, "polls/page1.html", ctx)


def page2(request):
    ctx = {}
    return render(request, "polls/page2.html", ctx)
