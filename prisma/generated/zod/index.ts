import { z } from 'zod';
import type { Prisma } from '@prisma/client';

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////


/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const TransactionIsolationLevelSchema = z.enum(['Serializable']);

export const BooksScalarFieldEnumSchema = z.enum(['bookId','title','authorName','authorLastName','pages','publisher','publishYear','review','cover','status']);

export const SortOrderSchema = z.enum(['asc','desc']);

export const QueryModeSchema = z.enum(['default','insensitive']);

export const StatusSchema = z.enum(['READ','PENDING','READING']);

export type StatusType = `${z.infer<typeof StatusSchema>}`

/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// BOOKS SCHEMA
/////////////////////////////////////////

export const BooksSchema = z.object({
  status: StatusSchema,
  bookId: z.number().int(),
  title: z.string(),
  authorName: z.string(),
  authorLastName: z.string(),
  pages: z.number().int(),
  publisher: z.string(),
  publishYear: z.number().int(),
  review: z.string(),
  cover: z.string(),
})

export type Books = z.infer<typeof BooksSchema>

/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////

// BOOKS
//------------------------------------------------------

export const BooksSelectSchema: z.ZodType<Prisma.BooksSelect> = z.object({
  bookId: z.boolean().optional(),
  title: z.boolean().optional(),
  authorName: z.boolean().optional(),
  authorLastName: z.boolean().optional(),
  pages: z.boolean().optional(),
  publisher: z.boolean().optional(),
  publishYear: z.boolean().optional(),
  review: z.boolean().optional(),
  cover: z.boolean().optional(),
  status: z.boolean().optional(),
}).strict()


/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////

export const BooksWhereInputSchema: z.ZodType<Prisma.BooksWhereInput> = z.object({
  AND: z.union([ z.lazy(() => BooksWhereInputSchema),z.lazy(() => BooksWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => BooksWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BooksWhereInputSchema),z.lazy(() => BooksWhereInputSchema).array() ]).optional(),
  bookId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  authorName: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  authorLastName: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  pages: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  publisher: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  publishYear: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  review: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  cover: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  status: z.union([ z.lazy(() => EnumStatusFilterSchema),z.lazy(() => StatusSchema) ]).optional(),
}).strict();

