let country_code = {
   "DZD":"DZ", "AOA":"AO", "XOF":"BJ", "BWP":"BW", "XOF":"BF", "BIF":"BI", "XAF":"CM", 
"CVE":"CV", "XAF":"CF", "XAF":"TD", "KMF":"KM", "XAF":"CG", "CDF":"CD", "XOF":"CI", 
"DJF":"DJ", "EGP":"EG", "XAF":"GQ", "ERN":"ER", "ETB":"ET", "XAF":"GA", "GMD":"GM", 
"GHS":"GH", "GNF":"GN", "XOF":"GW", "KES":"KE", "LSL":"LS", "LRD":"LR", "LYD":"LY", 
"MGA":"MG", "MWK":"MW", "XOF":"ML", "MRO":"MR", "MUR":"MU", "MAD":"MA", "MZN":"MZ", 
"NAD":"NA", "XOF":"NE", "NGN":"NG", "RWF":"RW", "XOF":"SN", "SCR":"SC", "SLL":"SL", 
"SOS":"SO", "ZAR":"ZA", "SDG":"SD", "SZL":"SZ", "TZS":"TZ", "XOF":"TG", "TND":"TN", 
"UGX":"UG", "MAD":"EH", "ZMK":"ZM", "ZWL":"ZW", "AMD":"AM", "BDT":"BD", "BTN":"BT", 
"BND":"BN", "KHR":"KH", "CNY":"CN", "HKD":"HK", "INR":"IN", "IDR":"ID", "JPY":"JP", 
"KPW":"KP", "KRW":"KR", "LAK":"LA", "MOP":"MO", "MYR":"MY", "MVR":"MV", "MNT":"MN", 
"MMK":"MM", "NPR":"NP", "PHP":"PH", "RUB":"RU", "SGD":"SG", "LKR":"LK", "TWD":"TW", 
"THB":"TH", "USD":"TL", "VND":"VN", "AUD":"AU", "AUD":"CX", "AUD":"CC", "NZD":"CK", 
"AUD":"HM", "AUD":"KI", "USD":"MH", "AUD":"NR", "XPF":"NC", "NZD":"NZ", "NZD":"NU", 
"AUD":"NF", "PGK":"PG", "NZD":"PN", "SBD":"SB", "NZD":"TK", "TOP":"TO", "AUD":"TV", 
"VUV":"VU", "XPF":"WF", "XCD":"AI", "XCD":"AG", "AWG":"AW", "BSD":"BS", "BBD":"BB", 
"BMD":"BM", "KYD":"KY", "CUP":"CU", "XCD":"DM", "DOP":"DO", "XCD":"GD", "HTG":"HT", 
"JMD":"JM", "XCD":"MS", "USD":"PR", "XCD":"KN", "XCD":"LC", "XCD":"VC", "TTD":"TT", 
"USD":"TC", "USD":"VG", "USD":"VI", "EUR":"AX", "ALL":"AL", "EUR":"AD", "EUR":"AT", 
"BYR":"BY", "EUR":"BE", "BAM":"BA", "NOK":"BV", "BGN":"BG", "HRK":"HR", "EUR":"CY", 
"CZK":"CZ", "DKK":"DK", "EUR":"EE", "FKP":"FK", "DKK":"FO", "EUR":"FI", "EUR":"FR", 
"EUR":"GF", "EUR":"TF", "GEL":"GE", "EUR":"DE", "GIP":"GI", "EUR":"GR", "DKK":"GL", 
"EUR":"GP", "GBP":"GG", "EUR":"VA", "HUF":"HU", "ISK":"IS", "EUR":"IE", "GBP":"IM", 
"EUR":"IT", "GBP":"JE", "EUR":"LV", "CHF":"LI", "LTL":"LT", "EUR":"LU", "MKD":"MK", 
"EUR":"MT", "EUR":"MQ", "EUR":"YT", "MDL":"MD", "EUR":"MC", "EUR":"ME", "EUR":"NL", 
"ANG":"AN", "NOK":"NO", "PLN":"PL", "EUR":"PT", "EUR":"RE", "RON":"RO", "EUR":"PM", 
"EUR":"SM", "RSD":"RS", "EUR":"ES", "EUR":"SK", "EUR":"SI", "NOK":"SJ", "SEK":"SE", 
"CHF":"CH", "UAH":"UA", "GBP":"GB", "USD":"AS", "USD":"IO", "FJD":"FJ", "XPF":"PF", 
"USD":"GU", "USD":"FM","USD":"US","INR":"IN","PKR":"PK","NPR":"NP"
}




const dropList = document.querySelectorAll('.droplist select');
 FromCurrency = document.querySelector('.from select');
 toCurrency = document.querySelector('.to select');
getButton = document.querySelector('form button');
for (let i = 0; i < dropList.length; i++) {
    
    for(currency_code in country_code){
    let optionTag = `   <option value="${currency_code}">${currency_code}</option>`;
    dropList[i].insertAdjacentHTML("beforeend", optionTag);
        
    }
    
}

getButton.addEventListener("click", e => {
    e.preventDefault();
    getExchangeRate();
});

function getExchangeRate() {
    const amount = document.querySelector(".amount input");
    let amountVal = amount.value;
    if(amountVal == "" || amountVal == "0"){
        amount.value = "1";
        amountVal = 1;
    }
}

let url =`https://v6.exchangerate-api.com/v6/${apiKey}/latest/${FromCurrency.value}`;
fetch(url).then(response => console.log(response.json)
);