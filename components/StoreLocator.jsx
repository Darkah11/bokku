'use client'
import { useEffect } from 'react';

const StoreLocator = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://cdn.storerocket.io/js/widget-mb.js';
    document.body.appendChild(script);
    
    return () => {
      // Cleanup the script if needed (optional)
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div 
      id="storerocket-widget" 
      style={{ width: '100%' }} 
      data-storerocket-env="p" 
      data-storerocket-id="Yw8lrx64vo"
    >
      <p style={{ textAlign: 'center', fontSize: '13px', padding: '10px' }}>
        Store locator is loading from StoreRocket{' '}
        <a 
          target="_blank" 
          rel="noopener noreferrer" 
          href="https://storerocket.io" 
          style={{ fontSize: '13px' }}
        >
          Store Locator App
        </a>
        ..
      </p>
    </div>
  );
};

export default StoreLocator;