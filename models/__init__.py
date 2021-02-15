from django.utils import timezone
from django.db.models import Model, DateTimeField, CASCADE
from django.contrib.auth.models import User
from django.db.models import ForeignKey as FKey


class BookModel (Model):
    posted_time = DateTimeField(default=timezone.now, blank=True, null=True)
    posted_user = FKey(User, on_delete=CASCADE, blank=True, null=True)

    class Meta:
        app_label = 'book'


class TsunModel (Model):
    posted_time = DateTimeField(default=timezone.now, blank=True, null=True)
    posted_user = FKey(User, on_delete=CASCADE, blank=True, null=True)

    class Meta:
        app_label = 'tsun'
