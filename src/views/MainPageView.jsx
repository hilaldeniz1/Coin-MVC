import millify from "millify";
import { FaBitcoin } from "react-icons/fa";
import LoadMoreController from "../controllers/LoadMoreController";
import CardView from "./CardView";
import { useNavigate } from "react-router-dom";

const MainPageView = ({ coins, popular }) => {
  const navigate = useNavigate();
  return (
    <div className="container-xl mt-5">
      <h4 className="d-flex align-items-center gap-3">
        <FaBitcoin /> <span>Hoş Geldiniz, Coin Listesi</span>
      </h4>

      <p>
        Coin Listesi, dünya genelindeki kripto para birimlerini ve dijital
        varlıkları takip etmek için mükemmel bir kaynaktır.
      </p>
      <div className="d-flex gap-4 justify-content-around">
        {/* popularleri listele */}
        {popular?.map((i) => (
          <CardView data={i} />
        ))}
      </div>
      <table className="table table-dark table-hover w-100 mt-5">
        <thead>
          <tr>
            <th>#</th>
            <th>coin</th>
            <th>fiyat</th>
            <th>market hacmi</th>
            <th>değişim 24s</th>
            <th>%değişim (24s)</th>
          </tr>
        </thead>
        <tbody>
          {coins
            ? coins.map((coin, id) => (
                <tr onClick={() => navigate(`/coin/${coin.id}`)} key={id}>
                  <td>{id + 1}</td>
                  <td>
                    <span className="text-warning fw-bold me-2">
                      {coin.symbol}
                    </span>
                    <span className="text-nowrap text-truncate overflow-hidden">
                      {coin.name}
                    </span>
                  </td>
                  <td>${millify(coin.priceUsd)}</td>
                  <td>${millify(coin.marketCapUsd)}</td>
                  <td>${millify(coin.volumeUsd24Hr)}</td>
                  <td className={coin.changePercent24Hr >= 0 ? "up" : "down"}>
                    {millify(coin.changePercent24Hr)}%
                  </td>
                </tr>
              ))
            : "yükleniyor"}
        </tbody>
      </table>
      <LoadMoreController />
    </div>
  );
};

export default MainPageView;
