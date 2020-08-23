from .models import AboutBirds
from django import forms
class CreateBirdsForm(forms.ModelForm):
    name=forms.CharField(
                         required=True,
                         widget=forms.TextInput(
                             attrs=
                             {'placeholder':"Bird Name"
                                    }))
    country=forms.CharField(required=True,
                            widget=forms.TextInput(
                                attrs={
                                    'placeholder':'Country Name'
                                         }))
    canfly=forms.BooleanField()

    class Meta:
        model=AboutBirds
        exclude=()
        feilds=[
            "name",
            "country",
            "canfly"
        ]