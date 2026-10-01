import React from 'react';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export default function Toast({ toasts = [], onRemove }) {
  if (!toasts || toasts.length === 0) return null;

  return (
    <div className="toast-container">
      {toasts.map(toast => {
        const isSuccess = toast.type === 'success';
        const isError = toast.type === 'error';

        return (
          <div
            key={toast.id}
            className="toast-item"
            style={{
              borderLeft: `4px solid ${isSuccess ? 'var(--color-success)' : isError ? 'var(--color-primary)' : 'var(--color-info-blue)'}`
            }}
          >
            {isSuccess && <CheckCircle2 size={20} color="var(--color-success)" />}
            {isError && <AlertCircle size={20} color="var(--color-primary)" />}
            {!isSuccess && !isError && <Info size={20} color="var(--color-info-blue)" />}

            <div style={{ flex: 1 }}>
              {toast.title && <div style={{ fontWeight: 600, fontSize: '14px', color: 'var(--color-dark)' }}>{toast.title}</div>}
              <div style={{ fontSize: '13px', color: 'var(--color-secondary-text)' }}>{toast.message}</div>
            </div>

            {onRemove && (
              <button
                onClick={() => onRemove(toast.id)}
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#94A3B8', padding: '4px' }}
                aria-label="Tutup notifikasi"
              >
                <X size={16} />
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
}

