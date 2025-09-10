// import { useQuery } from '@tanstack/react-query'
// import { useSearchParams } from 'react-router-dom'
// import z from 'zod'

// import { getOrders } from '@/api/http/services/orders/get-orders'
// import { Pagination } from '@/components/pagination/pagination'

import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import { UserTableRow } from './user.table.row'

// import { OrderTableRowSkeleton } from './components/order-components-skeleton/order-table-row-skeleton'
// import { OrderTableFilters } from './components/order-table-filters'
// import { OrderTableRow } from './components/order-table-row'

export function Users() {
  // const [searchParams, setSearchParams] = useSearchParams()

  // const orderId = searchParams.get('orderId')
  // const customerName = searchParams.get('customerName')
  // const status = searchParams.get('status')

  // const pageIndex = z.coerce
  //   .number()
  //   .transform((page) => page - 1)
  //   .parse(searchParams.get('page') ?? '1')

  // const { data: resultOrdersAndMeta, isLoading: isLoadingOrders } = useQuery({
  //   queryKey: ['orders', pageIndex, orderId, customerName, status],
  //   queryFn: () =>
  //     getOrders({
  //       pageIndex,
  //       orderId,
  //       customerName,
  //       status: status === 'all' ? null : status,
  //     }),
  // })

  // function handlePagination(pageIndex: number) {
  //   setSearchParams((prev) => {
  //     prev.set('page', (pageIndex + 1).toString())

  //     return prev
  //   })
  // }

  return (
    <>
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Usuários</h1>

        <div className="space-y-2.5">
          {/* <OrderTableFilters /> */}
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-16"></TableHead>
                  <TableHead className="w-56">Identificador</TableHead>
                  <TableHead className="w-72">E-mail</TableHead>
                  <TableHead>Nome</TableHead>
                  <TableHead className="w-44">Cargo</TableHead>
                  <TableHead className="w-36">Férias</TableHead>
                  <TableHead className="w-16"></TableHead>
                  <TableHead className="w-16"></TableHead>
                </TableRow>
              </TableHeader>
              {Array.from({ length: 10 }).map((_, i) => {
                return <UserTableRow key={i} />
              })}
              <TableBody></TableBody>
            </Table>
          </div>
          {/* {resultOrdersAndMeta && (
            <Pagination
              onPageChange={handlePagination}
              totalCount={resultOrdersAndMeta.meta.totalCount}
              pageIndex={resultOrdersAndMeta.meta.pageIndex}
              totalPerPage={resultOrdersAndMeta.meta.perPage}
            />
          )} */}
        </div>
      </div>
    </>
  )
}
