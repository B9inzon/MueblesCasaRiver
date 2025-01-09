import MainHome from "@/components/MainHome";
import ProductsList from "@/components/ProductsList";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="flex flex-col w-full items-center justify-center">
        <MainHome />
        <ProductsList />
      </main>
    </div>
  );
}
