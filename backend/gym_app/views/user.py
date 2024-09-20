from rest_framework.response import Response
from rest_framework import status
from gym_app.models import User
from gym_app.serializers.user import UserSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, permission_classes

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def user_list(request):
    """
    API view to retrieve a list of users (requires authentication).
    """
    users = User.objects.all()
    serializer = UserSerializer(users, many=True, context={'request': request})
    return Response(serializer.data, status=status.HTTP_200_OK)

