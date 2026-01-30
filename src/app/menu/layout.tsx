import type { ReactNode } from 'react';

interface MenuLayoutProps {
  children: ReactNode;
  modal: ReactNode;
}

export default function MenuLayout({ children, modal }: MenuLayoutProps) {
  return (
    <>
      {children}
      {modal}
    </>
  );
}
