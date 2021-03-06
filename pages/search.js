import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Pagination from "../components/Pagination";
import Loader from "../components/Loader";
import { useGlobalContext } from "../context/context";

function Search() {
  const router = useRouter();
  const [filteredData, setFilteredData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);

  const { searchData, searchResults, isLoading } = useGlobalContext();

  const filterCardData = (data) => {
    const filteredData = [];
    data.allData.cards.forEach((card) => {
      let duplicateCard = false;
      if (card.printings.length > 1) {
        for (let i = 0; i < filteredData.length; i++) {
          if (card.name === filteredData[i].name || !card.imageUrl) {
            duplicateCard = true;
            break;
          }
        }
      }

      if (!duplicateCard) {
        filteredData.push(card);
      }
    });
    setFilteredData(filteredData);
  };

  useEffect(() => {
    if (router.query.q) {
      setSearchQuery(router.query.q);
    }

    setPage(router.query.page || 1);
  });

  useEffect(() => {
    if (searchQuery) {
      searchData(
        `https://api.magicthegathering.io/v1/cards?name=${searchQuery}&page=${page}`
      );
    }
  }, [searchQuery, page]);

  useEffect(() => {
    if (searchResults.length || searchResults.allData) {
      filterCardData(searchResults);
    }
  }, [searchResults]);

  if (isLoading) {
    return  <Loader />;
  }

  return (
    <div className="results-area">
      <h3>Search results {page && `page ${page}`}</h3>
      <div className="search-grid">
        {filteredData.map((card) => {
          return (
            <div key={card.id} className="search-item">
              <Link
                href={{ pathname: "card", query: { id: card.multiverseid } }}
              >
                <a className="card-link">
                  <img src={card.imageUrl} alt="" className="card-image" />
                </a>
              </Link>
            </div>
          );
        })}
      </div>
      {searchResults.totalCount / 100 > 1 && (
        <Pagination pageQuery={searchQuery} activePage={page} />
      )}
    </div>
  );
}

export default Search;
