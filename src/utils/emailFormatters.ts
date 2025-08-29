// Email formatting utilities for professional check order submissions
// Includes security enhancements and clean, organized formatting

export interface CheckOrderData {
  orderNumber: string;
  orderDate: string;
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

// Mask sensitive information for security
const maskSensitiveData = (data: string, type: 'account' | 'routing' | 'phone' | 'fax'): string => {
  if (!data || data === 'N/A') return 'N/A';
  
  switch (type) {
    case 'account':
      // Show only last 4 digits
      return data.length > 4 ? `****${data.slice(-4)}` : '****';
    case 'routing':
      // Show only first 3 and last 3 digits
      return data.length >= 6 ? `${data.slice(0, 3)}***${data.slice(-3)}` : '***';
    case 'phone':
    case 'fax':
      // Show only area code and last 4 digits
      const cleaned = data.replace(/\D/g, '');
      if (cleaned.length >= 10) {
        return `(${cleaned.slice(0, 3)}) ***-${cleaned.slice(-4)}`;
      }
      return '***';
    default:
      return data;
  }
};

// Create a professional HTML email template
export const createProfessionalEmailHTML = (orderData: CheckOrderData): string => {
  const maskedAccount = maskSensitiveData(orderData.bank.accountNumber, 'account');
  const maskedRouting = maskSensitiveData(orderData.bank.routingNumber, 'routing');
  const maskedPhone = maskSensitiveData(orderData.company.phone, 'phone');
  const maskedFax = maskSensitiveData(orderData.company.fax, 'fax');

  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Check Order - ${orderData.orderNumber}</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 800px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0; text-align: center; }
        .content { background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px; }
        .section { background: white; margin: 20px 0; padding: 25px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
        .section h3 { color: #2c3e50; border-bottom: 2px solid #3498db; padding-bottom: 10px; margin-bottom: 20px; }
        .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #7f8c8d; font-size: 0.9em; text-transform: uppercase; letter-spacing: 0.5px; }
        .value { font-size: 1.1em; color: #2c3e50; margin-top: 5px; }
        .pricing-table { width: 100%; border-collapse: collapse; margin: 20px 0; }
        .pricing-table th, .pricing-table td { padding: 12px; text-align: left; border-bottom: 1px solid #ecf0f1; }
        .pricing-table th { background: #3498db; color: white; font-weight: bold; }
        .pricing-table tr:nth-child(even) { background: #f8f9fa; }
        .total-row { background: #2ecc71 !important; color: white; font-weight: bold; }
        .security-notice { background: #fff3cd; border: 1px solid #ffeaa7; padding: 15px; border-radius: 5px; margin: 20px 0; }
        .security-notice h4 { color: #856404; margin: 0 0 10px 0; }
        .security-notice p { color: #856404; margin: 0; font-size: 0.9em; }
        .footer { text-align: center; margin-top: 30px; padding: 20px; background: #ecf0f1; border-radius: 8px; }
        .urgent { background: #ff6b6b; color: white; padding: 10px; border-radius: 5px; margin: 10px 0; text-align: center; font-weight: bold; }
        @media (max-width: 600px) { .grid { grid-template-columns: 1fr; } }
    </style>
</head>
<body>
    <div class="header">
        <h1>🏦 Check Order Request</h1>
        <h2>Order #${orderData.orderNumber}</h2>
        <p>Submitted: ${new Date(orderData.orderDate).toLocaleDateString('en-US', { 
          weekday: 'long', 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })}</p>
    </div>

    <div class="content">
        <div class="urgent">
            ⚠️ SECURE ORDER - Contains sensitive banking information
        </div>

        <div class="section">
            <h3>🏢 Company Information</h3>
            <div class="grid">
                <div class="field">
                    <div class="label">Company Name</div>
                    <div class="value">${orderData.company.name}</div>
                </div>
                <div class="field">
                    <div class="label">Address</div>
                    <div class="value">${orderData.company.address}</div>
                </div>
                <div class="field">
                    <div class="label">City, State ZIP</div>
                    <div class="value">${orderData.company.city}, ${orderData.company.state} ${orderData.company.zip}</div>
                </div>
                <div class="field">
                    <div class="label">Phone</div>
                    <div class="value">${maskedPhone}</div>
                </div>
                <div class="field">
                    <div class="label">Fax</div>
                    <div class="value">${maskedFax}</div>
                </div>
            </div>
        </div>

        <div class="section">
            <h3>🏛️ Bank Information</h3>
            <div class="grid">
                <div class="field">
                    <div class="label">Bank Name</div>
                    <div class="value">${orderData.bank.name}</div>
                </div>
                <div class="field">
                    <div class="label">Bank City</div>
                    <div class="value">${orderData.bank.city || 'N/A'}</div>
                </div>
                <div class="field">
                    <div class="label">Routing Number</div>
                    <div class="value">${maskedRouting}</div>
                </div>
                <div class="field">
                    <div class="label">Account Number</div>
                    <div class="value">${maskedAccount}</div>
                </div>
                <div class="field">
                    <div class="label">Starting Check Number</div>
                    <div class="value">${orderData.bank.startingCheckNumber}</div>
                </div>
            </div>
        </div>

        <div class="section">
            <h3>📋 Product Details</h3>
            <div class="grid">
                <div class="field">
                    <div class="label">Check Type</div>
                    <div class="value">${orderData.product.checkTypeName} (${orderData.product.checkType})</div>
                </div>
                <div class="field">
                    <div class="label">Quantity</div>
                    <div class="value">${orderData.product.quantity} checks</div>
                </div>
                <div class="field">
                    <div class="label">Duplicates</div>
                    <div class="value">${orderData.product.duplicates ? '✅ Yes' : '❌ No'}</div>
                </div>
                <div class="field">
                    <div class="label">Packing Order</div>
                    <div class="value">${orderData.product.packingOrder}</div>
                </div>
                <div class="field">
                    <div class="label">Design Color</div>
                    <div class="value">${orderData.product.designColor}</div>
                </div>
                <div class="field">
                    <div class="label">Logo Option</div>
                    <div class="value">${orderData.product.logoOption}</div>
                </div>
            </div>
        </div>

        <div class="section">
            <h3>📦 Additional Items</h3>
            <div class="grid">
                <div class="field">
                    <div class="label">Envelopes</div>
                    <div class="value">${orderData.additionalItems.envelopes ? 
                      `✅ ${orderData.additionalItems.envelopes.quantity} qty - $${orderData.additionalItems.envelopes.price}` : 
                      '❌ None'}</div>
                </div>
                <div class="field">
                    <div class="label">Deposit Forms</div>
                    <div class="value">${orderData.additionalItems.depositForms ? 
                      `✅ ${orderData.additionalItems.depositForms.quantity} qty - $${orderData.additionalItems.depositForms.price}` : 
                      '❌ None'}</div>
                </div>
                <div class="field">
                    <div class="label">Tax Forms</div>
                    <div class="value">${orderData.additionalItems.taxForms ? 
                      `✅ ${orderData.additionalItems.taxForms.formName} - ${orderData.additionalItems.taxForms.quantity} qty` : 
                      '❌ None'}</div>
                </div>
            </div>
        </div>

        <div class="section">
            <h3>💰 Pricing Breakdown</h3>
            <table class="pricing-table">
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Base Price</td>
                        <td>$${orderData.pricing.basePrice.toFixed(2)}</td>
                    </tr>
                    ${orderData.pricing.premiumColorUpcharge > 0 ? `
                    <tr>
                        <td>Premium Color Upcharge</td>
                        <td>$${orderData.pricing.premiumColorUpcharge.toFixed(2)}</td>
                    </tr>` : ''}
                    ${orderData.pricing.envelopePrice > 0 ? `
                    <tr>
                        <td>Envelopes</td>
                        <td>$${orderData.pricing.envelopePrice.toFixed(2)}</td>
                    </tr>` : ''}
                    ${orderData.pricing.depositFormPrice > 0 ? `
                    <tr>
                        <td>Deposit Forms</td>
                        <td>$${orderData.pricing.depositFormPrice.toFixed(2)}</td>
                    </tr>` : ''}
                    <tr class="total-row">
                        <td><strong>TOTAL</strong></td>
                        <td><strong>$${orderData.pricing.totalPrice.toFixed(2)}</strong></td>
                    </tr>
                </tbody>
            </table>
        </div>

        ${orderData.notes ? `
        <div class="section">
            <h3>📝 Additional Notes</h3>
            <p>${orderData.notes}</p>
        </div>` : ''}

        <div class="security-notice">
            <h4>🔒 Security Notice</h4>
            <p>This order contains sensitive banking information. Please ensure this email is handled securely and access is limited to authorized personnel only. Account and routing numbers have been partially masked for security.</p>
        </div>

        <div class="footer">
            <p><strong>ClearLedger Solutions</strong></p>
            <p>Professional Bookkeeping & Check Ordering Services</p>
            <p>📞 (903) 815-9488 | 📧 jj@yourclearledger.com</p>
            <p><em>This order was submitted through our secure online system</em></p>
        </div>
    </div>
</body>
</html>
  `.trim();
};

// Create a clean plain text version for email clients that don't support HTML
export const createPlainTextEmail = (orderData: CheckOrderData): string => {
  const maskedAccount = maskSensitiveData(orderData.bank.accountNumber, 'account');
  const maskedRouting = maskSensitiveData(orderData.bank.routingNumber, 'routing');
  const maskedPhone = maskSensitiveData(orderData.company.phone, 'phone');
  const maskedFax = maskSensitiveData(orderData.company.fax, 'fax');

  return `
🏦 CHECK ORDER REQUEST
=====================

Order Number: ${orderData.orderNumber}
Order Date: ${new Date(orderData.orderDate).toLocaleDateString('en-US', { 
  weekday: 'long', 
  year: 'numeric', 
  month: 'long', 
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit'
})}

⚠️  SECURE ORDER - Contains sensitive banking information

🏢 COMPANY INFORMATION
---------------------
Company Name: ${orderData.company.name}
Address: ${orderData.company.address}
City, State ZIP: ${orderData.company.city}, ${orderData.company.state} ${orderData.company.zip}
Phone: ${maskedPhone}
Fax: ${maskedFax}

🏛️ BANK INFORMATION
-------------------
Bank Name: ${orderData.bank.name}
Bank City: ${orderData.bank.city || 'N/A'}
Routing Number: ${maskedRouting}
Account Number: ${maskedAccount}
Starting Check Number: ${orderData.bank.startingCheckNumber}

📋 PRODUCT DETAILS
------------------
Check Type: ${orderData.product.checkTypeName} (${orderData.product.checkType})
Quantity: ${orderData.product.quantity} checks
Duplicates: ${orderData.product.duplicates ? 'Yes' : 'No'}
Packing Order: ${orderData.product.packingOrder}
Design Color: ${orderData.product.designColor}
Logo Option: ${orderData.product.logoOption}

📦 ADDITIONAL ITEMS
-------------------
Envelopes: ${orderData.additionalItems.envelopes ? 
  `${orderData.additionalItems.envelopes.quantity} qty - $${orderData.additionalItems.envelopes.price}` : 
  'None'}
Deposit Forms: ${orderData.additionalItems.depositForms ? 
  `${orderData.additionalItems.depositForms.quantity} qty - $${orderData.additionalItems.depositForms.price}` : 
  'None'}
Tax Forms: ${orderData.additionalItems.taxForms ? 
  `${orderData.additionalItems.taxForms.formName} - ${orderData.additionalItems.taxForms.quantity} qty` : 
  'None'}

💰 PRICING BREAKDOWN
--------------------
Base Price: $${orderData.pricing.basePrice.toFixed(2)}
${orderData.pricing.premiumColorUpcharge > 0 ? `Premium Color Upcharge: $${orderData.pricing.premiumColorUpcharge.toFixed(2)}` : ''}
${orderData.pricing.envelopePrice > 0 ? `Envelopes: $${orderData.pricing.envelopePrice.toFixed(2)}` : ''}
${orderData.pricing.depositFormPrice > 0 ? `Deposit Forms: $${orderData.pricing.depositFormPrice.toFixed(2)}` : ''}
TOTAL: $${orderData.pricing.totalPrice.toFixed(2)}

${orderData.notes ? `
📝 ADDITIONAL NOTES
-------------------
${orderData.notes}
` : ''}

🔒 SECURITY NOTICE
------------------
This order contains sensitive banking information. Please ensure this email is handled securely and access is limited to authorized personnel only. Account and routing numbers have been partially masked for security.

---
ClearLedger Solutions
Professional Bookkeeping & Check Ordering Services
📞 (903) 815-9488 | 📧 jj@yourclearledger.com
This order was submitted through our secure online system
  `.trim();
};

// Enhanced security measures
export const enhanceSecurity = {
  // Add encryption headers for sensitive data
  addSecurityHeaders: (headers: Record<string, string>) => {
    return {
      ...headers,
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'DENY',
      'X-XSS-Protection': '1; mode=block',
      'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
      'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';"
    };
  },

  // Validate and sanitize sensitive data
  sanitizeBankingData: (data: string): string => {
    // Remove any non-numeric characters from banking data
    return data.replace(/\D/g, '');
  },

  // Add timestamp and IP tracking for audit trail
  addAuditInfo: (orderData: CheckOrderData) => {
    return {
      ...orderData,
      audit: {
        timestamp: new Date().toISOString(),
        userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : 'Server-side',
        // Note: IP address would be captured server-side
      }
    };
  }
}; 