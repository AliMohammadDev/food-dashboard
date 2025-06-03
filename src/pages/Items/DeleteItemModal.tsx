import toast from "react-hot-toast";
import { ItemInput, useDeleteItem } from "../../api/item";

type Props = {
  item: ItemInput | null;
};

const DeleteItemModal = ({ item }: Props) => {
  const { mutate, isLoading, error } = useDeleteItem(() => {
    document.querySelector<HTMLDialogElement>(".delete-item-modal")?.close();
    toast.success("Item deleted successfully");
  });

  const handleDelete = () => {
    if (item?.id) {
      mutate(item.id);
    }
  };

  return (
    <dialog className="delete-item-modal modal">
      <div className="modal-box bg-white rounded-2xl shadow-lg w-full max-w-md border border-orange-200">
        <h3 className="text-lg font-semibold text-red-600 mb-4">Delete Category</h3>
        <p className="text-gray-800 mb-4">
          Are you sure you want to delete the category{" "}
          <strong className="text-orange-600">{item?.name}</strong>?
        </p>

        {error && <p className="text-sm text-error mb-2">{error.message}</p>}

        <div className="flex justify-end space-x-2">
          <form method="dialog">
            <button className="btn border border-gray-300 text-gray-700 hover:bg-gray-100">
              Cancel
            </button>
          </form>
          <button
            onClick={handleDelete}
            disabled={isLoading}
            className="btn bg-red-500 hover:bg-red-600 text-white"
          >
            {isLoading ? "Deleting..." : "Yes, Delete"}
          </button>
        </div>
      </div>

      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default DeleteItemModal;
