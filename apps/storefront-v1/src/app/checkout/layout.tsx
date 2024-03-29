import React from 'react';
import { HeaderCheckout } from '../../components/HeaderCheckout';
import { Footer } from '../../components/Footer';
import { GetChannel } from '../../client/api';

type CheckoutLayoutProps = {
  readonly children: React.ReactNode;
};

export default async function CheckoutLayout({
  children,
}: CheckoutLayoutProps) {
  const channel = await GetChannel();

  const locale = channel?.languageCode ?? 'EN';

  return (
    <>
      <header className="z-10 h-16 bg-white fixed top-0 left-0 right-0">
        <HeaderCheckout locale={locale} />
      </header>

      <main className="relative top-16 bg-zinc-100">
        <div className="px-2 md:px-4 pb-10 mx-auto max-w-5xl">{children}</div>
        <div className="mx-auto max-w-4xl">
          <Footer />
        </div>
      </main>
    </>
  );
}
