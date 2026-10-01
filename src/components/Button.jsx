import React from 'react';

export default function Button({
  children,
  variant = 'primary', // 'primary', 'secondary', 'outline-red', 'ghost'
  size = 'md', // 'sm', 'md', 'lg'
  icon: Icon,
  iconRight: IconRight,
  isLoading = false,
  fullWidth = false,
  disabled = false,
  className = '',
  onClick,
  type = 'button',
  ...props
}) {
  let baseClass = 'btn-primary';
  if (variant === 'secondary') baseClass = 'btn-secondary';
  if (variant === 'outline-red') baseClass = 'btn-outline-red';
  if (variant === 'ghost') {
    baseClass = 'inline-flex items-center justify-center gap-2 font-medium text-slate-700 hover:text-red-700 hover:bg-red-50 px-3 py-2 rounded-lg transition-colors';
  }

  const sizeStyles = {
    sm: { padding: '8px 14px', height: '38px', fontSize: '13px' },
    md: { padding: '12px 20px', height: '48px', fontSize: '15px' },
    lg: { padding: '14px 28px', height: '54px', fontSize: '16px' }
  };

  const currentSizeStyle = sizeStyles[size] || sizeStyles.md;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || isLoading}
      className={`${baseClass} ${fullWidth ? 'w-full' : ''} ${className}`}
      style={{
        ...currentSizeStyle,
        opacity: disabled || isLoading ? 0.65 : 1,
        cursor: disabled || isLoading ? 'not-allowed' : 'pointer'
      }}
      {...props}
    >
      {isLoading ? (
        <svg className="animate-spin h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
        </svg>
      ) : (
        <>
          {Icon && <Icon size={size === 'sm' ? 16 : 18} />}
          <span>{children}</span>
          {IconRight && <IconRight size={size === 'sm' ? 16 : 18} />}
        </>
      )}
    </button>
  );
}

