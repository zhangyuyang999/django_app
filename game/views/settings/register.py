from django.contrib.auth import login
from django.http import JsonResponse
from django.contrib.auth.models import User
from game.models.player.player import Player


def register(request):
    data = request.GET
    username = data.get("username", '').strip()
    password = data.get("password", '').strip()
    password_confirm = data.get("password_confirm", '').strip()
    if not username or not password:
        return JsonResponse({
            'result': 'username and password is not empty',
        })
    if password_confirm != password:
        return JsonResponse({
            'result': 'please correct password and confirm'
        })
    if User.objects.filter(username=username).exists():
        return JsonResponse({
            'result': 'username exist',
        })
    user = User(username=username)
    user.set_password(password)
    user.save()
    Player.objects.create(user=user, photo="/static/image/settings/cc.jpeg")
    login(request, user)
    return JsonResponse({
        'result': 'success'
    })
