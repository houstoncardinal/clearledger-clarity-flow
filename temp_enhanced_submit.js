  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      // Scroll to first error
      const firstErrorField = Object.keys(formErrors)[0];
      if (firstErrorField) {
        document.getElementById(firstErrorField)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }
    
    // Format the order data for easy processing
    const orderData = {
      orderDate: new Date().toISOString(),
      orderNumber: `CHK-${Date.now()}`,
      
      // Company Information
      company: {
        name: formData.companyName,
        address: formData.companyAddress || '',
        city: formData.city || '',
        state: formData.state || '',
        zip: formData.zip || '',
        phone: formData.phoneNumber || ''
      },
      
      // Bank Information
      bank: {
        name: formData.bankName,
        city: formData.bankCity || '',
        routingNumber: formData.routingNumber,
        accountNumber: formData.accountNumber,
        startingCheckNumber: formData.startingCheckNumber || ''
      },
      
      // Product Details
      product: {
        checkType: formData.checkType,
        checkTypeName: checkTypes.find(t => t.id === formData.checkType)?.name || '',
        quantity: formData.quantity,
        duplicates: formData.duplicates,
        packingOrder: formData.packingOrder,
        designColor: formData.designColor,
        logoOption: formData.logoOption
      },
      
      // Additional Items
      additionalItems: {
        envelopes: formData.envelopes ? {
          quantity: formData.envelopeQuantity,
          price: formData.envelopeQuantity === '250' ? 85 :
                 formData.envelopeQuantity === '500' ? 106 :
                 formData.envelopeQuantity === '1000' ? 165 :
                 formData.envelopeQuantity === '1500' ? 229 :
                 formData.envelopeQuantity === '2000' ? 292 : 0
        } : null,
        depositForms: formData.depositForms ? {
          quantity: formData.depositFormQuantity,
          duplicates: formData.depositFormDuplicates,
          price: formData.depositFormQuantity === '150' ? 52 :
                 formData.depositFormQuantity === '300' ? 81 :
                 formData.depositFormQuantity === '600' ? 130 :
                 formData.depositFormQuantity === '1200' ? 200 :
                 formData.depositFormQuantity === '2400' ? 308 : 0
        } : null,
        taxForms: formData.taxForms ? {
          formName: formData.taxFormName,
          quantity: formData.taxFormQuantity
        } : null
      },
      
      // Pricing
      pricing: {
        basePrice: calculatePrice(),
        premiumColorUpcharge: [...standardColors, ...premiumColors].find(c => c.value === formData.designColor)?.premium ? 15 : 0,
        envelopePrice: formData.envelopes && formData.envelopeQuantity ? 
          (formData.envelopeQuantity === '250' ? 85 :
           formData.envelopeQuantity === '500' ? 106 :
           formData.envelopeQuantity === '1000' ? 165 :
           formData.envelopeQuantity === '1500' ? 229 :
           formData.envelopeQuantity === '2000' ? 292 : 0) : 0,
        depositFormPrice: formData.depositForms && formData.depositFormQuantity ?
          (formData.depositFormQuantity === '150' ? 52 :
           formData.depositFormQuantity === '300' ? 81 :
           formData.depositFormQuantity === '600' ? 130 :
           formData.depositFormQuantity === '1200' ? 200 :
           formData.depositFormQuantity === '2400' ? 308 : 0) : 0,
        totalPrice: calculateTotal()
      },
      
      // Additional Notes
      notes: formData.otherNotes
    };

    // Enhanced security validation
    const validation = validateOrderData(orderData);
    if (!validation.isValid) {
      console.error('Order validation failed:', validation.errors);
      alert('Order validation failed. Please check your information and try again.');
      return;
    }

    try {
      // Save order to bookkeeping system
      const savedOrder = saveOrder(orderData);
      console.log('Order saved to bookkeeping system:', savedOrder);

      // Format order for Stripe
      const stripeOrderData = formatOrderForStripe(orderData);
      
      // Create Stripe checkout session
      await createStripeCheckoutSession(stripeOrderData);
      
      // Show success message
      const message = `Order ${orderData.orderNumber} has been created successfully!

Total: $${orderData.pricing.totalPrice}

You will be redirected to complete payment via Stripe.`;
      
      alert(message);
      
    } catch (error) {
      console.error('Order submission error:', error);
      
      // Fallback: Save order without payment for manual processing
      const savedOrder = saveOrder(orderData);
      
      const fallbackMessage = `Order ${orderData.orderNumber} has been saved!

Total: $${orderData.pricing.totalPrice}

Payment processing encountered an issue. We will contact you shortly to complete payment manually.`;
      
      alert(fallbackMessage);
    }

    // Also submit to Netlify Forms for backup
    const orderHash = generateOrderHash(orderData);
    const orderSummary = createTextOrderSummary(orderData);

    const formDataToSend = new FormData();
    formDataToSend.append('form-name', 'check-ordering');
    formDataToSend.append('orderNumber', orderData.orderNumber);
    formDataToSend.append('orderDate', orderData.orderDate);
    formDataToSend.append('totalPrice', orderData.pricing.totalPrice.toString());
    formDataToSend.append('orderHash', orderHash);
    formDataToSend.append('securityLevel', 'enhanced');
    formDataToSend.append('submissionTimestamp', new Date().toISOString());
    formDataToSend.append('orderSummary', orderSummary);

    // Submit to Netlify Forms (background)
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formDataToSend as any).toString()
    }).catch(error => {
      console.error('Netlify form submission error:', error);
    });
  };
