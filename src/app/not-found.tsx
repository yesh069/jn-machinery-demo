import Link from "next/link";
export default function NotFound() {
  return (
    <section className="pad wrap" style={{ textAlign: "center" }}>
      <p className="sec-no" style={{ justifyContent: "center" }}><b>404</b> Page not found</p>
      <h1 style={{ fontSize: "clamp(2.6rem,6vw,5rem)" }}>Off the belt.</h1>
      <p style={{ margin: "20px 0 30px" }}>That page doesn’t exist. Try the oven range or call 224-209-8300.</p>
      <Link className="btn btn-primary" href="/conveyor-ovens/electric/">Explore conveyor ovens</Link>
    </section>
  );
}
