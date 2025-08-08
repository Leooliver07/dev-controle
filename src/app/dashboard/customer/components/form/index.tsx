

export function NewCustomerForm(){
  return(
    <form className="bg-gray-100 w-full max-w-7xl rounded-lg mt-4">
      <label htmlFor="name">Nome Completo</label>
      <input
        className="px-4 py-2 "
        type="text"
        name="name"
        placeholder="Digite o nome completo..."
      /> 
    </form>
  )
}