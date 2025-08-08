


export function CardCustomer(){
  
  return(
    <article className="flex flex-col bg-gray-100 border-2 p-2 rounded-lg gap-2 hover:scale-105 duration-300">
      <h2>
        <a className="font-bold">Nome: </a>
        Leonardo
      </h2>
      <p><a className="font-bold">Email: </a>email@test.com</p>
      <p><a className="font-bold">Telefone</a>12999991111</p>

      <button className="bg-red-500 px-4 rounded text-white py-1 items-center mt-2 self-start cursor-pointer">
        Deletar
      </button>
    </article>
  )
  }