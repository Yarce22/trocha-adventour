import { getRoutesById } from "@/lib/contentfulServices";

const RouteDetail = async ({ params }: { params: { ruta: string } }) => {
  const route = await getRoutesById(params.ruta)
  console.log(route);
  
    return (
        <main>
            <h1>Route Detail</h1>
        </main>
    )
}

export default RouteDetail
