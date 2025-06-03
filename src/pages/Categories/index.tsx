import { useState } from "react";
import { CategoryInput, useGetCategories } from "../../api/category";
import DeleteIcon from "../../assets/icons/DeleteIcon";
import EditIcon from "../../assets/icons/EditIcon";
import Skeleton from "../../components/Skeleton";
import AddCategoryModal from "./AddCategoryModal";
import EditCategoryModal from "./EditCategoryModal";
import DeleteCategoryModal from "./DeleteCategoryModal";

const Category = () => {
  const { data: categories, isLoading, error } = useGetCategories();
  const [selectedCategory, setSelectedCategory] = useState<CategoryInput | null>(null);

  if (isLoading) return <Skeleton />;
  if (error) return <div className="text-red-500">An error occurred while loading categories.</div>;

  return (
    <div className="px-4 md:px-8 py-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-3xl font-bold text-orange-500">Product Categories</h2>
          <p className="text-sm text-gray-500 mt-1">
            Manage all food categories available in the restaurant.
          </p>
        </div>
        <button
          onClick={() => {
            document.querySelector<HTMLDialogElement>(".add-category-modal")?.showModal();
          }}
          className="bg-amber-600 hover:bg-amber-600 cursor-pointer shadow-md transition-all duration-300 hover:scale-105 text-white font-semibold py-2 px-4 rounded-lg"
        >
          + Add Category
        </button>
      </div>

      <AddCategoryModal />

      <div className="relative overflow-x-auto shadow-md rounded-xl border border-orange-200 bg-white">
        <table className="w-full text-sm text-left text-gray-700">
          <thead className="text-xs uppercase bg-amber-600 text-white">
            <tr>
              <th scope="col" className="px-6 py-3">Image</th>
              <th scope="col" className="px-6 py-3">Name</th>
              <th scope="col" className="px-6 py-3">Created At</th>
              <th scope="col" className="px-6 py-3 text-right">Actions</th>
            </tr>
          </thead>

          <tbody>
            {categories && categories.length > 0 ? (
              categories.map((category) => (
                <tr key={category.id} className="border-b border-gray-200 hover:bg-orange-50 transition-all">
                  <td className="px-6 py-4">
                    <img
                      src={String(category.image)}
                      alt={category.name}
                      className="w-12 h-12 object-cover rounded-full border border-orange-200 shadow-sm"
                    />
                  </td>

                  <td className="px-6 py-4 font-medium text-gray-800 whitespace-nowrap">
                    {category.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-600 text-sm">
                    {new Date(category.createdAt).toLocaleDateString()} 
                  </td>

                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end items-center gap-3">
                      <EditIcon
                        onClick={() => {
                          setSelectedCategory(category);
                          document.querySelector<HTMLDialogElement>(".edit-category-modal")?.showModal();
                        }}
                        className="w-5 h-5 text-orange-500 cursor-pointer hover:text-orange-700 transition"
                      />
                      <DeleteIcon
                        onClick={() => {
                          setSelectedCategory(category);
                          document.querySelector<HTMLDialogElement>(".delete-category-modal")?.showModal();
                        }}
                        className="w-5 h-5 text-red-500 cursor-pointer hover:text-red-700 transition"
                      />
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={3} className="text-center py-10 text-gray-400 text-md">
                  <p className="text-lg font-medium mb-2">No categories found.</p>
                  <p className="text-sm">Click "Add Category" to create your first one.</p>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <EditCategoryModal category={selectedCategory} />
      <DeleteCategoryModal category={selectedCategory} />
    </div>
  );
};

export default Category;