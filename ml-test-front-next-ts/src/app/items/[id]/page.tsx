import api from "../../../api"

export default async function ItemPage ({params:{id}}:{params:{id:string}}) {
    const item =await api.item.fetch(id)
  
    return (
    <section className="grid gap-2 m-auto">
        <img src={item.thumbnail} alt={item.title}/>
        <h1>{item.title}</h1>
        <span className="text-lg">
            {Number(item.price).toLocaleString("es-AR", {style:"currency", currency:item.currency_id})}
        </span>
        <p>{item.description}</p>
    </section>
  );
}
