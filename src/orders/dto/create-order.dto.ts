import { IsBoolean, IsEnum, IsNumber, IsOptional, IsPositive } from "class-validator";
import { OrderStatusList } from "../enum/order-enum";
import { orderStatus } from "generated/prisma/enums";

export class CreateOrderDto {

    @IsNumber()
    @IsPositive()
    totalAmount: number;

    @IsNumber()
    @IsPositive()
    totalItems: number;

    @IsEnum( OrderStatusList, {
        message: `Posssible status values ${ OrderStatusList }`
    })
    @IsOptional()
    status: orderStatus = orderStatus.PENDING;

    @IsBoolean()
    @IsOptional()
    paid: boolean = false;

}
