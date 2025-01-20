import React from 'react'

const Davot = () => {
  return (
    <>
        <header className='bg-slate-600 w-full'>
            <h1 className='text-6xl text-white p-5'>David Leoanrdo Marin Rodriguez</h1>
        </header>

        <main>
            <article className='bg-slate-400 w-full m-5 p-4'>
                <p className='text-white'>
                    Hola, mi nomre es David leonardo marn Rodriguez, tengo 22 años, cuento con 4 años de crecimiento en programacion, mi objetivo es ser ingeniero de software y poder medirme a cualquier reto adyacente
                </p>
                <p className='italic font-bold'>
                    Me gusta programar
                </p>
            </article>

            <div className='flex '>
                <div className='w-1/2'>
                    <p>Conocimientos</p>
                </div>

                <div className='w-1/2'>
                    <p>hobbis</p>
                </div>
            </div>
        </main>

        <footer>
            <p>Contacto</p>
        </footer>
    </>
  )
}

export default Davot
