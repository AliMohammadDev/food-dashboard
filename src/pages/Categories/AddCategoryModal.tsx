const AddCategoryModal = () => {
  return (
    <dialog className=" add-category-modal modal">
      <div className="modal-box bg-white rounded-lg shadow-lg w-full max-w-md">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-800">Add New Category</h3>
          <form method="dialog">
            <button className="text-xl text-gray-500 hover:text-red-500">×</button>
          </form>
        </div>

        <form className="space-y-4">
          <label className="form-control w-full">
            <span className="label-text mb-1 font-medium">Category Name</span>
            <input
              type="text"
              placeholder="Enter category name"
              className="input input-bordered w-full"
              required
            />
          </label>

          <label className="form-control w-full">
            <span className="label-text mb-1 font-medium">Image URL</span>
            <input
              type="text"
              placeholder="Enter image URL"
              className="input input-bordered w-full"
            />
          </label>

          <div className="flex justify-end pt-2">
            <button
              type="submit"
              className="btn bg-orange-500 text-white hover:bg-orange-600"
            >
              Add Category
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

export default AddCategoryModal;
