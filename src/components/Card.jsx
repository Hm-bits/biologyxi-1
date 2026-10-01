import React from 'react';

export default function Card({
  children,
  hoverable = false,
  className = '',
  style = {},
  onClick,
  ...props
}) {
  return (
    <div
      onClick={onClick}
      className={`med-card ${hoverable ? 'med-card-hover cursor-pointer' : ''} ${className}`}
      style={style}
      {...props}
    >
      {children}
    </div>
  );
}

