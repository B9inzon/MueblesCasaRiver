import MainHome from "@/components/MainHome";
import ProductsList from "@/components/ProductsList";
import Contact from "@/components/WhatsApp";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="flex flex-col w-full items-center justify-center">
        <MainHome />
        <ProductsList />
        <div className="fixed z-50 bottom-8 right-8 rounded-full bg-[#075e54] ">
          <Contact/>
        </div>
      </main>
    </div>
  );
}
