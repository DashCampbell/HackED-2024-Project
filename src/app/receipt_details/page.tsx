import { useRouter } from "next/navigation"

export default function Page({ searchParams }: { searchParams: { id: number } }) {
    const { id } = searchParams;
    return (
        <main id="receipt_details">
            <h2>Receipt #{id}</h2>
            <ul>
                <li>
                    <h3>Store: Walmart</h3>
                </li>
                <li>
                    <h3>Date: Jan. 1 2023</h3>
                </li>
                <li>
                    <h3>Parsed Text: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta id obcaecati harum quod dolor optio excepturi, cupiditate consequatur pariatur nisi quia placeat enim sunt quidem aspernatur eaque, inventore voluptates magnam.</h3>
                </li>
                <li>
                    <h3>Total Cost: $27.07</h3>
                </li>
            </ul>
        </main>
    )
}