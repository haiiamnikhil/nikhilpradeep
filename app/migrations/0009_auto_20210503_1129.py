# Generated by Django 3.0 on 2021-05-03 05:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0008_auto_20210503_1128'),
    ]

    operations = [
        migrations.AlterField(
            model_name='certification',
            name='certififedYear',
            field=models.DateField(blank=True, null=True),
        ),
    ]
