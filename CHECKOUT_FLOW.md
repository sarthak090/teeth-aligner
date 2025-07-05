# Improved Checkout Flow

## Overview
The checkout process has been improved to create WooCommerce orders first, then process payments with proper tracking and error handling.

## Flow Steps

### 1. Order Creation
- Customer fills out checkout form
- WooCommerce order is created with `pending` status
- Order ID is returned and stored

### 2. Payment Processing
- Payment intent is created with order ID in metadata
- Stripe processes the payment
- Customer is redirected to success page on payment completion

### 3. Order Update (via Webhook or Direct Update)
- **Success**: Stripe webhook updates order to "processing" + marks as paid
- **Failure**: Order status updated to "failed" with detailed error information
- All payment references stored in order metadata

## API Endpoints

### POST /api/create-woocommerce-order
Creates a new WooCommerce order with pending status.

**Request Body:**
```json
{
  "payment_method": "stripe",
  "payment_method_title": "Credit Card (Stripe)",
  "billing": { ... },
  "shipping": { ... },
  "line_items": [ ... ],
  "total": "99.99"
}
```

**Response:**
```json
{
  "success": true,
  "order": {
    "id": 123,
    "status": "pending",
    ...
  }
}
```

### POST /api/create-payment-intent
Creates a Stripe payment intent with order ID in metadata.

**Request Body:**
```json
{
  "items": [ ... ],
  "total": 99.99,
  "orderId": 123
}
```

**Response:**
```json
{
  "clientSecret": "pi_xxx_secret_xxx"
}
```

### PUT /api/update-woocommerce-order/{orderId}
Updates a WooCommerce order with payment information or status.

**Request Body:**
```json
{
  "status": "failed",
  "paymentData": {
    "paymentIntentId": "pi_xxx",
    "chargeId": "ch_xxx"
  }
}
```

**Response:**
```json
{
  "success": true,
  "order": { ... }
}
```

## Webhook Events

### payment_intent.succeeded
- Updates order status to `processing`
- Sets `set_paid: true`
- Stores payment intent ID and charge ID in metadata

### payment_intent.payment_failed
- Updates order status to `failed`
- Stores payment intent ID in metadata
- Adds detailed failure information:
  - `_payment_failed: true`
  - `_payment_failed_reason: "error message"`
  - `_payment_failed_at: "timestamp"`

## Error Handling

### Client-Side Error Handling
- **Order Creation Fails**: Payment is not processed, user sees error
- **Payment Intent Creation Fails**: Order marked as failed, user sees error
- **Payment Fails**: Order status updated to failed immediately
- **Network Issues**: Graceful error handling with user feedback

### Server-Side Error Handling
- **Webhook Fails**: Order stays pending, but payment succeeded (manual intervention needed)
- **API Errors**: Proper error responses with status codes
- **Invalid Order ID**: Validation prevents invalid updates

## Benefits

1. **Better Error Handling**: Orders exist even if payment fails
2. **Proper Tracking**: Order ID is linked to payment intent
3. **Audit Trail**: Complete payment history in WooCommerce
4. **Consistency**: Order and payment data stay synchronized
5. **Recovery**: Failed orders can be retried or manually processed
6. **Detailed Error Information**: Failed payments include reason and timestamp

## Error Scenarios

- **Order Creation Fails**: Payment is not processed
- **Payment Fails**: Order remains in pending status, can be retried
- **Webhook Fails**: Order stays pending, but payment succeeded (manual intervention needed)
- **Network Issues**: Graceful error handling with user feedback
- **Invalid Data**: Validation prevents processing with invalid information 