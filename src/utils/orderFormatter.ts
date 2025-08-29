// Order formatting and security utilities for check order submissions

export interface OrderData {
  orderDate: string;
  orderNumber: string;
  company: {
    name: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    phone: string;
    fax: string;
  };
  bank: {
    name: string;
    city: string;
    routingNumber: string;
    accountNumber: string;
    startingCheckNumber: string;
  };
  product: {
    checkType: string;
    checkTypeName: string;
    quantity: string;
    duplicates: boolean;
    packingOrder: string;
    designColor: string;
    logoOption: string;
  };
  additionalItems: {
    envelopes: any;
    depositForms: any;
    taxForms: any;
  };
  pricing: {
    basePrice: number;
    premiumColorUpcharge: number;
    envelopePrice: number;
    depositFormPrice: number;
    totalPrice: number;
  };
  notes: string;
}

// Enhanced security: Mask sensitive information for display
export const maskSensitiveData = (data: string, type: 'routing' | 'account' | 'phone' | 'fax'): string => {
  if (!data) return 'N/A';
  
  switch (type) {
    case 'routing':
      return data.length >= 4 ? `${data.slice(0, 4)}****` : data;
    case 'account':
      return data.length >= 4 ? `****${data.slice(-4)}` : data;
    case 'phone':
    case 'fax':
      return data.length >= 10 ? `${data.slice(0, 3)}-***-${data.slice(-4)}` : data;
    default:
      return data;
  }
};

