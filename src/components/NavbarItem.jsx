'use client'
import Link from 'next/link'
import React, { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'

export default function NavbarItem( { title, param }) {
 
    const SearchParams = useSearchParams()
    const genre = SearchParams.get('genre')
  return (
    <div>
      <Suspense>
        <Link
        className={`hover:text-amber-600 font-semibold ${genre === param ? 'underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg': ''}`} 
        href={`/?genre=${param}`}>{title}</Link></Suspense>
    </div>
  )
}
