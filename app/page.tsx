import OrganizationCards from "./ui/organization-cards";
import BrokerCards from "./ui/broker-cards";
import QuoteComponent from "./ui/home/quote";
import ContactCard from "./ui/wp-section";

export default function Page() {
  return (
    <main className="flex flex-col">
      {/* Contenido para Desktop */}
      <div className="relative w-full h-[1000px] md:block hidden overflow-hidden text-center">
        {/* Imagen de fondo */}
        <div className='bg-[url("/bg-home.png")] ' style={{ width: '100%', height: '100%' }}></div>
        {/* Capa de overlay oscuro */}
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 p-6">
          <div className="text-white animate-fade-in-up">
            <h4 className="mb-4 text-5xl font-extrabold shadow-lg">ES HORA DE LLEVAR TUS</h4>
            <h2 className="mb-6 text-6xl font-extrabold shadow-lg">FINANZAS</h2>
            <h4 className="mb-4 text-5xl font-extrabold shadow-lg">AL SIGUIENTE NIVEL</h4>
          </div>
        </div>
      </div>

      <div className="relative w-full h-[800px] md:hidden block overflow-hidden text-center">
        <div className='bg-[url("/bg-home.png")] ' style={{ width: '100%', height: '100%' }}></div>
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 p-6">
          <div className="text-white animate-fade-in-up">
            <h4 className="mb-4 text-3xl font-extrabold shadow-lg">ES HORA DE LLEVAR TUS</h4>
            <h2 className="mb-6 text-4xl font-extrabold shadow-lg">FINANZAS</h2>
            <h4 className="mb-4 text-3xl font-extrabold shadow-lg">AL SIGUIENTE NIVEL</h4>
          </div>
        </div>
      </div>

      <QuoteComponent />
      <OrganizationCards />
      <BrokerCards />
      <ContactCard />
    </main>
  );
}
