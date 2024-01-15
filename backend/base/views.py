from rest_framework import viewsets
from .models import Product
from .serializers import ProductSerializer
from .serializers import UserSerializer
from django.contrib.auth.models import User
from rest_framework.generics import RetrieveUpdateDestroyAPIView
from rest_framework.permissions import IsAuthenticated, IsAdminUser, IsAuthenticatedOrReadOnly
# Create your views here.
class ProductViewSet(viewsets.ReadOnlyModelViewSet):
    """Product View Set"""

    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class UserViewSet(viewsets.ModelViewSet):
    """User View Set"""

    # permission_classes = 
    queryset = User.objects.all()
    serializer_class = UserSerializer

