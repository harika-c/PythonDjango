from django import forms
from .models import Product,UserNamePassword

class ProductForm(forms.ModelForm):
    email=forms.EmailField()
    title = forms.CharField(label='', widget=forms.TextInput(attrs={'placeholder': 'your title'}))
    description = forms.CharField(required=False,
                                  widget=
                                  forms.Textarea(attrs=
                                                 {'placeholder': "your description",
                                                  "row": "5",
                                                  'cols': '30',
                                                  'id': 'my-id',
                                                  'class': 'new-class'}))
    price = forms.DecimalField(initial=13.99)
    class Meta:
        model = Product
        fields = [
            'title',
            'description',
            'price',
            'email',
        ]
    def clean_title(self,*args,**kwargs):
        title11=self.cleaned_data.get("title")
        if not "abc" in title11:
            raise forms.ValidationError("this is not valid title")
        return title11
    def clean_email(self,*args,**kwargs):
        email=self.cleaned_data.get("email")
        if not "com" in email:
            raise forms.ValidationError("only .com email ids must be entered ")
        return email
class RawProductForm(forms.Form):
    title=forms.CharField(label='',widget=forms.TextInput(attrs={'placeholder':'your title'}))
    description=forms.CharField(required=False,
                                widget=
                                forms.Textarea(attrs=
                                               {'placeholder': "your description",
                                                "row":"5",
                                                'cols':'20',
                                                'id':'my-id',
                                                'class':'new-class'}))
    price=forms.DecimalField()
class UsernameForm(forms.ModelForm):
    username=forms.CharField(required=True,widget=forms.TextInput(attrs={
                                    'placeholder':"enter your username",
                                    'id':'username',
                                    'class':'userid'
                                     }))
    password=forms.CharField(required=True,widget=forms.TextInput(attrs={
                                    'placeholder':"enter your password",
                                    'id':'password',
                                    'class':'passwordid'
                                     }))

    class Meta:
        model = UserNamePassword
        fields = [
            'username',
            'password',

        ]