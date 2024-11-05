/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from ".";
import * as _Schema from '@zenstackhq/runtime/zod/input';
const $Schema: typeof _Schema = (_Schema as any).default ?? _Schema;
import { checkRead, checkMutate } from '../helper';
import type { Prisma } from '@zenstackhq/runtime/models';
import type { UseTRPCMutationOptions, UseTRPCMutationResult, UseTRPCQueryOptions, UseTRPCQueryResult, UseTRPCInfiniteQueryOptions, UseTRPCInfiniteQueryResult } from '@trpc/react-query/shared';
import type { TRPCClientErrorLike } from '@trpc/client';
import type { AnyRouter } from '@trpc/server';

export default function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({

        createMany: procedure.input($Schema.EnergyMarketInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).energyMarket.createMany(input as any))),

        create: procedure.input($Schema.EnergyMarketInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).energyMarket.create(input as any))),

        deleteMany: procedure.input($Schema.EnergyMarketInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).energyMarket.deleteMany(input as any))),

        delete: procedure.input($Schema.EnergyMarketInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).energyMarket.delete(input as any))),

        findFirst: procedure.input($Schema.EnergyMarketInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).energyMarket.findFirst(input as any))),

        findMany: procedure.input($Schema.EnergyMarketInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).energyMarket.findMany(input as any))),

        findUnique: procedure.input($Schema.EnergyMarketInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).energyMarket.findUnique(input as any))),

        updateMany: procedure.input($Schema.EnergyMarketInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).energyMarket.updateMany(input as any))),

        update: procedure.input($Schema.EnergyMarketInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).energyMarket.update(input as any))),

        count: procedure.input($Schema.EnergyMarketInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).energyMarket.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.EnergyMarketCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.EnergyMarketCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.EnergyMarketCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.EnergyMarketCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.EnergyMarketCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.EnergyMarketCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.EnergyMarketGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.EnergyMarketGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.EnergyMarketCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.EnergyMarketCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.EnergyMarketGetPayload<T>, Context>) => Promise<Prisma.EnergyMarketGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.EnergyMarketDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.EnergyMarketDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.EnergyMarketDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.EnergyMarketDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.EnergyMarketDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.EnergyMarketDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.EnergyMarketGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.EnergyMarketGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.EnergyMarketDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.EnergyMarketDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.EnergyMarketGetPayload<T>, Context>) => Promise<Prisma.EnergyMarketGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.EnergyMarketFindFirstArgs, TData = Prisma.EnergyMarketGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.EnergyMarketFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.EnergyMarketGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.EnergyMarketFindFirstArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.EnergyMarketFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.EnergyMarketGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.EnergyMarketGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.EnergyMarketFindManyArgs, TData = Array<Prisma.EnergyMarketGetPayload<T>>>(
            input?: Prisma.SelectSubset<T, Prisma.EnergyMarketFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.EnergyMarketGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.EnergyMarketFindManyArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.EnergyMarketFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.EnergyMarketGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.EnergyMarketGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.EnergyMarketFindUniqueArgs, TData = Prisma.EnergyMarketGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.EnergyMarketFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.EnergyMarketGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.EnergyMarketFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.EnergyMarketFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.EnergyMarketGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.EnergyMarketGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.EnergyMarketUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.EnergyMarketUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.EnergyMarketUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.EnergyMarketUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.EnergyMarketUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.EnergyMarketUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.EnergyMarketGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.EnergyMarketGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.EnergyMarketUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.EnergyMarketUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.EnergyMarketGetPayload<T>, Context>) => Promise<Prisma.EnergyMarketGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.EnergyMarketCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.EnergyMarketCountAggregateOutputType>
            : number>(
                input?: Prisma.Subset<T, Prisma.EnergyMarketCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.EnergyMarketCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.EnergyMarketCountArgs>(
            input?: Omit<Prisma.Subset<T, Prisma.EnergyMarketCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.EnergyMarketCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.EnergyMarketCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}
