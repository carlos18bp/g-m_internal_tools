from .views import userAuth, user, process
from django.urls import path

sign_in_sign_on_urls = [
    path('sign_on/', userAuth.sign_on, name='sign_on'),
    path('sign_on/send_verification_code/', userAuth.send_verification_code, name='send_verification_code'),
    path('sign_in/', userAuth.sign_in, name='sign_in'),
    path('send_passcode/', userAuth.send_passcode, name='send_passcode'),
    path('google_login/', userAuth.google_login, name='google_login'),
    path('update_profile/', userAuth.update_profile, name='update_profile'),
    path('update_password/', userAuth.update_password, name='update_password'),    
    path('verify_passcode_and_reset_password/', userAuth.verify_passcode_and_reset_password, name='verify_passcode_and_reset_password'),
]

user_urls = [
    path('users/', user.user_list, name='user-list'),
    path('users/<int:pk>/', user.user_detail, name='user-detail'),
]

process_urls = [
    path('processes/', process.process_list, name='process-list'),
    path('processes/<int:pk>/', process.process_detail, name='process-detail'),   
]

urlpatterns = sign_in_sign_on_urls + user_urls + process_urls