const Category = () => {
  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-brown-600">
          <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-orange-500 bg-white">
            Product Categories
            <p className="mt-1 text-sm font-normal text-gray-500">
              Manage and view all food categories available in the restaurant menu. Add, update, or organize your items to keep your offerings fresh and easy to navigate.
            </p>
          </caption>

          <thead className="text-xs text-brown-700 uppercase bg-orange-100">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Color
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b border-gray-200">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                Apple MacBook Pro 17"
              </th>
              <td className="px-6 py-4">Silver</td>
              <td className="px-6 py-4">Laptop</td>
              <td className="px-6 py-4">$2999</td>
              <td className="px-6 py-4 text-right">
                <a href="#" className="font-medium text-orange-500 hover:underline">Edit</a>
              </td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Category;
