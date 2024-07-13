const countryList = {
    AED: "AE",
    AFN: "AF",
    XCD: "AG",
    ALL: "AL",
    AMD: "AM",
    ANG: "AN",
    AOA: "AO",
    AQD: "AQ",
    ARS: "AR",
    AUD: "AU",
    AZN: "AZ",
    BAM: "BA",
    BBD: "BB",
    BDT: "BD",
    XOF: "BE",
    BGN: "BG",
    BHD: "BH",
    BIF: "BI",
    BMD: "BM",
    BND: "BN",
    BOB: "BO",
    BRL: "BR",
    BSD: "BS",
    NOK: "BV",
    BWP: "BW",
    BYR: "BY",
    BZD: "BZ",
    CAD: "CA",
    CDF: "CD",
    XAF: "CF",
    CHF: "CH",
    CLP: "CL",
    CNY: "CN",
    COP: "CO",
    CRC: "CR",
    CUP: "CU",
    CVE: "CV",
    CYP: "CY",
    CZK: "CZ",
    DJF: "DJ",
    DKK: "DK",
    DOP: "DO",
    DZD: "DZ",
    ECS: "EC",
    EEK: "EE",
    EGP: "EG",
    ETB: "ET",
    EUR: "FR",
    FJD: "FJ",
    FKP: "FK",
    GBP: "GB",
    GEL: "GE",
    GGP: "GG",
    GHS: "GH",
    GIP: "GI",
    GMD: "GM",
    GNF: "GN",
    GTQ: "GT",
    GYD: "GY",
    HKD: "HK",
    HNL: "HN",
    HRK: "HR",
    HTG: "HT",
    HUF: "HU",
    IDR: "ID",
    ILS: "IL",
    INR: "IN",
    IQD: "IQ",
    IRR: "IR",
    ISK: "IS",
    JMD: "JM",
    JOD: "JO",
    JPY: "JP",
    KES: "KE",
    KGS: "KG",
    KHR: "KH",
    KMF: "KM",
    KPW: "KP",
    KRW: "KR",
    KWD: "KW",
    KYD: "KY",
    KZT: "KZ",
    LAK: "LA",
    LBP: "LB",
    LKR: "LK",
    LRD: "LR",
    LSL: "LS",
    LTL: "LT",
    LVL: "LV",
    LYD: "LY",
    MAD: "MA",
    MDL: "MD",
    MGA: "MG",
    MKD: "MK",
    MMK: "MM",
    MNT: "MN",
    MOP: "MO",
    MRO: "MR",
    MTL: "MT",
    MUR: "MU",
    MVR: "MV",
    MWK: "MW",
    MXN: "MX",
    MYR: "MY",
    MZN: "MZ",
    NAD: "NA",
    XPF: "NC",
    NGN: "NG",
    NIO: "NI",
    NPR: "NP",
    NZD: "NZ",
    OMR: "OM",
    PAB: "PA",
    PEN: "PE",
    PGK: "PG",
    PHP: "PH",
    PKR: "PK",
    PLN: "PL",
    PYG: "PY",
    QAR: "QA",
    RON: "RO",
    RSD: "RS",
    RUB: "RU",
    RWF: "RW",
    SAR: "SA",
    SBD: "SB",
    SCR: "SC",
    SDG: "SD",
    SEK: "SE",
    SGD: "SG",
    SKK: "SK",
    SLL: "SL",
    SOS: "SO",
    SRD: "SR",
    STD: "ST",
    SVC: "SV",
    SYP: "SY",
    SZL: "SZ",
    THB: "TH",
    TJS: "TJ",
    TMT: "TM",
    TND: "TN",
    TOP: "TO",
    TRY: "TR",
    TTD: "TT",
    TWD: "TW",
    TZS: "TZ",
    UAH: "UA",
    UGX: "UG",
    USD: "US",
    UYU: "UY",
    UZS: "UZ",
    VEF: "VE",
    VND: "VN",
    VUV: "VU",
    YER: "YE",
    ZAR: "ZA",
    ZMK: "ZM",
    ZWD: "ZW",
  };

//           to append more countrycode and currencycode of countries in option  

let from = document.querySelector(".from select");

for(let currCode in countryList){
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    from.append(newOption);
}

let to = document.querySelector('.to select');

for(let currCode in countryList){
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    to.append(newOption);
}

//     adding eventLinstener 'change' to parentElement of select attribute   

 from.addEventListener("change", (event)=>{
    updateFlag(event.target);
 });

to.addEventListener("change", (event) =>{
    updateFlag(event.target);
});

//   updateFlag variable to update flags

