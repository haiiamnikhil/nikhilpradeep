# Generated by Django 3.0 on 2021-05-07 05:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0011_auto_20210504_2057'),
    ]

    operations = [
        migrations.AddField(
            model_name='services',
            name='detailedHeading',
            field=models.CharField(max_length=100, null=True, unique=True),
        ),
    ]