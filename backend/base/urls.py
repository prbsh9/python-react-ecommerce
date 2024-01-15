from django.urls import path
from base.views import *
from rest_framework import routers
from django.urls import include


# This allows the /api/ to have a list of all the api routes available like: /api/products/  /api/users/ etc
router = routers.DefaultRouter()
router.register("products", ProductViewSet, basename="products")
router.register("users", UserViewSet, basename="users")

urlpatterns = [
    path("", include(router.urls)),
]
