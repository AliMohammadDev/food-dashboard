import { useState } from "react";
import { ItemInput, useGetItems } from "../../api/item";
import DeleteIcon from "../../assets/icons/DeleteIcon";
import EditIcon from "../../assets/icons/EditIcon";
import Skeleton from "../../components/Skeleton";
import AddItemModal from "./AddItemModal";
import DeleteItemModal from "./DeleteItemModal";
import EditItemModal from "./EditItemModal";

const Item = () => {
  const { data: items, isLoading, error } = useGetItems();
  const [selectedItem, setSelectedItem] = useState<ItemInput | null>(null);

  if (isLoading) return <Skeleton />;
  if (error) return <div>error happened.</div>;

  return (
    <div className="px-4 md:px-8 py-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-3xl font-bold text-orange-500">Menu Products</h2>
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
          className="bg-amber-600 hover:bg-amber-600 cursor-pointer shadow-md transition-all duration-300 hover:scale-105 text-white font-semibold py-2 px-4 rounded-lg"
        >
          + Add Item
        </button>
      </div>

      {/* Add Item Modal */}
      <AddItemModal />

      <div className="relative overflow-x-auto shadow-md rounded-xl border border-orange-200 bg-white">
        <table className="w-full text-sm text-left text-gray-700">
          <thead className="text-xs uppercase bg-amber-600 text-white">
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
                <tr
                  key={item.id}
                  className="bg-white border-b border-gray-200 hover:bg-amber-50"
                >
                  <td className="px-6 py-4">
                    <img
                      src={String(item.image)}
                      alt={item.name}
                      className="w-12 h-12 object-cover rounded-full"
                    />
                  </td>

                  <td className="px-6 py-4 font-medium text-gray-800 whitespace-nowrap">
                    {item.name}
                  </td>

                  <td className="px-6 py-4">
                    {typeof item.category === "object" && item.category !== null
                      ? item.category.name
                      : "—"}
                  </td>

                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end items-center space-x-2">
                      <EditIcon
                        onClick={() => {
                          setSelectedItem(item);
                          document
                            .querySelector<HTMLDialogElement>(".edit-item-modal")
                            ?.showModal();
                        }}
                        className="w-6 h-6 text-orange-500 cursor-pointer hover:text-orange-700"
                      />
                      <DeleteIcon
                        onClick={() => {
                          setSelectedItem(item);
                          document
                            .querySelector<HTMLDialogElement>(".delete-item-modal")
                            ?.showModal();
                        }}
                        className="w-6 h-6 text-red-500 cursor-pointer hover:text-red-700"
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

      {/* Modals */}
      <EditItemModal item={selectedItem} />
      <DeleteItemModal item={selectedItem} />
    </div>
  );
};

export default Item;
