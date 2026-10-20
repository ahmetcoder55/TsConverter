import readline from 'readline-sync';

interface ExchangeRates {
    [key: string]: number;
}

const dovizKurlari: ExchangeRates = {
    "USD": 1.0,
    "EUR": 0.92,
    "TRY": 34.50,   
    "GBP": 0.77
};

function dovizCevir(): void {
    console.log("=== TypeScript Döviz Çevirici ===");
    
    const birimler: string[] = Object.keys(dovizKurlari);
    console.log(`Desteklenen Birimler: ${birimler.join(', ')}`);

    const miktarInput: string = readline.question("\nCevirmek istediginiz miktar: ");
    const miktar: number = parseFloat(miktarInput);

    if (isNaN(miktar) || miktar <= 0) {
        console.log("Hata: Gecersiz bir miktar girdiniz!");
        return;
    }

    const kaynakBirim: string = readline.question("Hangi birimden? (Orn: USD): ").toUpperCase();
    const hedefBirim: string = readline.question("Hangi birime? (Orn: TRY): ").toUpperCase();

    const kurKaynak = dovizKurlari[kaynakBirim];
    const kurHedef = dovizKurlari[hedefBirim];

    if (kurKaynak === undefined || kurHedef === undefined) {
        console.log("Hata: Girdiginiz para birimleri desteklenmiyor!");
        return;
    }

    const usdKarsiligi: number = miktar / kurKaynak;
    const sonuc: number = usdKarsiligi * kurHedef;

    console.log(`\nSonuc: ${miktar} ${kaynakBirim} = ${sonuc.toFixed(2)} ${hedefBirim}`);
}

dovizCevir();
