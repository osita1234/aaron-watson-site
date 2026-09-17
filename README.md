# AARON WATSON Website

A polished Next.js starter for AARON WATSON — Musician • Comedian.

## Included
- Responsive storefront
- Fan cards and tickets in the requested order/prices
- Customer information checkout
- Sandbox payment placeholder (never claims payment succeeded)
- Order confirmation page
- Admin dashboard UI
- Verification UI
- Environment configuration template

## Run
1. Install Node.js 18+.
2. Extract the project.
3. Run `npm install`.
4. Copy `.env.example` to `.env.local`.
5. Run `npm run dev`.
6. Open `http://localhost:3000`.

## Production
Connect a real payment processor using its server-side SDK/API. Put secret credentials only in server environment variables. Add a real database, transactional email provider, HTTPS, secure admin authentication, CSRF protection, rate limiting, audit logging, and server-side validation before production use.

This starter deliberately does NOT implement or simulate a successful real payment.
