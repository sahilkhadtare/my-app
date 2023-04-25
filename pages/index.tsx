import { Header } from "@/components/headers";
import { fetchApi } from "@/hooks/useAccount";
import React from "react";

export async function getServerSideProps() {
  // Fetch data from external API
  const data = await fetchApi("http://localhost:3080/getAccount", "GET", null);

  // Pass data to the page via props
  return { props: { data } };
}

const Home = (props: any) => {
  console.log(props);
  return (
    <div>
      <Header />
      Home Page
    </div>
  );
};

export default Home;
