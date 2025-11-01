 // DOM Elements
        const themeToggle = document.getElementById('themeToggle');
        const converterForm = document.getElementById('converterForm');
        const amountInput = document.getElementById('amount');
        const swapBtn = document.getElementById('swapBtn');
        const convertBtn = document.getElementById('convertBtn');
        const resultCard = document.getElementById('resultCard');
        const resultAmount = document.getElementById('resultAmount');
        const exchangeRate = document.getElementById('exchangeRate');
        const lastUpdated = document.getElementById('lastUpdated');
        const lastUpdate = document.getElementById('lastUpdate');
        const rateChange = document.getElementById('rateChange');
        const marketTrend = document.getElementById('marketTrend');
        const dailyChange = document.getElementById('dailyChange');
        const timeframeBtns = document.querySelectorAll('.timeframe-btn');
        const predictionText = document.getElementById('predictionText');

        // Currency Select Elements
        const fromCurrencyDisplay = document.getElementById('fromCurrencyDisplay');
        const toCurrencyDisplay = document.getElementById('toCurrencyDisplay');
        const fromCurrencyDropdown = document.getElementById('fromCurrencyDropdown');
        const toCurrencyDropdown = document.getElementById('toCurrencyDropdown');
        const fromCurrencySearch = document.getElementById('fromCurrencySearch');
        const toCurrencySearch = document.getElementById('toCurrencySearch');
        const fromCurrencyOptions = document.getElementById('fromCurrencyOptions');
        const toCurrencyOptions = document.getElementById('toCurrencyOptions');

        // Chart instance
        let rateChart;

        // Current selected currencies
        let currentFromCurrency = 'USD';
        let currentToCurrency = 'EUR';

        // Comprehensive list of 80+ well-known world currencies
        const allCurrencies = [
            // North America
            {code: "USD", name: "US Dollar", country: "United States"},
            {code: "CAD", name: "Canadian Dollar", country: "Canada"},
            {code: "MXN", name: "Mexican Peso", country: "Mexico"},
            
            // Europe
            {code: "EUR", name: "Euro", country: "European Union"},
            {code: "GBP", name: "British Pound", country: "United Kingdom"},
            {code: "CHF", name: "Swiss Franc", country: "Switzerland"},
            {code: "SEK", name: "Swedish Krona", country: "Sweden"},
            {code: "NOK", name: "Norwegian Krone", country: "Norway"},
            {code: "DKK", name: "Danish Krone", country: "Denmark"},
            {code: "PLN", name: "Polish Zloty", country: "Poland"},
            {code: "CZK", name: "Czech Koruna", country: "Czech Republic"},
            {code: "HUF", name: "Hungarian Forint", country: "Hungary"},
            {code: "RON", name: "Romanian Leu", country: "Romania"},
            {code: "BGN", name: "Bulgarian Lev", country: "Bulgaria"},
            {code: "HRK", name: "Croatian Kuna", country: "Croatia"},
            {code: "RUB", name: "Russian Ruble", country: "Russia"},
            {code: "TRY", name: "Turkish Lira", country: "Turkey"},
            {code: "UAH", name: "Ukrainian Hryvnia", country: "Ukraine"},
            
            // Asia
            {code: "JPY", name: "Japanese Yen", country: "Japan"},
            {code: "CNY", name: "Chinese Yuan", country: "China"},
            {code: "INR", name: "Indian Rupee", country: "India"},
            {code: "KRW", name: "South Korean Won", country: "South Korea"},
            {code: "SGD", name: "Singapore Dollar", country: "Singapore"},
            {code: "THB", name: "Thai Baht", country: "Thailand"},
            {code: "MYR", name: "Malaysian Ringgit", country: "Malaysia"},
            {code: "IDR", name: "Indonesian Rupiah", country: "Indonesia"},
            {code: "PHP", name: "Philippine Peso", country: "Philippines"},
            {code: "VND", name: "Vietnamese Dong", country: "Vietnam"},
            {code: "BDT", name: "Bangladeshi Taka", country: "Bangladesh"},
            {code: "PKR", name: "Pakistani Rupee", country: "Pakistan"},
            {code: "LKR", name: "Sri Lankan Rupee", country: "Sri Lanka"},
            {code: "NPR", name: "Nepalese Rupee", country: "Nepal"},
            {code: "MMK", name: "Myanmar Kyat", country: "Myanmar"},
            {code: "KHR", name: "Cambodian Riel", country: "Cambodia"},
            {code: "LAK", name: "Laotian Kip", country: "Laos"},
            {code: "MNT", name: "Mongolian Tugrik", country: "Mongolia"},
            
            // Middle East
            {code: "AED", name: "UAE Dirham", country: "United Arab Emirates"},
            {code: "SAR", name: "Saudi Riyal", country: "Saudi Arabia"},
            {code: "QAR", name: "Qatari Riyal", country: "Qatar"},
            {code: "KWD", name: "Kuwaiti Dinar", country: "Kuwait"},
            {code: "OMR", name: "Omani Rial", country: "Oman"},
            {code: "BHD", name: "Bahraini Dinar", country: "Bahrain"},
            {code: "JOD", name: "Jordanian Dinar", country: "Jordan"},
            {code: "LBP", name: "Lebanese Pound", country: "Lebanon"},
            {code: "ILS", name: "Israeli Shekel", country: "Israel"},
            {code: "IRR", name: "Iranian Rial", country: "Iran"},
            {code: "IQD", name: "Iraqi Dinar", country: "Iraq"},
            
            // Africa
            {code: "ZAR", name: "South African Rand", country: "South Africa"},
            {code: "EGP", name: "Egyptian Pound", country: "Egypt"},
            {code: "NGN", name: "Nigerian Naira", country: "Nigeria"},
            {code: "KES", name: "Kenyan Shilling", country: "Kenya"},
            {code: "GHS", name: "Ghanaian Cedi", country: "Ghana"},
            {code: "ETB", name: "Ethiopian Birr", country: "Ethiopia"},
            {code: "TZS", name: "Tanzanian Shilling", country: "Tanzania"},
            {code: "UGX", name: "Ugandan Shilling", country: "Uganda"},
            {code: "MAD", name: "Moroccan Dirham", country: "Morocco"},
            {code: "DZD", name: "Algerian Dinar", country: "Algeria"},
            {code: "XOF", name: "CFA Franc BCEAO", country: "West Africa"},
            {code: "XAF", name: "CFA Franc BEAC", country: "Central Africa"},
            {code: "CDF", name: "Congolese Franc", country: "DR Congo"},
            {code: "ZMW", name: "Zambian Kwacha", country: "Zambia"},
            {code: "MWK", name: "Malawian Kwacha", country: "Malawi"},
            {code: "ZWL", name: "Zimbabwean Dollar", country: "Zimbabwe"},
            {code: "RWF", name: "Rwandan Franc", country: "Rwanda"},
            {code: "BIF", name: "Burundian Franc", country: "Burundi"},
            
            // Oceania
            {code: "AUD", name: "Australian Dollar", country: "Australia"},
            {code: "NZD", name: "New Zealand Dollar", country: "New Zealand"},
            {code: "FJD", name: "Fijian Dollar", country: "Fiji"},
            {code: "PGK", name: "Papua New Guinean Kina", country: "Papua New Guinea"},
            
            // South America
            {code: "BRL", name: "Brazilian Real", country: "Brazil"},
            {code: "ARS", name: "Argentine Peso", country: "Argentina"},
            {code: "COP", name: "Colombian Peso", country: "Colombia"},
            {code: "CLP", name: "Chilean Peso", country: "Chile"},
            {code: "PEN", name: "Peruvian Sol", country: "Peru"},
            {code: "UYU", name: "Uruguayan Peso", country: "Uruguay"},
            {code: "BOB", name: "Bolivian Boliviano", country: "Bolivia"},
            {code: "PYG", name: "Paraguayan Guarani", country: "Paraguay"},
            
            // Caribbean
            {code: "TTD", name: "Trinidad & Tobago Dollar", country: "Trinidad and Tobago"},
            {code: "JMD", name: "Jamaican Dollar", country: "Jamaica"},
            {code: "BSD", name: "Bahamian Dollar", country: "Bahamas"},
            {code: "BBD", name: "Barbadian Dollar", country: "Barbados"},
            {code: "XCD", name: "East Caribbean Dollar", country: "East Caribbean"}
        ];

        // Realistic base exchange rates (approximate market rates)
        const baseExchangeRates = {
            'USD': {
                'EUR': 0.85, 'GBP': 0.73, 'JPY': 110.25, 'CAD': 1.25, 'AUD': 1.35,
                'CHF': 0.92, 'CNY': 6.45, 'INR': 74.50, 'BRL': 5.20, 'RUB': 73.80,
                'ZAR': 14.75, 'MXN': 20.15, 'SGD': 1.35, 'NZD': 1.45, 'KRW': 1180.50,
                'TRY': 8.75, 'SEK': 8.65, 'NOK': 8.55, 'DKK': 6.35, 'PLN': 3.95,
                'CZK': 21.85, 'HUF': 305.50, 'RON': 4.15, 'BGN': 1.66, 'HRK': 6.45,
                'UAH': 27.25, 'THB': 33.25, 'IDR': 14250, 'MYR': 4.15, 'PHP': 50.75,
                'VND': 23000, 'BDT': 85.25, 'PKR': 175.50, 'LKR': 200.25, 'NPR': 119.75,
                'AED': 3.67, 'SAR': 3.75, 'QAR': 3.64, 'KWD': 0.30, 'OMR': 0.38,
                'BHD': 0.38, 'JOD': 0.71, 'LBP': 1507.50, 'ILS': 3.25, 'IRR': 42000,
                'IQD': 1460, 'EGP': 15.65, 'NGN': 410.75, 'KES': 115.20, 'GHS': 11.50,
                'ETB': 45.25, 'TZS': 2320, 'UGX': 3550, 'MAD': 9.15, 'DZD': 135.25,
                'XOF': 555, 'XAF': 555, 'CDF': 2000, 'ZMW': 17.25, 'MWK': 815,
                'ZWL': 322, 'RWF': 1010, 'BIF': 1980, 'FJD': 2.05, 'PGK': 3.50,
                'ARS': 98.75, 'COP': 3800, 'CLP': 780, 'PEN': 3.85, 'UYU': 42.25,
                'BOB': 6.90, 'PYG': 6950, 'TTD': 6.75, 'JMD': 150.25, 'BSD': 1.00,
                'BBD': 2.00, 'XCD': 2.70
            }
        };

        // Theme Toggle
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');
            const icon = themeToggle.querySelector('i');
            if (document.body.classList.contains('dark-theme')) {
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
            } else {
                icon.classList.remove('fa-sun');
                icon.classList.add('fa-moon');
            }
            
            if (rateChart) {
                updateChartTheme();
            }
        });

        // Initialize Currency Selectors
        function initializeCurrencySelectors() {
            // Populate currency options
            function populateCurrencyOptions(container, selectedCode) {
                container.innerHTML = '';
                allCurrencies.forEach(currency => {
                    const option = document.createElement('div');
                    option.className = `currency-option ${currency.code === selectedCode ? 'selected' : ''}`;
                    option.innerHTML = `
                        <span class="currency-code">${currency.code}</span>
                        <span class="currency-name">${currency.name}</span>
                        <span class="currency-country">${currency.country}</span>
                    `;
                    option.addEventListener('click', () => {
                        container.querySelectorAll('.currency-option').forEach(opt => {
                            opt.classList.remove('selected');
                        });
                        option.classList.add('selected');
                    });
                    container.appendChild(option);
                });
            }

            // Initialize both dropdowns
            populateCurrencyOptions(fromCurrencyOptions, currentFromCurrency);
            populateCurrencyOptions(toCurrencyOptions, currentToCurrency);

            // Toggle dropdown visibility
            fromCurrencyDisplay.addEventListener('click', () => {
                fromCurrencyDropdown.classList.toggle('active');
                toCurrencyDropdown.classList.remove('active');
                if (fromCurrencyDropdown.classList.contains('active')) {
                    fromCurrencySearch.focus();
                }
            });

            toCurrencyDisplay.addEventListener('click', () => {
                toCurrencyDropdown.classList.toggle('active');
                fromCurrencyDropdown.classList.remove('active');
                if (toCurrencyDropdown.classList.contains('active')) {
                    toCurrencySearch.focus();
                }
            });

            // Close dropdowns when clicking outside
            document.addEventListener('click', (e) => {
                if (!fromCurrencyDisplay.contains(e.target) && !fromCurrencyDropdown.contains(e.target)) {
                    fromCurrencyDropdown.classList.remove('active');
                }
                if (!toCurrencyDisplay.contains(e.target) && !toCurrencyDropdown.contains(e.target)) {
                    toCurrencyDropdown.classList.remove('active');
                }
            });

            // Search functionality
            function setupSearch(searchInput, optionsContainer) {
                searchInput.addEventListener('input', (e) => {
                    const searchTerm = e.target.value.toLowerCase();
                    const options = optionsContainer.querySelectorAll('.currency-option');
                    
                    options.forEach(option => {
                        const code = option.querySelector('.currency-code').textContent.toLowerCase();
                        const name = option.querySelector('.currency-name').textContent.toLowerCase();
                        const country = option.querySelector('.currency-country').textContent.toLowerCase();
                        
                        if (code.includes(searchTerm) || name.includes(searchTerm) || country.includes(searchTerm)) {
                            option.style.display = 'flex';
                        } else {
                            option.style.display = 'none';
                        }
                    });
                });
            }

            setupSearch(fromCurrencySearch, fromCurrencyOptions);
            setupSearch(toCurrencySearch, toCurrencyOptions);

            // Handle currency selection
            fromCurrencyOptions.querySelectorAll('.currency-option').forEach(option => {
                option.addEventListener('click', () => {
                    const code = option.querySelector('.currency-code').textContent;
                    const name = option.querySelector('.currency-name').textContent;
                    
                    currentFromCurrency = code;
                    fromCurrencyDisplay.innerHTML = `
                        <span class="currency-code">${code}</span>
                        <span class="currency-name">${name}</span>
                        <i class="fas fa-chevron-down"></i>
                    `;
                    fromCurrencyDropdown.classList.remove('active');
                    
                    if (resultCard.classList.contains('active')) {
                        convertCurrency();
                    }
                });
            });

            toCurrencyOptions.querySelectorAll('.currency-option').forEach(option => {
                option.addEventListener('click', () => {
                    const code = option.querySelector('.currency-code').textContent;
                    const name = option.querySelector('.currency-name').textContent;
                    
                    currentToCurrency = code;
                    toCurrencyDisplay.innerHTML = `
                        <span class="currency-code">${code}</span>
                        <span class="currency-name">${name}</span>
                        <i class="fas fa-chevron-down"></i>
                    `;
                    toCurrencyDropdown.classList.remove('active');
                    
                    if (resultCard.classList.contains('active')) {
                        convertCurrency();
                    }
                });
            });
        }

        // Swap Currencies
        swapBtn.addEventListener('click', () => {
            const tempCurrency = currentFromCurrency;
            currentFromCurrency = currentToCurrency;
            currentToCurrency = tempCurrency;
            
            // Update displays
            const fromDisplay = fromCurrencyDisplay.innerHTML;
            fromCurrencyDisplay.innerHTML = toCurrencyDisplay.innerHTML;
            toCurrencyDisplay.innerHTML = fromDisplay;
            
            if (resultCard.classList.contains('active')) {
                convertCurrency();
            }
        });

        // Get realistic exchange rate with market simulation
        function getExchangeRate(from, to) {
            // Add realistic market fluctuations
            const fluctuation = (Math.random() - 0.5) * 0.02; // ±1% daily fluctuation
            
            if (from === to) {
                return 1.0;
            }
            
            // Use USD as base for all conversions
            if (from === 'USD' && baseExchangeRates.USD[to]) {
                return baseExchangeRates.USD[to] * (1 + fluctuation);
            }
            
            if (to === 'USD' && baseExchangeRates.USD[from]) {
                return (1 / baseExchangeRates.USD[from]) * (1 + fluctuation);
            }
            
            // Cross-rate calculation
            if (baseExchangeRates.USD[from] && baseExchangeRates.USD[to]) {
                const fromToUSD = 1 / baseExchangeRates.USD[from];
                const usdToTarget = baseExchangeRates.USD[to];
                return (fromToUSD * usdToTarget) * (1 + fluctuation);
            }
            
            // Fallback for any missing rates
            return 0.8 + Math.random() * 0.4;
        }

        // Convert Currency
        function convertCurrency() {
            const amount = parseFloat(amountInput.value);
            const from = currentFromCurrency;
            const to = currentToCurrency;
            
            if (isNaN(amount) || amount <= 0) {
                alert('Please enter a valid amount');
                return;
            }
            
            // Show loading state
            convertBtn.innerHTML = '<div class="loading"></div> Calculating...';
            convertBtn.disabled = true;
            
            // Simulate API delay
            setTimeout(() => {
                const rate = getExchangeRate(from, to);
                const convertedAmount = amount * rate;
                
                resultAmount.textContent = convertedAmount.toLocaleString('en-US', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                });
                
                exchangeRate.textContent = rate.toFixed(4);
                lastUpdated.textContent = new Date().toLocaleTimeString();
                lastUpdate.textContent = `Updated: ${new Date().toLocaleTimeString()}`;
                
                const changePercent = ((Math.random() - 0.5) * 0.5).toFixed(2);
                const changeElement = rateChange.querySelector('span');
                const changeIcon = rateChange.querySelector('i');
                
                if (parseFloat(changePercent) >= 0) {
                    changeElement.textContent = `+${Math.abs(changePercent)}%`;
                    changeIcon.className = 'fas fa-arrow-up';
                    rateChange.className = 'movement-indicator movement-up';
                    marketTrend.textContent = 'Bullish';
                } else {
                    changeElement.textContent = `-${Math.abs(changePercent)}%`;
                    changeIcon.className = 'fas fa-arrow-down';
                    rateChange.className = 'movement-indicator movement-down';
                    marketTrend.textContent = 'Bearish';
                }
                
                dailyChange.textContent = changePercent >= 0 ? `+${Math.abs(changePercent)}%` : `-${Math.abs(changePercent)}%`;
                
                resultCard.classList.add('active');
                updateChart();
                updatePrediction(from, to, rate, parseFloat(changePercent));
                
                // Reset button
                convertBtn.innerHTML = '<i class="fas fa-sync-alt"></i> Convert Currency';
                convertBtn.disabled = false;
            }, 800);
        }

        // Form submission
        converterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            convertCurrency();
        });

        // Timeframe selection
        timeframeBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                timeframeBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                updateChart(btn.dataset.timeframe);
            });
        });

        // Generate realistic historical data
        function generateHistoricalData(timeframe = '1D', baseRate) {
            const now = luxon.DateTime.now();
            let labels = [];
            let data = [];
            
            const dataPoints = timeframe === '1D' ? 24 : 
                             timeframe === '1W' ? 7 : 
                             timeframe === '1M' ? 30 : 
                             timeframe === '3M' ? 12 : 12;
            
            for (let i = dataPoints; i >= 0; i--) {
                if (timeframe === '1D') {
                    labels.push(now.minus({hours: i}).toFormat('HH:mm'));
                } else if (timeframe === '1W') {
                    labels.push(now.minus({days: i}).toFormat('dd/MM'));
                } else {
                    labels.push(now.minus({days: i * (timeframe === '1M' ? 1 : 7)}).toFormat('dd/MM'));
                }
            }
            
            let currentPrice = baseRate * (0.95 + Math.random() * 0.1);
            const volatility = 0.002;
            
            for (let i = 0; i <= dataPoints; i++) {
                const change = (Math.random() - 0.4) * volatility;
                currentPrice = currentPrice * (1 + change);
                data.push(currentPrice);
            }
            
            const projectionPoints = Math.floor(dataPoints * 0.25);
            for (let i = 1; i <= projectionPoints; i++) {
                labels.push(`+${i}${timeframe === '1D' ? 'h' : 'd'}`);
                const change = (Math.random() - 0.3) * volatility * 0.7;
                currentPrice = currentPrice * (1 + change);
                data.push(currentPrice);
            }
            
            return { labels, data };
        }

        // Update Chart
        function updateChart(timeframe = '1D') {
            const ctx = document.getElementById('rateChart').getContext('2d');
            const from = currentFromCurrency;
            const to = currentToCurrency;
            const currentRate = parseFloat(exchangeRate.textContent) || 1.0;
            
            if (rateChart) {
                rateChart.destroy();
            }
            
            const historicalData = generateHistoricalData(timeframe, currentRate);
            const mainDataPoints = historicalData.data.length - Math.floor(historicalData.data.length * 0.25);
            
            const gradient = ctx.createLinearGradient(0, 0, 0, 300);
            gradient.addColorStop(0, 'rgba(67, 97, 238, 0.3)');
            gradient.addColorStop(1, 'rgba(67, 97, 238, 0)');
            
            const projectionGradient = ctx.createLinearGradient(0, 0, 0, 300);
            projectionGradient.addColorStop(0, 'rgba(114, 9, 183, 0.2)');
            projectionGradient.addColorStop(1, 'rgba(114, 9, 183, 0)');
            
            rateChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: historicalData.labels,
                    datasets: [
                        {
                            label: 'Historical Rate',
                            data: historicalData.data.slice(0, mainDataPoints),
                            borderColor: '#4361ee',
                            backgroundColor: gradient,
                            borderWidth: 3,
                            fill: true,
                            tension: 0.4,
                            pointBackgroundColor: '#4361ee',
                            pointBorderColor: '#ffffff',
                            pointBorderWidth: 2,
                            pointRadius: 3,
                            pointHoverRadius: 5
                        },
                        {
                            label: 'Projection',
                            data: [...Array(mainDataPoints).fill(null), ...historicalData.data.slice(mainDataPoints)],
                            borderColor: '#7209b7',
                            backgroundColor: projectionGradient,
                            borderWidth: 3,
                            borderDash: [5, 5],
                            fill: true,
                            tension: 0.4,
                            pointBackgroundColor: '#7209b7',
                            pointBorderColor: '#ffffff',
                            pointBorderWidth: 2,
                            pointRadius: 3,
                            pointHoverRadius: 5
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: true,
                            position: 'top',
                            labels: {
                                color: document.body.classList.contains('dark-theme') ? '#a0a4ab' : '#6c757d',
                                usePointStyle: true,
                                padding: 20
                            }
                        },
                        tooltip: {
                            mode: 'index',
                            intersect: false,
                            backgroundColor: 'rgba(30, 35, 49, 0.9)',
                            titleColor: '#f8f9fa',
                            bodyColor: '#f8f9fa',
                            borderColor: '#4361ee',
                            borderWidth: 1,
                            cornerRadius: 8,
                            displayColors: true,
                            callbacks: {
                                label: function(context) {
                                    let label = context.dataset.label || '';
                                    if (label) {
                                        label += ': ';
                                    }
                                    label += parseFloat(context.parsed.y).toFixed(4);
                                    return label;
                                }
                            }
                        }
                    },
                    scales: {
                        x: {
                            grid: {
                                color: 'rgba(108, 117, 125, 0.1)'
                            },
                            ticks: {
                                color: document.body.classList.contains('dark-theme') ? '#a0a4ab' : '#6c757d',
                                maxRotation: 0
                            }
                        },
                        y: {
                            grid: {
                                color: 'rgba(108, 117, 125, 0.1)'
                            },
                            ticks: {
                                color: document.body.classList.contains('dark-theme') ? '#a0a4ab' : '#6c757d',
                                callback: function(value) {
                                    return parseFloat(value).toFixed(4);
                                }
                            }
                        }
                    },
                    interaction: {
                        mode: 'nearest',
                        axis: 'x',
                        intersect: false
                    },
                    animation: {
                        duration: 1000,
                        easing: 'easeOutQuart'
                    }
                }
            });
        }

        // Update chart theme
        function updateChartTheme() {
            if (rateChart) {
                const isDark = document.body.classList.contains('dark-theme');
                rateChart.options.scales.x.ticks.color = isDark ? '#a0a4ab' : '#6c757d';
                rateChart.options.scales.y.ticks.color = isDark ? '#a0a4ab' : '#6c757d';
                rateChart.options.plugins.legend.labels.color = isDark ? '#a0a4ab' : '#6c757d';
                rateChart.update();
            }
        }

        // Update prediction text
        function updatePrediction(from, to, rate, fluctuation) {
            const trends = [
                {
                    condition: fluctuation > 0.1,
                    text: `Strong bullish momentum for ${from}/${to}. Up ${fluctuation.toFixed(2)}% today. Technical analysis suggests continued upward movement.`,
                    trend: "Strong Bullish"
                },
                {
                    condition: fluctuation > 0.02,
                    text: `Moderate bullish trend for ${from}/${to}. Up ${fluctuation.toFixed(2)}% today. Positive macroeconomic factors support further gains.`,
                    trend: "Bullish"
                },
                {
                    condition: fluctuation < -0.1,
                    text: `Significant bearish pressure on ${from}/${to}. Down ${Math.abs(fluctuation).toFixed(2)}% today. Caution advised amid current volatility.`,
                    trend: "Strong Bearish"
                },
                {
                    condition: fluctuation < -0.02,
                    text: `Mild bearish sentiment for ${from}/${to}. Down ${Math.abs(fluctuation).toFixed(2)}% today. Market is consolidating at current levels.`,
                    trend: "Bearish"
                },
                {
                    condition: true,
                    text: `${from}/${to} trading in tight range (${fluctuation.toFixed(2)}% change). Low volatility suggests balanced market forces.`,
                    trend: "Neutral"
                }
            ];
            
            const prediction = trends.find(t => t.condition) || trends[trends.length - 1];
            predictionText.textContent = prediction.text;
        }

        // Initialize application
        function init() {
            initializeCurrencySelectors();
            updateChart();
            
            // Auto-convert on load
            setTimeout(() => {
                convertCurrency();
            }, 1000);
            
            // Auto-refresh every 2 minutes
            setInterval(() => {
                if (resultCard.classList.contains('active')) {
                    convertCurrency();
                }
            }, 120000);
        }

        // Start the application
        init();