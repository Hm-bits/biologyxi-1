import React from 'react';

export default function Badge({
  children,
  variant = 'red', // 'red', 'blue', 'green', 'warning', 'gray'
  icon: Icon,
  className = ''
}) {
  const variantClass = {
    red: 'badge-red',
    blue: 'badge-blue',
    green: 'badge-green',
    warning: 'badge-warning',
    gray: 'badge-gray'
  }[variant] || 'badge-red';

  return (
    <span className={`badge-pill ${variantClass} ${className}`}>
      {Icon && <Icon size={12} />}
      <span>{children}</span>
    </span>
  );
}

