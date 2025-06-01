const DeletePopup = () => {

  return (
    <dialog className="delete-category-modal modal">
      <div className="modal-box">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-xl font-bold">Are you sure you want to delete</h3>
          <form method="dialog">
            <button className="btn-ghost flex size-8 items-center justify-center rounded-full">
              ✕
            </button>
          </form>
        </div>

      </div>
      //content
    </dialog>
  );
};

export default DeletePopup;
