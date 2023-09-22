# Generated by Django 2.2.3 on 2022-09-10 14:25

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('category', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('code', models.IntegerField(help_text='El codigo de Barras')),
                ('cost', models.DecimalField(decimal_places=2, help_text='Costo del producto', max_digits=5)),
                ('price', models.DecimalField(decimal_places=2, help_text='Precio de venta', max_digits=5)),
                ('stock', models.IntegerField(help_text='Stock del Producto')),
                ('alerts', models.IntegerField(help_text='Alerta para cantidad de productos')),
                ('image', models.ImageField(upload_to='product')),
                ('document', models.FileField(upload_to='pdf')),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='category.Categoria')),
            ],
        ),
    ]