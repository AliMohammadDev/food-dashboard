import { useState } from "react";
import { useGetItems } from "../../api/item";
import DeleteIcon from "../../assets/icons/DeleteIcon";
import EditIcon from "../../assets/icons/EditIcon";
import Skeleton from "../../components/Skeleton";
import AddItemModal from "./AddItemModal";




const Item = () => {
  const { data: items, isLoading, error } = useGetItems();
  const [selectedItem, setSelectedItem] = useState(null);

  if (isLoading) return <Skeleton />;
  if (error) return <div>error happened.</div>;

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-2xl font-bold text-orange-500">Menu Products
          </h2>
          <p className="text-sm text-gray-500">
            Manage all food and drink items offered in the restaurant. Update prices, availability, and categories as needed to keep your menu current.
          </p>
        </div>
        <button
          onClick={() => {
            document
              .querySelector<HTMLDialogElement>(".add-item-modal")
              ?.showModal();
          }}
          className="bg-orange-500 cursor-pointer hover:bg-orange-600 shadow-md transition duration-300 ease-in-out  hover:scale-105 text-white font-semibold py-2 px-4 rounded"
        >
          + Add Item
        </button>
      </div>
      <AddItemModal />

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-brown-600">
          <thead className="text-xs text-gray-800 capitalize  bg-orange-100">
            <tr>
              <th scope="col" className="px-6 py-3">Image</th>
              <th scope="col" className="px-6 py-3">Product Name</th>
              <th scope="col" className="px-6 py-3">Category</th>
              <th scope="col" className="px-6 py-3 text-right">Actions</th>

            </tr>
          </thead>
          <tbody>
            {items && items.length > 0 ? (
              items.map((item) => (
                <tr key={item.id} className="bg-white border-b border-gray-200 hover:bg-amber-50">
                  <td className="px-6 py-4">
                    <img
                      src={typeof item.image === "string" ? item.image : ""}
                      alt={item.name}
                      className="w-14 h-14 object-cover rounded mx-auto"
                    />
                  </td>

                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    {item.name}
                  </td>

                  <td className="px-6 py-4">
                    {item.category?.name || "—"}
                  </td>

                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end items-center space-x-2">
                      <EditIcon
                        className="w-6 h-6 text-orange-500 cursor-pointer hover:text-orange-700"
                        onClick={() => {
                          setSelectedItem(item);
                        }}
                      />
                      <DeleteIcon
                        className="w-6 h-6 text-red-500 cursor-pointer hover:text-red-700"
                        onClick={() => {
                          setSelectedItem(item);
                        }}
                      />
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="text-center py-10 text-gray-500 text-lg">
                  There is no data.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};


export default Item;
