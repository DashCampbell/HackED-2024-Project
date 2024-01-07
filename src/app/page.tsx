import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main id='receipt_list' className="flex min-h-screen flex-col items-center justify-between p-24">
      <ul>
        {[...Array(10)].map((x, i) => (
          <li>
            <Link href={{ pathname: 'receipt_details', query: { id: i } }} key={i}>
              <Image
                src="/stock_receipt.jpg"
                width={320}
                height={600}
                alt='Receipt'
                key={i}
              />
            </Link>
          </li>
        )
        )}
      </ul>
      <div className='AddReceiptBtn'>
        <a href="">
          <p>Add Receipt</p>
        </a>
      </div>
    </main>
  )
}
