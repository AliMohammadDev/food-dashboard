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

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;



  if (isLoading) return <Skeleton />;
  if (error) return <div>error happened.</div>;

  const totalPages = items ? Math.ceil(items.length / itemsPerPage) : 1;

  const paginatedItems = items
    ? items.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
    : [];


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
              <th scope="col" className="px-6 py-3">Price</th>
              <th scope="col" className="px-6 py-3">Description</th>
              <th scope="col" className="px-6 py-3 text-right">Actions</th>
            </tr>
          </thead>

          <tbody>
            {paginatedItems && paginatedItems.length > 0 ? (
              paginatedItems.map((item) => (
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
                  <td className="px-6 py-4 font-medium text-gray-800 whitespace-nowrap">
                    {item.price}$
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-800 whitespace-nowrap">
                    {item.description}
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
                <td colSpan={6} className="text-center py-10 text-gray-400 text-md">
                  <p className="text-lg font-medium mb-2">No items found.</p>
                  <p className="text-sm">Click "Add Item" to create your first one.</p>
                </td>
              </tr>
            )}
          </tbody>

        </table>
      </div>

      {/* Pagination */}
      <nav className="flex justify-end mt-6" aria-label="Page navigation example">
        <ul className="inline-flex -space-x-px text-base h-10 font-semibold">
          <li>
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="flex items-center justify-center px-5 h-10 ms-0 leading-tight text-orange-600 bg-white border border-e-0 border-orange-400 rounded-s-lg hover:bg-orange-100 hover:text-orange-800 disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              Previous
            </button>
          </li>
          {[...Array(totalPages)].map((_, index) => (
            <li key={index}>
              <button
                onClick={() => setCurrentPage(index + 1)}
                className={`flex items-center justify-center px-5 h-10 leading-tight border ${currentPage === index + 1
                  ? "text-white bg-orange-600 border-orange-600"
                  : "text-orange-600 bg-white border-orange-400 hover:bg-orange-100 hover:text-orange-800"
                  } rounded-none transition`}
              >
                {index + 1}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="flex items-center justify-center px-5 h-10 leading-tight text-orange-600 bg-white border border-orange-400 rounded-e-lg hover:bg-orange-100 hover:text-orange-800 disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              Next
            </button>
          </li>
        </ul>
      </nav>



      {/* Modals */}
      <EditItemModal item={selectedItem} />
      <DeleteItemModal item={selectedItem} />
    </div>
  );
};

export default Item;
