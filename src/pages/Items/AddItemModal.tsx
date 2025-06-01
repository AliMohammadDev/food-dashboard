import { useForm } from "react-hook-form";
import { useGetCategories } from "../../api/category";
import toast from "react-hot-toast";
import { ItemInput, useAddItem } from "../../api/item";

const AddItemModal = () => {

  const { register, handleSubmit, reset } = useForm<ItemInput>();
  const { data: categories, isLoading: isCategoriesLoading } = useGetCategories();

  const { mutate, isLoading, error } = useAddItem(() => {
    document.querySelector<HTMLDialogElement>(".add-item-modal")?.close();
    toast.success("Item added successfully");
    reset();
  });

  const onSubmit = (data: ItemInput) => {
    mutate(data);
  };

  return (
    <dialog className="add-item-modal modal">
      <div className="modal-box bg-white rounded-2xl shadow-lg w-full max-w-md border border-orange-200">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-orange-600">Add New Item</h3>
          <form method="dialog">
            <button className="text-xl text-gray-400 cursor-pointer hover:text-red-500 focus:outline-none">
              ×
            </button>
          </form>
        </div>

        <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
          <label className="form-control w-full">
            <span className="label-text mb-1 font-medium text-gray-700">Item Name</span>
            <input
              type="text"
              placeholder="Enter category name"
              className="input input-bordered w-full border-orange-300 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-400"
              required
              {...register("name", { required: true })}
            />
          </label>
          <label className="form-control w-full">
            <span className="label-text mb-1 font-medium text-gray-700">Category</span>
            <select
              {...register("categoryId", { required: true })}
              className="select select-bordered w-full border-orange-300 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-400"
              disabled={isCategoriesLoading}
            >
              <option value="">Select category</option>
              {categories?.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
          </label>



          <label className="form-control w-full">
            <span className="label-text mb-1 font-medium text-gray-700">Image</span>
            <input
              type="file"
              {...register("image", { required: true })}
              accept="image/*"
              className="file-input w-full file-input-bordered file-input-warning text-brown-700 bg-orange-50 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-400"
            />
          </label>

          {error && <p className="text-sm text-error">{error.message}</p>}

          <div className="flex justify-end pt-2">
            <button
              type="submit"
              className="btn bg-orange-500 shadow-md transition duration-300 ease-in-out hover:bg-orange-600 hover:scale-105 text-white font-semibold"
            >
              {isLoading ? "Adding..." : "Save"}
            </button>
          </div>
        </form>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default AddItemModal;
