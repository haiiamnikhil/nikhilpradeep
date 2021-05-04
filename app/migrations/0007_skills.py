# Generated by Django 3.0 on 2021-05-03 05:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0006_auto_20210503_1012'),
    ]

    operations = [
        migrations.CreateModel(
            name='Skills',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('heading', models.CharField(max_length=100, null=True, unique=True)),
                ('description', models.TextField(max_length=500, null=True)),
            ],
            options={
                'verbose_name_plural': 'Skills',
            },
        ),
    ]
