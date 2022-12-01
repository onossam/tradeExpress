import React from 'react';
import { useEffect, useState } from 'react';
import { FaLongArrowAltDown, FaLongArrowAltUp } from 'react-icons/fa';
import '../Styles/Widget.css';

const Widget = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    setTimeout(async () => {
      const res = await fetch(
        'https://api.coinlore.net/api/tickers/?start=100&limit=5'
      )
        .then((res) => res.json())
        .then((response) => {
          setData(response.data);
        });
    }, 1000);
    // fetch("https://api.coinlore.net/api/tickers/?start=100&limit=5")
    //   .then((res) => res.json())
    //   .then((response) => {
    //     setData(response.data);
    //   });
  });
  return (
    <div className="widget-row">
      {data &&
        data.map((datum) => (
          <div className="widget-pro" key={datum.id}>
              <h6> {datum.symbol}/NGN</h6>
              <p>{datum.percent_change_24h}%</p>
              <p>
                {datum.percent_change_24h < 0 ? (
                  <FaLongArrowAltDown style={{ color: 'red' }} />
                ) : (
                  <FaLongArrowAltUp style={{ color: 'green' }} />
                )}
              </p>
              <p>{datum.price_btc} BTC</p>
              <p>{Math.ceil(datum.price_usd) * 700}NGN </p>
            {/* <div className="wid-pro">
            </div> */}
          </div>
        ))}

      {!data && (
        <div>
          <strong>Loading...</strong>
        </div>
      )}
    </div>
  );
};

export default Widget;
