'use client'
import * as React from 'react'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import styles from './Pagination.module.scss'

interface Props {
  pages: number
}
export default function PaginationRounded({ pages }: Props) {
  return (
    <Stack spacing={2} className={styles.block}>
      <Pagination count={pages} variant="outlined" shape="rounded" />
    </Stack>
  )
}
