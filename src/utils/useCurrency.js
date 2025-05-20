import { useState, useEffect } from "react";

const useCurrency = () => {
  const [currency, setCurrency] = useState({
    country: "",
    symbol: "₹",
    rate: 1,
  });

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const res = await fetch("https://ipwho.is/");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();

        const countryCode = data.country_code || "";
        let symbol = "₹";
        let rate = 1;

        switch (countryCode) {
          case "US":
            symbol = "$";
            rate = 0.012;
            break;
          case "GB":
          case "UK":
            symbol = "£";
            rate = 0.0095;
            break;
          case "AE":
            symbol = "د.إ";
            rate = 0.044;
            break;
          case "IN":
            symbol = "₹";
            rate = 1;
            break;
          case "PK":
            symbol = "₨";
            rate = 3.43;
            break;
          case "LK":
            symbol = "Rs";
            rate = 3.67;
            break;
          case "SG":
            symbol = "S$";
            rate = 0.016;
            break;
          case "SA":
            symbol = "﷼";
            rate = 0.045;
            break;
          case "CA":
            symbol = "C$";
            rate = 0.016;
            break;
          case "AU":
            symbol = "A$";
            rate = 0.018;
            break;
          case "JP":
            symbol = "¥";
            rate = 1.65;
            break;
          case "CN":
            symbol = "¥";
            rate = 0.085;
            break;
          case "DE":
          case "FR":
          case "IT":
          case "ES":
            symbol = "€";
            rate = 0.011;
            break;
          case "RU":
            symbol = "₽";
            rate = 1.07;
            break;
          case "BR":
            symbol = "R$";
            rate = 0.062;
            break;
          case "ZA":
            symbol = "R";
            rate = 0.21;
            break;
          case "NZ":
            symbol = "NZ$";
            rate = 0.019;
            break;
          case "MY":
            symbol = "RM";
            rate = 0.054;
            break;
          case "ID":
            symbol = "Rp";
            rate = 176.5;
            break;
          case "TH":
            symbol = "฿";
            rate = 0.40;
            break;
          case "KR":
            symbol = "₩";
            rate = 15.5;
            break;
          case "EG":
            symbol = "ج.م";
            rate = 0.37;
            break;
          case "TR":
            symbol = "₺";
            rate = 0.30;
            break;
          default:
            symbol = "₹";
            rate = 1;
        }

        setCurrency({ country: countryCode, symbol, rate });
      } catch (error) {
        console.error("Failed to fetch location:", error);
      }
    };

    fetchLocation();
  }, []);

  return currency;
};

export default useCurrency;
