import './styles.css';

function SalesTable() {
  return (
    <div className="sales-table-container base-card">
      <h2 className="sales-table-title">Vendas recentes</h2>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Data</th>
            <th>Gênero</th>
            <th>Categoria</th>
            <th>Loja</th>
            <th>Forma de Pagamento</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#8839</td>
            <td>17/12/1995</td>
            <td>Masculino</td>
            <td>Celular Sansung</td>
            <td>Rio de Janeiro</td>
            <td>Débito</td>
            <td>R$ 120.974,00</td>
          </tr>
          <tr>
            <td>#8839</td>
            <td>17/12/1983</td>
            <td>Masculino</td>
            <td>Celular Lumina</td>
            <td>São Paulo</td>
            <td>Crédito</td>
            <td>R$ 150.853,00</td>
          </tr>
          <tr>
            <td>#8839</td>
            <td>17/12/1995</td>
            <td>Masculino</td>
            <td>Celular Sansung</td>
            <td>Rio de Janeiro</td>
            <td>Débito</td>
            <td>R$ 120.974,00</td>
          </tr>
          <tr>
            <td>#8839</td>
            <td>17/12/1983</td>
            <td>Masculino</td>
            <td>Celular Lumina</td>
            <td>São Paulo</td>
            <td>Crédito</td>
            <td>R$ 150.853,00</td>
          </tr>
          <tr>
            <td>#8839</td>
            <td>17/12/1995</td>
            <td>Masculino</td>
            <td>Celular Sansung</td>
            <td>Rio de Janeiro</td>
            <td>Débito</td>
            <td>R$ 120.974,00</td>
          </tr>
          <tr>
            <td>#8839</td>
            <td>17/12/1983</td>
            <td>Masculino</td>
            <td>Celular Lumina</td>
            <td>São Paulo</td>
            <td>Crédito</td>
            <td>R$ 150.853,00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default SalesTable;
