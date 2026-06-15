import React from 'react';

export default function Title({ text, className = '', as: Tag = 'h2' }) {
  return <Tag className={className}>{text}</Tag>;
}