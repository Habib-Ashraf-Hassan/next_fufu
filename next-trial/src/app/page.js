'use client'
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";



export default function Home() {
  const router = useRouter()
  function handleNavigate(){
    router.push('accounts')
  }
  function handleCart(){
    router.push('cart')
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <h1 className="styled-header">Next.js Tutorial</h1>
    <div>
      <button className="next-page-button" onClick={handleNavigate}>Go to Accounts</button>

      <button className="next-page-button" onClick={handleCart}>Go to Cart</button>
    </div>
    </main>
  );
}