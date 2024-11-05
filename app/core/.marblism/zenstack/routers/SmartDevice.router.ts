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

        createMany: procedure.input($Schema.SmartDeviceInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).smartDevice.createMany(input as any))),

        create: procedure.input($Schema.SmartDeviceInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).smartDevice.create(input as any))),

        deleteMany: procedure.input($Schema.SmartDeviceInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).smartDevice.deleteMany(input as any))),

        delete: procedure.input($Schema.SmartDeviceInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).smartDevice.delete(input as any))),

        findFirst: procedure.input($Schema.SmartDeviceInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).smartDevice.findFirst(input as any))),

        findMany: procedure.input($Schema.SmartDeviceInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).smartDevice.findMany(input as any))),

        findUnique: procedure.input($Schema.SmartDeviceInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).smartDevice.findUnique(input as any))),

        updateMany: procedure.input($Schema.SmartDeviceInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).smartDevice.updateMany(input as any))),

        update: procedure.input($Schema.SmartDeviceInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).smartDevice.update(input as any))),

        count: procedure.input($Schema.SmartDeviceInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).smartDevice.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.SmartDeviceCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SmartDeviceCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SmartDeviceCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SmartDeviceCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.SmartDeviceCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SmartDeviceCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.SmartDeviceGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.SmartDeviceGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SmartDeviceCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SmartDeviceCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.SmartDeviceGetPayload<T>, Context>) => Promise<Prisma.SmartDeviceGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.SmartDeviceDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SmartDeviceDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SmartDeviceDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SmartDeviceDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.SmartDeviceDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SmartDeviceDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.SmartDeviceGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.SmartDeviceGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SmartDeviceDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SmartDeviceDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.SmartDeviceGetPayload<T>, Context>) => Promise<Prisma.SmartDeviceGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.SmartDeviceFindFirstArgs, TData = Prisma.SmartDeviceGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.SmartDeviceFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.SmartDeviceGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.SmartDeviceFindFirstArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.SmartDeviceFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.SmartDeviceGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.SmartDeviceGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.SmartDeviceFindManyArgs, TData = Array<Prisma.SmartDeviceGetPayload<T>>>(
            input?: Prisma.SelectSubset<T, Prisma.SmartDeviceFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.SmartDeviceGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.SmartDeviceFindManyArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.SmartDeviceFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.SmartDeviceGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.SmartDeviceGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.SmartDeviceFindUniqueArgs, TData = Prisma.SmartDeviceGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.SmartDeviceFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.SmartDeviceGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.SmartDeviceFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.SmartDeviceFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.SmartDeviceGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.SmartDeviceGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.SmartDeviceUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SmartDeviceUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SmartDeviceUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SmartDeviceUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.SmartDeviceUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SmartDeviceUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.SmartDeviceGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.SmartDeviceGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SmartDeviceUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SmartDeviceUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.SmartDeviceGetPayload<T>, Context>) => Promise<Prisma.SmartDeviceGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.SmartDeviceCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.SmartDeviceCountAggregateOutputType>
            : number>(
                input?: Prisma.Subset<T, Prisma.SmartDeviceCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.SmartDeviceCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.SmartDeviceCountArgs>(
            input?: Omit<Prisma.Subset<T, Prisma.SmartDeviceCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.SmartDeviceCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.SmartDeviceCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}
