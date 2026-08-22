# pyrefly: ignore [missing-import]
from rest_framework.routers import DefaultRouter

from .views import (
    CategoriaViewSet,
    MunicipioViewSet,
    ServicioViewSet,
)


router = DefaultRouter()

router.register(
    r'municipios',
    MunicipioViewSet,
    basename='municipio'
)

router.register(
    r'categorias',
    CategoriaViewSet,
    basename='categoria'
)

router.register(
    r'servicios',
    ServicioViewSet,
    basename='servicio'
)

urlpatterns = router.urls