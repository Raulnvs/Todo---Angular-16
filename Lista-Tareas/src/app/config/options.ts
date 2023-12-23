import { FilterStatus } from "../types/filter-status.commons";
import { Orders } from "../types/orders.commons";
import { TodoStatus } from "../types/type.commons";
import { Traductions } from "../utils/traductions";

export const FormOptions: {name:string, value: TodoStatus}[] = [
  {value: 'empty', name: Traductions['empty']},
  {value: 'in-progress', name: Traductions['in-progress']},
  {value: 'finished', name: Traductions['finished']}
]

export const FilterOptions: {name: string, value: FilterStatus}[] = [
  {value: "all", name: Traductions['all']},
  ...FormOptions,
]

export const OrderOptions: {value: Orders, name: string}[] = [
  {
    value: 'newest',
    name: 'Más Nueva a Más Vieja',
  },
  {
    value: 'oldest',
    name: 'Más Vieja a Más Nueva',
  }
]
