'use client'
import * as React from 'react'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import styles from './Pagination.module.scss'
import { useRouter } from 'next/navigation'
import { updateSearchParams } from '../app/utils'

interface Props {
  pages?: number
  pageNumber: number
}
export default function PaginationRounded({ pages, pageNumber }: Props) {
  const router = useRouter()

  const handleNext = () => {
    const newOffset = Number(pageNumber) + 8
    const newPathname = updateSearchParams('offset', `${newOffset}`)

    router.push(newPathname)
  }
  const handlePrevious = () => {
    const newOffset = Number(pageNumber) - 8
    const newPathname = updateSearchParams('offset', `${newOffset}`)

    router.push(newPathname)
  }
  console.log(pageNumber)
  return (
    <div className={styles.block}>
      <button disabled={!Number(pageNumber)} onClick={handlePrevious}>
        Show previous
      </button>
      <button onClick={handleNext}>Show next</button>
    </div>

    /*    <Stack spacing={2} className={styles.block}>
      <Pagination count={pages} variant="outlined" shape="rounded" />
    </Stack>*/
  )
}
