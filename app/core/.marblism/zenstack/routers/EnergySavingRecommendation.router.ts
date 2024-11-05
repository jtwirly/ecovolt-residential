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

        createMany: procedure.input($Schema.EnergySavingRecommendationInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).energySavingRecommendation.createMany(input as any))),

        create: procedure.input($Schema.EnergySavingRecommendationInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).energySavingRecommendation.create(input as any))),

        deleteMany: procedure.input($Schema.EnergySavingRecommendationInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).energySavingRecommendation.deleteMany(input as any))),

        delete: procedure.input($Schema.EnergySavingRecommendationInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).energySavingRecommendation.delete(input as any))),

        findFirst: procedure.input($Schema.EnergySavingRecommendationInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).energySavingRecommendation.findFirst(input as any))),

        findMany: procedure.input($Schema.EnergySavingRecommendationInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).energySavingRecommendation.findMany(input as any))),

        findUnique: procedure.input($Schema.EnergySavingRecommendationInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).energySavingRecommendation.findUnique(input as any))),

        updateMany: procedure.input($Schema.EnergySavingRecommendationInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).energySavingRecommendation.updateMany(input as any))),

        update: procedure.input($Schema.EnergySavingRecommendationInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).energySavingRecommendation.update(input as any))),

        count: procedure.input($Schema.EnergySavingRecommendationInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).energySavingRecommendation.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.EnergySavingRecommendationCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.EnergySavingRecommendationCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.EnergySavingRecommendationCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.EnergySavingRecommendationCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.EnergySavingRecommendationCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.EnergySavingRecommendationCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.EnergySavingRecommendationGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.EnergySavingRecommendationGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.EnergySavingRecommendationCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.EnergySavingRecommendationCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.EnergySavingRecommendationGetPayload<T>, Context>) => Promise<Prisma.EnergySavingRecommendationGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.EnergySavingRecommendationDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.EnergySavingRecommendationDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.EnergySavingRecommendationDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.EnergySavingRecommendationDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.EnergySavingRecommendationDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.EnergySavingRecommendationDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.EnergySavingRecommendationGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.EnergySavingRecommendationGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.EnergySavingRecommendationDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.EnergySavingRecommendationDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.EnergySavingRecommendationGetPayload<T>, Context>) => Promise<Prisma.EnergySavingRecommendationGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.EnergySavingRecommendationFindFirstArgs, TData = Prisma.EnergySavingRecommendationGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.EnergySavingRecommendationFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.EnergySavingRecommendationGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.EnergySavingRecommendationFindFirstArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.EnergySavingRecommendationFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.EnergySavingRecommendationGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.EnergySavingRecommendationGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.EnergySavingRecommendationFindManyArgs, TData = Array<Prisma.EnergySavingRecommendationGetPayload<T>>>(
            input?: Prisma.SelectSubset<T, Prisma.EnergySavingRecommendationFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.EnergySavingRecommendationGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.EnergySavingRecommendationFindManyArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.EnergySavingRecommendationFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.EnergySavingRecommendationGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.EnergySavingRecommendationGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.EnergySavingRecommendationFindUniqueArgs, TData = Prisma.EnergySavingRecommendationGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.EnergySavingRecommendationFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.EnergySavingRecommendationGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.EnergySavingRecommendationFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.EnergySavingRecommendationFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.EnergySavingRecommendationGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.EnergySavingRecommendationGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.EnergySavingRecommendationUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.EnergySavingRecommendationUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.EnergySavingRecommendationUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.EnergySavingRecommendationUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.EnergySavingRecommendationUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.EnergySavingRecommendationUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.EnergySavingRecommendationGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.EnergySavingRecommendationGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.EnergySavingRecommendationUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.EnergySavingRecommendationUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.EnergySavingRecommendationGetPayload<T>, Context>) => Promise<Prisma.EnergySavingRecommendationGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.EnergySavingRecommendationCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.EnergySavingRecommendationCountAggregateOutputType>
            : number>(
                input?: Prisma.Subset<T, Prisma.EnergySavingRecommendationCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.EnergySavingRecommendationCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.EnergySavingRecommendationCountArgs>(
            input?: Omit<Prisma.Subset<T, Prisma.EnergySavingRecommendationCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.EnergySavingRecommendationCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.EnergySavingRecommendationCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}
