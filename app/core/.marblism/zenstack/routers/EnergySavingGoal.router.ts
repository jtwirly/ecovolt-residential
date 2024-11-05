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

        createMany: procedure.input($Schema.EnergySavingGoalInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).energySavingGoal.createMany(input as any))),

        create: procedure.input($Schema.EnergySavingGoalInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).energySavingGoal.create(input as any))),

        deleteMany: procedure.input($Schema.EnergySavingGoalInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).energySavingGoal.deleteMany(input as any))),

        delete: procedure.input($Schema.EnergySavingGoalInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).energySavingGoal.delete(input as any))),

        findFirst: procedure.input($Schema.EnergySavingGoalInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).energySavingGoal.findFirst(input as any))),

        findMany: procedure.input($Schema.EnergySavingGoalInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).energySavingGoal.findMany(input as any))),

        findUnique: procedure.input($Schema.EnergySavingGoalInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).energySavingGoal.findUnique(input as any))),

        updateMany: procedure.input($Schema.EnergySavingGoalInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).energySavingGoal.updateMany(input as any))),

        update: procedure.input($Schema.EnergySavingGoalInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).energySavingGoal.update(input as any))),

        count: procedure.input($Schema.EnergySavingGoalInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).energySavingGoal.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.EnergySavingGoalCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.EnergySavingGoalCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.EnergySavingGoalCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.EnergySavingGoalCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.EnergySavingGoalCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.EnergySavingGoalCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.EnergySavingGoalGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.EnergySavingGoalGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.EnergySavingGoalCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.EnergySavingGoalCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.EnergySavingGoalGetPayload<T>, Context>) => Promise<Prisma.EnergySavingGoalGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.EnergySavingGoalDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.EnergySavingGoalDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.EnergySavingGoalDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.EnergySavingGoalDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.EnergySavingGoalDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.EnergySavingGoalDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.EnergySavingGoalGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.EnergySavingGoalGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.EnergySavingGoalDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.EnergySavingGoalDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.EnergySavingGoalGetPayload<T>, Context>) => Promise<Prisma.EnergySavingGoalGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.EnergySavingGoalFindFirstArgs, TData = Prisma.EnergySavingGoalGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.EnergySavingGoalFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.EnergySavingGoalGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.EnergySavingGoalFindFirstArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.EnergySavingGoalFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.EnergySavingGoalGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.EnergySavingGoalGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.EnergySavingGoalFindManyArgs, TData = Array<Prisma.EnergySavingGoalGetPayload<T>>>(
            input?: Prisma.SelectSubset<T, Prisma.EnergySavingGoalFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.EnergySavingGoalGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.EnergySavingGoalFindManyArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.EnergySavingGoalFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.EnergySavingGoalGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.EnergySavingGoalGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.EnergySavingGoalFindUniqueArgs, TData = Prisma.EnergySavingGoalGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.EnergySavingGoalFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.EnergySavingGoalGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.EnergySavingGoalFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.EnergySavingGoalFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.EnergySavingGoalGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.EnergySavingGoalGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.EnergySavingGoalUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.EnergySavingGoalUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.EnergySavingGoalUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.EnergySavingGoalUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.EnergySavingGoalUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.EnergySavingGoalUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.EnergySavingGoalGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.EnergySavingGoalGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.EnergySavingGoalUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.EnergySavingGoalUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.EnergySavingGoalGetPayload<T>, Context>) => Promise<Prisma.EnergySavingGoalGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.EnergySavingGoalCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.EnergySavingGoalCountAggregateOutputType>
            : number>(
                input?: Prisma.Subset<T, Prisma.EnergySavingGoalCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.EnergySavingGoalCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.EnergySavingGoalCountArgs>(
            input?: Omit<Prisma.Subset<T, Prisma.EnergySavingGoalCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.EnergySavingGoalCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.EnergySavingGoalCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}
