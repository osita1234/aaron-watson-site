import Link from "next/link";
const products=[
 {id:"standard-fan-card",name:"Standard Fan Card",price:400,type:"Fan Card"},
 {id:"vip-fan-card",name:"VIP Fan Card",price:1000,type:"Fan Card"},
 {id:"regular-ticket",name:"Regular Ticket",price:30,type:"Ticket"},
 {id:"vip-ticket",name:"VIP Ticket",price:100,type:"Ticket"}
];
export default function Home(){
 return <main>
  <header className="nav"><div className="brand">AARON <span>WATSON</span></div><div className="navlinks"><a href="#products">Products</a><a href="#about">About</a><Link href="/verify">Verify</Link></div></header>
  <section className="hero"><div className="hero-copy"><p className="eyebrow">OFFICIAL • MUSICIAN • COMEDIAN</p><h1>AARON<br/><span>WATSON</span></h1><p className="lead">Music, comedy and unforgettable moments. Explore official fan cards and event tickets.</p><a className="btn" href="#products">View Cards & Tickets</a></div><div className="hero-art"><div className="disc"></div><div className="hero-card">AW<br/><small>OFFICIAL</small></div></div></section>
  <section id="products" className="products"><div className="section-head"><p className="eyebrow">OFFICIAL STORE</p><h2>Fan Cards</h2></div>
   <div className="grid">
    {products.slice(0,2).map(p=><Product key={p.id} p={p}/>)}
   </div>
   <div className="section-head tickets"><p className="eyebrow">ADMISSION</p><h2>Tickets</h2></div>
   <div className="grid">{products.slice(2).map(p=><Product key={p.id} p={p}/>)}</div>
  </section>
  <section id="about" className="trust"><div><p className="eyebrow">AARON WATSON</p><h2>Official. Simple. Secure.</h2></div><p>Purchase an official fan card or ticket through the checkout flow. Payment details are handled by the connected payment processor and are not stored by this site.</p></section>
  <footer><div className="brand">AARON <span>WATSON</span></div><p>Musician • Comedian</p><p>© 2026 AARON WATSON. All rights reserved.</p></footer>
 </main>
}
function Product({p}){return <article className="product"><div className="product-top"><span>{p.type}</span><span>USD</span></div><div className="icon">{p.type==="Ticket"?"T":"AW"}</div><h3>{p.name}</h3><div className="price">${p.price.toLocaleString()}</div><p>Official {p.type.toLowerCase()}.</p><Link className="btn dark" href={"/checkout?product="+p.id}>Purchase</Link></article>}
