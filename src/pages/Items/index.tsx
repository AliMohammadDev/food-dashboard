import DeleteIcon from "../../assets/icons/DeleteIcon";
import EditIcon from "../../assets/icons/EditIcon";




const Item = () => {

  return (
    <div>
      <div className="flex justify-end mb-4">
        <button className="bg-orange-500 cursor-pointer hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded">
          + Add Product
        </button>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-brown-600">
          <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-orange-500 bg-white">
            Menu Products
            <p className="mt-1 text-sm font-normal text-gray-500">
              Manage all food and drink items offered in the restaurant. Update prices, availability, and categories as needed to keep your menu current.
            </p>
          </caption>
          <thead className="text-xs text-gray-800 capitalize  bg-orange-100">
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
                <div className="flex justify-end items-center space-x-2">
                  <EditIcon className="w-6 h-6 text-orange-500 cursor-pointer hover:text-orange-700" />
                  <DeleteIcon className="w-6 h-6 text-red-500 cursor-pointer hover:text-red-700" />
                </div>
              </td>

            </tr>

          </tbody>
        </table>
      </div>
    </div>
  );
};


export default Item;
