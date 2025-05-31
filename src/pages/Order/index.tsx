const Order = () => {

    return (
        <div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                    <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white">
                        Customer Orders
                        <p className="mt-1 text-sm font-normal text-gray-500">
                            Track and manage all incoming food orders. Monitor statuses, update order progress, and ensure timely delivery for a better customer experience.
                        </p>
                    </caption>
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
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
                        <tr className="bg-white border-b border-gray-200">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">#1001</th>
                            <td className="px-6 py-4">Ahmad Ali</td>
                            <td className="px-6 py-4">2x Pizza, 1x Coke</td>
                            <td className="px-6 py-4">$25.50</td>
                            <td className="px-6 py-4 text-yellow-600 font-semibold">Preparing</td>
                            <td className="px-6 py-4 text-right">
                                <a href="#" className="font-medium text-blue-600 hover:underline">View</a>
                            </td>
                        </tr>
                        <tr className="bg-white border-b border-gray-200">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">#1002</th>
                            <td className="px-6 py-4">Sara Yousef</td>
                            <td className="px-6 py-4">1x Salad, 1x Lemonade</td>
                            <td className="px-6 py-4">$12.00</td>
                            <td className="px-6 py-4 text-green-600 font-semibold">Delivered</td>
                            <td className="px-6 py-4 text-right">
                                <a href="#" className="font-medium text-blue-600 hover:underline">View</a>
                            </td>
                        </tr>
                        <tr className="bg-white">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">#1003</th>
                            <td className="px-6 py-4">Mohammed F.</td>
                            <td className="px-6 py-4">1x Burger, 1x Fries</td>
                            <td className="px-6 py-4">$15.75</td>
                            <td className="px-6 py-4 text-red-500 font-semibold">Cancelled</td>
                            <td className="px-6 py-4 text-right">
                                <a href="#" className="font-medium text-blue-600 hover:underline">View</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Order;
