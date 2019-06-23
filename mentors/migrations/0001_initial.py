# Generated by Django 2.2 on 2019-06-22 12:38

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='mentors',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=256)),
                ('contact', models.TextField(blank=True, max_length=13, null=True)),
                ('email', models.CharField(max_length=256)),
                ('detail', models.TextField()),
                ('description', models.TextField()),
                ('profile_pic', models.ImageField(upload_to='static/uploads/mentors')),
                ('flag', models.BooleanField(default=False)),
                ('year', models.IntegerField(default=2018)),
            ],
        ),
    ]
