// ============================================
// BRAHMY ACADEMY - FORMS
// Form validation and submission handling
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');

    if (!contactForm) return;

    // ===== FORM VALIDATION =====
    const validators = {
        name: (value) => {
            if (value.trim().length < 2) {
                return 'Name must be at least 2 characters';
            }
            return null;
        },

        phone: (value) => {
            // Tunisian phone number format
            const phoneRegex = /^(\+216)?[2-9]\d{7}$/;
            if (!phoneRegex.test(value.replace(/\s/g, ''))) {
                return 'Please enter a valid Tunisian phone number';
            }
            return null;
        },

        email: (value) => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                return 'Please enter a valid email address';
            }
            return null;
        },

        program: (value) => {
            if (!value) {
                return 'Please select a program';
            }
            return null;
        },

        message: (value) => {
            if (value.trim().length < 10) {
                return 'Message must be at least 10 characters';
            }
            return null;
        }
    };

    // ===== VALIDATE FIELD =====
    function validateField(field) {
        const fieldName = field.id;
        const value = field.value;
        const validator = validators[fieldName];

        if (!validator) return true;

        const error = validator(value);
        const formGroup = field.closest('.form-group');
        let errorElement = formGroup.querySelector('.form-error');

        if (error) {
            field.classList.add('error');

            if (!errorElement) {
                errorElement = document.createElement('div');
                errorElement.className = 'form-error';
                errorElement.setAttribute('role', 'alert');
                formGroup.appendChild(errorElement);
            }

            errorElement.textContent = error;
            return false;
        } else {
            field.classList.remove('error');

            if (errorElement) {
                errorElement.remove();
            }

            return true;
        }
    }

    // ===== REAL-TIME VALIDATION =====
    const formFields = contactForm.querySelectorAll('.form-input, .form-textarea, .form-select');

    formFields.forEach(field => {
        // Validate on blur
        field.addEventListener('blur', () => {
            validateField(field);
        });

        // Clear error on input
        field.addEventListener('input', () => {
            if (field.classList.contains('error')) {
                validateField(field);
            }
        });
    });

    // ===== PHONE NUMBER FORMATTING =====
    const phoneInput = document.getElementById('phone');

    if (phoneInput) {
        phoneInput.addEventListener('input', (e) => {
            let value = e.target.value.replace(/\D/g, '');

            // Add Tunisia country code if not present
            if (value.length > 0 && !value.startsWith('216')) {
                // Format as: XX XXX XXX
                if (value.length <= 2) {
                    value = value;
                } else if (value.length <= 5) {
                    value = value.slice(0, 2) + ' ' + value.slice(2);
                } else {
                    value = value.slice(0, 2) + ' ' + value.slice(2, 5) + ' ' + value.slice(5, 8);
                }
            }

            e.target.value = value;
        });
    }

    // ===== FORM SUBMISSION =====
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Validate all fields
        let isValid = true;
        formFields.forEach(field => {
            if (!validateField(field)) {
                isValid = false;
            }
        });

        if (!isValid) {
            // Focus first error field
            const firstError = contactForm.querySelector('.form-input.error, .form-textarea.error, .form-select.error');
            if (firstError) {
                firstError.focus();
            }
            return;
        }

        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            phone: document.getElementById('phone').value,
            email: document.getElementById('email').value,
            program: document.getElementById('program').value,
            message: document.getElementById('message').value,
            timestamp: new Date().toISOString()
        };

        // Show loading state
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;

        try {
            // Simulate form submission (replace with actual API call)
            await simulateFormSubmission(formData);

            // Show success message
            showNotification('Success! We\'ll contact you soon.', 'success');

            // Reset form
            contactForm.reset();

            // Remove any error states
            formFields.forEach(field => {
                field.classList.remove('error');
                const formGroup = field.closest('.form-group');
                const errorElement = formGroup.querySelector('.form-error');
                if (errorElement) {
                    errorElement.remove();
                }
            });

        } catch (error) {
            showNotification('Error sending message. Please try again.', 'error');
            console.error('Form submission error:', error);
        } finally {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }
    });

    // ===== SIMULATE FORM SUBMISSION =====
    function simulateFormSubmission(data) {
        return new Promise((resolve, reject) => {
            // Log form data (in production, this would be an API call)
            console.log('Form submitted:', data);

            // Simulate network delay
            setTimeout(() => {
                // Simulate 95% success rate
                if (Math.random() > 0.05) {
                    resolve({ success: true });
                } else {
                    reject(new Error('Network error'));
                }
            }, 1500);
        });
    }

    // ===== NOTIFICATION SYSTEM =====
    function showNotification(message, type = 'info') {
        // Remove existing notification
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }

        // Create notification
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        notification.setAttribute('role', 'alert');

        // Style notification
        notification.style.cssText = `
      position: fixed;
      top: 100px;
      right: 20px;
      background: ${type === 'success' ? 'var(--color-success)' : 'var(--color-error)'};
      color: var(--color-navy-deep);
      padding: var(--space-md) var(--space-lg);
      border-radius: var(--radius-md);
      box-shadow: var(--shadow-xl);
      z-index: var(--z-toast);
      font-weight: var(--font-weight-semibold);
      animation: slideInRight 0.3s ease-out;
      max-width: 300px;
    `;

        document.body.appendChild(notification);

        // Auto-remove after 5 seconds
        setTimeout(() => {
            notification.style.animation = 'slideOutRight 0.3s ease-out';
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 5000);
    }

    // Add notification animations
    const style = document.createElement('style');
    style.textContent = `
    @keyframes slideInRight {
      from {
        transform: translateX(400px);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }
    
    @keyframes slideOutRight {
      from {
        transform: translateX(0);
        opacity: 1;
      }
      to {
        transform: translateX(400px);
        opacity: 0;
      }
    }
  `;
    document.head.appendChild(style);

    // ===== HONEYPOT SPAM PROTECTION =====
    // Add hidden field to catch bots
    const honeypot = document.createElement('input');
    honeypot.type = 'text';
    honeypot.name = 'website';
    honeypot.style.display = 'none';
    honeypot.tabIndex = -1;
    honeypot.autocomplete = 'off';
    contactForm.appendChild(honeypot);

    // Check honeypot on submit
    contactForm.addEventListener('submit', (e) => {
        if (honeypot.value !== '') {
            e.preventDefault();
            console.warn('Spam detected');
            return false;
        }
    }, true);

    console.log('📝 Brahmy Academy forms loaded');
});
