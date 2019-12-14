from django import template
from django.apps import apps
register = template.Library()

@register.filter
def get_fields(obj):

    field_list=[f for f in obj._meta.get_fields() if f.name not in ["χρεώσεις"]]

    return [(obj._meta.get_field(field.name).verbose_name.title(), field.value_to_string(obj)) for field in field_list]

# @register.filter
# def get_fields(obj):
#
#     field_list=[f for f in obj._meta.get_fields() if f.name not in ["χρεώσεις"]]
#
#     return [(obj._meta.get_field(field.name).verbose_name.title(), field.value_to_string(obj)) for field in field_list]

@register.filter
def get_comment_list(obj):
    return apps.get_model(app_label='documentmanager', model_name='Comments').objects.filter(χρεώσεις=obj)


@register.simple_tag
def url_replace(request, field, value):

    dict_ = request.GET.copy()

    dict_[field] = value

    return dict_.urlencode()
