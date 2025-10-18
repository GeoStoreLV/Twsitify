    function updateV11Variant() {
      const variantSelect = document.getElementById('v11-variant');
      const priceDisplay = document.getElementById('v11-price');
      const addButton = document.getElementById('v11-button');

      const selectedOption = variantSelect.options[variantSelect.selectedIndex];
      const price = parseFloat(selectedOption.value);
      const variantText = selectedOption.text.split('—')[0].trim();

      priceDisplay.textContent = '€' + price.toFixed(2);

      addButton.setAttribute('onclick', `addToCart('MoYu WeiLong V11 3x3 (${variantText})', ${price}); openCart()`);
    }
        function updateXMANV4Variant() {
      const variantSelect = document.getElementById('xman-v4-variant');
      const priceDisplay = document.getElementById('xman-v4-price');
      const addButton = document.getElementById('xman-v4-button');

      const selectedOption = variantSelect.options[variantSelect.selectedIndex];
      const price = parseFloat(selectedOption.value);
      const variantText = selectedOption.text.split('—')[0].trim();

      priceDisplay.textContent = '€' + price.toFixed(2);

      addButton.setAttribute('onclick', `addToCart('X-Man Tornado V4 3x3 (${variantText})', ${price}); openCart()`);
    }

        function updateGAN12Variant() {
      const variantSelect = document.getElementById('gan12-variant');
      const priceDisplay = document.getElementById('gan12-price');
      const addButton = document.getElementById('gan12-button');

      const selectedOption = variantSelect.options[variantSelect.selectedIndex];
      const price = parseFloat(selectedOption.value);
      const variantText = selectedOption.text.split('—')[0].trim();

      priceDisplay.textContent = '€' + price.toFixed(2);

      addButton.setAttribute('onclick', `addToCart('GAN 12 3x3 (${variantText})', ${price}); openCart()`);
    }

        function updateRS3MV5Variant() {
      const variantSelect = document.getElementById('rs3mv5-variant');
      const priceDisplay = document.getElementById('rs3mv5-price');
      const addButton = document.getElementById('rs3mv5-button');

      const selectedOption = variantSelect.options[variantSelect.selectedIndex];
      const price = parseFloat(selectedOption.value);
      const variantText = selectedOption.text.split('—')[0].trim();

      priceDisplay.textContent = '€' + price.toFixed(2);

      addButton.setAttribute('onclick', `addToCart('MoYu RS3M V5 3x3 (${variantText})', ${price}); openCart()`);
    }