export const BooksOrderByWithRelationInputSchema: z.ZodType<Prisma.BooksOrderByWithRelationInput> = z.object({
  bookId: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  authorName: z.lazy(() => SortOrderSchema).optional(),
  authorLastName: z.lazy(() => SortOrderSchema).optional(),
  pages: z.lazy(() => SortOrderSchema).optional(),
  publisher: z.lazy(() => SortOrderSchema).optional(),
  publishYear: z.lazy(() => SortOrderSchema).optional(),
  review: z.lazy(() => SortOrderSchema).optional(),
  cover: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const BooksWhereUniqueInputSchema: z.ZodType<Prisma.BooksWhereUniqueInput> = z.object({
  bookId: z.number().int()
})
.and(z.object({
  bookId: z.number().int().optional(),
  AND: z.union([ z.lazy(() => BooksWhereInputSchema),z.lazy(() => BooksWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => BooksWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BooksWhereInputSchema),z.lazy(() => BooksWhereInputSchema).array() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  authorName: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  authorLastName: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  pages: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  publisher: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  publishYear: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  review: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  cover: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  status: z.union([ z.lazy(() => EnumStatusFilterSchema),z.lazy(() => StatusSchema) ]).optional(),
}).strict());

export const BooksOrderByWithAggregationInputSchema: z.ZodType<Prisma.BooksOrderByWithAggregationInput> = z.object({
  bookId: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  authorName: z.lazy(() => SortOrderSchema).optional(),
  authorLastName: z.lazy(() => SortOrderSchema).optional(),
  pages: z.lazy(() => SortOrderSchema).optional(),
  publisher: z.lazy(() => SortOrderSchema).optional(),
  publishYear: z.lazy(() => SortOrderSchema).optional(),
  review: z.lazy(() => SortOrderSchema).optional(),
  cover: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => BooksCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => BooksAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => BooksMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => BooksMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => BooksSumOrderByAggregateInputSchema).optional()
}).strict();

export const BooksScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.BooksScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => BooksScalarWhereWithAggregatesInputSchema),z.lazy(() => BooksScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => BooksScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BooksScalarWhereWithAggregatesInputSchema),z.lazy(() => BooksScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  bookId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  title: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  authorName: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  authorLastName: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  pages: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  publisher: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  publishYear: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  review: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  cover: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  status: z.union([ z.lazy(() => EnumStatusWithAggregatesFilterSchema),z.lazy(() => StatusSchema) ]).optional(),
}).strict();

export const BooksCreateInputSchema: z.ZodType<Prisma.BooksCreateInput> = z.object({
  title: z.string(),
  authorName: z.string(),
  authorLastName: z.string(),
  pages: z.number().int(),
  publisher: z.string(),
  publishYear: z.number().int(),
  review: z.string(),
  cover: z.string(),
  status: z.lazy(() => StatusSchema)
}).strict();

export const BooksUncheckedCreateInputSchema: z.ZodType<Prisma.BooksUncheckedCreateInput> = z.object({
  bookId: z.number().int().optional(),
  title: z.string(),
  authorName: z.string(),
  authorLastName: z.string(),
  pages: z.number().int(),
  publisher: z.string(),
  publishYear: z.number().int(),
  review: z.string(),
  cover: z.string(),
  status: z.lazy(() => StatusSchema)
}).strict();

export const BooksUpdateInputSchema: z.ZodType<Prisma.BooksUpdateInput> = z.object({
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  authorName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  authorLastName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  pages: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  publisher: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  publishYear: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  review: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  cover: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => StatusSchema),z.lazy(() => EnumStatusFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const BooksUncheckedUpdateInputSchema: z.ZodType<Prisma.BooksUncheckedUpdateInput> = z.object({
  bookId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  authorName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  authorLastName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  pages: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  publisher: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  publishYear: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  review: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  cover: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => StatusSchema),z.lazy(() => EnumStatusFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const BooksCreateManyInputSchema: z.ZodType<Prisma.BooksCreateManyInput> = z.object({
  bookId: z.number().int().optional(),
  title: z.string(),
  authorName: z.string(),
  authorLastName: z.string(),
  pages: z.number().int(),
  publisher: z.string(),
  publishYear: z.number().int(),
  review: z.string(),
  cover: z.string(),
  status: z.lazy(() => StatusSchema)
}).strict();

export const BooksUpdateManyMutationInputSchema: z.ZodType<Prisma.BooksUpdateManyMutationInput> = z.object({
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  authorName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  authorLastName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  pages: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  publisher: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  publishYear: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  review: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  cover: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => StatusSchema),z.lazy(() => EnumStatusFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const BooksUncheckedUpdateManyInputSchema: z.ZodType<Prisma.BooksUncheckedUpdateManyInput> = z.object({
  bookId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  authorName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  authorLastName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  pages: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  publisher: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  publishYear: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  review: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  cover: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => StatusSchema),z.lazy(() => EnumStatusFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const IntFilterSchema: z.ZodType<Prisma.IntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const StringFilterSchema: z.ZodType<Prisma.StringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const EnumStatusFilterSchema: z.ZodType<Prisma.EnumStatusFilter> = z.object({
  equals: z.lazy(() => StatusSchema).optional(),
  in: z.lazy(() => StatusSchema).array().optional(),
  notIn: z.lazy(() => StatusSchema).array().optional(),
  not: z.union([ z.lazy(() => StatusSchema),z.lazy(() => NestedEnumStatusFilterSchema) ]).optional(),
}).strict();

export const BooksCountOrderByAggregateInputSchema: z.ZodType<Prisma.BooksCountOrderByAggregateInput> = z.object({
  bookId: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  authorName: z.lazy(() => SortOrderSchema).optional(),
  authorLastName: z.lazy(() => SortOrderSchema).optional(),
  pages: z.lazy(() => SortOrderSchema).optional(),
  publisher: z.lazy(() => SortOrderSchema).optional(),
  publishYear: z.lazy(() => SortOrderSchema).optional(),
  review: z.lazy(() => SortOrderSchema).optional(),
  cover: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const BooksAvgOrderByAggregateInputSchema: z.ZodType<Prisma.BooksAvgOrderByAggregateInput> = z.object({
  bookId: z.lazy(() => SortOrderSchema).optional(),
  pages: z.lazy(() => SortOrderSchema).optional(),
  publishYear: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const BooksMaxOrderByAggregateInputSchema: z.ZodType<Prisma.BooksMaxOrderByAggregateInput> = z.object({
  bookId: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  authorName: z.lazy(() => SortOrderSchema).optional(),
  authorLastName: z.lazy(() => SortOrderSchema).optional(),
  pages: z.lazy(() => SortOrderSchema).optional(),
  publisher: z.lazy(() => SortOrderSchema).optional(),
  publishYear: z.lazy(() => SortOrderSchema).optional(),
  review: z.lazy(() => SortOrderSchema).optional(),
  cover: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const BooksMinOrderByAggregateInputSchema: z.ZodType<Prisma.BooksMinOrderByAggregateInput> = z.object({
  bookId: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  authorName: z.lazy(() => SortOrderSchema).optional(),
  authorLastName: z.lazy(() => SortOrderSchema).optional(),
  pages: z.lazy(() => SortOrderSchema).optional(),
  publisher: z.lazy(() => SortOrderSchema).optional(),
  publishYear: z.lazy(() => SortOrderSchema).optional(),
  review: z.lazy(() => SortOrderSchema).optional(),
  cover: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const BooksSumOrderByAggregateInputSchema: z.ZodType<Prisma.BooksSumOrderByAggregateInput> = z.object({
  bookId: z.lazy(() => SortOrderSchema).optional(),
  pages: z.lazy(() => SortOrderSchema).optional(),
  publishYear: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const IntWithAggregatesFilterSchema: z.ZodType<Prisma.IntWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional()
}).strict();

export const StringWithAggregatesFilterSchema: z.ZodType<Prisma.StringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const EnumStatusWithAggregatesFilterSchema: z.ZodType<Prisma.EnumStatusWithAggregatesFilter> = z.object({
  equals: z.lazy(() => StatusSchema).optional(),
  in: z.lazy(() => StatusSchema).array().optional(),
  notIn: z.lazy(() => StatusSchema).array().optional(),
  not: z.union([ z.lazy(() => StatusSchema),z.lazy(() => NestedEnumStatusWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumStatusFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumStatusFilterSchema).optional()
}).strict();

export const StringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional()
}).strict();

export const IntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.IntFieldUpdateOperationsInput> = z.object({
  set: z.number().optional(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional()
}).strict();

export const EnumStatusFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumStatusFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => StatusSchema).optional()
}).strict();

export const NestedIntFilterSchema: z.ZodType<Prisma.NestedIntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const NestedStringFilterSchema: z.ZodType<Prisma.NestedStringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const NestedEnumStatusFilterSchema: z.ZodType<Prisma.NestedEnumStatusFilter> = z.object({
  equals: z.lazy(() => StatusSchema).optional(),
  in: z.lazy(() => StatusSchema).array().optional(),
  notIn: z.lazy(() => StatusSchema).array().optional(),
  not: z.union([ z.lazy(() => StatusSchema),z.lazy(() => NestedEnumStatusFilterSchema) ]).optional(),
}).strict();

export const NestedIntWithAggregatesFilterSchema: z.ZodType<Prisma.NestedIntWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional()
}).strict();

export const NestedFloatFilterSchema: z.ZodType<Prisma.NestedFloatFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatFilterSchema) ]).optional(),
}).strict();

export const NestedStringWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const NestedEnumStatusWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumStatusWithAggregatesFilter> = z.object({
  equals: z.lazy(() => StatusSchema).optional(),
  in: z.lazy(() => StatusSchema).array().optional(),
  notIn: z.lazy(() => StatusSchema).array().optional(),
  not: z.union([ z.lazy(() => StatusSchema),z.lazy(() => NestedEnumStatusWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumStatusFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumStatusFilterSchema).optional()
}).strict();

/////////////////////////////////////////
// ARGS
/////////////////////////////////////////

export const BooksFindFirstArgsSchema: z.ZodType<Prisma.BooksFindFirstArgs> = z.object({
  select: BooksSelectSchema.optional(),
  where: BooksWhereInputSchema.optional(),
  orderBy: z.union([ BooksOrderByWithRelationInputSchema.array(),BooksOrderByWithRelationInputSchema ]).optional(),
  cursor: BooksWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ BooksScalarFieldEnumSchema,BooksScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const BooksFindFirstOrThrowArgsSchema: z.ZodType<Prisma.BooksFindFirstOrThrowArgs> = z.object({
  select: BooksSelectSchema.optional(),
  where: BooksWhereInputSchema.optional(),
  orderBy: z.union([ BooksOrderByWithRelationInputSchema.array(),BooksOrderByWithRelationInputSchema ]).optional(),
  cursor: BooksWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ BooksScalarFieldEnumSchema,BooksScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const BooksFindManyArgsSchema: z.ZodType<Prisma.BooksFindManyArgs> = z.object({
  select: BooksSelectSchema.optional(),
  where: BooksWhereInputSchema.optional(),
  orderBy: z.union([ BooksOrderByWithRelationInputSchema.array(),BooksOrderByWithRelationInputSchema ]).optional(),
  cursor: BooksWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ BooksScalarFieldEnumSchema,BooksScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const BooksAggregateArgsSchema: z.ZodType<Prisma.BooksAggregateArgs> = z.object({
  where: BooksWhereInputSchema.optional(),
  orderBy: z.union([ BooksOrderByWithRelationInputSchema.array(),BooksOrderByWithRelationInputSchema ]).optional(),
  cursor: BooksWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const BooksGroupByArgsSchema: z.ZodType<Prisma.BooksGroupByArgs> = z.object({
  where: BooksWhereInputSchema.optional(),
  orderBy: z.union([ BooksOrderByWithAggregationInputSchema.array(),BooksOrderByWithAggregationInputSchema ]).optional(),
  by: BooksScalarFieldEnumSchema.array(),
  having: BooksScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const BooksFindUniqueArgsSchema: z.ZodType<Prisma.BooksFindUniqueArgs> = z.object({
  select: BooksSelectSchema.optional(),
  where: BooksWhereUniqueInputSchema,
}).strict() ;

export const BooksFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.BooksFindUniqueOrThrowArgs> = z.object({
  select: BooksSelectSchema.optional(),
  where: BooksWhereUniqueInputSchema,
}).strict() ;

export const BooksCreateArgsSchema: z.ZodType<Prisma.BooksCreateArgs> = z.object({
  select: BooksSelectSchema.optional(),
  data: z.union([ BooksCreateInputSchema,BooksUncheckedCreateInputSchema ]),
}).strict() ;

export const BooksUpsertArgsSchema: z.ZodType<Prisma.BooksUpsertArgs> = z.object({
  select: BooksSelectSchema.optional(),
  where: BooksWhereUniqueInputSchema,
  create: z.union([ BooksCreateInputSchema,BooksUncheckedCreateInputSchema ]),
  update: z.union([ BooksUpdateInputSchema,BooksUncheckedUpdateInputSchema ]),
}).strict() ;

export const BooksCreateManyArgsSchema: z.ZodType<Prisma.BooksCreateManyArgs> = z.object({
  data: z.union([ BooksCreateManyInputSchema,BooksCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const BooksCreateManyAndReturnArgsSchema: z.ZodType<Prisma.BooksCreateManyAndReturnArgs> = z.object({
  data: z.union([ BooksCreateManyInputSchema,BooksCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const BooksDeleteArgsSchema: z.ZodType<Prisma.BooksDeleteArgs> = z.object({
  select: BooksSelectSchema.optional(),
  where: BooksWhereUniqueInputSchema,
}).strict() ;

export const BooksUpdateArgsSchema: z.ZodType<Prisma.BooksUpdateArgs> = z.object({
  select: BooksSelectSchema.optional(),
  data: z.union([ BooksUpdateInputSchema,BooksUncheckedUpdateInputSchema ]),
  where: BooksWhereUniqueInputSchema,
}).strict() ;

export const BooksUpdateManyArgsSchema: z.ZodType<Prisma.BooksUpdateManyArgs> = z.object({
  data: z.union([ BooksUpdateManyMutationInputSchema,BooksUncheckedUpdateManyInputSchema ]),
  where: BooksWhereInputSchema.optional(),
}).strict() ;

export const BooksDeleteManyArgsSchema: z.ZodType<Prisma.BooksDeleteManyArgs> = z.object({
  where: BooksWhereInputSchema.optional(),
}).strict() ;