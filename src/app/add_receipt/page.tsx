export default function Page() {
    return (
        <main id="Add_Receipt">
            <h1>Add New Receipt</h1>
            <ul>
                <li>
                    <h2>Store: </h2>
                    <input type="text" />

                </li>
                <li>
                    <h2>Date: </h2>
                    <input type="date" />

                </li>
                <li>
                    <h2>Add Image</h2>
                    <input type="file" />
                </li>
                <li>
                    <h2>Total Cost: </h2>$
                    <input type="number" step={0.01} />
                    <button>Add New Receipt</button>
                </li>
            </ul>
        </main>
    )
}