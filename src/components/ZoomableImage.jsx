import React, { useState, useEffect } from 'react';
import { ZoomIn, ZoomOut, X, Maximize2 } from 'lucide-react';

export default function ZoomableImage({ 
  src, 
  alt = 'Gambar materi biologi', 
  maxHeight = '420px', 
  style = {},
  caption = null
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
        setIsZoomed(false);
      }
    };
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleOpen = () => {
    setIsOpen(true);
    setIsZoomed(false);
  };

  const handleClose = () => {
    setIsOpen(false);
    setIsZoomed(false);
  };

  return (
    <>
      {/* Thumbnail with Click-to-Zoom Cue */}
      <div 
        onClick={handleOpen}
        title="Klik untuk memperbesar / zoom gambar"
        style={{
          position: 'relative',
          cursor: 'zoom-in',
          overflow: 'hidden',
          borderRadius: '14px',
          backgroundColor: '#FFFFFF',
          padding: '8px',
          border: '1px solid var(--color-border)',
          transition: 'transform 0.2s ease, box-shadow 0.2s ease',
          display: 'inline-block',
          width: '100%',
          ...style
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.015)';
          e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.08)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        <img
          src={src}
          alt={alt}
          style={{
            width: '100%',
            maxHeight: maxHeight,
            objectFit: 'contain',
            borderRadius: '10px',
            display: 'block',
            margin: '0 auto'
          }}
        />

        {/* Floating Zoom Indicator Badge */}
        <div style={{
          position: 'absolute',
          bottom: '14px',
          right: '14px',
          backgroundColor: 'rgba(15, 23, 42, 0.75)',
          backdropFilter: 'blur(6px)',
          color: '#FFFFFF',
          padding: '6px 12px',
          borderRadius: '20px',
          fontSize: '11px',
          fontWeight: 700,
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
          pointerEvents: 'none'
        }}>
          <Maximize2 size={13} />
          <span>Klik untuk Zoom</span>
        </div>
      </div>

      {/* Full-Screen Zoom Lightbox Modal */}
      {isOpen && (
        <div 
          onClick={handleClose}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99999,
            backgroundColor: 'rgba(10, 15, 29, 0.92)',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
            animation: 'fadeIn 0.2s ease'
          }}
        >
          {/* Top Bar Controls */}
          <div 
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'absolute',
              top: '20px',
              right: '24px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              zIndex: 100000
            }}
          >
            <button
              onClick={() => setIsZoomed(!isZoomed)}
              className="btn-secondary"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                color: '#FFFFFF',
                borderColor: 'rgba(255, 255, 255, 0.3)',
                height: '40px',
                padding: '0 14px',
                fontSize: '13px',
                borderRadius: '10px',
                backdropFilter: 'blur(8px)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px'
              }}
              title={isZoomed ? "Kecilkan (1x)" : "Perbesar Lebih Dekat (1.5x)"}
            >
              {isZoomed ? <ZoomOut size={16} /> : <ZoomIn size={16} />}
              <span>{isZoomed ? '1x' : '1.5x Zoom'}</span>
            </button>

            <button
              onClick={handleClose}
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                backgroundColor: '#DC2626',
                border: 'none',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(220, 38, 38, 0.4)',
                transition: 'transform 0.15s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              title="Tutup (ESC)"
            >
              <X size={22} />
            </button>
          </div>

          {/* Central Zoomed Image Container */}
          <div 
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '94vw',
              maxHeight: '84vh',
              overflow: 'auto',
              borderRadius: '16px',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.6)',
              backgroundColor: '#FFFFFF',
              padding: '16px',
              border: '2px solid rgba(255, 255, 255, 0.2)',
              cursor: isZoomed ? 'zoom-out' : 'zoom-in',
              transition: 'all 0.25s ease'
            }}
            onClickCapture={() => setIsZoomed(!isZoomed)}
          >
            <img
              src={src}
              alt={alt}
              style={{
                width: isZoomed ? '140%' : '100%',
                maxHeight: isZoomed ? 'none' : '78vh',
                objectFit: 'contain',
                borderRadius: '10px',
                display: 'block',
                margin: '0 auto',
                transition: 'transform 0.25s ease'
              }}
            />
          </div>

          {/* Bottom Title / Caption */}
          <div 
            onClick={(e) => e.stopPropagation()}
            style={{
              marginTop: '16px',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(8px)',
              padding: '8px 20px',
              borderRadius: '24px',
              color: '#FFFFFF',
              fontSize: '13px',
              fontWeight: 600,
              maxWidth: '85vw',
              textAlign: 'center',
              border: '1px solid rgba(255, 255, 255, 0.15)'
            }}
          >
            {caption || alt} • <span style={{ opacity: 0.75, fontSize: '11px' }}>Klik gambar untuk toggle zoom 1.5x / Tekan ESC untuk menutup</span>
          </div>
        </div>
      )}
    </>
  );
}
