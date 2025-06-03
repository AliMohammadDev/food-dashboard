import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useEffect } from "react";
import { ItemInput, useEditItem } from "../../api/item";
import { useGetCategories } from "../../api/category";

type Props = {
  item: ItemInput | null;
};


const EditItemModal = ({ item }: Props) => {

  const { register, handleSubmit, reset } = useForm<ItemInput>();
  const { data: categories, isLoading: isCategoriesLoading } = useGetCategories();


  const { mutate, isLoading, error } = useEditItem(() => {
    document.querySelector<HTMLDialogElement>(".edit-item-modal")?.close();
    toast.success("Category updated successfully");
    reset();
  });

  const onSubmit = (data: ItemInput) => {
    mutate(data);
  };

  useEffect(() => {
    if (item) {
      reset({
        id: item.id,
        name: item.name,
        category: typeof item.category === "object" ? item.category.id : item.category,
        image: undefined,
      });
    }
  }, [item, reset]);

  return (
    <dialog className="edit-item-modal modal">
      <div className="modal-box bg-white rounded-2xl shadow-lg w-full max-w-md border border-orange-200">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-orange-600">Update Item</h3>
          <form method="dialog">
            <button className="text-xl text-gray-400 cursor-pointer hover:text-red-500 focus:outline-none">
              ×
            </button>
          </form>
        </div>

        <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
          <input type="hidden" {...register("id")} />
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
              {...register("category", { required: true })}
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
              {...register("image")}
              accept="image/*"
              className="file-input w-full file-input-bordered file-input-warning text-brown-700 bg-orange-50 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-400"
            />
            {item?.image && typeof item.image === "string" && (
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded mt-2"
              />
            )}

          </label>

          {error && <p className="text-sm text-error">{error.message}</p>}

          <div className="flex justify-end pt-2">
            <button
              type="submit"
              className="btn bg-orange-500 hover:bg-orange-600 text-white font-semibold"
            >
              {isLoading ? "Updating..." : "Update Item"}
            </button>
          </div>
        </form>
      </div>

      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  )
}


export default EditItemModal;