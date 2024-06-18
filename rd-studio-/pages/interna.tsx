import BackgroundInterna from "@/components/BackgroundInterna";
import Button from "@/components/Button";
import Layout from "@/components/Layout";
import PortadaProyecto from "@/components/PortadaProyecto";
import TextTable from "@/components/TextTable";

export default function Interna() {
  const proyectos = [
    {
      imagen: "/One.png",
      ruta: "/interna",
      width: "374px",
      height: "516px",
    },
    { imagen: "/Two.png", ruta: "/interna", width: "374px", height: "230px" },
    {
      imagen: "/imagen.png",
      ruta: "/interna",
      width: "374px",
      height: "516px",
    },
    { imagen: "/Kod.png", ruta: "/interna", width: "374px", height: "516px" },
  ];

  return (
    <Layout show={false} transparentBackground={true}>
      <BackgroundInterna />
      <TextTable />
      <div>
        {proyectos.map((proyecto, index, texto) => (
          <PortadaProyecto
            key={index}
            imagen={proyecto.imagen}
            ruta={proyecto.ruta}
          />
        ))}
      </div>
      <Button contenido="Siguiente proyecto" />
    </Layout>
  );
}
