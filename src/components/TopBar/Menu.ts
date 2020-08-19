interface MenuItem {
  label: string;
  pathname: string;
}

const Menu: MenuItem[] = [
  {
    label: "Vendas",
    pathname: "/catalog"
  },
  {
    label: "Dashboard",
    pathname: "/dashboard"
  },
  {
    label: "Registro de vendas",
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