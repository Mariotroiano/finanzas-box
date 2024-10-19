

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col ">
      <div className="relative w-full h-[760px] overflow-hidden text-center">
        {/* Utilizamos Next.js Image para la imagen optimizada y añadimos el atributo priority */}
        <div className='bg-[url("/bg-home.png")]' style={{width: '100%', height: '760px'}}> </div>       
        {/* Capa de overlay oscuro */}
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 p-6">
          <div className="text-white">
            <h4 className="mb-4 text-4xl font-semibold">ES HORA DE LLEVAR TUS</h4>
            <h2 className="mb-6 text-4xl font-semibold">FINANZAS</h2>
            <h4 className="mb-4 text-4xl font-semibold">AL SIGUIENTE NIVEL</h4>
            
            <button
              type="button"
              className="rounded border-2 border-neutral-50 px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
              data-twe-ripple-init
              data-twe-ripple-color="light"
            >
              Call to action
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
