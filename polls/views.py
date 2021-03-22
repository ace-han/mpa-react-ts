from django.shortcuts import render


def index(request):
    ctx = {}
    return render(request, "polls/index.html", ctx)