// Create a professional HTML table format for email notifications
export const createProfessionalOrderTable = (orderData: OrderData): string => {
  const maskedRouting = maskSensitiveData(orderData.bank.routingNumber, 'routing');
  const maskedAccount = maskSensitiveData(orderData.bank.accountNumber, 'account');
  const maskedPhone = maskSensitiveData(orderData.company.phone, 'phone');
  const maskedFax = maskSensitiveData(orderData.company.fax, 'fax');

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .order-container { max-width: 800px; margin: 0 auto; padding: 20px; }
    .order-header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; text-align: center; }
    .order-section { background: #f8f9fa; margin: 20px 0; border-radius: 8px; overflow: hidden; }
    .section-header { background: #e9ecef; padding: 15px 20px; font-weight: bold; color: #495057; border-bottom: 1px solid #dee2e6; }
    .section-content { padding: 20px; }
    .info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; }
    .info-item { display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #eee; }
    .info-item:last-child { border-bottom: none; }
    .info-label { font-weight: 600; color: #495057; }
    .info-value { color: #6c757d; }
    .pricing-table { width: 100%; border-collapse: collapse; margin: 15px 0; }
    .pricing-table th, .pricing-table td { padding: 12px; text-align: left; border-bottom: 1px solid #dee2e6; }
    .pricing-table th { background: #f8f9fa; font-weight: 600; }
    .total-row { background: #e3f2fd; font-weight: bold; }
    .security-notice { background: #fff3cd; border: 1px solid #ffeaa7; padding: 15px; border-radius: 5px; margin: 20px 0; }
    .security-notice h4 { color: #856404; margin: 0 0 10px 0; }
    .security-notice p { color: #856404; margin: 0; }
    .footer { background: #f8f9fa; padding: 20px; text-align: center; border-radius: 0 0 8px 8px; color: #6c757d; }
    @media (max-width: 600px) {
      .info-grid { grid-template-columns: 1fr; }
      .order-container { padding: 10px; }
    }
  </style>
</head>
<body>
  <div class="order-container">
    <div class="order-header">
      <h1 style="margin: 0; font-size: 28px;">Custom Check Order</h1>
      <p style="margin: 10px 0 0 0; opacity: 0.9;">Order #${orderData.orderNumber}</p>
      <p style="margin: 5px 0 0 0; opacity: 0.8;">${new Date(orderData.orderDate).toLocaleDateString('en-US', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      })}</p>
    </div>

    <div class="order-section">
      <div class="section-header">📋 Company Information</div>
      <div class="section-content">
        <div class="info-grid">
          <div class="info-item">
            <span class="info-label">Company Name:</span>
            <span class="info-value">${orderData.company.name}</span>
          </div>
          <div class="info-item">
            <span class="info-label">Address:</span>
            <span class="info-value">${orderData.company.address}</span>
          </div>
          <div class="info-item">
            <span class="info-label">City, State ZIP:</span>
            <span class="info-value">${orderData.company.city}, ${orderData.company.state} ${orderData.company.zip}</span>
          </div>
          <div class="info-item">
            <span class="info-label">Phone:</span>
            <span class="info-value">${maskedPhone}</span>
          </div>
          <div class="info-item">
            <span class="info-label">Fax:</span>
            <span class="info-value">${maskedFax}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="order-section">
      <div class="section-header">🏦 Bank Information</div>
      <div class="section-content">
        <div class="info-grid">
          <div class="info-item">
            <span class="info-label">Bank Name:</span>
            <span class="info-value">${orderData.bank.name}</span>
          </div>
          <div class="info-item">
            <span class="info-label">Bank City:</span>
            <span class="info-value">${orderData.bank.city || 'N/A'}</span>
          </div>
          <div class="info-item">
            <span class="info-label">Routing Number:</span>
            <span class="info-value">${maskedRouting}</span>
          </div>
          <div class="info-item">
            <span class="info-label">Account Number:</span>
            <span class="info-value">${maskedAccount}</span>
          </div>
          <div class="info-item">
            <span class="info-label">Starting Check #:</span>
            <span class="info-value">${orderData.bank.startingCheckNumber}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="order-section">
      <div class="section-header">📄 Product Details</div>
      <div class="section-content">
        <div class="info-grid">
          <div class="info-item">
            <span class="info-label">Check Type:</span>
            <span class="info-value">${orderData.product.checkTypeName} (${orderData.product.checkType})</span>
          </div>
          <div class="info-item">
            <span class="info-label">Quantity:</span>
            <span class="info-value">${orderData.product.quantity} checks</span>
          </div>
          <div class="info-item">
            <span class="info-label">Duplicates:</span>
            <span class="info-value">${orderData.product.duplicates ? 'Yes' : 'No'}</span>
          </div>
          <div class="info-item">
            <span class="info-label">Packing Order:</span>
            <span class="info-value">${orderData.product.packingOrder}</span>
          </div>
          <div class="info-item">
            <span class="info-label">Design Color:</span>
            <span class="info-value">${orderData.product.designColor}</span>
          </div>
          <div class="info-item">
            <span class="info-label">Logo Option:</span>
            <span class="info-value">${orderData.product.logoOption}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="order-section">
      <div class="section-header">📦 Additional Items</div>
      <div class="section-content">
        <div class="info-grid">
          <div class="info-item">
            <span class="info-label">Envelopes:</span>
            <span class="info-value">${orderData.additionalItems.envelopes ? 
              `${orderData.additionalItems.envelopes.quantity} qty - $${orderData.additionalItems.envelopes.price}` : 
              'None'}</span>
          </div>
          <div class="info-item">
            <span class="info-label">Deposit Forms:</span>
            <span class="info-value">${orderData.additionalItems.depositForms ? 
              `${orderData.additionalItems.depositForms.quantity} qty - $${orderData.additionalItems.depositForms.price}` : 
              'None'}</span>
          </div>
          <div class="info-item">
            <span class="info-label">Tax Forms:</span>
            <span class="info-value">${orderData.additionalItems.taxForms ? 
              `${orderData.additionalItems.taxForms.formName} - ${orderData.additionalItems.taxForms.quantity} qty` : 
              'None'}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="order-section">
      <div class="section-header">💰 Pricing Breakdown</div>
      <div class="section-content">
        <table class="pricing-table">
          <thead>
            <tr>
              <th>Item</th>
              <th>Description</th>
              <th style="text-align: right;">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Base Price</td>
              <td>${orderData.product.quantity} ${orderData.product.checkTypeName}${orderData.product.duplicates ? ' with duplicates' : ''}</td>
              <td style="text-align: right;">$${orderData.pricing.basePrice.toFixed(2)}</td>
            </tr>
            ${orderData.pricing.premiumColorUpcharge > 0 ? `
            <tr>
              <td>Premium Color</td>
              <td>Enhanced design color</td>
              <td style="text-align: right;">$${orderData.pricing.premiumColorUpcharge.toFixed(2)}</td>
            </tr>` : ''}
            ${orderData.pricing.envelopePrice > 0 ? `
            <tr>
              <td>Envelopes</td>
              <td>${orderData.additionalItems.envelopes?.quantity} double window envelopes</td>
              <td style="text-align: right;">$${orderData.pricing.envelopePrice.toFixed(2)}</td>
            </tr>` : ''}
            ${orderData.pricing.depositFormPrice > 0 ? `
            <tr>
              <td>Deposit Forms</td>
              <td>${orderData.additionalItems.depositForms?.quantity} deposit tickets</td>
              <td style="text-align: right;">$${orderData.pricing.depositFormPrice.toFixed(2)}</td>
            </tr>` : ''}
            <tr class="total-row">
              <td colspan="2"><strong>Total</strong></td>
              <td style="text-align: right;"><strong>$${orderData.pricing.totalPrice.toFixed(2)}</strong></td>
            </tr>
          </tbody>
        </table>
        <p style="color: #6c757d; font-size: 14px; margin-top: 15px;">
          * Tax and shipping not included. Final pricing will be confirmed upon order processing.
        </p>
      </div>
    </div>

    ${orderData.notes ? `
    <div class="order-section">
      <div class="section-header">📝 Additional Notes</div>
      <div class="section-content">
        <p style="margin: 0; color: #495057;">${orderData.notes}</p>
      </div>
    </div>` : ''}

    <div class="security-notice">
      <h4>🔒 Security & Privacy Notice</h4>
      <p>
        This order contains sensitive financial information. All data is encrypted during transmission and storage. 
        Bank account details are masked in this notification for security. Full details are only accessible to authorized personnel.
      </p>
    </div>

    <div class="footer">
      <p style="margin: 0;">
        <strong>ClearLedger Solutions</strong><br>
        Professional Custom Check Ordering<br>
        Order processed on ${new Date().toLocaleDateString('en-US', { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })}
      </p>
    </div>
  </div>
</body>
</html>
  `;
};

// Create a simplified text format for systems that don't support HTML
export const createTextOrderSummary = (orderData: OrderData): string => {
  const maskedRouting = maskSensitiveData(orderData.bank.routingNumber, 'routing');
  const maskedAccount = maskSensitiveData(orderData.bank.accountNumber, 'account');
  const maskedPhone = maskSensitiveData(orderData.company.phone, 'phone');
  const maskedFax = maskSensitiveData(orderData.company.fax, 'fax');

  return `
╔══════════════════════════════════════════════════════════════╗
║                    CUSTOM CHECK ORDER                        ║
╠══════════════════════════════════════════════════════════════╣
║ Order Number: ${orderData.orderNumber.padEnd(40)} ║
║ Order Date:   ${new Date(orderData.orderDate).toLocaleDateString().padEnd(40)} ║
╚══════════════════════════════════════════════════════════════╝

📋 COMPANY INFORMATION
────────────────────────────────────────────────────────────────
Company Name:    ${orderData.company.name}
Address:         ${orderData.company.address}
City, State ZIP: ${orderData.company.city}, ${orderData.company.state} ${orderData.company.zip}
Phone:           ${maskedPhone}
Fax:             ${maskedFax}

🏦 BANK INFORMATION
────────────────────────────────────────────────────────────────
Bank Name:           ${orderData.bank.name}
Bank City:           ${orderData.bank.city || 'N/A'}
Routing Number:      ${maskedRouting}
Account Number:      ${maskedAccount}
Starting Check #:    ${orderData.bank.startingCheckNumber}

📄 PRODUCT DETAILS
────────────────────────────────────────────────────────────────
Check Type:      ${orderData.product.checkTypeName} (${orderData.product.checkType})
Quantity:        ${orderData.product.quantity} checks
Duplicates:      ${orderData.product.duplicates ? 'Yes' : 'No'}
Packing Order:   ${orderData.product.packingOrder}
Design Color:    ${orderData.product.designColor}
Logo Option:     ${orderData.product.logoOption}

📦 ADDITIONAL ITEMS
────────────────────────────────────────────────────────────────
Envelopes:       ${orderData.additionalItems.envelopes ? 
  `${orderData.additionalItems.envelopes.quantity} qty - $${orderData.additionalItems.envelopes.price}` : 
  'None'}
Deposit Forms:   ${orderData.additionalItems.depositForms ? 
  `${orderData.additionalItems.depositForms.quantity} qty - $${orderData.additionalItems.depositForms.price}` : 
  'None'}
Tax Forms:       ${orderData.additionalItems.taxForms ? 
  `${orderData.additionalItems.taxForms.formName} - ${orderData.additionalItems.taxForms.quantity} qty` : 
  'None'}

💰 PRICING BREAKDOWN
────────────────────────────────────────────────────────────────
Base Price:      $${orderData.pricing.basePrice.toFixed(2)}
${orderData.pricing.premiumColorUpcharge > 0 ? `Premium Color:   +$${orderData.pricing.premiumColorUpcharge.toFixed(2)}` : ''}
${orderData.pricing.envelopePrice > 0 ? `Envelopes:       +$${orderData.pricing.envelopePrice.toFixed(2)}` : ''}
${orderData.pricing.depositFormPrice > 0 ? `Deposit Forms:   +$${orderData.pricing.depositFormPrice.toFixed(2)}` : ''}
────────────────────────────────────────────────────────────────
TOTAL:           $${orderData.pricing.totalPrice.toFixed(2)}

${orderData.notes ? `
📝 ADDITIONAL NOTES
────────────────────────────────────────────────────────────────
${orderData.notes}
` : ''}

🔒 SECURITY NOTICE
────────────────────────────────────────────────────────────────
This order contains sensitive financial information. Bank account details 
have been masked for security. Full details are only accessible to 
authorized personnel.

══════════════════════════════════════════════════════════════════
ClearLedger Solutions - Professional Custom Check Ordering
Order processed on ${new Date().toLocaleDateString('en-US', { 
  year: 'numeric', 
  month: 'long', 
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit'
})}
══════════════════════════════════════════════════════════════════
  `.trim();
};

// Enhanced security: Generate a secure order hash for verification
export const generateOrderHash = (orderData: OrderData): string => {
  const orderString = JSON.stringify({
    orderNumber: orderData.orderNumber,
    companyName: orderData.company.name,
    bankName: orderData.bank.name,
    totalPrice: orderData.pricing.totalPrice,
    timestamp: orderData.orderDate
  });
  
  // In a real implementation, you'd use a proper hashing library
  // This is a simplified version for demonstration
  let hash = 0;
  for (let i = 0; i < orderString.length; i++) {
    const char = orderString.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32-bit integer
  }
  
  return Math.abs(hash).toString(36).toUpperCase();
};

// Validate order data for security
export const validateOrderData = (orderData: OrderData): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];
  
  // Basic validation
  if (!orderData.orderNumber || orderData.orderNumber.length < 10) {
    errors.push('Invalid order number');
  }
  
  if (!orderData.company.name || orderData.company.name.length < 2) {
    errors.push('Company name is required');
  }
  
  if (!orderData.bank.routingNumber || orderData.bank.routingNumber.length !== 9) {
    errors.push('Routing number must be 9 digits');
  }
  
  if (!orderData.bank.accountNumber || orderData.bank.accountNumber.length < 4) {
    errors.push('Account number is required');
  }
  
  if (orderData.pricing.totalPrice <= 0) {
    errors.push('Invalid total price');
  }
  
  // Check for suspicious patterns (basic fraud detection)
  const suspiciousPatterns = [
    /test/i,
    /example/i,
    /demo/i,
    /123456789/,
    /000000000/
  ];
  
  if (suspiciousPatterns.some(pattern => pattern.test(orderData.company.name))) {
    errors.push('Suspicious company name detected');
  }
  
  if (suspiciousPatterns.some(pattern => pattern.test(orderData.bank.routingNumber))) {
    errors.push('Suspicious routing number detected');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
}; 