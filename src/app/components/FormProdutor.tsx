export default function FormProdutor() {
  const [produtor, setProdutor] = useState({ cpfCnpj: "", nome: "" });

  async function salvarProdutor() {
    await fetch("/api/produtores", {
      method: "POST",
      body: JSON.stringify(produtor),
    });
  }

  return (
    <div>
      <input type="text" placeholder="CPF/CNPJ" onChange={(e) => setProdutor({ ...produtor, cpfCnpj: e.target.value })} />
      <input type="text" placeholder="Nome" onChange={(e) => setProdutor({ ...produtor, nome: e.target.value })} />
      <button onClick={salvarProdutor}>Salvar</button>
    </div>
  );
}