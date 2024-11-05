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

        createMany: procedure.input($Schema.RenewableEnergyInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).renewableEnergy.createMany(input as any))),

        create: procedure.input($Schema.RenewableEnergyInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).renewableEnergy.create(input as any))),

        deleteMany: procedure.input($Schema.RenewableEnergyInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).renewableEnergy.deleteMany(input as any))),

        delete: procedure.input($Schema.RenewableEnergyInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).renewableEnergy.delete(input as any))),

        findFirst: procedure.input($Schema.RenewableEnergyInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).renewableEnergy.findFirst(input as any))),

        findMany: procedure.input($Schema.RenewableEnergyInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).renewableEnergy.findMany(input as any))),

        findUnique: procedure.input($Schema.RenewableEnergyInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).renewableEnergy.findUnique(input as any))),

        updateMany: procedure.input($Schema.RenewableEnergyInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).renewableEnergy.updateMany(input as any))),

        update: procedure.input($Schema.RenewableEnergyInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).renewableEnergy.update(input as any))),

        count: procedure.input($Schema.RenewableEnergyInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).renewableEnergy.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.RenewableEnergyCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.RenewableEnergyCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.RenewableEnergyCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.RenewableEnergyCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.RenewableEnergyCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.RenewableEnergyCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.RenewableEnergyGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.RenewableEnergyGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.RenewableEnergyCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.RenewableEnergyCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.RenewableEnergyGetPayload<T>, Context>) => Promise<Prisma.RenewableEnergyGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.RenewableEnergyDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.RenewableEnergyDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.RenewableEnergyDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.RenewableEnergyDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.RenewableEnergyDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.RenewableEnergyDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.RenewableEnergyGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.RenewableEnergyGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.RenewableEnergyDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.RenewableEnergyDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.RenewableEnergyGetPayload<T>, Context>) => Promise<Prisma.RenewableEnergyGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.RenewableEnergyFindFirstArgs, TData = Prisma.RenewableEnergyGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.RenewableEnergyFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.RenewableEnergyGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.RenewableEnergyFindFirstArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.RenewableEnergyFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.RenewableEnergyGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.RenewableEnergyGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.RenewableEnergyFindManyArgs, TData = Array<Prisma.RenewableEnergyGetPayload<T>>>(
            input?: Prisma.SelectSubset<T, Prisma.RenewableEnergyFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.RenewableEnergyGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.RenewableEnergyFindManyArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.RenewableEnergyFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.RenewableEnergyGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.RenewableEnergyGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.RenewableEnergyFindUniqueArgs, TData = Prisma.RenewableEnergyGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.RenewableEnergyFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.RenewableEnergyGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.RenewableEnergyFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.RenewableEnergyFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.RenewableEnergyGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.RenewableEnergyGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.RenewableEnergyUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.RenewableEnergyUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.RenewableEnergyUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.RenewableEnergyUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.RenewableEnergyUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.RenewableEnergyUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.RenewableEnergyGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.RenewableEnergyGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.RenewableEnergyUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.RenewableEnergyUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.RenewableEnergyGetPayload<T>, Context>) => Promise<Prisma.RenewableEnergyGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.RenewableEnergyCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.RenewableEnergyCountAggregateOutputType>
            : number>(
                input?: Prisma.Subset<T, Prisma.RenewableEnergyCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.RenewableEnergyCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.RenewableEnergyCountArgs>(
            input?: Omit<Prisma.Subset<T, Prisma.RenewableEnergyCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.RenewableEnergyCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.RenewableEnergyCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}