const updateFlag = (ele)=>{
    let currCode = ele.value;
    const countryList = {
        AED: "AE",
        AFN: "AF",
        XCD: "AG",
        ALL: "AL",
        AMD: "AM",
        ANG: "AN",
        AOA: "AO",
        AQD: "AQ",
        ARS: "AR",
        AUD: "AU",
        AZN: "AZ",
        BAM: "BA",
        BBD: "BB",
        BDT: "BD",
        XOF: "BE",
        BGN: "BG",
        BHD: "BH",
        BIF: "BI",
        BMD: "BM",
        BND: "BN",
        BOB: "BO",
        BRL: "BR",
        BSD: "BS",
        NOK: "BV",
        BWP: "BW",
        BYR: "BY",
        BZD: "BZ",
        CAD: "CA",
        CDF: "CD",
        XAF: "CF",
        CHF: "CH",
        CLP: "CL",
        CNY: "CN",
        COP: "CO",
        CRC: "CR",
        CUP: "CU",
        CVE: "CV",
        CYP: "CY",
        CZK: "CZ",
        DJF: "DJ",
        DKK: "DK",
        DOP: "DO",
        DZD: "DZ",
        ECS: "EC",
        EEK: "EE",
        EGP: "EG",
        ETB: "ET",
        EUR: "FR",
        FJD: "FJ",
        FKP: "FK",
        GBP: "GB",
        GEL: "GE",
        GGP: "GG",
        GHS: "GH",
        GIP: "GI",
        GMD: "GM",
        GNF: "GN",
        GTQ: "GT",
        GYD: "GY",
        HKD: "HK",
        HNL: "HN",
        HRK: "HR",
        HTG: "HT",
        HUF: "HU",
        IDR: "ID",
        ILS: "IL",
        INR: "IN",
        IQD: "IQ",
        IRR: "IR",
        ISK: "IS",
        JMD: "JM",
        JOD: "JO",
        JPY: "JP",
        KES: "KE",
        KGS: "KG",
        KHR: "KH",
        KMF: "KM",
        KPW: "KP",
        KRW: "KR",
        KWD: "KW",
        KYD: "KY",
        KZT: "KZ",
        LAK: "LA",
        LBP: "LB",
        LKR: "LK",
        LRD: "LR",
        LSL: "LS",
        LTL: "LT",
        LVL: "LV",
        LYD: "LY",
        MAD: "MA",
        MDL: "MD",
        MGA: "MG",
        MKD: "MK",
        MMK: "MM",
        MNT: "MN",
        MOP: "MO",
        MRO: "MR",
        MTL: "MT",
        MUR: "MU",
        MVR: "MV",
        MWK: "MW",
        MXN: "MX",
        MYR: "MY",
        MZN: "MZ",
        NAD: "NA",
        XPF: "NC",
        NGN: "NG",
        NIO: "NI",
        NPR: "NP",
        NZD: "NZ",
        OMR: "OM",
        PAB: "PA",
        PEN: "PE",
        PGK: "PG",
        PHP: "PH",
        PKR: "PK",
        PLN: "PL",
        PYG: "PY",
        QAR: "QA",
        RON: "RO",
        RSD: "RS",
        RUB: "RU",
        RWF: "RW",
        SAR: "SA",
        SBD: "SB",
        SCR: "SC",
        SDG: "SD",
        SEK: "SE",
        SGD: "SG",
        SKK: "SK",
        SLL: "SL",
        SOS: "SO",
        SRD: "SR",
        STD: "ST",
        SVC: "SV",
        SYP: "SY",
        SZL: "SZ",
        THB: "TH",
        TJS: "TJ",
        TMT: "TM",
        TND: "TN",
        TOP: "TO",
        TRY: "TR",
        TTD: "TT",
        TWD: "TW",
        TZS: "TZ",
        UAH: "UA",
        UGX: "UG",
        USD: "US",
        UYU: "UY",
        UZS: "UZ",
        VEF: "VE",
        VND: "VN",
        VUV: "VU",
        YER: "YE",
        ZAR: "ZA",
        ZMK: "ZM",
        ZWD: "ZW",
      };
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = ele.parentElement.querySelector("img");
    img.src = newSrc;
}

//   while clicking on button currency used to convert 

let btn = document.querySelector('.btn');
btn.addEventListener('click', async (e) => {
    e.preventDefault();

    let input = document.querySelector('input');
    let inputVal = input.value;
    if(inputVal === "" || inputVal < 1){
       alert("Please enter a valid amount")
    }

     
    console.log(from.value, to.value);


    let BASE_URL = "https://latest.currency-api.pages.dev/v1/currencies";

    let url = `${BASE_URL}/${from.value.toLowerCase()}.json`;
    
    let get = await fetch(url);

    let data = await get.json();
    console.log(data);
   
    let rate = data[from.value.toLowerCase()][to.value.toLowerCase()];

    console.log(rate);


    let para = document.querySelector(".p4");
    let finalVal = (inputVal * rate).toFixed(4) ;
    para.innerText = `${inputVal} ${from.value} = ${finalVal} ${to.value}`;
});

