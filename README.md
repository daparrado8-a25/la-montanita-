# Ruta del Agua

Aplicacion web para gestion de rutas, clientes, visitas, inventario, neveras y resumen diario.

## Desarrollo

```bash
npm install
npm run dev
```

## Produccion

```bash
npm run build
npm run preview
```

## Estructura

```text
src/
  app/              Pantallas y componentes principales de React.
  integrations/     Adaptadores para conectar apps externas, por ejemplo pagos.
  services/         Clientes de API y acceso a datos.
  styles/           Estilos globales de la aplicacion.
```

## Variables de entorno

Copia `.env.example` a `.env.local` y configura tus credenciales publicas:

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`
- `VITE_MERCADO_PAGO_PUBLIC_KEY`
- `VITE_WOMPI_PUBLIC_KEY`
- `VITE_STRIPE_PUBLIC_KEY`

Las variables que empiezan con `VITE_` son expuestas al navegador, por eso deben ser llaves publicas. No agregues secretos privados en el frontend.
