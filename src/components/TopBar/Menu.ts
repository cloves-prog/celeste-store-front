interface MenuItem {
  label: string;
  pathname: string;
}

const Menu: MenuItem[] = [
  {
    label: "Home",
    pathname: "/"
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