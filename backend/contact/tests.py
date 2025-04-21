from django.test import TestCase, Client
from django.urls import reverse
from rest_framework import status
from .models import Contact
from .serializers import ContactSerializer

class ContactTests(TestCase):
    def setUp(self):
        self.client = Client()
        self.valid_payload = {
            'name': 'John Doe',
            'email': 'john@example.com',
            'subject': 'Test Subject',
            'message': 'This is a test message.'
        }
        self.invalid_payload = {
            'name': '',
            'email': 'invalid-email',
            'subject': '',
            'message': ''
        }

    def test_create_valid_contact(self):
        """Test creating a new contact with valid data"""
        response = self.client.post(
            reverse('contact_form'),
            data=self.valid_payload,
            content_type='application/json'
        )
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Contact.objects.count(), 1)
        self.assertEqual(Contact.objects.get().name, 'John Doe')

    def test_create_invalid_contact(self):
        """Test creating a new contact with invalid data"""
        response = self.client.post(
            reverse('contact_form'),
            data=self.invalid_payload,
            content_type='application/json'
        )
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertEqual(Contact.objects.count(), 0)

class ContactModelTests(TestCase):
    def setUp(self):
        self.contact = Contact.objects.create(
            name='Jane Doe',
            email='jane@example.com',
            subject='Test Subject',
            message='This is a test message.'
        )

    def test_contact_creation(self):
        """Test Contact model creation"""
        self.assertEqual(self.contact.name, 'Jane Doe')
        self.assertEqual(self.contact.email, 'jane@example.com')
        self.assertTrue(isinstance(self.contact, Contact))
        self.assertEqual(str(self.contact), 'Jane Doe - Test Subject')

class ContactSerializerTests(TestCase):
    def setUp(self):
        self.contact_attributes = {
            'name': 'John Smith',
            'email': 'john.smith@example.com',
            'subject': 'Test Subject',
            'message': 'This is a test message.'
        }
        self.serializer = ContactSerializer(data=self.contact_attributes)

    def test_serializer_contains_expected_fields(self):
        """Test that serializer contains expected fields"""
        self.assertTrue(self.serializer.is_valid())
        data = self.serializer.data
        self.assertEqual(set(data.keys()), set(['name', 'email', 'subject', 'message']))
