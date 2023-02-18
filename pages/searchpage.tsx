import { useRouter } from "next/router";
import Link from "next/link";

const Home: React.FC = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push({
      pathname: "/search",
      query: { q: "example" },
    });
  };

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={handleClick}>Search</button>
      <Link href={{ pathname: "/search", query: { q: "example" } }}>
        aaa
      </Link>
    </div>
  );
};

export default Home;