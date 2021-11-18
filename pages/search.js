import Link from "next/link";
import { useRouter } from "next/router";

function search() {
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
  };

  return <h2>search</h2>;
}

export default search;
