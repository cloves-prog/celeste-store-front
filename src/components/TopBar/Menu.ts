interface MenuItem {
  label: string;
  pathname: string;
}

const Menu: MenuItem[] = [
  {
    label: "Registro de vendas",
    pathname: "/catalog"
  },
  {
    label: "Dashboard",
    pathname: "/dashboard"
  },
  {
    label: "Vendas",
    pathname: "/sales"
  },
  {
    label: "Produtos",
    pathname: "/products"
  },
  {
    label: "Clientes",
    pathname: "/clients"
  },
  {
    label: "Vendedores",
    pathname: "/salespeople"
  },
];
export default Menu