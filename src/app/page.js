import About from "@/components/About";
import Hero from "@/components/Hero";
import Layout from "@/components/Layout/layout";
import Service from "@/components/Services";

export default function Home() {
  return (
    <>
      <Layout>
        <Hero />
        <About />
        <Service />
      </Layout>
    </>
  );
}
