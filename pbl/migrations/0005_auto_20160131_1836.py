# -*- coding: utf-8 -*-
# Generated by Django 1.9 on 2016-01-31 18:36
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pbl', '0004_auto_20160131_1817'),
    ]

    operations = [
        migrations.AlterField(
            model_name='challenge',
            name='remark',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='competition',
            name='remark',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
    ]
