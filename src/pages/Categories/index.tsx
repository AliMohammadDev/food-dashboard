
import { useGetCategories } from "../../api/category";
import DeleteIcon from "../../assets/icons/DeleteIcon";
import EditIcon from "../../assets/icons/EditIcon";
import Skeleton from "../../components/Skeleton";
import AddCategoryModal from "./AddCategoryModal";

const Category = () => {
  const { data: categories, isLoading, error } = useGetCategories();
  if (isLoading) return <Skeleton />;
  if (error) return <div>error happened.</div>;

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-2xl font-bold text-orange-500">Product Categories</h2>
          <p className="text-sm text-gray-500">
            Manage all food categories available in the restaurant.
          </p>
        </div>
        <button
          onClick={() => {
            document
              .querySelector<HTMLDialogElement>(".add-category-modal")
              ?.showModal();
          }}
          className="bg-orange-500 cursor-pointer hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded"
        >
          + Add Category
        </button>
      </div>

      <AddCategoryModal />


      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-brown-600">


          <thead className="text-xs text-brown-700 uppercase bg-orange-100">
            <tr>
              <th scope="col" className="px-6 py-3">Image</th>
              <th scope="col" className="px-6 py-3">Name</th>
              <th scope="col" className="px-6 py-3 text-right">Actions</th>
            </tr>
          </thead>

          <tbody>
            {categories?.map((category) => (
              <tr key={category.id} className="bg-white border-b border-gray-200 hover:bg-amber-50">
                <td className="px-6 py-4">
                  <img src={category.image} alt={category.name} className="w-16 h-16 object-cover rounded" />
                </td>
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{category.name}</td>
                <td className="px-6 py-4 text-right">
                  <div className="flex justify-end items-center space-x-2">
                    <EditIcon className="w-6 h-6 text-orange-500 cursor-pointer hover:text-orange-700" />
                    <DeleteIcon
                      onClick={() => {
                        document
                          .querySelector<HTMLDialogElement>("delete-category-modal")
                          ?.showModal();
                      }}

                      className="w-6 h-6 text-red-500 cursor-pointer hover:text-red-700"
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Category;
