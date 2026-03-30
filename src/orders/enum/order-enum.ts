import { orderStatus } from "generated/prisma/enums";


export const OrderStatusList = [
    orderStatus.PENDING,
    orderStatus.DELIVERED,
    orderStatus.CANCELLED
] 