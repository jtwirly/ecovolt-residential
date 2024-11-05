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

        createMany: procedure.input($Schema.EvChargingInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).evCharging.createMany(input as any))),

        create: procedure.input($Schema.EvChargingInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).evCharging.create(input as any))),

        deleteMany: procedure.input($Schema.EvChargingInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).evCharging.deleteMany(input as any))),

        delete: procedure.input($Schema.EvChargingInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).evCharging.delete(input as any))),

        findFirst: procedure.input($Schema.EvChargingInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).evCharging.findFirst(input as any))),

        findMany: procedure.input($Schema.EvChargingInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).evCharging.findMany(input as any))),

        findUnique: procedure.input($Schema.EvChargingInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).evCharging.findUnique(input as any))),

        updateMany: procedure.input($Schema.EvChargingInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).evCharging.updateMany(input as any))),

        update: procedure.input($Schema.EvChargingInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).evCharging.update(input as any))),

        count: procedure.input($Schema.EvChargingInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).evCharging.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.EvChargingCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.EvChargingCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.EvChargingCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.EvChargingCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.EvChargingCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.EvChargingCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.EvChargingGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.EvChargingGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.EvChargingCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.EvChargingCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.EvChargingGetPayload<T>, Context>) => Promise<Prisma.EvChargingGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.EvChargingDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.EvChargingDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.EvChargingDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.EvChargingDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.EvChargingDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.EvChargingDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.EvChargingGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.EvChargingGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.EvChargingDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.EvChargingDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.EvChargingGetPayload<T>, Context>) => Promise<Prisma.EvChargingGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.EvChargingFindFirstArgs, TData = Prisma.EvChargingGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.EvChargingFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.EvChargingGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.EvChargingFindFirstArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.EvChargingFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.EvChargingGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.EvChargingGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.EvChargingFindManyArgs, TData = Array<Prisma.EvChargingGetPayload<T>>>(
            input?: Prisma.SelectSubset<T, Prisma.EvChargingFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.EvChargingGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.EvChargingFindManyArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.EvChargingFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.EvChargingGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.EvChargingGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.EvChargingFindUniqueArgs, TData = Prisma.EvChargingGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.EvChargingFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.EvChargingGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.EvChargingFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.EvChargingFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.EvChargingGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.EvChargingGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.EvChargingUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.EvChargingUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.EvChargingUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.EvChargingUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.EvChargingUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.EvChargingUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.EvChargingGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.EvChargingGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.EvChargingUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.EvChargingUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.EvChargingGetPayload<T>, Context>) => Promise<Prisma.EvChargingGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.EvChargingCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.EvChargingCountAggregateOutputType>
            : number>(
                input?: Prisma.Subset<T, Prisma.EvChargingCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.EvChargingCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.EvChargingCountArgs>(
            input?: Omit<Prisma.Subset<T, Prisma.EvChargingCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.EvChargingCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.EvChargingCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}
