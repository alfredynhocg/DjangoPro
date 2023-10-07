from django.core.exceptions import ValidationError

def validate_minimum_size(width=None, height=None):
    def validator(image):
        error = False
        if width is not None and image.width < width:
            error = True
        if height is not None and image.height < height:
            error = True
        if error:
            raise ValidationError(
                [f'El tamaño de la imagen debe ser al menos{width} x {height} pixels.']
            )

    return validator

def validate_greater_than_zero(value):
    if value <= 0:
        raise ValidationError(
            ("%(value)s no es mayor que cero."),
            params={"value": value},
        )