import { orderStatus } from "generated/prisma/enums";


export const OrderStatusList = [
    orderStatus.PENDING,
    orderStatus.PAID,
    orderStatus.DELIVERED,
    orderStatus.CANCELLED
] 

export type OrderStatus =
  (typeof orderStatus)[keyof typeof orderStatus];