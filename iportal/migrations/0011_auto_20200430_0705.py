# Generated by Django 2.2.2 on 2020-04-30 07:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('iportal', '0010_auto_20200423_0040'),
    ]

    operations = [
        migrations.AlterField(
            model_name='startup',
            name='idea_approved',
            field=models.CharField(choices=[('Approved', 'approved'), ('Rejected', 'rejected'), ('Pending', 'pending')], max_length=25),
        ),
    ]
