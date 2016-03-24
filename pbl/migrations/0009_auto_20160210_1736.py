# -*- coding: utf-8 -*-
# Generated by Django 1.9 on 2016-02-10 17:36
from __future__ import unicode_literals

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('pbl', '0008_auto_20160210_0215'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='score',
            name='level',
        ),
        migrations.AlterField(
            model_name='score',
            name='student',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
    ]