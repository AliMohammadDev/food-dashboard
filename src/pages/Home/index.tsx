import DisplayIcon from "../../assets/icons/Display";
import BlurText from "../../components/common/BlurText";

const Home = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Page Title */}

      <BlurText
        text="Welcome to the Dashboard 👋"
        delay={150}
        animateBy="words"
        direction="top"
        className="text-2xl font-bold text-orange-500"
      />




      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white shadow-md rounded-xl p-4 text-center">
          <h2 className="text-sm text-gray-500">Today's Orders</h2>
          <p className="text-xl font-bold text-orange-600">25</p>
        </div>
        <div className="bg-white shadow-md rounded-xl p-4 text-center">
          <h2 className="text-sm text-gray-500">Total Sales</h2>
          <p className="text-xl font-bold text-green-600">$750.00</p>
        </div>
        <div className="bg-white shadow-md rounded-xl p-4 text-center">
          <h2 className="text-sm text-gray-500">Total Products</h2>
          <p className="text-xl font-bold text-blue-600">18</p>
        </div>
        <div className="bg-white shadow-md rounded-xl p-4 text-center">
          <h2 className="text-sm text-gray-500">Total Categories</h2>
          <p className="text-xl font-bold text-purple-600">5</p>
        </div>
      </div>

      {/* Latest Orders Table - Modern Dashboard Style */}
      <div className="bg-white shadow-xl rounded-2xl p-6">
        <h2 className="text-xl font-semibold text-orange-500 mb-4">Latest Orders</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-gray-700">
            <thead>
              <tr className="text-gray-500 text-xs uppercase tracking-wider">
                <th className="px-4 py-3 text-left">Order ID</th>
                <th className="px-4 py-3 text-left">Customer</th>
                <th className="px-4 py-3 text-left">Total</th>
                <th className="px-4 py-3 text-left">Status</th>
                <th className="px-4 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {[
                { id: '#1023', customer: 'Ahmed', total: '$23.00', status: 'In Progress', color: 'bg-yellow-100 text-yellow-800' },
                { id: '#1022', customer: 'Sarah', total: '$42.50', status: 'Delivered', color: 'bg-green-100 text-green-800' },
                { id: '#1021', customer: 'Mohammed', total: '$15.25', status: 'Cancelled', color: 'bg-red-100 text-red-800' },
              ].map((order) => (
                <tr
                  key={order.id}
                  className="hover:bg-gray-50 transition rounded-xl"
                >
                  <td className="px-4 py-4 font-medium">{order.id}</td>
                  <td className="px-4 py-4">{order.customer}</td>
                  <td className="px-4 py-4">{order.total}</td>
                  <td className="px-4 py-4">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${order.color}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-right">
                    <button className="inline-flex items-center justify-center w-8 h-8 rounded-full text-orange-500 hover:bg-orange-100 transition">
                      <DisplayIcon className="w-5 h-5" />
                    </button>
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>


    </div>
  );
};


export default Home;
