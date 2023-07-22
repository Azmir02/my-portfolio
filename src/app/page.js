import About from "@/components/About";
import Hero from "@/components/Hero";
import Layout from "@/components/Layout/layout";

export default function Home() {
  return (
    <>
      <Layout>
        <Hero />
        <About />
      </Layout>
    </>
  );
}
