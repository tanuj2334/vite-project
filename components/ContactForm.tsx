
import React, { useState } from 'react';
import { submitToGoogleSheets } from '../services/sheetService';
import { FormData } from '../types';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phoneNumber: '',
    eventType: '',
    eventDate: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phoneNumber) return;

    setStatus('loading');
    const success = await submitToGoogleSheets(formData);
    
    if (success) {
      setStatus('success');
      setFormData({ name: '', phoneNumber: '', eventType: '', eventDate: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } else {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <h3 className="text-white text-xl font-medium mb-6 text-center">Ready to host the talk of the town?</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-3 items-center gap-4">
          <label className="text-white text-sm">Event Type</label>
          <input
            type="text"
            name="eventType"
            value={formData.eventType}
            onChange={handleChange}
            placeholder="e.g. Wedding"
            className="col-span-2 px-3 py-2 rounded bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
          />
        </div>
        
        <div className="grid grid-cols-3 items-center gap-4">
          <label className="text-white text-sm">Date</label>
          <input
            type="date"
            name="eventDate"
            value={formData.eventDate}
            onChange={handleChange}
            className="col-span-2 px-3 py-2 rounded bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
          />
        </div>

        <div className="grid grid-cols-3 items-center gap-4">
            <div className="invisible md:visible"></div>
            <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="col-span-2 md:col-span-2 px-3 py-2 rounded bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
            />
        </div>

        <div className="grid grid-cols-3 items-center gap-4">
            <div className="invisible md:visible"></div>
            <input
                type="tel"
                name="phoneNumber"
                required
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Phone Number"
                className="col-span-2 md:col-span-2 px-3 py-2 rounded bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
            />
        </div>

        <div className="flex justify-center pt-2">
          <button
            type="submit"
            disabled={status === 'loading'}
            className="bg-[#d4af37] text-white px-10 py-2 rounded font-bold uppercase tracking-wider hover:bg-[#b8860b] transition-all disabled:opacity-50"
          >
            {status === 'loading' ? 'SUBMITTING...' : 'SUBMIT'}
          </button>
        </div>

        {status === 'success' && (
          <p className="text-green-400 text-center text-sm mt-2">Success! We'll contact you soon.</p>
        )}
        {status === 'error' && (
          <p className="text-red-400 text-center text-sm mt-2">Error. Please try again later.</p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
