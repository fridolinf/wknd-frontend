import React, { useEffect, useState } from "react";
import Deffinition from "./components/Deffinition";
import CardTestimoni from "./components/CardTestimoni";
import Conclusion from "./components/Conclusion";
import IntroSection from "./components/IntroSection";
import { getHelpAndTips, getTestimoni } from "./lib/api";

function App() {
  const [dataTestimoni, setDataTestimoni] = useState([]);
  const [dataHelpAndTips, setDataHelpAndTips] = useState([]);
  useEffect(() => {
    getTestimoni().then((data) => {
      setDataTestimoni(data.data);
    });
    getHelpAndTips().then((data) => {
      setDataHelpAndTips(data.data);
    });
  }, []);
  return (
    <div>
      <IntroSection />
      <Deffinition />
      <CardTestimoni dataTesti={dataTestimoni} />
      <Conclusion dataConclution={dataHelpAndTips} />
    </div>
  );
}

export default App;
