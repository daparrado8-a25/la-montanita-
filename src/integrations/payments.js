export const paymentProviders = {
  mercadoPago: {
    enabled: Boolean(import.meta.env.VITE_MERCADO_PAGO_PUBLIC_KEY),
    publicKey: import.meta.env.VITE_MERCADO_PAGO_PUBLIC_KEY || '',
  },
  wompi: {
    enabled: Boolean(import.meta.env.VITE_WOMPI_PUBLIC_KEY),
    publicKey: import.meta.env.VITE_WOMPI_PUBLIC_KEY || '',
  },
  stripe: {
    enabled: Boolean(import.meta.env.VITE_STRIPE_PUBLIC_KEY),
    publicKey: import.meta.env.VITE_STRIPE_PUBLIC_KEY || '',
  },
};

export function getEnabledPaymentProviders() {
  return Object.entries(paymentProviders)
    .filter(([, provider]) => provider.enabled)
    .map(([name, provider]) => ({ name, ...provider }));
}
