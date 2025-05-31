



const Item = () => {

  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
          <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white">
            Menu Products
            <p className="mt-1 text-sm font-normal text-gray-500">
              Manage all food and drink items offered in the restaurant. Update prices, availability, and categories as needed to keep your menu current.
            </p>
          </caption>
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">Product Name</th>
              <th scope="col" className="px-6 py-3">Category</th>
              <th scope="col" className="px-6 py-3">Price</th>
              <th scope="col" className="px-6 py-3">Availability</th>
              <th scope="col" className="px-6 py-3"><span className="sr-only">Edit</span></th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b border-gray-200">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                Margherita Pizza
              </th>
              <td className="px-6 py-4">Pizza</td>
              <td className="px-6 py-4">$12.99</td>
              <td className="px-6 py-4 text-green-600 font-semibold">Available</td>
              <td className="px-6 py-4 text-right">
                <a href="#" className="font-medium text-blue-600 hover:underline">Edit</a>
              </td>
            </tr>
            <tr className="bg-white border-b border-gray-200">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                Caesar Salad
              </th>
              <td className="px-6 py-4">Salads</td>
              <td className="px-6 py-4">$8.50</td>
              <td className="px-6 py-4 text-red-500 font-semibold">Out of Stock</td>
              <td className="px-6 py-4 text-right">
                <a href="#" className="font-medium text-blue-600 hover:underline">Edit</a>
              </td>
            </tr>
            <tr className="bg-white">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                Lemonade
              </th>
              <td className="px-6 py-4">Drinks</td>
              <td className="px-6 py-4">$3.00</td>
              <td className="px-6 py-4 text-green-600 font-semibold">Available</td>
              <td className="px-6 py-4 text-right">
                <a href="#" className="font-medium text-blue-600 hover:underline">Edit</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};


export default Item;
