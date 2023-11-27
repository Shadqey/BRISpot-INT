from django.db import models
from safedelete import SOFT_DELETE_CASCADE
from safedelete.models import SafeDeleteModel
import uuid

# Create your models here.

class BaseModel(SafeDeleteModel):
    id = models.UUIDField(
        default=uuid.uuid4, 
        primary_key=True, 
        editable=False,
    )

    _safedelete_policy = SOFT_DELETE_CASCADE

    class Meta:
        abstract = True
