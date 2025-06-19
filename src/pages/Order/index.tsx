import { useGetAllOrder } from "../../api/order";
import DisplayIcon from "../../assets/icons/Display";

const Order = () => {

  const { data, isLoading, isError } = useGetAllOrder();

  if (isLoading) return <p>Loading orders...</p>;
  if (isError || !data) return <p>Failed to load orders.</p>;


  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-brown-600">
          <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-orange-500 bg-white">
            Customer Orders
            <p className="mt-1 text-sm font-normal text-gray-500">
              Track and manage all incoming food orders. Monitor statuses, update order progress, and ensure timely delivery for a better customer experience.
            </p>
          </caption>
          <thead className="text-xs text-gray-800 bg-orange-100 capitalize">
            <tr>
              <th scope="col" className="px-6 py-3">Order ID</th>
              <th scope="col" className="px-6 py-3">Customer Name</th>
              <th scope="col" className="px-6 py-3">Items</th>
              <th scope="col" className="px-6 py-3">Total</th>
              <th scope="col" className="px-6 py-3">Status</th>
              <th scope="col" className="px-6 py-3"><span className="sr-only">View</span></th>
            </tr>
          </thead>
          <tbody>
            {data.data.map((order) => (
              <tr key={order.id} className="bg-white border-b border-gray-200">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  #{order.id}
                </th>
                <td className="px-6 py-4">
                  {order.delivery.firstName} {order.delivery.lastName}
                </td>
                <td className="px-6 py-4">
                  {data.result.map((item, idx) => (
                    <span key={idx}>
                      {item.quantity}x {item.name}
                      {idx < data.result.length - 1 ? ", " : ""}
                    </span>
                  ))}
                </td>
                <td className="px-6 py-4">
                  ${data.sumPrice.toFixed(2)}
                </td>
                <td className="px-6 py-4 text-yellow-600 font-semibold">
                  {order.status}
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="inline-flex items-center justify-center w-8 h-8 rounded-full hover:bg-orange-100 transition">
                    <DisplayIcon className="w-5 h-5 text-orange-500 hover:text-orange-600" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Order;
