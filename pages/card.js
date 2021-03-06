import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import  Loader from "../components/Loader";

function Card() {
  const router = useRouter();
  const [fetchedData, setFetchedData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setFetchedData(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      alert("error try again later");
      router.push("/");
    }
  };

  useEffect(() => {
    setSearchQuery(router.query.id);
  });

  useEffect(() => {
    if (searchQuery) {
      const url = `https://api.magicthegathering.io/v1/cards/${searchQuery}`;

      fetchData(url);
    }
  }, [searchQuery]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="card-container">
      <div className="grid">
        <div className="title-col">
            <div className="card-name">{fetchedData.card.name}</div>
          </div>
        <div className="card-col">
          <div className="card-image">
          <img src={fetchedData.card.imageUrl} alt="{fetchedData.card.name}" />
          </div>
          <div>
            <h5>legalities</h5>
            {fetchedData.card.legalities.map((item) => {
              return (
                <div key={item.format}>
                  {item.format}: {item.legality}
                </div>
              );
            })}
            <h5>printings</h5>
            {fetchedData.card.printings.map((item) => {
              return <span key={item}>{item} </span>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
