const MyOrders = () => {
    return (
        <div>
            <h2 className="text-2xl font-semibold mb-6 ">My Orders: </h2>
            <ul className="grid grid-cols-3 justify-center gap-6">
                <li className="border-2 rounded-lg text-center p-6">listItem-1</li>
                <li className="border-2 rounded-lg text-center p-6">listItem-2</li>
                <li className="border-2 rounded-lg text-center p-6">listItem-3</li>
                <li className="border-2 rounded-lg text-center p-6">listItem-4</li>
                <li className="border-2 rounded-lg text-center p-6">listItem-5</li>
            </ul>
        </div>
    );
};

export default MyOrders;