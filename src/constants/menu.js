const data = [
  {
    id: "overview",
    label: "menu.overview",
    to: "/overview"
  },
  {
    id: "my-account",
    label: "menu.my-account",
    to: "/my-account",
    subs: [
      {
        label: "menu.profile",
        to: "/my-account/profile"
      },
      {
        label: "menu.menu-design",
        to: "/my-account/menu-app-settings"
      }
    ]
  },
  {
    id: "reports",
    label: "menu.reports",
    to: "/reports"
  },
  {
    id: "products",
    label: "menu.products",
    to: "/products",
    subs: [
      {
        label: "menu.products",
        to: "/products/products"
      },
      {
        label: "menu.categories",
        to: "/products/categories"
      }
    ]
  },
  {
    id: "people",
    label: "menu.people",
    to: "/people",
    subs: [
      {
        label: "menu.users",
        to: "/people/users"
      },
      {
        label: "menu.customers",
        to: "/people/customers"
      }
    ]
  }
];
export default data;
