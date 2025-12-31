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

        function updateGAN251Variant() {
      const variantSelect = document.getElementById('gan251-variant');
      const priceDisplay = document.getElementById('gan251-price');
      const addButton = document.getElementById('gan251-button');

      const selectedOption = variantSelect.options[variantSelect.selectedIndex];
      const price = parseFloat(selectedOption.value);
      const variantText = selectedOption.text.split('—')[0].trim();

      priceDisplay.textContent = '€' + price.toFixed(2);

      addButton.setAttribute('onclick', `addToCart('GAN 251 2x2 (${variantText})', ${price}); openCart()`);
    }

        function updateMGCBETAVariant() {
      const variantSelect = document.getElementById('mgcbeta-variant');
      const priceDisplay = document.getElementById('mgcbeta-price');
      const addButton = document.getElementById('mgcbeta-button');

      const selectedOption = variantSelect.options[variantSelect.selectedIndex];
      const price = parseFloat(selectedOption.value);
      const variantText = selectedOption.text.split('—')[0].trim();

      priceDisplay.textContent = '€' + price.toFixed(2);

      addButton.setAttribute('onclick', `addToCart('YJ MGC Beta 2x2 (${variantText})', ${price}); openCart()`);
    }

            function updateMOYUAOSUVariant() {
      const variantSelect = document.getElementById('moyuaosu-variant');
      const priceDisplay = document.getElementById('moyuaosu-price');
      const addButton = document.getElementById('moyuaosu-button');

      const selectedOption = variantSelect.options[variantSelect.selectedIndex];
      const price = parseFloat(selectedOption.value);
      const variantText = selectedOption.text.split('—')[0].trim();

      priceDisplay.textContent = '€' + price.toFixed(2);

      addButton.setAttribute('onclick', `addToCart('MoYu AoSu V7 4x4 (${variantText})', ${price}); openCart()`);
    }

                function updateMGC444Variant() {
      const variantSelect = document.getElementById('mgc444-variant');
      const priceDisplay = document.getElementById('mgc444-price');
      const addButton = document.getElementById('mgc444-button');

      const selectedOption = variantSelect.options[variantSelect.selectedIndex];
      const price = parseFloat(selectedOption.value);
      const variantText = selectedOption.text.split('—')[0].trim();

      priceDisplay.textContent = '€' + price.toFixed(2);

      addButton.setAttribute('onclick', `addToCart('YJ MGC V7 4x4 (${variantText})', ${price}); openCart()`);
    }

                    function updateAoChuang555Variant() {
      const variantSelect = document.getElementById('AoChuang555-variant');
      const priceDisplay = document.getElementById('AoChuang555-price');
      const addButton = document.getElementById('AoChuang555-button');

      const selectedOption = variantSelect.options[variantSelect.selectedIndex];
      const price = parseFloat(selectedOption.value);
      const variantText = selectedOption.text.split('—')[0].trim();

      priceDisplay.textContent = '€' + price.toFixed(2);

      addButton.setAttribute('onclick', `addToCart('MoYu AoChuang 5x5 (${variantText})', ${price}); openCart()`);
    }

                        function updateGAN562Variant() {
      const variantSelect = document.getElementById('GAN562-variant');
      const priceDisplay = document.getElementById('GAN562-price');
      const addButton = document.getElementById('GAN562-button');

      const selectedOption = variantSelect.options[variantSelect.selectedIndex];
      const price = parseFloat(selectedOption.value);
      const variantText = selectedOption.text.split('—')[0].trim();

      priceDisplay.textContent = '€' + price.toFixed(2);

      addButton.setAttribute('onclick', `addToCart('GAN 562 5x5 (${variantText})', ${price}); openCart()`);
    }

                            function updateMoYuAoFuVariant() {
      const variantSelect = document.getElementById('MoYuAoFu-variant');
      const priceDisplay = document.getElementById('MoYuAoFu-price');
      const addButton = document.getElementById('MoYuAoFu-button');

      const selectedOption = variantSelect.options[variantSelect.selectedIndex];
      const price = parseFloat(selectedOption.value);
      const variantText = selectedOption.text.split('—')[0].trim();

      priceDisplay.textContent = '€' + price.toFixed(2);

      addButton.setAttribute('onclick', `addToCart('MoYu AoFu V5 7x7 (${variantText})', ${price}); openCart()`);
    }

                                function updateClockVariant() {
      const variantSelect = document.getElementById('Clock-variant');
      const priceDisplay = document.getElementById('Clock-price');
      const addButton = document.getElementById('Clock-button');

      const selectedOption = variantSelect.options[variantSelect.selectedIndex];
      const price = parseFloat(selectedOption.value);
      const variantText = selectedOption.text.split('—')[0].trim();

      priceDisplay.textContent = '€' + price.toFixed(2);

      addButton.setAttribute('onclick', `addToCart('QiYi Clock (${variantText})', ${price}); openCart()`);
    }

                                    function updateDayanPROVariant() {
      const variantSelect = document.getElementById('dayanPRO-variant');
      const priceDisplay = document.getElementById('dayanPRO-price');
      const addButton = document.getElementById('dayanPRO-button');

      const selectedOption = variantSelect.options[variantSelect.selectedIndex];
      const price = parseFloat(selectedOption.value);
      const variantText = selectedOption.text.split('—')[0].trim();

      priceDisplay.textContent = '€' + price.toFixed(2);

      addButton.setAttribute('onclick', `addToCart('DaYan Pro Megaminx (${variantText})', ${price}); openCart()`);
    }

                                        function updateGANmegaVariant() {
      const variantSelect = document.getElementById('GANmega-variant');
      const priceDisplay = document.getElementById('GANmega-price');
      const addButton = document.getElementById('GANmega-button');

      const selectedOption = variantSelect.options[variantSelect.selectedIndex];
      const price = parseFloat(selectedOption.value);
      const variantText = selectedOption.text.split('—')[0].trim();

      priceDisplay.textContent = '€' + price.toFixed(2);

      addButton.setAttribute('onclick', `addToCart('GAN V2 Megaminx (${variantText})', ${price}); openCart()`);
    }

                                            function updateMOYUWeiPyraVariant() {
      const variantSelect = document.getElementById('MOYUWeiPyra-variant');
      const priceDisplay = document.getElementById('MOYUWeiPyra-price');
      const addButton = document.getElementById('MOYUWeiPyra-button');

      const selectedOption = variantSelect.options[variantSelect.selectedIndex];
      const price = parseFloat(selectedOption.value);
      const variantText = selectedOption.text.split('—')[0].trim();

      priceDisplay.textContent = '€' + price.toFixed(2);

      addButton.setAttribute('onclick', `addToCart('MoYu WeiLong Pyraminx (${variantText})', ${price}); openCart()`);
    }

                                                function updateDayanV3PyraVariant() {
      const variantSelect = document.getElementById('DayanV3Pyra-variant');
      const priceDisplay = document.getElementById('DayanV3Pyra-price');
      const addButton = document.getElementById('DayanV3Pyra-button');

      const selectedOption = variantSelect.options[variantSelect.selectedIndex];
      const price = parseFloat(selectedOption.value);
      const variantText = selectedOption.text.split('—')[0].trim();

      priceDisplay.textContent = '€' + price.toFixed(2);

      addButton.setAttribute('onclick', `addToCart('DaYan V3 Pyraminx (${variantText})', ${price}); openCart()`);
    }

                                                    function updateGANPyraVariant() {
      const variantSelect = document.getElementById('GANPyra-variant');
      const priceDisplay = document.getElementById('GANPyra-price');
      const addButton = document.getElementById('GANPyra-button');

      const selectedOption = variantSelect.options[variantSelect.selectedIndex];
      const price = parseFloat(selectedOption.value);
      const variantText = selectedOption.text.split('—')[0].trim();

      priceDisplay.textContent = '€' + price.toFixed(2);

      addButton.setAttribute('onclick', `addToCart('GAN Pyraminx (${variantText})', ${price}); openCart()`);
    }

                                                        function updateMOYUrsPyraVariant() {
      const variantSelect = document.getElementById('MOYUrsPyra-variant');
      const priceDisplay = document.getElementById('MOYUrsPyra-price');
      const addButton = document.getElementById('MOYUrsPyra-button');

      const selectedOption = variantSelect.options[variantSelect.selectedIndex];
      const price = parseFloat(selectedOption.value);
      const variantText = selectedOption.text.split('—')[0].trim();

      priceDisplay.textContent = '€' + price.toFixed(2);

      addButton.setAttribute('onclick', `addToCart('MoYu RS Pyraminx (${variantText})', ${price}); openCart()`);
    }

    function updateGANSkewbVariant() {
      const variantSelect = document.getElementById('GANSkewb-variant');
      const priceDisplay = document.getElementById('GANSkewb-price');
      const addButton = document.getElementById('GANSkewb-button');

      const selectedOption = variantSelect.options[variantSelect.selectedIndex];
      const price = parseFloat(selectedOption.value);
      const variantText = selectedOption.text.split('—')[0].trim();

      priceDisplay.textContent = '€' + price.toFixed(2);

      addButton.setAttribute('onclick', `addToCart('GAN Skewb (${variantText})', ${price}); openCart()`);
    }

        function updateGANSkewbVariant() {
      const variantSelect = document.getElementById('DayanSkewb-variant');
      const priceDisplay = document.getElementById('DayanSkewb-price');
      const addButton = document.getElementById('DayanSkewb-button');

      const selectedOption = variantSelect.options[variantSelect.selectedIndex];
      const price = parseFloat(selectedOption.value);
      const variantText = selectedOption.text.split('—')[0].trim();

      priceDisplay.textContent = '€' + price.toFixed(2);

      addButton.setAttribute('onclick', `addToCart('DaYan V2 Skewb (${variantText})', ${price}); openCart()`);
    }

            function updateMOYUSkewbVariant() {
      const variantSelect = document.getElementById('MOYUSkewb-variant');
      const priceDisplay = document.getElementById('MOYUSkewb-price');
      const addButton = document.getElementById('MOYUSkewb-button');

      const selectedOption = variantSelect.options[variantSelect.selectedIndex];
      const price = parseFloat(selectedOption.value);
      const variantText = selectedOption.text.split('—')[0].trim();

      priceDisplay.textContent = '€' + price.toFixed(2);

      addButton.setAttribute('onclick', `addToCart('MoYu RS Skewb (${variantText})', ${price}); openCart()`);
    }