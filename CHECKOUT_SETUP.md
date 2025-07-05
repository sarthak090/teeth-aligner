# Checkout System Setup Guide

This guide will help you set up the Stripe payment integration and WooCommerce integration for the checkout system.

## Environment Variables

Add the following environment variables to your `.env.local` file:

```bash
# Stripe Configuration
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key_here
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key_here
STRIPE_WEBHOOK_SECRET=whsec_your_stripe_webhook_secret_here

# WooCommerce Configuration
WOOCOMMERCE_URL=https://your-woocommerce-site.com
WOOCOMMERCE_CONSUMER_KEY=ck_your_woocommerce_consumer_key_here
WOOCOMMERCE_CONSUMER_SECRET=cs_your_woocommerce_consumer_secret_here
```

## Stripe Setup

1. **Create a Stripe Account**: Sign up at [stripe.com](https://stripe.com)
2. **Get API Keys**: 
   - Go to Stripe Dashboard > Developers > API keys
   - Copy your publishable key and secret key
3. **Set Up Webhooks**:
   - Go to Stripe Dashboard > Developers > Webhooks
   - Add endpoint: `https://your-domain.com/api/webhooks/stripe`
   - Select events: `payment_intent.succeeded`, `payment_intent.payment_failed`
   - Copy the webhook signing secret

## WooCommerce Setup

1. **Install WooCommerce**: If not already installed, add WooCommerce to your WordPress site
2. **Generate API Keys**:
   - Go to WooCommerce > Settings > Advanced > REST API
   - Click "Add Key"
   - Set permissions to "Read/Write"
   - Copy the consumer key and consumer secret
3. **Configure Products**: Ensure your products are set up in WooCommerce with the correct IDs

## Features Included

### Checkout Flow
- **Cart Page**: `/cart` - View and manage cart items
- **Checkout Page**: `/checkout` - Complete payment with Stripe
- **Success Page**: `/checkout/success` - Order confirmation

### Payment Methods
- Credit/Debit Cards (Visa, Mastercard, American Express, etc.)
- Digital Wallets (Apple Pay, Google Pay)
- Secure payment processing with Stripe

### Integration Features
- **Stripe Integration**: Secure payment processing
- **WooCommerce Integration**: Order management and inventory
- **Webhook Handling**: Real-time payment status updates
- **Order Creation**: Automatic order creation in WooCommerce after successful payment

## API Endpoints

- `POST /api/create-payment-intent` - Create Stripe payment intent
- `POST /api/create-woocommerce-order` - Create order in WooCommerce
- `POST /api/webhooks/stripe` - Handle Stripe webhooks

## Components

- `CheckoutForm` - Payment form with Stripe Elements
- `OrderSummary` - Cart summary and totals
- `CartIcon` - Navigation cart icon with item count

## Usage

1. Add items to cart from product pages
2. Navigate to `/cart` to review items
3. Click "Proceed to Checkout"
4. Fill in customer information and payment details
5. Complete payment
6. Order is automatically created in WooCommerce

## Security Features

- Stripe Elements for secure card input
- Webhook signature verification
- Environment variable protection
- HTTPS required for production

## Testing

Use Stripe test cards for development:
- Success: `4242 4242 4242 4242`
- Decline: `4000 0000 0000 0002`
- Expiry: Any future date
- CVC: Any 3 digits

## Production Deployment

1. Update environment variables with production keys
2. Set up production webhook endpoint
3. Configure SSL certificate
4. Test payment flow thoroughly
5. Monitor webhook events and order creation 