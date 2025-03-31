'use client';

import type React from 'react';

import { useState } from 'react';
import { Button, TextField, Alert, Snackbar } from '@mui/material';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes('@')) {
      setError(true);
      return;
    }

    // Here you would typically send the email to your API
    console.log('Subscribing email:', email);
    setSuccess(true);
    setEmail('');
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className='flex flex-col sm:flex-row gap-3 max-w-md mx-auto'
      >
        <TextField
          variant='outlined'
          placeholder='Your email address'
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          size='small'
          className='flex-grow'
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'rgba(255, 255, 255, 0.3)',
                borderRadius: '0',
              },
              '&:hover fieldset': {
                borderColor: 'rgba(255, 255, 255, 0.5)',
              },
              '&.Mui-focused fieldset': {
                borderColor: 'white',
              },
            },
            '& .MuiInputBase-input': {
              color: 'white',
              padding: '12px 16px',
            },
            '& .MuiInputBase-input::placeholder': {
              color: 'rgba(255, 255, 255, 0.7)',
              opacity: 1,
            },
          }}
        />
        <Button
          variant='contained'
          color='primary'
          type='submit'
          sx={{
            borderRadius: '0',
            padding: '8px 24px',
            fontSize: '14px',
            fontWeight: 500,
            letterSpacing: '1px',
            backgroundColor: 'white',
            color: 'black',
            '&:hover': {
              backgroundColor: '#f0f0f0',
            },
          }}
        >
          SUBSCRIBE
        </Button>
      </form>

      <Snackbar
        open={success}
        autoHideDuration={6000}
        onClose={() => setSuccess(false)}
      >
        <Alert onClose={() => setSuccess(false)} severity='success'>
          Thank you for subscribing to our newsletter!
        </Alert>
      </Snackbar>

      <Snackbar
        open={error}
        autoHideDuration={6000}
        onClose={() => setError(false)}
      >
        <Alert onClose={() => setError(false)} severity='error'>
          Please enter a valid email address.
        </Alert>
      </Snackbar>
    </div>
  );
}
