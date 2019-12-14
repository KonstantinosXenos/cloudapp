from django.db import models
from django.utils.translation import ugettext_lazy as _
from django.core.exceptions import ValidationError
# Create your models here.

class Case(models.Model):
    name = models.CharField(
        max_length=48,
        help_text=_(
            'Name used by other apps to reference this metadata type. '
            'Do not use python reserved words, or spaces.'
        ),
        unique=True, verbose_name=_('Name')
    )

class MetadataType(models.Model):
    """
    Model to store a type of metadata. Metadata are user defined properties
    that can be assigned a value for each document. Metadata types need
    to be assigned to a document type before they can be used.
    """
    name = models.CharField(
        max_length=48,
        help_text=_(
            'Name used by other apps to reference this metadata type. '
            'Do not use python reserved words, or spaces.'
        ),
        unique=True, verbose_name=_('Name')
    )
    label = models.CharField(max_length=48, verbose_name=_('Label'))
    default = models.CharField(
        blank=True, max_length=128, null=True,
        help_text=_(
            'Enter a template to render. '
            'Use Django\'s default templating language '
            '(https://docs.djangoproject.com/en/1.11/ref/templates/builtins/)'
        ),
        verbose_name=_('Default')
    )
    lookup = models.TextField(
        blank=True, null=True,
        help_text=_(
            'Enter a template to render. '
            'Must result in a comma delimited string. '
            'Use Django\'s default templating language '
            '(https://docs.djangoproject.com/en/1.11/ref/templates/builtins/).'
        ),
        verbose_name=_('Lookup')
    )

    case = models.ForeignKey(Case, on_delete=models.CASCADE)
    # validation = models.CharField(
    #     blank=True, choices=validation_choices(),
    #     help_text=_(
    #         'The validator will reject data entry if the value entered does '
    #         'not conform to the expected format.'
    #     ), max_length=64, verbose_name=_('Validator')
    # )
    # parser = models.CharField(
    #     blank=True, choices=parser_choices(), help_text=_(
    #         'The parser will reformat the value entered to conform to the '
    #         'expected format.'
    #     ), max_length=64, verbose_name=_('Parser')
    # )


    class Meta:
        ordering = ('label',)
        verbose_name = _('Metadata type')
        verbose_name_plural = _('Metadata types')

    def __str__(self):
        return self.label







class MetadataValue(models.Model):
    metadata_type = models.ForeignKey(MetadataType, on_delete=models.CASCADE)
    case = models.ForeignKey(Case, on_delete=models.CASCADE)
    value = models.CharField(max_length=20, verbose_name=_("Value"), blank=True)
