# Generated by Django 3.0 on 2021-05-24 11:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0014_resume'),
    ]

    operations = [
        migrations.AlterField(
            model_name='projects',
            name='projectGithub',
            field=models.URLField(blank=True, null=True),
        ),
    ]
