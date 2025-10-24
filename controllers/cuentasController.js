// Datos de ejemplo
const cuentas = [
  { id: 1, name: "Carlos Perez", gender: "male", balance: 1200.50, isActive: true },
  { id: 2, name: "Ana Lopez", gender: "female", balance: 950.00, isActive: true },
  { id: 3, name: "Juan Castillo", gender: "male", balance: 150.75, isActive: false },
  { id: 4, name: "Marta Rivera", gender: "female", balance: 2100.00, isActive: true },
  { id: 5, name: "Pedro Hernandez", gender: "male", balance: 720.00, isActive: true },
  { id: 6, name: "Lucia Flores", gender: "female", balance: 60.50, isActive: false },
  { id: 7, name: "Roberto Diaz", gender: "male", balance: 500.00, isActive: true }
];

// GET cuentas 
export const listOrQueryCuentas = (req, res) => {
  const { queryParam } = req.query;

  if (!queryParam) {
    return res.json({
      count: cuentas.length,
      data: cuentas
    });
  }

  const q = queryParam.toLowerCase();

  const matches = cuentas.filter(c =>
    c.id.toString() === q ||
    c.name.toLowerCase().includes(q) ||
    c.gender.toLowerCase() === q
  );

  if (matches.length === 1) {
    return res.json({ finded: true, account: matches[0] });
  } else if (matches.length > 1) {
    return res.json({ finded: true, data: matches });
  } else {
    return res.json({ finded: false });
  }
};

// GET cuentas:id
export const getCuentaById = (req, res) => {
  const { id } = req.params;
  const cuenta = cuentas.find(c => c.id === parseInt(id));
  res.json({
    finded: !!cuenta,
    account: cuenta || null
  });
};

// GET cuentasBalance
export const getCuentasBalance = (req, res) => {
  const activas = cuentas.filter(c => c.isActive);
  const total = activas.reduce((sum, c) => sum + c.balance, 0);

  res.json({
    status: activas.length > 0,
    accountBalance: total.toFixed(2)
  });
};
