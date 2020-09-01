import {servicePath} from "./defaultValues";

const data = {

    // Products
    'app.products.products': '/products/products',
    'app.products.products.add': '/products/products/add',
    'app.products.products.edit': '/products/products/edit',

    // Categories
    'app.products.categories': '/products/categories',
    'app.products.categories.add': '/products/categories/add',
    'app.products.categories.edit': '/products/categories/edit',


    // API
    'api.get-currency-list': servicePath + '/get-currency-list',
    'api.get-category-list': servicePath + '/categories/all',

    'api.products.get': servicePath + '/products/get',
    'api.products.add': servicePath + '/products/add',
    'api.products.edit': servicePath + '/products/edit',
    'api.products.delete': servicePath + '/products/delete',
    'api.products.update': servicePath + '/products/update',

    'api.categories.get': servicePath + '/categories/get',
    'api.categories.add': servicePath + '/categories/add',
    'api.categories.edit': servicePath + '/categories/edit',
    'api.categories.delete': servicePath + '/categories/delete',
}
export default data;
