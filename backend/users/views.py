from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import permissions,status
from rest_framework.generics import ListAPIView
from .serializers import UserCreateSerializers,UserSerializers
from .models import UserAccount
# Create your views here.

class RegisterView(APIView):
    def post(self,request):
        data=request.data


        
        serializer=UserCreateSerializers(data=data)
        if not serializer.is_valid():
            return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
        user=serializer.create(serializer.validated_data)
        user=UserSerializers(user)
        return Response(user.data, status=status.HTTP_201_CREATED)
    
    
class RetrievUserView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self,request):
        user =request.user 
        user= UserSerializers(user)

        return Response(user.data, status=status.HTTP_200_OK)
    
    
class UserListView(ListAPIView):
    queryset = UserAccount.objects.all()
    serializer_class = UserSerializers
    permission_classes = [permissions.IsAuthenticated, permissions.IsAdminUser]
