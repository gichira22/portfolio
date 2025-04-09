import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import Contact from '@/components/Contact'
import { submitContactForm } from '@/services/api'

// Mock the api module
jest.mock('@/services/api', () => ({
  submitContactForm: jest.fn(),
}))

describe('Contact Component', () => {
  beforeEach(() => {
    // Clear mock before each test
    jest.clearAllMocks()
  })

  it('renders contact form', () => {
    render(<Contact />)
    
    expect(screen.getByText('Get In Touch')).toBeInTheDocument()
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/subject/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument()
  })

  it('submits form with valid data', async () => {
    const mockResponse = {
      success: true,
      message: 'Thank you for your message!',
    }
    ;(submitContactForm as jest.Mock).mockResolvedValueOnce(mockResponse)

    render(<Contact />)

    // Fill out the form
    fireEvent.change(screen.getByLabelText(/name/i), {
      target: { value: 'John Doe' },
    })
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: 'john@example.com' },
    })
    fireEvent.change(screen.getByLabelText(/subject/i), {
      target: { value: 'Test Subject' },
    })
    fireEvent.change(screen.getByLabelText(/message/i), {
      target: { value: 'This is a test message' },
    })

    // Submit the form
    fireEvent.click(screen.getByRole('button', { name: /send message/i }))

    // Wait for success message
    await waitFor(() => {
      expect(screen.getByText(mockResponse.message)).toBeInTheDocument()
    })

    // Verify form submission
    expect(submitContactForm).toHaveBeenCalledWith({
      name: 'John Doe',
      email: 'john@example.com',
      subject: 'Test Subject',
      message: 'This is a test message',
    })
  })

  it('displays error message on submission failure', async () => {
    const errorMessage = 'Failed to send message'
    ;(submitContactForm as jest.Mock).mockRejectedValueOnce({
      response: { data: { message: errorMessage } },
    })

    render(<Contact />)

    // Fill out the form
    fireEvent.change(screen.getByLabelText(/name/i), {
      target: { value: 'John Doe' },
    })
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: 'john@example.com' },
    })
    fireEvent.change(screen.getByLabelText(/subject/i), {
      target: { value: 'Test Subject' },
    })
    fireEvent.change(screen.getByLabelText(/message/i), {
      target: { value: 'This is a test message' },
    })

    // Submit the form
    fireEvent.click(screen.getByRole('button', { name: /send message/i }))

    // Wait for error message
    await waitFor(() => {
      expect(screen.getByText(errorMessage)).toBeInTheDocument()
    })
  })

  it('validates required fields', async () => {
    render(<Contact />)

    // Submit empty form
    fireEvent.click(screen.getByRole('button', { name: /send message/i }))

    // Check for HTML5 validation
    expect(screen.getByLabelText(/name/i)).toBeInvalid()
    expect(screen.getByLabelText(/email/i)).toBeInvalid()
    expect(screen.getByLabelText(/subject/i)).toBeInvalid()
    expect(screen.getByLabelText(/message/i)).toBeInvalid()

    // Verify that submitContactForm was not called
    expect(submitContactForm).not.toHaveBeenCalled()
  })
})
