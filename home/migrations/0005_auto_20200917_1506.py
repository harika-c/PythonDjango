# Generated by Django 3.0 on 2020-09-17 09:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0004_movies_moviecontext'),
    ]

    operations = [
        migrations.AddField(
            model_name='movies',
            name='hallname',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='movies',
            name='locationname',
            field=models.TextField(blank=True, null=True),
        ),
    ]