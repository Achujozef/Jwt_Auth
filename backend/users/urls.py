from django.urls import path
from .views import RegisterView,RetrievUserView,UserListView

urlpatterns = [
    path('register',RegisterView.as_view()),
    path('me',RetrievUserView.as_view()),

]
