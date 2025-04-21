from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.core.mail import send_mail
from django.conf import settings
from .serializers import ContactSerializer

# Create your views here.

@api_view(['POST'])
def contact_form(request):
    serializer = ContactSerializer(data=request.data)
    if serializer.is_valid():
        contact = serializer.save()
        
        # Send email notification
        try:
            send_mail(
                subject=f'New Contact Form Submission: {contact.subject}',
                message=f'Name: {contact.name}\nEmail: {contact.email}\n\nMessage:\n{contact.message}',
                from_email=settings.DEFAULT_FROM_EMAIL,
                recipient_list=[settings.CONTACT_EMAIL],
                fail_silently=False,
            )
        except Exception as e:
            print(f'Failed to send email: {e}')
            # Continue execution even if email fails
        
        return Response({
            'success': True,
            'message': 'Thank you for your message! We will get back to you soon.'
        }, status=status.HTTP_201_CREATED)
    
    return Response({
        'success': False,
        'message': 'Invalid form data',
        'errors': serializer.errors
    }, status=status.HTTP_400_BAD_REQUEST)
