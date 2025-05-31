import { useGetCategories } from "../../api/category";
import DeleteIcon from "../../assets/icons/DeleteIcon";
import EditIcon from "../../assets/icons/EditIcon";

const Category = () => {
  const { data: categories, isLoading, error } = useGetCategories();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>error happened.</div>;

  return (
    <div>
      <div className="flex justify-end mb-4">
        <button className="bg-orange-500 cursor-pointer hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded">
          + Add Category
        </button>
      </div>

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
              <th scope="col" className="px-6 py-3">Image</th>
              <th scope="col" className="px-6 py-3">Name</th>
              <th scope="col" className="px-6 py-3">Slug</th>
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
                <td className="px-6 py-4">{category.slug}</td>
                <td className="px-6 py-4 text-right">
                  <div className="flex justify-end items-center space-x-2">
                    <EditIcon className="w-6 h-6 text-orange-500 cursor-pointer hover:text-orange-700" />
                    <DeleteIcon className="w-6 h-6 text-red-500 cursor-pointer hover:text-red-700" />
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
