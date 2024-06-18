import TitleNosotros from "@/components/TitleNostros";
import Layout from "../components/Layout";
import PersonGrid from "@/components/PersonGrid";

const people = [
  {
    image: "/Santi.png",
    name: "Santiago Hernándex",
    profession: "Practicante",
  },
  { image: "/Pau.png", name: "Paula Alfonso", profession: "Practicante" },
  { image: "/Palfonso.png", name: "Paula Alfonso", profession: "Practicante" },
  {
    image: "/Santi.png",
    name: "Santiago Hernándex",
    profession: "Practicante",
  },
  { image: "/Pau.png", name: "Paula Alfonso", profession: "Practicante" },
  { image: "/Palfonso.png", name: "Paula Alfonso", profession: "Practicante" },
  {
    image: "/Santi.png",
    name: "Santiago Hernándex",
    profession: "Practicante",
  },
  { image: "/Pau.png", name: "Paula Alfonso", profession: "Practicante" },
];

const Nosotros = () => {
  return (
    <Layout show={false} transparentBackground={false}>
      <TitleNosotros />
      <PersonGrid people={people} />
    </Layout>
  );
};

export default Nosotros;
