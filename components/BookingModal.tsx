'use client'

import { useEffect } from 'react'
import { X } from 'lucide-react'

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
}

declare global {
  interface Window {
    Calendly?: any;
  }
}

const BookingModal = ({ isOpen, onClose }: BookingModalProps) => {
  // Calendly script effect - MUST run on every render
  // useEffect(() => {
  //   const script = document.createElement('script');
  //   script.src = 'https://assets.calendly.com/assets/external/widget.js';
  //   script.async = true;
  //   document.body.appendChild(script);

  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, []);

  // Modal behavior effect
  // useEffect(() => {
  //   if (!isOpen) return;

  //   const script = document.createElement('script');
  //   script.src = 'https://assets.calendly.com/assets/external/widget.js';
  //   script.async = true;
  //   document.body.appendChild(script);

  //   script.onload = () => {
  //     if (window.Calendly) {
  //       window.Calendly.initInlineWidget({
  //         url: 'https://calendly.com/chriselliott_/chriselliott',
  //         parentElement: document.getElementById('calendly-container')!,
  //         prefill: {},
  //         utm: {}
  //       });
  //     }
  //   };

  //   return () => {
  //     document.body.removeChild(script);
  //     const container = document.getElementById('calendly-container');
  //     if (container) {
  //       container.innerHTML = ''; // Clean up
  //     }
  //   };
  // }, [isOpen]);


  //Hooks must be above conditional return
  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent | React.TouchEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  const handleModalContentTouch = (e: React.TouchEvent) => {
    e.stopPropagation()
  }

  return (
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <div 
        className="relative w-full max-w-4xl mx-4 h-[90vh] md:h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden animate-fade-in"
        style={{ 
          height: 'min(90vh, 800px)', 
          maxHeight: '90vh',
          touchAction: 'none'
        }}
        onTouchMove={handleModalContentTouch}
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gradient-to-r from-red-50 to-primary-50">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Book Your Consultation</h2>
            <p className="text-gray-600 mt-1">Schedule your free discovery call to get started</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
            aria-label="Close modal"
          >
            <X className="w-6 h-6 text-gray-500" />
          </button>
        </div>

        <div className="h-[calc(100%-80px)] overflow-auto touch-pan-y pb-4 md:pb-0">
          {/* Calendly container (commented out) */}
          {/* <div
              id="calendly-container"
              style={{ minWidth: '420px', height: '700px' }}
            ></div> */}

          {/* LeadConnector embed */}
          <iframe 
            src="https://api.leadconnectorhq.com/widget/booking/mBnEimwaVAYwcagtDdbu" 
            style={{width: '100%', height: '100%', border:'none', overflow: 'hidden'}}
            scrolling="yes" 
            id="mBnEimwaVAYwcagtDdbu_1755768114905"
          ></iframe>
          <script src="https://link.msgsndr.com/js/form_embed.js" type="text/javascript"></script>
          
          <div className="h-4 md:hidden"></div>
        </div>
      </div>
    </div>
  )
}

export default BookingModal
