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

        createMany: procedure.input($Schema.EnergyUsageInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).energyUsage.createMany(input as any))),

        create: procedure.input($Schema.EnergyUsageInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).energyUsage.create(input as any))),

        deleteMany: procedure.input($Schema.EnergyUsageInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).energyUsage.deleteMany(input as any))),

        delete: procedure.input($Schema.EnergyUsageInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).energyUsage.delete(input as any))),

        findFirst: procedure.input($Schema.EnergyUsageInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).energyUsage.findFirst(input as any))),

        findMany: procedure.input($Schema.EnergyUsageInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).energyUsage.findMany(input as any))),

        findUnique: procedure.input($Schema.EnergyUsageInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).energyUsage.findUnique(input as any))),

        updateMany: procedure.input($Schema.EnergyUsageInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).energyUsage.updateMany(input as any))),

        update: procedure.input($Schema.EnergyUsageInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).energyUsage.update(input as any))),

        count: procedure.input($Schema.EnergyUsageInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).energyUsage.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.EnergyUsageCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.EnergyUsageCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.EnergyUsageCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.EnergyUsageCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.EnergyUsageCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.EnergyUsageCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.EnergyUsageGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.EnergyUsageGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.EnergyUsageCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.EnergyUsageCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.EnergyUsageGetPayload<T>, Context>) => Promise<Prisma.EnergyUsageGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.EnergyUsageDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.EnergyUsageDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.EnergyUsageDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.EnergyUsageDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.EnergyUsageDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.EnergyUsageDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.EnergyUsageGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.EnergyUsageGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.EnergyUsageDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.EnergyUsageDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.EnergyUsageGetPayload<T>, Context>) => Promise<Prisma.EnergyUsageGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.EnergyUsageFindFirstArgs, TData = Prisma.EnergyUsageGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.EnergyUsageFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.EnergyUsageGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.EnergyUsageFindFirstArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.EnergyUsageFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.EnergyUsageGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.EnergyUsageGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.EnergyUsageFindManyArgs, TData = Array<Prisma.EnergyUsageGetPayload<T>>>(
            input?: Prisma.SelectSubset<T, Prisma.EnergyUsageFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.EnergyUsageGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.EnergyUsageFindManyArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.EnergyUsageFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.EnergyUsageGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.EnergyUsageGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.EnergyUsageFindUniqueArgs, TData = Prisma.EnergyUsageGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.EnergyUsageFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.EnergyUsageGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.EnergyUsageFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.EnergyUsageFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.EnergyUsageGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.EnergyUsageGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.EnergyUsageUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.EnergyUsageUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.EnergyUsageUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.EnergyUsageUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.EnergyUsageUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.EnergyUsageUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.EnergyUsageGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.EnergyUsageGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.EnergyUsageUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.EnergyUsageUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.EnergyUsageGetPayload<T>, Context>) => Promise<Prisma.EnergyUsageGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.EnergyUsageCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.EnergyUsageCountAggregateOutputType>
            : number>(
                input?: Prisma.Subset<T, Prisma.EnergyUsageCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.EnergyUsageCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.EnergyUsageCountArgs>(
            input?: Omit<Prisma.Subset<T, Prisma.EnergyUsageCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.EnergyUsageCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.EnergyUsageCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}
