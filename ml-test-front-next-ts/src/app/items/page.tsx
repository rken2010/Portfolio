import Link from "next/link";
import api from "../../api";

/* eslint-disable react/jsx-key */
export default async function ItemsPage({searchParams}:{searchParams:{search:string}}){
    const {results} =await api.item.search(searchParams.search)
    
    return (
        <section>
            <article className="flex gap-4 flex-col">
                {results.map((item)=> (
                <Link key={item.id}  href={`/items/${item.id}`}>
                    <div className="flex gap-5 shadow-xl rounded-md w-1/2 h-48">
                    
                        <div className="w-48">
                            <span className="indicator-item badge badge-primary">new</span> 
                            <div className="grid w-32 h-32 bg-base-300 place-items-center">
                                <img src={item.thumbnail} alt={item.title} />
                            </div>
                        </div>
                        <div>
                            <h2>{item.title}</h2>
                            <p>{Number(item.price).toLocaleString("es-AR",{
                                style:"currency",
                                currency: item.currency_id,
                            })}</p>
                        </div>
                    </div>
                </Link>
                ))}
            </article>
        </section>
    )
}