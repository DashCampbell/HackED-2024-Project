import Image from 'next/image'

export default function Home() {
  return (
    <main id='receipt_list' className="flex min-h-screen flex-col items-center justify-between p-24">
      <ul>
        {[...Array(10)].map((x, i) => (
          <li>
            <a href="">
              <Image
                src="/stock_receipt.jpg"
                width={320}
                height={600}
                alt='Receipt'
                key={i}
              />
            </a>
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
