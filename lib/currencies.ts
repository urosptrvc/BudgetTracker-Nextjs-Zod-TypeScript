export const Currencies = [
    {value: "USD", label: "$ Dollar", locale: "en-US"},
    {value: "EUR", label: "€ Euro", locale: "de-DE"},
    {value: "GBP", label: "£ Pound", locale: "en-GB"},
    {value: "JPY", label: "¥ Yen", locale: "ja-JP"},
    {value: "AUD", label: "A$ Australian Dollar", locale: "en-AU"}
];

export type Currency = (typeof Currencies)[0];
