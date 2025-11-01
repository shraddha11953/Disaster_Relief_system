from rest_framework import serializers
from .models import User 
#from .models import HelpRequest
from django.contrib.auth.password_validation import validate_password

class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=True, validators=[validate_password])
    class Meta:
        model = User
        fields = ("id","username","email","password","role","phone_number","first_name","last_name")

    def create(self, validated_data):
        user = User(
            username=validated_data["username"],
            email=validated_data.get("email",""),
            role=validated_data.get("role","citizen"),
            phone_number=validated_data.get("phone_number","")
        )
        user.set_password(validated_data["password"])
        user.save()
        return user

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ("id","username","email","role","phone_number","first_name","last_name")
