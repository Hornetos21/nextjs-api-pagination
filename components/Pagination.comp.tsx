'use client'
import * as React from 'react'
import { useRouter } from 'next/navigation'
import { updateSearchParams } from '../utils'
import BlockButtonsComp from './BlockButtons.comp'
import ButtonComp from './Button.comp'

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
    <BlockButtonsComp>
      <ButtonComp
        disabled={!Number(pageNumber)}
        handle={handlePrevious}
        text="Show previous"
      />
      <ButtonComp handle={handleNext} text="Show next" />
    </BlockButtonsComp>
    /*    <Stack spacing={2} className={styles.block}>
      <Pagination count={pages} variant="outlined" shape="rounded" />
    </Stack>*/
  )
}
