# Generated by Django 3.0 on 2021-05-03 17:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0009_auto_20210503_1129'),
    ]

    operations = [
        migrations.CreateModel(
            name='Services',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('heading', models.CharField(max_length=50, null=True, unique=True)),
                ('servicesMetta', models.TextField(max_length=256, null=True)),
                ('description', models.TextField(max_length=500, null=True)),
            ],
            options={
                'verbose_name_plural': 'Services',
            },
        ),
    ]
