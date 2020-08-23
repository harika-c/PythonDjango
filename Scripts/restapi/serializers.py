from rest_framework import serializers
from .models import Rest

class RestExampleSerializers(serializers.ModelSerializer):

    class Meta:
        model=Rest
        feilds='__all__'
        # or can mention specific to feilds