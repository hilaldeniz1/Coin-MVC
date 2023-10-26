import { FaPercent } from "react-icons/fa";
import { SiCoinmarketcap } from "react-icons/si";
import { MdPriceChange, MdEventAvailable } from "react-icons/md";
import { RiStockFill } from "react-icons/ri";

export class DetailModel {
  constructor(coin, history) {
    this.coin = coin;

    // arayüz kutuları için veriyi hazırla
    this.infoFields = [
      {
        icon: <SiCoinmarketcap />,
        label: "Market Hacmi",
        value: this.coin?.marketCapUsd,
      },
      {
        icon: <MdEventAvailable />,
        label: "Tedarik",
        value: this.coin?.supply,
      },
      {
        icon: <MdPriceChange />,
        label: "Fiyat (USD)",
        value: this.coin?.priceUsd,
      },
      {
        icon: <FaPercent />,
        label: "24s Değişim (%)",
        value: this.coin?.changePercent24Hr,
      },
      {
        icon: <RiStockFill />,
        label: "24s Hacim",
        value: this.coin?.volumeUsd24Hr,
      },
    ];

    // grafik verisini oluşturma
    this.chartData = {
      labels: history?.map((i) => new Date(i.date).toLocaleDateString()),
      datasets: [
        {
          label: "Fiyat",
          data: history?.map((i) => Number(i.priceUsd)),
        },
      ],
    };
  }
}
