import OrganizationCards from "./ui/organization-cards";
import BrokerCards from "./ui/broker-cards";
import QuoteComponent from "./ui/home/quote";

export default function Page() {
  return (
    <main className="flex flex-col">
      <div className="relative w-full h-[960px] overflow-hidden text-center">
        {/* Imagen de fondo */}
        <div className='bg-[url("/bg-home.png")] ' style={{ width: '100%', height: '100%' }}></div>
        {/* Capa de overlay oscuro */}
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 p-6">
          <div className="text-white">
            <h4 className="mb-4 text-4xl md:text-5xl font-extrabold shadow-lg">ES HORA DE LLEVAR TUS</h4> {/* Cambiado a text-4xl en mobile */}
            <h2 className="mb-6 text-5xl md:text-6xl font-extrabold shadow-lg">FINANZAS</h2> {/* Cambiado a text-5xl en mobile */}
            <h4 className="mb-4 text-4xl md:text-5xl font-extrabold shadow-lg">AL SIGUIENTE NIVEL</h4> {/* Cambiado a text-4xl en mobile */}
          </div>
        </div>
      </div>
      <QuoteComponent />
      <OrganizationCards />
      <BrokerCards />

    </main>
  );
}
