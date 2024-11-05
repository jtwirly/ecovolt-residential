/* eslint-disable */
import type { unsetMarker, AnyRouter, AnyRootConfig, CreateRouterInner, Procedure, ProcedureBuilder, ProcedureParams, ProcedureRouterRecord, ProcedureType } from "@trpc/server";
import type { PrismaClient } from "@zenstackhq/runtime/models";
import createUserRouter from "./User.router";
import createEnergyUsageRouter from "./EnergyUsage.router";
import createRenewableEnergyRouter from "./RenewableEnergy.router";
import createSmartDeviceRouter from "./SmartDevice.router";
import createEnergyMarketRouter from "./EnergyMarket.router";
import createSubscriptionRouter from "./Subscription.router";
import createEnergySavingGoalRouter from "./EnergySavingGoal.router";
import createEvChargingRouter from "./EvCharging.router";
import createEnergySavingRecommendationRouter from "./EnergySavingRecommendation.router";
import createPwaSubscriptionRouter from "./PwaSubscription.router";
import { ClientType as UserClientType } from "./User.router";
import { ClientType as EnergyUsageClientType } from "./EnergyUsage.router";
import { ClientType as RenewableEnergyClientType } from "./RenewableEnergy.router";
import { ClientType as SmartDeviceClientType } from "./SmartDevice.router";
import { ClientType as EnergyMarketClientType } from "./EnergyMarket.router";
import { ClientType as SubscriptionClientType } from "./Subscription.router";
import { ClientType as EnergySavingGoalClientType } from "./EnergySavingGoal.router";
import { ClientType as EvChargingClientType } from "./EvCharging.router";
import { ClientType as EnergySavingRecommendationClientType } from "./EnergySavingRecommendation.router";
import { ClientType as PwaSubscriptionClientType } from "./PwaSubscription.router";

export type BaseConfig = AnyRootConfig;

export type RouterFactory<Config extends BaseConfig> = <
    ProcRouterRecord extends ProcedureRouterRecord
>(
    procedures: ProcRouterRecord
) => CreateRouterInner<Config, ProcRouterRecord>;

export type UnsetMarker = typeof unsetMarker;

export type ProcBuilder<Config extends BaseConfig> = ProcedureBuilder<
    ProcedureParams<Config, any, any, any, UnsetMarker, UnsetMarker, any>
>;

export function db(ctx: any) {
    if (!ctx.prisma) {
        throw new Error('Missing "prisma" field in trpc context');
    }
    return ctx.prisma as PrismaClient;
}

export function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({
        user: createUserRouter(router, procedure),
        energyUsage: createEnergyUsageRouter(router, procedure),
        renewableEnergy: createRenewableEnergyRouter(router, procedure),
        smartDevice: createSmartDeviceRouter(router, procedure),
        energyMarket: createEnergyMarketRouter(router, procedure),
        subscription: createSubscriptionRouter(router, procedure),
        energySavingGoal: createEnergySavingGoalRouter(router, procedure),
        evCharging: createEvChargingRouter(router, procedure),
        energySavingRecommendation: createEnergySavingRecommendationRouter(router, procedure),
        pwaSubscription: createPwaSubscriptionRouter(router, procedure),
    }
    );
}

export interface ClientType<AppRouter extends AnyRouter> {
    user: UserClientType<AppRouter>;
    energyUsage: EnergyUsageClientType<AppRouter>;
    renewableEnergy: RenewableEnergyClientType<AppRouter>;
    smartDevice: SmartDeviceClientType<AppRouter>;
    energyMarket: EnergyMarketClientType<AppRouter>;
    subscription: SubscriptionClientType<AppRouter>;
    energySavingGoal: EnergySavingGoalClientType<AppRouter>;
    evCharging: EvChargingClientType<AppRouter>;
    energySavingRecommendation: EnergySavingRecommendationClientType<AppRouter>;
    pwaSubscription: PwaSubscriptionClientType<AppRouter>;
}
